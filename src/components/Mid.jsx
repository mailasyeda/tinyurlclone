import React, { useState } from "react";
function Mid() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
   const [shortUrl, setShortUrl] = useState("");
   const [loading, setLoading] = useState(false);

   const handleShorten = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
      const data = await res.text();

      setShortUrl(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

    return(
         <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16">

       
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            URL Shortener, <br />
            Branded Short Links <br />
            & Analytics
          </h1>

          <p className="text-white 200 mb-6">
            Welcome to the original link shortener — simplifying the Internet
            through the power of the URL since 2002.
          </p>

          <div className="space-x-4">
            <button className="bg-white hover:bg-gray-400 text-black px-5 py-2 rounded-md cursor-pointer">
              View Plans
            </button>
            <button className="bg-teal-500 hover:bg-teal-200  px-5 py-2 rounded-md cursor-pointer ">
              Create Free Account
            </button>
          </div>
        </div>

       
        <div className="bg-white text-black rounded-xl shadow-lg p-6 w-full max-w-md mt-10 md:mt-0">

          <div className="flex justify-between mb-4">
            <button className="font-semibold cursor-pointer">Shorten a Link</button>
            <button className="text-gray-500 cursor-pointer">Generate QR Code</button>
          </div>

         
          <label className="text-sm font-medium">Long URL *</label>
          <input
            type="text"
            placeholder="Paste long URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mt-1 mb-4"
          />

          
          <div className="flex gap-2 mb-4">
            <select className="w-1/2 border px-2 py-2 rounded-md cursor-pointer">
              <option>tinyurl.com</option>
            </select>
            <input
              type="text"
              placeholder="Add alias"
               value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="w-1/2 border px-2 py-2 rounded-md"
            />
          </div>

          
          <button 
          onClick={handleShorten}
          className="w-full bg-green-600 hover:bg-green-800 cursor-pointer text-white py-2 rounded-md font-semibold transition-opacity">
            Shorten Link
            {loading ? "Loading..." : "Shorten Link"}
          </button>
           {shortUrl && (
        <div className="mt-4">
          <p className="text-green-700">Short URL:</p>
          <a href={shortUrl} target="_blank" className="text-blue-600">
            {shortUrl}
          </a>
        </div>
      )}
        </div>
      </div>
  );
}
export default Mid;
