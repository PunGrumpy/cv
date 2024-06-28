import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'

type SkillSectionProps = {
  skills: string[]
}

export default function SkillSection({ skills }: SkillSectionProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map(skill => (
          <Badge className="print:text-[10px]" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  )
}
