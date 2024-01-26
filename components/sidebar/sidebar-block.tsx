import { LucideIcon } from 'lucide-react'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import { Button } from '../ui/button'

export type SidebarBlockProps = {
  blockTitle: string
  listButton: ButtonSidebar[]
}

type ButtonSidebar = {
  Icon: LucideIcon
  pathName: string
  title: string
}

const SidebarBlock = ({ blockTitle, listButton }: SidebarBlockProps) => {
  const segment = useSelectedLayoutSegment()
  const router = useRouter()

  return (
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        {blockTitle}
      </h2>
      <div className="space-y-1">
        {listButton.map(({ Icon, title, pathName }) => {
          return (
            <Button
              key={title}
              variant={segment === pathName ? 'secondary' : 'ghost'}
              className="w-full justify-start truncate"
              onClick={() => {
                router.push(pathName)
              }}
            >
              <Icon className="mr-2 h-4 w-4" />
              {title}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default SidebarBlock
