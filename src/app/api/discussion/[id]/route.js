import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    const discussion = await prisma.discussion.findUnique({
      where: {
        id: params.id,
      },
      include: {
        upvotes: true,
        downvotes: true,
      },
    });

    if (!discussion) {
      return NextResponse.json(
        { error: "Discussion not found" },
        { status: 404 }
      );
    }

    const upvoteCount = discussion.upvotes.length;
    const downvoteCount = discussion.downvotes.length;

    return NextResponse.json(
      {
        message: "Discussion fetched successfully",
        data: {
          ...discussion,
          upvoteCount,
          downvoteCount,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  const { discussionId, type } = await request.json();

  try {
    if (type === "upvote") {
      await prisma.upvote.create({
        data: {
          discussionId,
        },
      });
    } else if (type === "downvote") {
      await prisma.downvote.create({
        data: {
          discussionId,
        },
      });
    } else {
      return NextResponse.json({ error: "Invalid vote type" }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Vote recorded successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const deletedUser = await prisma.discussion.delete({
      where: { id: params.id },
    });

    if (!deletedUser) {
      return NextResponse.json(
        { error: "Discussion not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Discussion deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
