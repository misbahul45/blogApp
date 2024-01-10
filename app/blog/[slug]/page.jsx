'use client'
import  { Suspense } from 'react'
import Image from "next/image"
import { roboto } from '@/lib/font'
import { useRouter } from 'next/navigation'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data'

const fetchApiPost=async(id)=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data=await res.json()
  return data
}
const SinglePage =async ({ params }) => {
  const router=useRouter()
  const post=await fetchApiPost(slug)
  return (
    <div className="relative min-h-screen flex lg:flex-row flex-col gap-4 items-center justify-center px-4 lg:pt-7 lg:px-24 pt-20">
      <button
      onClick={()=>router.back()}
      className="lg:block hidden absolute top-24 left-16 bg-blue-700 px-4 py-1 rounded-md text-slate-200 font-semibold hover:bg-blue-900 transition-all duration-300">
      Back</button>
        <div className="w-1/3 flex items-center justify-end lg:pl-12">
          <div className="w-72">
            <Image
                  src={'https://images.unsplash.com/photo-1649797083784-8c2d075275e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt="blog image"
                  width={250}
                  height={200}
                  className="w-full h-full rounded-md"
              />
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col items-center justify-center md:px-7">
          <h1 className="mb-4 lg:mb-7 text-2xl font-semibold text-slate-100">Details</h1>
          <Suspense fallback={<p className="text-lg text-slate-200 font-bold">Loading feed...</p>}>
            <PostUser id={params.slug} imgSrc={'https://images.unsplash.com/photo-1610055927873-825646a7a5b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
          </Suspense>
          <div className="overflow-y-auto h-72">
            <h2 className={`${roboto.className} text-xl font-semibold text-slate-50 text-center my-4`}>{post.title}</h2>
            <p className={`${roboto.className} text-slate-500 first-letter:ml-7 text-justify leading-7 tracking-wide`}>{post.body}</p>
          </div>
        </div>
    </div>
  )
}

export default SinglePage
