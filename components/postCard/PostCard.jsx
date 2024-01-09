import React from 'react'
import Image from "next/image"
import Link from "next/link"
const PostCard = ( { imgSrc, title, desc, postId }) => {
  return (
    <div className=" w-64 flex flex-col items-center justify-center">
        <div className="group w-full px-2">
          <div className="w-full h-auto">
            <Image
              src={imgSrc}
              alt="blog image"
              priority
              width={200}
              height={200}
              className="h-full w-full rounded-md group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
        <div className="w-full">
          <h1 className={`capitalize ${title.length>10?"text-md":"text-xl"} text-slate-50 font-semibold mt-2 mb-0.5`}>{title.length>15?title.substring(0, title.lastIndexOf(" ",15))+"....":title}</h1>
          <p className="text-xs text-slate-600 mb-1">{desc.substring(0, desc.lastIndexOf(" ",100))}</p>
          <Link href={`blog/${postId}`} className="relative text-blue-300 text-xs font-semibold font-serif group">Read More <span className="absolute -bottom-2 left-0 h-[0.7px] rounded-r-full w-0 bg-blue-600 group-hover:w-full transition-all duration-300" /></Link>
        </div>
    </div>
  )
}

export default PostCard
