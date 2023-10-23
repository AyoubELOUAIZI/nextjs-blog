import { db } from "@/lib/db";
import PostCard from "./../components/PostCard";

async function getPosts(){
  const response=await db.post.findMany({
    select:{
      id: true,
      title:true,
      content:true,
      Tag:true
    },
  orderBy:{
    createdAt:'desc',
  }}
  );
  return response;
}
export default async function Home() {
  const posts=await  getPosts();
  // console.log("🚀 ~ file: page.tsx:10 ~ Home ~ posts:", posts)
  
  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-3">
   {posts.map(post=>(
     <PostCard key={post.id} post={post}/>
   ))}
    </main>
  );
}


