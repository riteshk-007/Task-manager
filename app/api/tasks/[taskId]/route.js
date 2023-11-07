//  api/tasks/{taskId}

import Task from "@/models/Task";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to fetch Task!" },
      { status: 500 }
    );
  }
};
export const PUT = async (req) => {};
export const DELETE = async (req) => {};
