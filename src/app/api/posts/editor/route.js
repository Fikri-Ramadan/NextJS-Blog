import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      take: 3,
      orderBy: {
        Comment: {
          _count: 'desc',
        },
      },
      include: {
        user: true,
      },
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    console.log(error.message);
    return new NextResponse(
      JSON.stringify({ message: 'something wentt wrong' }, { status: 500 })
    );
  }
};
