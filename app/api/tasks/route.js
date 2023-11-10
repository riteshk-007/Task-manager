import connectDB from "@/db/MongoDB";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

// api/task
export const POST = async (req) => {
  await connectDB();
  const { title, content, userId } = await req.json();
  try {
    const task = new Task({ title, content, userId });
    await task.save();

    return NextResponse.json(
      { msg: "Task created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "failed to create Task!" },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  await connectDB();
  try {
    const tasks = await Task.find({});
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to fetch Tasks!" },
      { status: 500 }
    );
  }
};
