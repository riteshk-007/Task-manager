import connectDB from "@/db/MongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();
  const user = await User.findById(params.user).select("-password");
  if (user) {
    return NextResponse.json(user, { status: 200 });
  }
};
