'use client'

import { roboto } from "@/lib/font"
import contactImage from "@/public/contact.png"
import Image from "next/image"
const ContactPage = () => {
  return (
  <div className="pt-20 pb-5 min-h-screen flex flex-col items-center justify-center">
      <h1 className={`${roboto.className} mb-4 text-5xl text-slate-100 text-center`}>Contact Us</h1>
      <div className="flex lg:flex-row flex-col justify-center items-center w-full">
        <div className="flex-1 flex items-center justify-center">
          <Image priority src={contactImage} width={350} height={350} alt="image Contact" />
        </div>
        <div className="flex-1 lg:pr-12 lg:pl-7 md:px-12 sm:px-8 px-5 flex items-center justify-center w-full">
          <form className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <label className="text-lg text-slate-50 font-semibold font-serif" htmlFor="name">Name</label>
              <input required id="name" className="pl-4 py-1.5 rounded-lg bg-slate-700 border-2 border-slate-500 focus:border-slate-200 text-slate-100 placeholder:text-slate-400 placeholder:text-sm outline-none focus:shadow-white/30 focus:shadow-md" autoComplete="off" type="text" placeholder="Name Surname" /></div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-lg text-slate-50 font-semibold font-serif" htmlFor="email">Email</label>
              <input required id="email"className="pl-4 py-1.5 rounded-lg bg-slate-700 border-2 border-slate-500 focus:border-slate-200 text-slate-100 placeholder:text-slate-400 placeholder:text-sm outline-none focus:shadow-white/30 focus:shadow-md" autoComplete="off"  type="email" placeholder="example@gmail.com" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-lg text-slate-50 font-semibold font-serif" htmlFor="phone">Phone</label>
              <input required id="phone"className="pl-4 py-1.5 rounded-lg bg-slate-700 border-2 border-slate-500 focus:border-slate-200 text-slate-100 placeholder:text-slate-400 placeholder:text-sm outline-none focus:shadow-white/30 focus:shadow-md" autoComplete="off"  type="text" placeholder="Phone Number(optional)" />
            </div>
            <textarea required placeholder="Message" className="w-full h-28 resize-none pl-4 pt-2 rounded-lg border-2 border-slate-500 bg-slate-600 text-slate-100  focus:border-slate-100 outline-none"></textarea>
            <button className="bg-blue-700 py-2 rounded-lg text-slate-100 hover:bg-slate-800 transition-all duration-300">Submit</button>
          </form>
        </div>
      </div>
  </div>
  )
}

export default ContactPage
