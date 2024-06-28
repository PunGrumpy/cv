import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

type Education = {
  school: string
  start: string
  end: string
  degree: string
}

type EducationSectionProps = {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">Education</h2>
      {education.map(education => (
        <Card key={education.school}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">{education.school}</h3>
              <div className="text-sm tabular-nums text-gray-500">
                {education.start} - {education.end}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-2 print:text-[12px]">
            {education.degree}
          </CardContent>
        </Card>
      ))}
    </Section>
  )
}
