import { NextResponse } from "next/server";
import { databases } from "@/app/appwrite";

export const GET = async (request, { params }) => {
  try {
    const response = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.COLLECTION_ID
    );

    const algoType = response.documents.find((e) => {
      return e.link === params.algorithm;
    });

    if (!algoType) {
      return NextResponse.json(
        { error: "Algorithm not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      algorithm: algoType.link,
      description: algoType.description,
      cpp: algoType.cpp,
      c: algoType.c,
      java: algoType.java,
      python: algoType.python,
      javascript: algoType.javascript,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
