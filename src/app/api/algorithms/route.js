import { NextResponse } from "next/server";
import { databases } from "@/app/appwrite";

export const GET = async (request) => {
  try {
    const response = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.COLLECTION_ID
    );

    if (!response.documents) {
      return NextResponse.json(
        { error: "No algorithms found" },
        { status: 404 }
      );
    }

    const algorithms = response.documents.map((e) => {
      return {
        algorithm: e.link,
        description: e.description,
      };
    });

    return NextResponse.json({
      algorithms,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
