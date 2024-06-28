import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'

type WorkExperience = {
  company: string
  link: string
  badges: string[]
  start: string
  end?: string
  title: string
  description: string
}

type WorkExperienceSectionProps = {
  work: WorkExperience[]
}

export default function WorkExperienceSection({
  work
}: WorkExperienceSectionProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">Work Experience</h2>
      {work.map(work => (
        <Card key={work.company}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a className="hover:underline" href={work.link}>
                  {work.company}
                </a>
                <span className="inline-flex gap-x-1">
                  {work.badges.map(badge => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                      key={badge}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              </h3>
              <div className="text-sm tabular-nums text-gray-500">
                {work.start} - {work.end ?? 'Present'}
              </div>
            </div>
            <h4 className="font-mono text-sm leading-none print:text-[12px]">
              {work.title}
            </h4>
          </CardHeader>
          <CardContent className="mt-2 text-xs print:text-[10px]">
            {work.description}
          </CardContent>
        </Card>
      ))}
    </Section>
  )
}
