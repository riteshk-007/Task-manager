import connectDB from "@/db/MongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();
  const user = await User.find({});

  return NextResponse.json({ user }, { status: 200 });
};
