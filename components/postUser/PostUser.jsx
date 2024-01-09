import Image from "next/image"
const fetchApiPost=async(id)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache:"no-store"})
    const data=await res.json()
    return data
  }
const PostUser = async({ imgSrc, id }) => {
    const uId=Number(id)>10?Math.floor(Number(id)/10):Number(id)
    const user=await fetchApiPost(String(uId))
  return (
    <div className="flex sm:flex-row flex-col gap-4 items-center justify-center lg:pl-4 mb-4">
        <div className="w-16 h-16 rounded-full border-2">
        <Image
            src={imgSrc}
            alt="blog image"
            width={20}
            height={20}
            priority
            className="w-full h-full object-cover rounded-full"
        />
        </div>
        <div className="flex gap-2">
        <div className="w-40 border border-slate-500 p-2 rounded-md ">
            <h2 className="text-md font-semibold capitalize text-slate-100 font-serif">Author</h2>
            <h3 className="text-sm text-slate-400">{user.username}</h3>
        </div>
        <div className="w-40 border border-slate-500 p-2 rounded-md ">
            <h2 className="text-md font-semibold capitalize text-slate-100 font-serif">Published</h2>
            <h3 className="text-sm text-slate-400">20-12-2024</h3>
        </div>
        </div>
    </div>
  )
}

export default PostUser
