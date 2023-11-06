import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/db/MongoDB";
import User from "@/models/User";

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const ismyPassword = bcrypt.hashSync(password, 10);
  await connectDB();
  const user = await User.create({ name, email, password: ismyPassword });
  if (!user) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }

  return NextResponse.json({ user }, { status: 200 });
};
