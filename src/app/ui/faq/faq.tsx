"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../components/button";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs: FAQItem[] = [
    {
      question: "Risque tristique in vel?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliquid put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
    {
      question: "Vis rebum error graecis ea, et si putent accusamus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem repudiandae ne nec?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-200 py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">
            Business consulting excepteur sint occaecat cupidatat consulting non
            proident, sunt in culpa qui officia deserunt laborum market.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden border-b border-blue-300 bg-transparent"
            >
              <Button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              >
                <span className="text-left text-sm font-medium text-gray-900 sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={twMerge(
                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </Button>
              <div
                className={twMerge(
                  "px-4 pb-5 sm:px-6 sm:pb-6",
                  openIndex === index ? "block" : "hidden"
                )}
              >
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
