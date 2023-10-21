'use client'
import BackButton from '@/components/BackButton'
import FormPost from '@/components/FormPost'
import { formInputPost } from '@/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {


  const handelCreatePost:SubmitHandler <formInputPost> =(data) =>  {
    console.log('dddddddd')
    console.log(data);
  }

  return (
    <div>
      <BackButton/>
      <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
        <FormPost submit={handelCreatePost}  isEditing={false}/>
    </div>
  )
}

export default CreatePage