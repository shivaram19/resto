import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { Libre_Franklin } from 'next/font/google'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className="h-12 bg-white text-red-500 flex items-center justify-between p-4 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40" >
      {/* LEFT LINKS  */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO  */}
      <div className="text-xl md:font-bold flex-1 md:text-center" >
        <Link href="/">SeNorIta</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS  */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 rounded-md px-2 md:absolute top-3 right-2 lg:static">
          <Image alt='' src="/phone.png" width={20} height={20} />
          <span>124 786</span>
        </div>
        {
          user ? (
            <Link href="/">ORDERS</Link>
          ) : (
            <Link href="/login">LOGIN</Link>
          )
        }
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar
