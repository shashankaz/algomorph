import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export const GET = async (request) => {
  try {
    const comment = await prisma.comment.findMany();

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Comment fetched successfully", data: comment },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  const { userId, name, title, body, discussionId } = await request.json();

  try {
    const discussion = await prisma.discussion.findUnique({
      where: { id: discussionId },
    });

    if (!discussion) {
      return NextResponse.json(
        { error: "Discussion not found" },
        { status: 404 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        userId,
        name,
        title,
        body,
        discussionId,
      },
    });

    return NextResponse.json(
      { message: "Comment created successfully", data: comment },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    const deletedComment = await prisma.comment.delete({
      where: { id },
    });

    if (!deletedComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Comment deleted successfully", data: deletedComment },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
