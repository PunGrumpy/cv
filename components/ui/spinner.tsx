import { cn } from '@/lib/utils'
import { LoaderCircleIcon } from 'lucide-react'

export const Spinner = ({ className }: { className: string }) => {
  return <LoaderCircleIcon className={cn('animate-spin', className)} />
}
