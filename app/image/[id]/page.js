"use client"

import {  useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const image = ({ params }) => {

    const [singleImage, setsingleImage] = useState([])

    async function getSingleImage() {

        try {
            const { data } = await axios.get(`https://api.unsplash.com/photos/${params.id}?client_id=vDNZUWUFxvhAlDQUdnVU8k6JnYetF6XOQjATYnemf44`)


            setsingleImage(data)

        } catch (error) {

            toast.error(error.message, {
                autoClose: 3000,
            });
        }


    }



    useEffect(() => {
        getSingleImage();


    }, [])





    return (
        <>
            <h3 className="text-center font-mono text-xl">You are viewing an image by {singleImage.user?.name} </h3>

            <div class="bg-gray-100">
                <div class="container mx-auto p-4">
                    <div class="bg-white rounded-lg p-8">
                     
                              <div class="text-center">
                                <img src={singleImage.urls?.regular} alt="Image" class="mx-auto rounded-lg " />
                            </div>

                        <div class="mt-4 text-center">
                            <h1 class="text-2xl font-semibold">{singleImage.alt_description}</h1>
                            <p class="text-gray-600 mt-2">Liked by : {singleImage.likes}</p>
                            <p class="text-gray-600 mt-2">Author: {singleImage.user?.name}</p>
                            <p class="text-gray-600 mt-2">Uploaded: {singleImage.created_at}</p>
                        </div>
                    </div>
                </div>
            </div>






            <ToastContainer />


        </>
    );
}

export default image