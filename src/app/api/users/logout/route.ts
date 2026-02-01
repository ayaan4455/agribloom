import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });

    // Clear the JWT token cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
      maxAge: 0,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      { message: (error as { message: string }).message || "Logout failed" },
      { status: 500 }
    );
  }
}
