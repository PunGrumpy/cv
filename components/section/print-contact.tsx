type Contact = {
  email?: string
  social?: {
    name: string
    url: string
  }
  personalWebsiteUrl?: string
}

export default function PrintContactSection({
  personalWebsiteUrl,
  email,
  social
}: Contact) {
  return (
    <div
      className="text-foreground/80 hidden gap-x-2 font-mono text-sm print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="hover:text-foreground/70 underline"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {email && (
        <>
          <a
            className="hover:text-foreground/70 underline"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {social && (
        <a
          className="hover:text-foreground/70 underline"
          href={`${social.url}`}
        >
          {social.name}
        </a>
      )}
    </div>
  )
}
