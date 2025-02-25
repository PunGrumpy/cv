import { Section } from '@/components/ui/section'

type AboutSectionProps = {
  summary: string
}

export default function AboutSection({ summary }: AboutSectionProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-muted-foreground font-mono text-sm text-pretty print:text-[12px]">
        {summary}
      </p>
    </Section>
  )
}
