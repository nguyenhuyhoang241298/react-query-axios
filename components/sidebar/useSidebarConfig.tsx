import { useI18n } from '@/lib/locales/client'
import { Atom, GraduationCap, Table } from 'lucide-react'

const useSidebarConfig = () => {
  const translate = useI18n()

  return [
    {
      blockTitle: translate('sidebar.demo.title'),
      listButton: [
        {
          title: translate('sidebar.demo.api'),
          pathName: 'demo-api',
          Icon: Atom,
        },
        {
          title: translate('sidebar.demo.table'),
          pathName: 'table',
          Icon: Table,
        },
        {
          title: translate('sidebar.demo.something'),
          pathName: 'something',
          Icon: GraduationCap,
        },
      ],
    },
  ]
}

export default useSidebarConfig
