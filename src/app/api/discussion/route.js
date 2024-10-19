import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const discussions = await prisma.discussion.findMany({
      include: {
        posts: true,
      },
    });

    const discussionsWithPostCount = discussions.map((discussion) => ({
      ...discussion,
      postCount: discussion.posts.length,
    }));

    return NextResponse.json(
      {
        message: "Discussions fetched successfully",
        data: discussionsWithPostCount,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const { name, userId, title, description } = await request.json();

    const newDiscussion = await prisma.discussion.create({
      data: {
        name,
        userId,
        title,
        description,
      },
    });

    return NextResponse.json(
      {
        message: "Discussion created successfully",
        data: newDiscussion,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
