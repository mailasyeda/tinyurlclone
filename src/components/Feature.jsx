import React from "react";
import { useState } from "react";
import clicks from "/images/clicks.png"
import analytics from "/images/analytics.png"
import custom from "/images/custom.png"
import bulk from "/images/bulk.png"
export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Unlimited Tracked Clicks",
      description:
        "Track as many clicks as you earn with our Pro plans!",
      image: clicks,
    },
    {
      title: "Detailed Link Analytics",
      description:
        "Get actionable insights into your social media, emails, and ads.",
      image: analytics,
    },
    {
      title: "Fully Custom Links",
      description:
        "Create short links that put your brand front-and-center.",
      image: custom,
    },
    {
      title: "Bulk Short URLs",
      description:
        "Shorten several links in a single go using our platform or API.",
      image: bulk,
    },
  ];

  return (
    <section className="bg-[#f4f6f8] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-[#e7eef2] shadow-md"
                    : "hover:bg-gray-100"
                }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center">
          <img
  key={features[activeIndex].image}
  src={features[activeIndex].image}
  alt="Feature illustration"
  className="w-full max-w-md transition-opacity duration-500 opacity-100"
/>
        </div>

      </div>
    </section>
  );
}