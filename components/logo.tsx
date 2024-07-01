import { Squircle } from 'lucide-react'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 group">
      {/* <Squircle className="w-12 h-12 text-primary group-hover:-rotate-12 transition-all duration-300" /> */}
      <Image src='/logo.png ' alt='logo' width={80} height={80}/>
      <span className="text-xl group-hover:translate-x-0.5 transition-all duration-300 hidden lg:block">
       GraphiLock
      </span>
      {/* TODO : remove margins in logo by photoshop*/}
    </div>
  )
}
