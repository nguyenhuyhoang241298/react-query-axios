'use client'

import MobifoneLogo from '@/public/images/mobifone-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <Image
      onClick={() => router.push('/demo-api')}
      src={MobifoneLogo}
      alt="MobifoneLogo"
      className="cursor-pointer"
    />
  )
}

export default Logo
