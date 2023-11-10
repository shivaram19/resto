"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';
import CartIcon from './CartIcon';
const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user = false
  return (
    <div>
      {!open ? (
        <Image src="/open.png" alt='' width={20} height={20} onClick={() => setOpen(true)} />
      ) : (
        <Image alt='' src="/close.png" width={20} height={20}  onClick={() => setOpen(false)} />
      )}
    {
      open && 
       <div className=" absolute flex items-center justify-center flex-col bg-red-500 text-white left-0 top-24 h-[calc(100vh-6rem)]  text-3xl gap-8 w-full z-10" >
        <Link href="/" onClick={() => setOpen(false)}><div className="">HomePage</div></Link>
        <Link href="/" onClick={() => setOpen(false)}><div className="">Menu</div></Link>
        <Link href="/" onClick={() => setOpen(false)}><div className="">Working Hours</div></Link>
        <Link href="/" onClick={() => setOpen(false)}><div className="">Contact</div></Link>
        {
          user ? (
            <Link href="/order" onClick={() => setOpen(false)}><div className="">Orders</div></Link>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}><div className="">Login</div></Link>
          )
        }
        <div className="" onClick={() => setOpen(false)}>
          <CartIcon />
        </div>
      </div>
    }
    </div>
  )
}

export default Menu
        
