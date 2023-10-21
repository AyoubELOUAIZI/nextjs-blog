'use client'
import { formInputPost } from "@/types";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit:SubmitHandler<formInputPost>
  isEditing: boolean
}
const FormPost :FC <FormPostProps> = ({submit,isEditing}) => {
  const { register, handleSubmit}=useForm<formInputPost>();
  const Submit= (data) => console.log(data);
  return (
    // bg-red-500
    <form onSubmit={handleSubmit(Submit)}
     className=" flex flex-col items-center justify-center gap-5 mt-10">
      <input
        type="text"
        placeholder="Post Title ..."
        className="input input-bordered w-full max-w-lg"
        {...register("title",{ required: true })}
      />
      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content ..."
        {...register("content",{ required: true })}
      ></textarea>
      <select defaultValue={''} {...register("tag",{ required: true })} className="select select-bordered w-full max-w-lg">
        <option disabled selected></option>
        <option>javascript</option>
        <option>phyton</option>
        <option>c#</option>
      </select>
      {/*when we change the type of the button to submit the validation start working  */}
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing? 'Update':'Create'}</button>
    </form>
  );
};

export default FormPost;
