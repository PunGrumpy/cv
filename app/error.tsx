'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">
            Error Occurred{' '}
            {error.digest && (
              <Badge variant="destructive" className="ml-2">
                {error.digest}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            {error.message || 'An error occurred'}
          </p>
          <Button variant="outline" onClick={reset}>
            Retry
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
