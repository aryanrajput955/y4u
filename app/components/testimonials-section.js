"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vikas Rawat",
    role: "Hotel Front Office – Mussoorie",
    quote:
      "The hospitality training changed my life. I got my first resort job through Y4U.",
    image: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
  },
  {
    name: "Anjali Verma",
    role: "Digital Marketing Executive",
    quote: "The training was 100% practical. I got placed within 2 months.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    name: "Imran Khan",
    role: "Machine Operator – Manufacturing",
    quote:
      "I learned real machine handling and safety. Best practical institute.",
    image: "https://images.pexels.com/photos/532792/pexels-photo-532792.jpeg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Real Success Stories
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Hear from students who built real careers through Y4U training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-blue-50/40 border border-blue-200 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 w-9 h-9 text-blue-300" />
              <p className="text-gray-600 italic mb-6">"{t.quote}"</p>

              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  width={50}
                  height={50}
                  alt={t.name}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-blue-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
