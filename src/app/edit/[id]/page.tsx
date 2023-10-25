"use client";
import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { formInputPost } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditPostPageProps {
  params: {
    id: string;
  };
}
const EditPostPage: FC<EditPostPageProps> = ({ params }) => {
  const router=useRouter();
  const { id } = params;

  const handelEditPost: SubmitHandler<formInputPost> = (data) => {
    console.log(data);
    updatePost(data);
  };

  const { data:dataPost,isPending:isLoadingPost} = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const respons = await axios.get(`/api/posts/${id}`);
      return respons.data;
    },
  });
  console.log("🚀 ~ file: page.tsx:30 ~ dataPost:", dataPost)
  
  const {mutate:updatePost,isPending:isLoadingSubmit}=useMutation({
    mutationFn:(editedPost:formInputPost)=>{
      return axios.patch(`/api/posts/${id}`,editedPost);
    },
    onError:(error)=>{
      console.log(error)
      console.error(error)
    },
    onSuccess:()=>{
      router.push('/');
      router.refresh();
    }
  })

  if(isLoadingPost){
    return(
      <div className="text-center">
        <span className="loading loading-ring loading-lg"></span>
    </div>
    )
  }

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost isLoadingSubmit={isLoadingSubmit} submit={handelEditPost} initialValueToEdit={dataPost} isEditing={true} />
    </div>
  );
};

export default EditPostPage;
