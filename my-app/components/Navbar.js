"use client"
import React,{useRef} from 'react'
import Link from 'next/link'
import NavMobile from './NavMobile'


const Navbar = () => {

  const more = useRef()
  const morebtn = useRef()


  const moreClick = ()=>{
    if(more.current){
      if(more.current.classList.contains("-right-250")){
        more.current.classList.remove("-right-250")
        more.current.classList.add("right-0")
        setTimeout(() => {
          morebtn.current.src="/assets/navcross.svg"
        }, 250);
      }
      else{
        more.current.classList.remove("right-0")
        more.current.classList.add("-right-250")
        morebtn.current.src="/assets/more.svg"

      }
    }
  }



  return (
    <nav className=' bg-black text-white flex justify-between items-center h-12 px-7 '>

      <div className='logo'>
        <Link href={'/'} className=' text-2xl font-bold  flex item-center gap-2 pt-2'>
          <span className='w-7 h-7'>
            <lord-icon
              src="https://cdn.lordicon.com/gsjfryhc.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"

              style={{ width: "30px", height: "30px" }}>
            </lord-icon>
          </span>
          <span>URL-SHORTNER</span>
        </Link>

      </div>

      <div className='hidden sm:block'>

        <ul className='flex gap-4'>
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


      <div className='sm:hidden' onClick={moreClick}>
        <img ref={morebtn} src="/assets/more.svg" width={25} className='invert ' alt="" />
      </div>

      <div ref={more} className='sm:hidden  bg-black h-screen w-[250px] z-10 text-white p-2 fixed top-12 -right-250 transition-all duration-500 '>
        <NavMobile />
      </div>
    </nav>
  )
}

export default Navbar
