import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter task name"],
    },
    content: {
      type: String,
      required: [true, "Please enter task content"],
    },
    status: {
      type: String,
      enum: ["pending", "done"],
      default: "pending",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    timeseries: true,
  }
);
const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);
export default Task;
