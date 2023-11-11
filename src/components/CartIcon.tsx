import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart"  className="flex items-center justify-center gap-2">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image alt='' src="/cart.png" fill/>
      </div>
      <span>CART (3)</span>
    </Link>
  )
}

export default CartIcon
