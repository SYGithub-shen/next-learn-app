import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";

export const GET = async (request: NextRequest,{params}: {params: {id: string}}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
  if (!user) {
    return NextResponse.json({error: 'Not found'}, {status: 404})
  }
  return NextResponse.json(user)
}

export const PUT =  async (request: NextRequest,{params}: {params: {id: string}}) => {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) return NextResponse.json(validation.error.errors, {status: 400});

  const user = await prisma.user.findUnique({
    where: {
      id : params.id
    }
  })
  if (!user) {
    return NextResponse.json({error: 'Not found'}, {status: 404})
  }
  const userEmailExists = await prisma.user.findUnique({
    where: {
      email: body.email,
      NOT: {
        id: params.id
      }
    }
  });

  if (userEmailExists) {
    return NextResponse.json({error: 'User email already exists'}, {status: 400})
  }

  const result = await prisma.user.update({
    where: {
      id: params.id
    },
    data: {
      name: body.name,
      email: body.email
    }
  })

  return NextResponse.json(result)
}

export const DELETE =  async (request: NextRequest, {params}: {params: {id: string}}) => {

  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
  if (!user) return NextResponse.json({error: 'User Not found'}, {status: 404})
  await prisma.user.delete({
    where: {
      id: params.id
    }
  });

  return NextResponse.json({})
}