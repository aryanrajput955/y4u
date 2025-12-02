"use client"

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance animate-fade-in-up">
            Comprehensive <span className="text-primary">Training Programs</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
            From CNC machining to advanced automation, our programs are designed to transform beginners into
            industry-ready professionals with hands-on experience.
          </p>
        </div>
      </div>
    </section>
  )
}
