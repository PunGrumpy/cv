import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(): Promise<NextResponse> {
  const resume = await prisma.resume.findFirst({
    where: { id: 1, initials: 'NK' }
  })

  return NextResponse.json({ resume })
}
