import prisma from './prisma'

export async function getResume() {
  const resume = await prisma.resume.findFirst({
    where: { id: 1, initials: 'NK' }
  })

  return resume
}
