import { GlobeIcon } from 'lucide-react'
import Link from 'next/link'

import AlertSection from '@/components/section/alert'

import { CommandMenu } from '../components/command-menu'
import AboutSection from '../components/section/about'
import EducationSection from '../components/section/education'
import ProjectSection from '../components/section/project'
import SkillSection from '../components/section/skill'
import SocialSection from '../components/section/social'
import WorkExperienceSection from '../components/section/work-experience'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { fetchResume } from './actions'

export default async function Page() {
  const { resume, error } = await fetchResume()

  if (error || !resume) {
    return (
      <main className="relative container mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
        <section className="bg-background mx-auto w-full max-w-2xl space-y-8 print:space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <AlertSection />
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="relative container mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="bg-background mx-auto w-full max-w-2xl space-y-8 print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            {resume.name && (
              <h1 className="text-2xl font-bold">{resume.name}</h1>
            )}
            {resume.about && (
              <p className="text-muted-foreground max-w-md font-mono text-sm text-pretty print:text-[12px]">
                {resume.about}
              </p>
            )}
            {resume.location && resume.locationUrl && (
              <p className="text-muted-foreground max-w-md items-center font-mono text-xs text-pretty">
                <Link
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={resume.locationUrl}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {resume.location}
                </Link>
              </p>
            )}
            {resume.contact && (
              <SocialSection
                contact={{
                  ...resume.contact,
                  phone: resume.contact.phone ?? undefined
                }}
              />
            )}
          </div>
          {resume.avatarUrl ? (
            <Avatar className="size-28">
              <AvatarImage alt={resume.name} src={resume.avatarUrl} />
              <AvatarFallback>{resume.initials}</AvatarFallback>
            </Avatar>
          ) : (
            <AvatarFallback className="size-28">
              {resume.initials}
            </AvatarFallback>
          )}
        </div>
        {resume.summary && <AboutSection summary={resume.summary} />}
        {resume.work && resume.work.length > 0 && (
          <WorkExperienceSection work={resume.work} />
        )}
        {resume.education && resume.education.length > 0 && (
          <EducationSection education={resume.education} />
        )}
        {resume.skills && resume.skills.length > 0 && (
          <SkillSection skills={resume.skills} />
        )}
        {resume.projects && resume.projects.length > 0 && (
          <ProjectSection projects={resume.projects} />
        )}
      </section>

      {resume.contact &&
        resume.contact.social &&
        resume.contact.social.length > 0 && (
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
        )}
    </main>
  )
}
