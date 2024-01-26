'use client'

import type { ReactNode } from 'react'
import { I18nProviderClient } from '../lib/locales/client'
import DefaultLoading from './default-loading'

type ProviderProps = {
  locale: string
  children: ReactNode
}

export function LocaleProvider({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale} fallback={<DefaultLoading />}>
      {children}
    </I18nProviderClient>
  )
}
