import { Card, CardContent } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center">
          <Spinner className="text-foreground my-4 size-16" />
          <p className="text-muted-foreground">
            Please wait while we load the content.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
