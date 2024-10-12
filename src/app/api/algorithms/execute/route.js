import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { language, version, code } = await request.json();

  let content = "";

  if (typeof code === "string") {
    content = code;
  } else {
    content = code[0]?.content || "";
  }

  try {
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: version,
        files: [{ content: content.trim() }],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Network response was not ok: ${errorData.message || "Unknown error"}`
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
