import { MailIcon, PhoneIcon } from 'lucide-react'
import { Button } from '../ui/button'

import * as RadixIcons from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import Link from 'next/link'

const importIcon = (iconName: string): React.ComponentType<IconProps> => {
  const iconComponent = (
    RadixIcons as Record<string, React.ComponentType<IconProps>>
  )[iconName]
  return iconComponent || RadixIcons.GlobeIcon
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
    <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
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
