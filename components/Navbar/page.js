"use client";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import {  useState } from "react";
import { useRouter } from "next/navigation";

const navbar = (params) => {
    
    const router = useRouter();
    
 

    const [slug, setslug] = useState('')

    async function searchHandler(e) {
        try {
            e.preventDefault();

            setslug("") 
            params.length = 0;
            router.push(`/search/${slug}`);

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <>
            <div  className="nav  ">


                {/* <!-- Search Container --> */}
                <div
                    className="flex flex-col px-10 py-5 justify-between space-y-5 md:flex-row md:space-y-0"
                >
                    {/* <!-- Upload Button --> */}
                    <Link href={'/'}
                        className="py-3 px-14 text-lg font-normal text-white"
                    >
                        <Image src={logo}
                            width={80}
                            height={100}
                            alt="logo" />
                    </Link>


                    {/* <!-- Input and SVG Container --> */}
                    <form onSubmit={searchHandler} >

                        <div className="flex justify-between border overflow-hidden border-black rounded-md ">
                            <input
                                type="text" value={slug} onChange={(e) => setslug(e.target.value)}
                                className=" border w-screen p-2 md:w-80 rounded-md placeholder:font-thin focus:outline-none"
                                placeholder="Search your imagination..."
                            />

                            <button className="text-white bg-black px-2 " type='submit'>Search</button>


                        </div>
                    </form>

                </div>

                {/* <!-- Menu Container --> 

                
              {/*   <div
                    className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 "
                >
                    <div className="group">
                        <a href="#">Vector</a>
                        <div
                            className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                        ></div>
                    </div>
                    <div className="group">
                        <a href="#">Illustrations</a>
                        <div
                            className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                        ></div>
                    </div>
                    <div className="group">
                        <a href="#">Images</a>
                        <div
                            className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                        ></div>
                    </div>
                    <div className="group">
                        <a href="#">Icons</a>
                        <div
                            className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
                        ></div>
                    </div>
            </div>
            
        */}

            </div>

        </>
    )
}

export default navbar