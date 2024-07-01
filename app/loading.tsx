import { Card, CardContent } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center">
          <Spinner className="my-4 size-16 text-foreground" />
          <p className="text-muted-foreground">
            Please wait while we load the content.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
