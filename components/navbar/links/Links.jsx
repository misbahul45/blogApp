'use client'
import Link from "next/link"
import NavLink from "./navlink/NavLink"

const links=[
    {
        title:"Home",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contact"
    },
    {
        title:"Blog",
        path:"/blog"
    },
]

const Links = ({ isNavbarPhone }) => {
    const session=true
    const isAdmin=true
  return (
    <ul className={`${isNavbarPhone?"translate-y-0":"-translate-y-[100%]"} lg:bg-none bg-gradient-to-tr from-slate-900 to-blue-800 border-b-2 pb-5 lg:pb-0 lg:translate-y-0 lg:border-b-0 flex lg:flex-row flex-col gap-2 lg:items-center transition-all duration-200`}>
        {
            links.map((item,index)=>(
                <li key={index} className="lg:w-24 w-full">
                    <NavLink item={item} />
                </li>
            ))
        }
        {
            session?
           <div className="flex justify-center gap-4"> 
                <li className="lg:w-24 lg:ml-4 flex">
                    {
                        isAdmin&&
                        <Link href={'/admin'} className="text-slate-100 text-lg font-semibold w-full flex justify-center py-1 lg:px-0 px-8 rounded-sm bg-slate-900 ring-[1px] ring-slate-100 hover:scale-105 transition-all duration-300">
                            Admin
                        </Link>
                    }
                </li>
                <li className="lg:w-24 lg:ml-2">
                    <button className="text-slate-100 text-lg font-semibold  w-full flex justify-center py-1 rounded-sm bg-red-600 ring-[1px] lg:px-0 px-8 ring-slate-100 hover:bg-red-800 hover:ring-red-800 transition-all duration-300">
                        Logout
                    </button>
                </li>
            </div>
            :
            <li className="lg:w-24 lg:ml-4">
                <Link href={'/login'} className="text-slate-100 text-lg font-semibold  w-full flex justify-center py-1 rounded-sm bg-blue-800 ring-2 ring-slate-50 hover:bg-blue-900 hover:scale-105 transition-all duration-300">
                    Login
                </Link>
            </li>

        } 
    </ul>
  )
}

export default Links
