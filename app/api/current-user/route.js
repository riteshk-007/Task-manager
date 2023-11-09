import connectDB from "@/db/MongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const GET = async (req) => {
  await connectDB();
  const authToken = cookies().get("authToken")?.value;

  try {
    const data = jwt.verify(authToken, process.env.JWT_SECRET);
    const id = data.id;
    const detail = await User.findById(id).select("-password");
    if (!detail) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ detail }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
export const PUT = async (req) => {
  await connectDB();
  const authToken = cookies().get("authToken");
  try {
    const data = jwt.verify(authToken.value, process.env.JWT_SECRET);
    const id = data.id;
    let detail = await User.findById(id);
    if (!detail) {
      return NextResponse.json({ error: "User not found" });
    }
    const { name, email, password } = await req.json();
    detail.name = name;
    detail.email = email;
    detail.password = password;
    await detail.save();
    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

// export const DELETE = async (req) => {
//   await connectDB();
//   const authToken = cookies().get("authToken");
//   try {
//     const data = jwt.verify(authToken.value, process.env.JWT_SECRET);
//     const id = data.id;
//     const detail = await User.findById(id);
//     if (!detail) {
//       return NextResponse.json({ error: "User not found" });
//     }
//     await detail.remove();
//     return NextResponse.json(
//       { message: "User deleted successfully" },
//       { status: 200 }
//     );
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// };
