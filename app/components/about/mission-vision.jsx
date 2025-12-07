"use client"

import { Target, Eye, Heart } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">

        {/* ABOUT SHORT INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            About Y4U Ultimate
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Bridging Skills & Opportunity
          </h2>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Y4U Ultimate Industrial Skill Training Solutions Pvt Ltd is a leading
            organisation in Uttarakhand empowering youth with industry-ready skills.
            With 6+ years of experience in recruitment and industrial training, we
            connect job seekers with real employment opportunities.
          </p>
        </div>

        {/* MISSION / VISION / VALUES - CLEAN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="p-8 rounded-2xl bg-background border border-border text-center hover:border-primary/50 transition">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To prepare youth for sustainable employment by delivering skilled,
              industry-fit manpower.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-background border border-border text-center hover:border-primary/50 transition">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To become India’s most trusted industrial training and skill development
              partner.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-background border border-border text-center hover:border-primary/50 transition">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Excellence, Integrity, Innovation, Safety & Student Success.
            </p>
          </div>

        </div>

        {/* OUR IMPACT – CLEAN TEXT BLOCK */}
        <div className="max-w-4xl mx-auto bg-background border border-border rounded-3xl p-10 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Impact
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Turning Education Into Employability
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Through our 1-Year Apprentice Training Programs, strong industry
            partnerships, and expert career counselling, we have helped thousands of
            students gain real-world exposure and secure meaningful employment across
            engineering, IT, finance, hospitality, manufacturing and more.
          </p>
        </div>

      </div>
    </section>
  )
}
