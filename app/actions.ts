'use server'

import prisma from '@/lib/prisma'

export async function fetchResume() {
  try {
    const resume = await prisma.resume.findFirst({
      include: {
        contact: {
          select: {
            email: true,
            phone: true,
            social: {
              select: { name: true, url: true, icon: true }
            }
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
          select: {
            id: true,
            school: true,
            degree: true,
            startYear: true,
            endYear: true
          }
        },
        skills: {
          select: { id: true, name: true }
        },
        projects: {
          select: {
            id: true,
            title: true,
            techStack: true,
            description: true,
            link: true
          }
        }
      }
    })
    return { resume, error: null }
  } catch (error) {
    console.error('Database connection error:', error)
    return {
      resume: null,
      error: {
        message: 'Could not connect to the database',
        details: process.env.NODE_ENV === 'development' ? error : null
      }
    }
  }
}
