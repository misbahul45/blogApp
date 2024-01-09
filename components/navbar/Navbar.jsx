'use client'
import Link from "next/link"
import { useState } from 'react'
import Links from './links/Links'
import { roboto } from '@/lib/font'
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  const [isNavbarPhone, setIsNavbarPhone]=useState(false)
  return (
    <header className="fixed top-0 right-0 left-0 w-full flex justify-between lg:pl-32 lg:pr-16 md:pl-8 md:pr-5 sm:pr-12 sm:pl-16 pl-7 pr-5 items-center py-2 bg-slate-800 z-30">
       <Link href={'/'}><h1 className={`text-3xl font-bold ${roboto.className} text-slate-50 italic`}>Misbahul<span className="text-blue-600">_Mu</span></h1></Link>
       <div className={` ${isNavbarPhone?"translate-y-0 scale-100 ":"lg:translate-y-0 -translate-y-full -z-10"} lg:z-0 lg:opacity-100 lg:relative absolute lg:w-auto w-full lg:top-0 top-full left-0 transition-all duration-100`}>
        <Links isNavbarPhone={isNavbarPhone} />
       </div>
       <button onClick={()=>setIsNavbarPhone(!isNavbarPhone)} className="lg:hidden block text-2xl text-slate-100 p-2 rounded-full bg-gray-700">
        <FiAlignJustify />
       </button>
    </header>
  )
}

export default Navbar
