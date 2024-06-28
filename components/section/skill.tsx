import { Badge } from '../ui/badge'
import { Section } from '../ui/section'

type Skill = {
  id: number
  name: string
}

type SkillSectionProps = {
  skills: Skill[]
}

export default function SkillSection({ skills }: SkillSectionProps) {
  if (!skills || skills.length === 0) return null

  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map(skill => (
          <Badge className="print:text-[10px]" key={String(skill.id)}>
            {skill.name}
          </Badge>
        ))}
      </div>
    </Section>
  )
}
