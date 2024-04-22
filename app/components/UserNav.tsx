import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MenuIcon } from 'lucide-react'
import React from 'react'

const UserNav = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='rounded-full border px-2 py-2 lg:px-4 lg:py-4 flex items-center gap-x-3'>
                    <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5'/>

                    <img src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' alt='user imgae default'
                    className='rounded-full w-8 h-8 hidden lg:block' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[200px]'>
                <DropdownMenuItem>Register</DropdownMenuItem>
                <DropdownMenuItem>Login</DropdownMenu
            </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default UserNav