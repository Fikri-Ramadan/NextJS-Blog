import prisma from '@/utils/connect';

const { NextResponse } = require('next/server');

export const GET = async (req) => {
  new URL(req.url);

  try {
    const [populars, byEditors] = await prisma.$transaction([
      prisma.post.findMany({
        take: 3,
        orderBy: {
          views: 'desc',
        },
        include: {
          user: true,
        },
      }),
      prisma.post.findMany({
        take: 3,
        orderBy: {
          Comment: {
            _count: 'desc',
          },
        },
        include: {
          user: true,
        },
      }),
    ]);

    return new NextResponse(
      JSON.stringify({ populars, byEditors }, { status: 200 })
    );
  } catch (error) {
    console.log(error.message);
    return new NextResponse(
      JSON.stringify({ message: 'something went wrong' }, { status: 200 })
    );
  }
};
