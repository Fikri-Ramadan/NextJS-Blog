import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  new URL(req.url);

  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories, { statue: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something wen't wrong" }, { statue: 500 })
    );
  }
};
