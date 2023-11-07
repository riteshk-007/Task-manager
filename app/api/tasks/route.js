import connectDB from "@/db/MongoDB";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

// api/task
export const POST = async (req) => {
  await connectDB();
  const { title, content, userId } = await req.json();
  try {
    const task = new Task({ title, content, userId });
    const createdTask = await task.save();

    return NextResponse.json(createdTask, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to create Task!" },
      { status: 500 }
    );
  }
};
