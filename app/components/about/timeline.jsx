"use client"

const milestones = [
  {
    year: "2009",
    title: "Foundation",
    description: "Y4U Ultimate was established with a vision to transform industrial training in India.",
  },
  {
    year: "2012",
    title: "First 1000 Students",
    description: "Reached our first milestone of training 1000+ professionals.",
  },
  { year: "2015", title: "Advanced Labs", description: "Opened state-of-the-art CNC and automation training labs." },
  {
    year: "2018",
    title: "Industry Partnerships",
    description: "Established partnerships with leading manufacturing companies.",
  },
  {
    year: "2021",
    title: "Digital Integration",
    description: "Launched hybrid training programs with digital components.",
  },
  {
    year: "2024",
    title: "10K+ Alumni",
    description: "Celebrated 10,000+ successful alumni working across industries.",
  },
]

export default function Timeline() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">Milestones of Excellence</h2>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="text-2xl font-bold text-primary mb-1">{milestone.year}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{milestone.title}</div>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg relative z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
