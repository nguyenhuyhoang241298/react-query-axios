'use client'

import { cn } from '@/lib/utils'
import { ScrollArea } from '../ui/scroll-area'
import SidebarBlock from './sidebar-block'
import useSidebarConfig from './useSidebarConfig'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const sidebarConfig = useSidebarConfig()
  return (
    <ScrollArea className="h-full pb-12">
      <div className={cn('space-y-4', className)}>
        {sidebarConfig.map((block) => (
          <SidebarBlock
            blockTitle={block.blockTitle}
            key={block.blockTitle}
            listButton={block.listButton}
          />
        ))}
      </div>
    </ScrollArea>
  )
}
