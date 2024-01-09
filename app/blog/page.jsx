import PostCard from "@/components/postCard/postCard"

const fetchApi=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  const data=await res.json()
  return data
}
const blog = async() => {
  const posts=await fetchApi()
  return (
    <div className="w-full min-h-screen gap-4 flex justify-center flex-wrap pt-20 pb-4">
      {
        posts&&
        posts.map((post)=>(
          <PostCard
          key={post.id}
          imgSrc={'https://images.unsplash.com/photo-1649797083784-8c2d075275e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          postId={post.id} 
          title={post.title} 
          desc={post.body}
          />
        ))
      }
    </div>
  )
}


export default blog
