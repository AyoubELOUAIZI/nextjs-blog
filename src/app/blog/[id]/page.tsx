import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="">
      <BackButton/>
      <div className=" mb-8">
        <h2 className="text-2xl font-bold my-4">Poste One</h2>
        <ButtonAction/>
      </div>
      <p className="text-slate-500 ">text content</p>
    </div>
  );
};

export default BlogDetailPage;
