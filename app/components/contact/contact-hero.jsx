"use client"

export default function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight text-balance animate-fade-in-up">
            Let us Start Your <span className="text-blue-600">Journey</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
            Ready to transform your career? Get in touch with us for program details, enrollment information, or any
            questions you might have.
          </p>
        </div>
      </div>
    </section>
  )
}