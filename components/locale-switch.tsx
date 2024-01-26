'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from '@/lib/locales/client'
import { Locale, locales } from '@/lib/locales/config'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function LocaleSwitcher() {
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const t = useI18n()
  const path = usePathname()

  function onSelectChange(currentLocale: string) {
    changeLocale(currentLocale as Locale)
  }

  return (
    <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="shadow-[0px 5px 5px 0px rgba(8, 15, 52, 0.04)] top-1 h-[40px] max-w-fit space-x-[14px] rounded-full border-[#EFF0F6] pl-[9px] focus:ring-0">
        {path.includes('vn') && (
          <Image
            alt="vnFlag"
            width={30}
            height={30}
            src="/images/VietnamFlag.svg"
          />
        )}
        {path.includes('en') && (
          <Image
            className="h-8 rounded-full"
            alt="enFlag"
            width={30}
            height={30}
            src="/images/UKFlag.svg"
          />
        )}
        <SelectValue defaultValue={locale} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t(`common.${cur}`)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
