"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./wrapper";
import InfiniteScroll from "react-infinite-scroll-component";

import card from "@/components/Card/page";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  const { trending } = useContext(AppContext);
  const [hasMore, setHasMore] = useState(true);


  const [globalData, setglobalData] = trending;


  async function getTrendingImages() {

    try {
      const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=vDNZUWUFxvhAlDQUdnVU8k6JnYetF6XOQjATYnemf44&page=${globalData.length}&count=20`)
// https://api.unsplash.com/photos/IMAGE_ID?client_id=YOUR_CLIENT_ID/ACCESS_TOKEN

      data.length === 0 ? setHasMore(false) : "";

      setglobalData([...globalData, ...data])

    } catch (error) {

      toast.error(error.message, {
        autoClose: 3000,
      });
    }


  }



  useEffect(() => {
    if (globalData.length === 0) getTrendingImages();


  }, [])


  return (
    <>

      
<h3 className="text-center font-mono text-xl">What's trending today</h3>

      {/* <!-- card  --> */}
      <InfiniteScroll
        dataLength={globalData.length}
        next={getTrendingImages}
        hasMore={hasMore}
        endMessage={
          <p >
            <h2 className="w-screen text-center text-xl">Yay! You have seen it all</h2>
          </p>
        }
      >
        <div className=" pt-5 columns-1 md:columns-4 px-5  ">

          {card(globalData)}
        </div>
      </InfiniteScroll>



      <ToastContainer />


    </>
  );
};

export default page
