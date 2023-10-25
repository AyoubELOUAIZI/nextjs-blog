'use client'
import BackButton from '@/components/BackButton'
import FormPost from '@/components/FormPost'
import { formInputPost } from '@/types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {
  const router=useRouter();
  const handleCreatePost:SubmitHandler <formInputPost> =(data) =>  {
    createPost(data);
  }

  const {mutate:createPost,isPending:isCreating}=useMutation({
    mutationFn:(newPost:formInputPost)=>{
      return axios.post('/api/posts/create',newPost);
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

  return (
    <div>
      <BackButton/>
      <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
        <FormPost submit={handleCreatePost} isEditing={false} isLoadingSubmit={isCreating}/>
    </div>
  )
}

export default CreatePage