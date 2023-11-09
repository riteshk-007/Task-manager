import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import connectDB from "@/db/MongoDB";

export const POST = async (req) => {
  await connectDB();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ msg: "Missing fields" }, { status: 400 });
  } else {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json({ msg: "Password wrong" }, { status: 401 });
      } else {
        const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        cookies().set("authToken", authToken, {
          maxAge: 60 * 60 * 24 * 7,
        });
      }
      return NextResponse.json({ msg: "Login successful" }, { status: 200 });
    } else {
      return NextResponse.json({ msg: "User not found" }, { status: 404 });
    }
  }
};
