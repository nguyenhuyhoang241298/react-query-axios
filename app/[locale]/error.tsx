'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function ErrorComponent({ error, reset }: ErrorProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="grid gap-4">
        <Label>{error.message}</Label>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  )
}
