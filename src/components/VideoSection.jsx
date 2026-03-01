import React from "react";

function VideoSection() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-400px overflow-hidden">
        <video
          src="public/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-[#1f6f8b] text-white p-10 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Link Shortening Done <br /> Quick and Easy
        </h2>

        <p className="mb-4 text-gray-200">
          Our URL shortener is not only among the first-ever link shorteners on
          the Internet — it's the best out there.
        </p>

        <p className="mb-4 text-gray-200">
          Shorten links for social media, blogs, SMS, emails, ads, and almost
          anything both off- and online.
        </p>

        <p className="mb-6 text-gray-200">
          Wave goodbye to long, clunky links and give your audiences the
          experiences they deserve!
        </p>

        <div className="space-x-4">
          <button className="bg-white text-black px-5 py-2 rounded-md cursor-pointer hover:bg-gray-500">
            View Plans
          </button>
          <button className="bg-blue-900 hover:bg-blue-950 px-5 py-2 rounded-md cursor-pointer">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
