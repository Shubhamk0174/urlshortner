
"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShorturl] = useState("second")
    const [generate, setGenerate] = useState(false)

    const handleGenerate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setShorturl("")
                alert(result.message)
                console.log(result)})
            .catch((error) => console.error(error));
    }


    return (
        <div className='min-h-[60vh]'>

        <div className='flex flex-col gap-14 justify-center items-center min-h-[60vh]'>
            <h1 className='text-2xl font-bold text-center'>Generate your short URLs</h1>
            <div className='flex flex-col w-[40vw] gap-7'>
                <input className='border p-1 px-2 rounded-lg placeholder:text-white placeholder:opacity-70' type="text" placeholder='Enter your URL' onChange={(e) => { seturl(e.target.value) }} />

                <input className='border p-1 px-2 rounded-lg  placeholder:text-white placeholder:opacity-70' type="text" placeholder='Enter your preferred short URL text' onChange={(e) => { setShorturl(e.target.value) }} />

                <button onClick={handleGenerate} className='bg-[#12977f] h-9 rounded-lg text-lg'>
                    Generate
                </button>
            </div>
        </div>
        <div className='text-center'>
            {generate && <code>
                <Link  href={generate} target='_blank'>
                Your Short URL : <span className='text-blue-500'> {generate} </span> 
                </Link>
                </code>}

        </div>
        </div>
    )
}

export default Shorten
