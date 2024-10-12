import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    return NextResponse.json({ message: "Coming soon!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
