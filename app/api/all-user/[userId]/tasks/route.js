// /api/current-user/[userId]/tasks

import connectDB from "@/db/MongoDB";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();
  const { userId } = params;
  try {
    const task = await Task.find({ userId: userId });
    return NextResponse.json(
      { msg: "Get all tasks", task: task },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch Tasks!" },
      { status: 500 }
    );
  }
};
