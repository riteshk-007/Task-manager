import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/db/MongoDB";
import User from "@/models/User";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  await connectDB();
  try {
    if (!name || !email || !password) {
      return NextResponse.json(
        { msg: "Please fill all fields" },
        { status: 400 }
      );
    } else {
      const isNewPassword = await bcrypt.hashSync(password, 10);
      const user = await User.create({ name, email, password: isNewPassword });

      if (user) {
        return NextResponse.json(
          { msg: "User created successfully" },
          { status: 201 }
        );
      } else {
        // Throw an error if the user already exists
        throw new Error("User already exists");
      }
    }
  } catch (error) {
    // Handle the error here
    console.log(error);
    return NextResponse.json(
      { msg: "User already exists", error },
      { status: 400 }
    );
  }
};
