"use client"

import { Target, Eye, Heart } from "lucide-react"

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To build confident, technically strong, industry-fit manpower for factories, plants, and manufacturing units across India through world-class training programs.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted industrial training partner, empowering millions of youth with skills that drive economic growth and personal success.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Excellence, Innovation, Safety, Integrity, and Student Success form the foundation of everything we do at Y4U Ultimate.",
  },
]

export default function MissionVision() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 text-center hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
