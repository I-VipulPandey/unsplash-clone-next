"use client";

import { AppContext } from "@/app/wrapper";
import Link from "next/link";
import { useContext, useState } from "react";


const card = (params) => {

  // const { trending } = useContext(AppContext);

  // const [params, setImages] = trending;



  let initialState = params.length > 0 ? params.map((image, idx) => {

    return <div key={image.id} className="relative group">
      <Link href={`/image/${image.id}`}>  <img src={image.urls.small} alt="" className="mb-5" /></Link>
      <div
        className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
      >
        <div className="flex justify-between ">
          <div className="font-normal">
            <p className="text-sm">{image.user.name}</p>
            <p className="text-xs">{image.likes} likes</p>
          </div>
          <div className="flex items-center">
            <Link href={image.links.download} >Download</Link>
          </div>
        </div>
      </div>
    </div>
  }) : <div>
    <div className="grid gap-8 py-8 ">
      <div class="animate-pulse space-y-2 ">
        <div class="bg-gray-200  h-72 "></div>
        </div>
        
        <div class="animate-pulse space-y-2 ">
        <div class="bg-gray-200  h-72 "></div>
        </div>
        <div class="animate-pulse space-y-2 ">
        <div class="bg-gray-200  h-72 "></div>
        </div>
        <div class="animate-pulse space-y-2 ">
        <div class="bg-gray-200  h-72 "></div>
        </div>
        <div class="animate-pulse space-y-2 ">
        <div class="bg-gray-200  h-72 "></div>
        </div>
        <div class="animate-pulse space-y-2 ">
        <div class="bg-gray-200  h-72 "></div>
        </div>
        <div class="animate-pulse space-y-2 ">
        <div class="bg-gray-200  h-72 "></div>
      </div>
    </div>
  </div>

  return (
    <>
      {initialState}

    </>
  )
}

export default card