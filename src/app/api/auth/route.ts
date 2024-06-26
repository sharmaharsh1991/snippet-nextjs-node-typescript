import { UserCredentials } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { username, password } = await req.json();
    const mockUser: UserCredentials = {
      username: "test",
      password: "testpassword",
    };

    if (username === mockUser.username && password === mockUser.password) {
      return NextResponse.json({
        success: true,
        message: "Login Successful",
        status: 200,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "User not found",
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "User not found",
      status: 404,
    });
  }
}
