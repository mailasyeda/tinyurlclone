import React from "react";
export default function TransformSection() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 min-h-600px">
        
       
        <div className="bg-[#062f4f] text-white flex items-center">
          <div className="px-10 md:px-16 py-20 max-w-xl">
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Transforming the Digital Landscape Since ‘02
            </h2>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              TinyURL has created billions of short links for marketers,
              influencers, small business owners, and large businesses.
            </p>

           
            <div className="mt-12 space-y-8">

              <div className="flex items-center gap-6">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Billions
                </h3>
                <p className="text-lg text-gray-300">
                  of redirects per month
                </p>
              </div>

              <div className="flex items-center gap-6">
                <h3 className="text-3xl md:text-4xl font-bold">
                  24 years
                </h3>
                <p className="text-lg text-gray-300">
                  of shortening URLs
                </p>
              </div>

              <div className="flex items-center gap-6">
                <h3 className="text-3xl md:text-4xl font-bold">
                  30,890,099,270
                </h3>
                <p className="text-lg text-gray-300">
                  TinyURLs created
                </p>
              </div>

            </div>

          </div>
        </div>

        <div className="relative">
           <video
          src="public/video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        </div>

      </div>
    </section>
  );
}