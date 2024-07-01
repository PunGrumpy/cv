'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">
            Not Found{' '}
            {pathname && (
              <Badge variant="destructive" className="ml-2">
                {pathname}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Could not find the requested resource
          </p>
          <Link href="/" passHref replace>
            <Button variant="outline">Return Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
