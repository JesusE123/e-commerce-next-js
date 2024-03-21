import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-around items-center border-b-2 border-gray-400 h-20 text-white mb-6'>
    <div>
        <h1 >E-Commerce Fake with Nextjs</h1>
    </div>
    <div>
        <ul className='inline-flex space-x-5'>
            <li className='hover:text-gray-500 transition'>
                <Link href="/">Home</Link>
            </li>
            <li className='hover:text-gray-500 transition'>
                <Link href="/cart">Cart</Link>
            </li>
            <li className='hover:text-gray-500 transition'>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar