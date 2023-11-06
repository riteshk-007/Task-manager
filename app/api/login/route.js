import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (req) => {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  } else {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        );
      } else {
        const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        cookies().set("authToken", authToken, {
          maxAge: 60 * 60 * 24 * 7,
        });
      }
    }
  }
  return NextResponse.json({ msg: "Login successful" }, { status: 200 });
};
