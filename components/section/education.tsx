import { Card, CardHeader, CardContent } from '../ui/card'
import { Section } from '../ui/section'

type Education = {
  school: string
  startYear: string
  endYear: string
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
        <Card key={'education.school'}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">{education.school}</h3>
              <div className="text-sm tabular-nums text-gray-500">
                {education.startYear} - {education.endYear}
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
