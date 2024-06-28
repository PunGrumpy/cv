import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const data: Prisma.ResumeCreateInput = {
  name: 'Noppakorn Kaewsalabnil',
  initials: 'NK',
  location: 'Bangkok, Thailand, ICT',
  locationUrl: 'https://www.google.com/maps/place/Bangkok',
  about:
    "3rd year student in Computer Science at King Mongkut's University of Technology Ladkrabang.",
  summary:
    'As a student, I have been learning and working on various projects to improve my skills. I am passionate about DevOps, Cloud Computing, and Software Development. I am looking for an internship to gain more experience and knowledge in the field.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/108584943?v=4',
  personalWebsiteUrl: 'https://pungrumpy.com',
  contact: {
    create: {
      email: 'pungrumpy@proton.me',
      social: {
        createMany: {
          data: [
            {
              name: 'GitHub',
              url: 'https://github.com/PunGrumpy',
              icon: 'GitHubLogoIcon'
            },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/noppakorn-kaewsalabnil/',
              icon: 'LinkedInLogoIcon'
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/pungrumpy_p/',
              icon: 'InstagramLogoIcon'
            }
          ]
        }
      }
    }
  },
  education: {
    createMany: {
      data: [
        {
          school: 'King Mongkut’s University of Technology Ladkrabang',
          degree: 'Bachelor of Science in Computer Science',
          startYear: '2022',
          endYear: '2026'
        }
      ]
    }
  },
  work: {
    create: []
  },
  projects: {
    createMany: {
      data: [
        {
          title: 'Logixlysia',
          techStack: ['TypeScript', 'Elysia.js', 'Bun', 'GitHub Actions'],
          description: 'A logging plugin for Elysia.js framework.',
          link: 'https://github.com/PunGrumpy/logixlysia'
        },
        {
          title: 'KMITL Wizard',
          techStack: [
            'TypeScript',
            'SvelteKit',
            'Tailwind CSS',
            'Vite',
            'Chrome Extension'
          ],
          description:
            "A Chrome extension that transforms KMITL's schedule table into a more beautiful and interactive one.",
          link: 'https://github.com/PunGrumpy/kmitl-wizard'
        }
      ]
    }
  },
  skills: {
    createMany: {
      data: [
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Go' },
        { name: 'React/Next.js' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Git' },
        { name: 'GitHub Actions' },
        { name: 'GCP' },
        { name: 'Linux' }
      ]
    }
  }
}

async function main() {
  await prisma.resume.upsert({
    where: { id: 1, initials: 'NK' },
    update: data,
    create: data
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
