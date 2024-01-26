import React from 'react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea className="h-screen w-screen">
      <div className={`min-h-[768px] min-w-[1024px]`}>{children}</div>
      <ScrollBar orientation={'horizontal'} />
    </ScrollArea>
  )
}

export default ScreenLayout
