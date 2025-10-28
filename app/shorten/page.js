"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setShorturl] = useState("");
    const [generate, setGenerate] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    const handleGenerate = () => {
        if (!url || !shorturl) {
            setAlert({ show: true, message: "Please fill both the fields", type: 'error' });
            setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
            return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shorturl,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                    seturl("");
                    setShorturl("");
                    setAlert({ show: true, message: result.message, type: 'success' });
                }
                else{
                    setGenerate(false);
                    setAlert({ show: true, message: result.message, type: 'error' });
                }
                setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
            })
            .catch((error) => {
                console.error(error);
                setAlert({ show: true, message: 'An error occurred. Please try again.', type: 'error' });
                setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
            });
    };

    return (
        <div className="min-h-[60vh]">
            <div className="flex flex-col gap-14 justify-center items-center min-h-[60vh]">
                <h1 className="text-2xl font-bold text-center">
                    Generate your short URLs
                </h1>
                <div className="h-12 flex items-center justify-center">
                    <div className={`p-3 rounded-lg text-white text-center transition-opacity duration-300 ${alert.show ? 'opacity-100' : 'opacity-0'} ${alert.type === 'success' ? 'bg-[#12977f]' : 'bg-red-500'}`}>
                        {alert.message}
                    </div>
                </div>
                <div className="flex flex-col w-[40vw] gap-7">
                    <input
                        className="border p-1 px-2 rounded-lg placeholder:text-white placeholder:opacity-70"
                        type="text"
                        placeholder="Enter your URL"
                        value={url}
                        onChange={(e) => {
                            seturl(e.target.value);
                        }}
                    />

                    <input
                        className="border p-1 px-2 rounded-lg  placeholder:text-white placeholder:opacity-70"
                        type="text"
                        placeholder="Enter your preferred short URL text"
                        value={shorturl}
                        onChange={(e) => {
                            setShorturl(e.target.value);
                        }}
                    />

                    <button
                        onClick={handleGenerate}
                        className="bg-[#12977f] h-9 rounded-lg text-lg cursor-pointer"
                    >
                        Generate
                    </button>
                </div>
            </div>
            <div className="text-center">
                {generate && (
                    <code>
                        <Link href={generate} target="_blank">
                            Your Short URL :{" "}
                            <span className="text-blue-500"> {generate} </span>
                        </Link>
                    </code>
                )}
            </div>
        </div>
    );
};

export default Shorten;
