import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import { db } from "@/lib/db";
import { FC } from "react";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const response = db.post.findFirst({
    where: { id: id },
    select: {
      id: true,
      title: true,
      content: true,
      Tag: true,
    },
  });

  return response;
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  // console.log("🚀 ~ file: page.tsx:11 ~ params:", params.id)
  const post = await getPost(params.id);
  // console.log("🚀 ~ file: page.tsx:30 ~ constBlogDetailPage:FC<BlogDetailPageProps>= ~ post:", post)

  return (
    <div className="">
      <BackButton />
      <div className=" mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction id={params.id} />
      </div>
      <div className="badge badge-accent">{post?.Tag.name}</div>
      <p className="text-slate-500 ">{post?.content}</p>
    </div>
  );
};

export default BlogDetailPage;
