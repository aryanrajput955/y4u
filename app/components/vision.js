"use client"

export default function VisionSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="text-primary text-sm font-medium uppercase tracking-wider">
          Our Vision & Mission
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-10">
          Building a Skilled, Employable & Future-Ready India
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Vision Card */}
          <div className="p-10 bg-background border border-border rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become India’s most trusted and impactful skill development organisation — 
              uplifting youth by providing industry-level training, practical experience, 
              and access to employment opportunities across multiple sectors.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-10 bg-background border border-border rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To close the skill gap in India by offering affordable, job-oriented, 
              hands-on training led by real industry professionals — ensuring that 
              every student is confident, capable, and ready to contribute to the workforce.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
