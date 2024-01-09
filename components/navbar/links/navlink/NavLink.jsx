import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {
    const pathName=usePathname()
  return (
    <Link href={item.path} className="relative text-slate-100 text-lg font-semibold group w-full flex lg:justify-center lg:pl-0 pl-8 py-0.5 rounded-md">
        {item.title}
        <span className={`${pathName===item.path?"h-full":"h-0"} absolute left-0 bottom-0 w-full bg-gradient-to-t from-cyan-500  to-blue-700  group-hover:h-full -z-10 rounded-md transition-all duration-200 ease-in-out font-serif`}></span>
    </Link>
  )
}

export default NavLink
