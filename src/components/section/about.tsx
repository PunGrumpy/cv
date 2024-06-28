import { Section } from '../ui/section'

type AboutSectionProps = {
  summary: string
}

export default function AboutSection({ summary }: AboutSectionProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
        {summary}
      </p>
    </Section>
  )
}
