"use client"

import { AppContext } from "@/app/wrapper"
import searchCard from "@/components/SearchCard/page"

import axios from "axios"
import { useContext, useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const search = ({ params }) => {

    const { search } = useContext(AppContext);
    const [searchResult, setsearchResult] = search;

  const [hasMore, sethasMore] = useState(true);



    async function getSearchedImages(e) {
        try {
            let { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=vDNZUWUFxvhAlDQUdnVU8k6JnYetF6XOQjATYnemf44&page=${searchResult.length}&query=${params.query}`)

            data.length === 0 ? sethasMore(false) : "";
            setsearchResult([...searchResult,...data.results])

        } catch (error) {
            toast.error(error.message, {
                autoClose: 3000,
              });
        }
    }

    useEffect(() => {
        if (searchResult.length === 0)  getSearchedImages();

    }, [params.query])


    return (
        <>
            
            <h3 className="text-center font-mono text-xl">Showing result/s for { params.query}</h3>
            <InfiniteScroll
                dataLength={searchResult.length}
                next={getSearchedImages}
                hasMore={hasMore}
                endMessage={
                    <p >
                        <h2 className="w-screen text-center text-xl">Yay! You have seen it all</h2>
                    </p>
                }
            >
                <div className=" columns-1 md:columns-4 px-5 py-10 ">

                    {searchCard()}
                </div>
            </InfiniteScroll>
            <ToastContainer />

        </>
    )
}

export default search