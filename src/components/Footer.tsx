import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 md:flex md:items-center md:justify-between ">
      <Link className="uppercase font-bold text-xl " href="/">Senorita</Link>
      <span>ALL RIGHTS RESERVED</span>
    </div>
  )
}

export default Footer
