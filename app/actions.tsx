'use server'

import prisma from '@/lib/prisma'

export async function fetchResume() {
  const resume = await prisma.resume.findUnique({
    where: { id: 1, initials: 'NK' },
    include: {
      contact: {
        select: {
          email: true,
          social: { select: { name: true, url: true, icon: true } }
        }
      },
      work: {
        select: {
          id: true,
          company: true,
          link: true,
          badge: true,
          startYear: true,
          endYear: true,
          title: true,
          description: true
        }
      },
      education: {
        select: { school: true, degree: true, startYear: true, endYear: true }
      },
      skills: { select: { id: true, name: true } },
      projects: {
        select: {
          title: true,
          techStack: true,
          description: true,
          link: true
        }
      }
    }
  })
  return resume
}
