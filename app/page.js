import Image from "next/image"
import brandImage from "@/public/brands.png"
import homeImage from "@/public/hero.gif"
import { roboto } from "@/lib/font"
export default function Home() {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-6 items-center justify-center min-h-screen pt-20 md:pt-32 lg:px-20 sm:px-7 px-5 md:pb-0 pb-7">
      <div className="flex-1 flex flex-col justify-center items-center gap-3">
        <h1 className={`${roboto.className} text-3xl text-slate-100 font-semibold`}>Kniixen Thoughts Agency</h1>
        <p className={`${roboto.className} text-slate-200 text-justify tracking-wide leading-7 text-sm`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cupiditate ducimus iusto et, voluptate corporis quo deserunt ipsa odit dolorem nam! Ratione, saepe numquam sunt hic at doloribus consequatur rerum?
        Eaque nesciunt quibusdam expedita animi ut excepturi dolores ad ratione aliquam in dignissimos beatae fugit, asperiores nulla dolorem deleniti quia optio ducimus iusto maiores similique esse doloribus, ea omnis. Repudiandae.0</p>
        <div className="mt-5 mb-4">
          <button className="inline-block mr-4 lg:w-32 w-28 py-3 bg-blue-500 text-slate-100 font-serif font-semibold rounded-sm ring-2 ring-slate-200 hover:ring-blue-700 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Learn More  
          </button>
          <button className="inline-block ml-4 lg:w-32 w-28 py-3 bg-slate-900 text-slate-100 font-serif font-semibold rounded-sm ring-2 ring-slate-700 hover:ring-slate-500 hover:bg-slate-900 transition-all duration-300">
            Contact
          </button>
        </div>
        <div className=" block ml-16">
          <Image src={brandImage} alt="Brand Home Image" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src={homeImage} alt="Home Image" width={400} height={400}  />
      </div>
    </div>
  )
}
