import React from 'react'
import Link from 'next/link'
// import { TbTicket } from "react-icons/tb";

const NavBar = () => {
  const links = [
    {label: 'Dashboard', href:'/'},
    {label: 'Issues', href: '/issues'}
  ]

  return (
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14'>
        <Link href="/">Issue Tracker</Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
              <Link key={link.href} 
                className='text-zinc-500 hover:text-zinc-800 transition-colors' 
                href={link.href}
              >
                {link.label}
              </Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar