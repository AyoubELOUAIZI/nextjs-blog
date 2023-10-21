'use client'
import BackButton from '@/components/BackButton';
import FormPost from '@/components/FormPost';
import { formInputPost } from '@/types';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';

const EditPostPage = () => {
 
  const handelEditPost:SubmitHandler <formInputPost> =(data) =>  {
    console.log('dddddddd')
    console.log(data);
  }

  return (
    <div>
      <BackButton/>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
        <FormPost submit={handelEditPost} isEditing={true}/>
    </div>
  )
}

export default EditPostPage