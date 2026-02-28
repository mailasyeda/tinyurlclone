import React from "react";
function User() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        TinyURL Plans Include:
      </h2>

    
      <div className="grid md:grid-cols-4 gap-10">

        
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Detailed Link Analytics
          </h3>
          <p className="text-gray-600 mb-4">
            Stay on top of your links' performance and get insights into the clicks you earn and people you reach.
          </p>
           <img src="images/image.png"  className="rounded-lg border-transparent h-60" />

        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Fully Branded Domains
          </h3>
          <p className="text-gray-600 mb-4">
            Customize every part of your links with branded domains — say goodbye to default link shortening!
          </p>
           <img src="images/3.png"  className="rounded-lg border-transparenth-60" />
        </div>

    
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Bulk Short URLs
          </h3>
          <p className="text-gray-600 mb-4">
            Scale your communications with our API, and create thousands of unique short links in seconds.
          </p>

         <img src="images/2.png"  className="rounded-lg border-transparenth-60" />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Link Management
          </h3>
          <p className="text-gray-600 mb-4">
            Take full control of your links: search, edit, and manage thousands at a time.
          </p>

        <img src="images/1.png"  className="rounded-lg border-transparent h-60" />
        </div>

      </div>
    </div>
  );
}

export default User;