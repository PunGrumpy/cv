import { ProjectCard } from '../project-card'
import { Section } from '../ui/section'

type Project = {
  title: string
  description: string
  techStack: string[]
  link: string
}

type ProjectSectionProps = {
  projects: Project[]
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16">
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  )
}
