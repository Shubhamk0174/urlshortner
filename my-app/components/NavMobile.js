"use client"
import React from 'react'
import Link from 'next/link'


const NavMobile = () => {
 
  return (
    <nav className='    '>
      <div className=' sm:hidden '>

        <ul className='flex gap-4 flex-col items-center w-full relative top-4 '>
          <li><Link href={"/"}><button className=" inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium -disabled:text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none -disabled:focus:ring-blue-300 focus:ring-blue-800">
            <span className="relative px-3 py-1 transition-all ease-in duration-75 -disabled:bg-white bg-gray-900 rounded-md group-hover:bg-transparent">
              Home
            </span>
          </button></Link></li>




          <li><Link href={'/about'}><button className=" inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium -disabled:text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none -disabled:focus:ring-blue-300 focus:ring-blue-800">
            <span className="relative px-3 py-1 transition-all ease-in duration-75 -disabled:bg-white bg-gray-900 rounded-md group-hover:bg-transparent">
             About
            </span>
          </button></Link></li>


          <li><Link href={'/shorten'}><button className=" inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium -disabled:text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none -disabled:focus:ring-blue-300 focus:ring-blue-800">
            <span className="relative px-3 py-1 transition-all ease-in duration-75 -disabled:bg-white bg-gray-900 rounded-md group-hover:bg-transparent">
             Shorten
            </span>
          </button></Link></li>


        </ul>
      </div>
    </nav>
  )
}

export default NavMobile
