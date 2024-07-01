import { Section } from '../ui/section'
import { Alert, AlertTitle, AlertDescription } from '../ui/alert'
import { AlertCircleIcon } from 'lucide-react'

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
