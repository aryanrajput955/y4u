"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";

const programs = [
  {
    title: "Industrial Machine Training",
    duration: "10 Weeks",
    students: "4000+",
    image: "https://images.pexels.com/photos/1464221/pexels-photo-1464221.jpeg",
  },
  {
    title: "Hotel & Tourism Hospitality",
    duration: "6 Weeks",
    students: "2500+",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
  },
  {
    title: "IT & Computer Skills",
    duration: "8 Weeks",
    students: "3200+",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
  },
  {
    title: "Digital Marketing Professional",
    duration: "7 Weeks",
    students: "1800+",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "Real Estate Sales Training",
    duration: "5 Weeks",
    students: "900+",
    image: "https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg",
  },
  {
    title: "Manpower & Labour Skill Training",
    duration: "4 Weeks",
    students: "5000+",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-blue-50/40">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-blue-600 text-sm font-semibold uppercase">
              Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Job-Ready Courses
            </h2>
          </div>

          <Link
            href="/services"
            className="text-blue-700 font-medium flex items-center gap-2 hover:gap-3 transition"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p, i) => (
            <div
              key={i}
              className="group bg-white border border-blue-200 rounded-2xl shadow-sm overflow-hidden hover:border-blue-500 transition"
            >
              <div className="relative h-64">
                <Image
                  src={p.image}
                  fill
                  alt={p.title}
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{p.title}</h3>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-600" />
                    {p.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-blue-600" />
                    {p.students} Trained
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
