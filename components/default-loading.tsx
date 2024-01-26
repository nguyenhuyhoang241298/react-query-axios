import { Disc3 } from 'lucide-react'

export default function DefaultLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Disc3 className="spin h-8 w-8 animate-spin" />
    </div>
  )
}
