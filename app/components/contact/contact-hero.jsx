"use client"

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance animate-fade-in-up">
            Let us Start Your <span className="text-primary">Journey</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
            Ready to transform your career? Get in touch with us for program details, enrollment information, or any
            questions you might have.
          </p>
        </div>
      </div>
    </section>
  )
}
