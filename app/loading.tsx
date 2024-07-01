import { Spinner } from '@/components/ui/spinner'
import { Card, CardContent } from '@/components/ui/card'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="max-w-md w-full">
        <CardContent className="flex flex-col items-center">
          <Spinner className="size-16 text-foreground my-4" />
          <p className="text-muted-foreground">
            Please wait while we load the content.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
