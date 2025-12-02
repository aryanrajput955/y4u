"use client"

import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Y4U Ultimate</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance animate-fade-in-up">
              Building the <span className="text-primary">Future Workforce</span> of India
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
              <p>
                Y4U Ultimate Industrial Training Solutions is committed to delivering superior skill-based learning for
                future-ready professionals. Since our establishment, we have been at the forefront of industrial
                education, bridging the gap between academic knowledge and industry requirements.
              </p>
              <p>
                Our training programs combine modern industrial machines, advanced tools, expert trainers, and real
                production-based workshops to ensure every learner gains hands-on practical experience that industries
                truly demand.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in-up animation-delay-400">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/10039997/pexels-photo-10039997.jpeg"
                alt="Industrial Training Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-2xl">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
