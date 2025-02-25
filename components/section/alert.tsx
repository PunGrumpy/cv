import { AlertCircleIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Section } from '@/components/ui/section'

export default function AlertSection() {
  return (
    <Section>
      <Alert>
        <AlertCircleIcon className="text-warning size-5" />
        <AlertTitle>Resume not found</AlertTitle>
        <AlertDescription>
          Please create a resume to view it here.
        </AlertDescription>
      </Alert>
    </Section>
  )
}
