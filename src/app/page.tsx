import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CommandMenu } from '@/components/command-menu'
import { GlobeIcon } from 'lucide-react'
import SocialSection from '@/components/section/social'
import AboutSection from '@/components/section/about'
import WorkExperienceSection from '@/components/section/work-experience'
import EducationSection from '@/components/section/education'
import SkillSection from '@/components/section/skill'
import ProjectSection from '@/components/section/project'
import { getResume } from '@/lib/resume'

async function getData() {
  const data = await getResume().then(resume => resume)
  const resume = JSON.parse(JSON.stringify(data))
  return resume
}

export default async function Page() {
  const resume = await getData()

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{resume.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {resume.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={resume.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {resume.location}
              </a>
            </p>
            <SocialSection contact={resume.contact} />
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={resume.name} src={resume.avatarUrl} />
            <AvatarFallback>{resume.initials}</AvatarFallback>
          </Avatar>
        </div>
        <AboutSection summary={resume.summary} />
        <WorkExperienceSection work={resume.work} />
        <EducationSection education={resume.education} />
        <SkillSection skills={resume.skills} />
        <ProjectSection projects={resume.projects} />
      </section>

      <CommandMenu
        links={[
          {
            url: resume.personalWebsiteUrl,
            title: 'Personal Website'
          },
          ...resume.contact.social.map(
            (socialMediaLink: { name: string; url: string }) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name
            })
          )
        ]}
      />
    </main>
  )
}
