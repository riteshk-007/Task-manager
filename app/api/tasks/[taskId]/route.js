//  api/tasks/{taskId}

import Task from "@/models/Task";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch Task!" },
      { status: 500 }
    );
  }
};
export const PUT = async (req, { params }) => {
  const { taskId } = params;
  try {
    const { title, content, status } = await req.json();
    let task = await Task.findById(taskId);
    task.title = title;
    task.content = content;
    task.status = status;
    task = await task.save();
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to update Task!" },
      { status: 500 }
    );
  }
};
export const DELETE = async (req, { params }) => {};
