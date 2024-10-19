import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

// export const DELETE = async (request, { params }) => {
//   try {
//     const deletedDiscussion = await prisma.comment.delete({
//       where: { id: params.id },
//     });

//     if (!deletedDiscussion) {
//       return NextResponse.json({ error: "Comment not found" }, { status: 404 });
//     }

//     return NextResponse.json(
//       { message: "Discussion deleted successfully", data: deletedDiscussion },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// };
