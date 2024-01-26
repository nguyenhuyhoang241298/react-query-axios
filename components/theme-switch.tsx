'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Icons } from './icons'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  function changeTheme() {
    if (theme === 'dark') {
      setTheme('system')
      return
    }

    if (theme === 'system') {
      setTheme('light')
      return
    }

    setTheme('dark')
  }

  const renderThemeIcon = () => {
    if (theme === 'light') return <Sun className="h-4 w-4" />

    if (theme === 'dark') return <Moon className="h-4 w-4" />

    return <Icons.adjust />
  }

  const renderTooltipContent = () => {
    if (theme === 'light') return 'Theme: Light'

    if (theme === 'dark') return 'Theme: Dark'

    return 'Theme: System/Auto'
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={changeTheme}
          className="p-2 opacity-50 transition duration-100 hover:opacity-100"
        >
          {renderThemeIcon()}
        </button>
      </TooltipTrigger>
      <TooltipContent>{renderTooltipContent()}</TooltipContent>
    </Tooltip>
  )
}
