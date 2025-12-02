"use client"

import { ClipboardCheck, BookOpen, Wrench, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Assessment",
    description: "Initial skill assessment to understand your current level and learning goals.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Theory Training",
    description: "Comprehensive theoretical foundation covering industry standards and best practices.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Practical Workshop",
    description: "Hands-on training with real industrial machines in production environments.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Certification",
    description: "Industry-recognized certification and placement assistance upon completion.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Your Journey to Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach designed to transform beginners into industry-ready professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border z-0" />
              )}

              <div className="relative z-10 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary/20 absolute top-4 right-4">{item.step}</div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
