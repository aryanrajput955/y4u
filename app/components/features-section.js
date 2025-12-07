"use client";

import { Factory, Users, Laptop, Building, Globe, Wrench } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Industrial Machine Training",
    description: "Hands-on training with real factory equipment and tools.",
  },
  {
    icon: Users,
    title: "Expert Industry Trainers",
    description: "Learn from professionals already working in top companies.",
  },
  {
    icon: Globe,
    title: "Tourism & Hospitality",
    description: "Hotel, resort & tourism skill programs for Uttarakhand industry.",
  },
  {
    icon: Laptop,
    title: "IT & Digital Skills",
    description: "Digital marketing, basic IT, computer management and more.",
  },
  {
    icon: Building,
    title: "Real Estate & Sales",
    description: "Client handling, communication & property sales training.",
  },
  {
    icon: Wrench,
    title: "Manpower & Labour Training",
    description: "Job-ready training for skilled labour & contractors.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Training Built For Real Jobs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Practical training, experienced mentors, and multi-industry programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white border border-blue-200 hover:border-blue-500 transition shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <f.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 mt-3">{f.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
