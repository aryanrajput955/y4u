"use client"

import Image from "next/image"
import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Dr. Vikram Singh",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg",
  },
  {
    name: "Anita Desai",
    role: "Director of Training",
    image: "https://images.pexels.com/photos/18360995/pexels-photo-18360995.jpeg",
  },
  {
    name: "Suresh Menon",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/15889538/pexels-photo-15889538.jpeg",
  },
  {
    name: "Meera Kapoor",
    role: "Industry Relations",
    image: "https://images.pexels.com/photos/34943067/pexels-photo-34943067.png",
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Meet the Team Behind Y4U
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to transforming industrial education in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary text-sm mb-3">{member.role}</p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-primary transition-colors group/link"
              >
                <Linkedin size={16} className="text-muted-foreground group-hover/link:text-primary-foreground" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
