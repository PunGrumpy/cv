import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import { MailIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const importIcon = (iconName: string): React.ComponentType<LucideProps> => {
  const iconComponent = (
    LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>
  )[iconName]
  return iconComponent || LucideIcons.GlobeIcon
}

type SocialLink = {
  name: string
  url: string
  icon: string
}

type Contact = {
  email?: string
  phone?: string
  social: SocialLink[]
}

type SocialSectionProps = {
  contact: Contact
}

export default function SocialSection({ contact }: SocialSectionProps) {
  return (
    <div className="text-muted-foreground flex gap-x-1 pt-1 font-mono text-sm print:hidden">
      {contact.email && (
        <Button className="size-8" variant="outline" size="icon" asChild>
          <Link href={`mailto:${contact.email}`}>
            <MailIcon className="size-4" />
          </Link>
        </Button>
      )}
      {contact.phone && (
        <Button className="size-8" variant="outline" size="icon" asChild>
          <Link href={`tel:${contact.phone}`}>
            <PhoneIcon className="size-4" />
          </Link>
        </Button>
      )}
      {contact.social.map(social => {
        const IconComponent = importIcon(social.icon)
        return (
          <Button
            key={social.name}
            className="size-8"
            variant="outline"
            size="icon"
            asChild
          >
            <Link href={social.url} passHref>
              <IconComponent className="size-4" />
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
