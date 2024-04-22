import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DesktopLogo from '../../public/DesktopLogo.png'
import MobileLogo from '../../public/MobileLogo.webp'
import UserNav from './UserNav'
const Navbar = () => {
  return (
    <nav className='w-full border-b'>
      <div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5 '>
        <Link href='/'>
        <Image src={DesktopLogo} alt='airbnb' className='w-32 hidden lg:block' />
        <Image src={MobileLogo} alt='airbnb' className='w-12 lg:hidden block' />
        </Link>
        <div className='rounded-full border px-5 py-2'>
          <h1>Hello from search</h1>
        </div>
        <UserNav />
      </div>
    </nav>
  )
}

export default Navbar