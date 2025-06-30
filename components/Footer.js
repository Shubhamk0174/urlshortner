"use client"


import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto flex justify-center items-center bg-black text-white'>
        <div className='m-1 text-center'>Copyright &copy; {new Date().getFullYear()} URL Shortner - All Rights Reserved!</div>
    </footer>
  )
}

export default Footer
