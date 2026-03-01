import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What Is a URL Shortener?",
      answer:
        "A URL shortener, also known as a link shortener, is a useful tool that trims long and intricate URLs into shorter and more understandable links.",
    },
    {
      question: "How Does a URL Shortener Work?",
      answer:
        "It creates a shorter redirect link that forwards users to the original long URL.",
    },
    {
      question: "What Are the Benefits of Using a Short URL?",
      answer:
        "Short URLs improve readability, tracking, branding, and click-through rates.",
    },
    {
      question: "What Is a Custom URL Shortener?",
      answer:
        "A custom URL shortener allows you to use your own branded domain for shortened links.",
    },
    {
      question: "How Do I Shorten a URL for Free?",
      answer:
        "Simply paste your long URL into the input field and click shorten.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f6f8] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Frequently <br /> Asked <br /> Questions
          </h2>
        </div>

        <div className="md:col-span-2 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}