import connectDB from "@/db/MongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const GET = async (req) => {
  await connectDB();
  const authToken = cookies().get("authToken");

  const data = jwt.verify(authToken.value, process.env.JWT_SECRET);
  const id = data.id;
  const detail = await User.findById(id).select("-password");
  if (!detail) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ detail }, { status: 200 });
};
