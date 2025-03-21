"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
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
        setUrl("");
        setShortUrl("");
        setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setGenerated(true);
        alert(result.message);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg flex gap-4 flex-col bg-purple-100 my-16 p-8 rounded-xl shadow-lg ">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          value={url}
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
          className="p-4 focus:outline-purple-500"
        />
        <input
          value={shortUrl}
          type="text"
          onChange={(e) => setShortUrl(e.target.value)}
          placeholder="Enter your preferred short URL text"
          className="p-4 focus:outline-purple-500"
        />
        <button
          onClick={generate}
          className="bg-purple-400 my-3 shadow-lg p-3 text-white rounded-xl py-2 "
        >
          Generate
        </button>
      </div>
      {generated && (
        <code>
          Your Link: <Link target="_blank" href={generatedUrl}>{generatedUrl}</Link>
        </code>
      )}
    </div>
  );
};

export default Shorten;