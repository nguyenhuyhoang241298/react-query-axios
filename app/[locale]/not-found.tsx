import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="grid gap-4">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className={buttonVariants({ variant: 'default' })}>
          Return Home
        </Link>
      </div>
    </div>
  )
}
