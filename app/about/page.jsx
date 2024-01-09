import Image from "next/image"
import aboutImg from "@/public/about.png"
import { roboto } from "@/lib/font"
const AboutPage = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center min-h-screen gap-2 lg:pt-32 pt-20 pb-7 lg:px-16 md:px-10 px-7">
      <div className="flex-1">
        <h2 className="lg:text-lg text-md font-serif font-semibold text-blue-600 mb-2">About Agency</h2>
        <h1 className={`${roboto.className} lg:text-3xl text-2xl font-semibold text-slate-100 mb-4`}>We create digital ideas that are <span className="text-blue-600 capitalize">bigger</span>, <span className="text-blue-600 capitalize">bolder</span>, <span className="text-blue-600 capitalize">braver</span>, and <span className="text-blue-600 capitalize">better</span>.</h1>
        <p className={`${roboto.className} text-slate-200 text-justify tracking-wide leading-7 text-sm`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores assumenda nulla aperiam hic sunt molestiae consequatur voluptas, perferendis fugiat omnis in laborum. Aliquid minus, tempora ad accusantium veniam quia fuga!</p>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-5">
          <div className="w-full h-auto bg-blue-800 px-4 py-4 rounded-md ring-2 ring-slate-100 shadow-lg shadow-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <h1 className="lg:text-xl text-lg text-slate-100 font-bold">10 K+</h1>
            <span className="text-cyan-100">Year of Experience</span>
          </div>
          <div className="w-full h-auto bg-blue-800 px-4 py-4 rounded-md ring-2 ring-slate-100 shadow-lg shadow-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <h1 className="lg:text-xl text-lg text-slate-100 font-bold">234 K+</h1>
            <span className="text-cyan-100">People Reached</span>
          </div>
          <div className="w-full h-auto bg-blue-800 px-4 py-4 rounded-md ring-2 ring-slate-100 shadow-lg shadow-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <h1 className="lg:text-xl text-lg text-slate-100 font-bold">5 K+</h1>
            <span className="text-cyan-100">Services and Plugins</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src={aboutImg} alt="about image" width={400} height={400}  />  
      </div>
    </div>
  )
}

export default AboutPage
