import { Tag } from '@prisma/client'
import Link from 'next/link'
import {FC} from 'react'

interface PostCardProps{
 post: {id: String,  //!it becames very good when I added the post: and this means you should always write the name befome the properties when creating the interface
  title: String,
  content: String,
  Tag:Tag,}
}

const PostCard:FC<PostCardProps> = ({post}) => {
  const {id,title,content,Tag}=post;
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
        <div className="badge badge-accent">{Tag.name}</div>
          <Link href={`/blog/${id}`} className="hover:underline">Read more...</Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard