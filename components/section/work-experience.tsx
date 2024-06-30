import { Card, CardHeader, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Section } from '../ui/section'
import Link from 'next/link'

type WorkExperience = {
  id: number
  company: string
  link: string
  badge: string[]
  startYear: string
  endYear?: string | null
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
        <Card key={String(work.id)}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <Link className="hover:underline" href={work.link}>
                  {work.company}
                </Link>
                <span className="inline-flex gap-x-1">
                  {work.badge.map(badge => (
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
                {work.startYear} - {work.endYear || 'Present'}
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
