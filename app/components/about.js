"use client"

export default function AboutUsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Empowering India With Real, Practical & Affordable Skill Training
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Y4U Ultimate Industrial Skill Training Solutions Pvt. Ltd. is on a mission 
            to transform India’s workforce by making high-quality skill training accessible to everyone.
            While colleges charge very high fees and still fail to prepare students for employment, 
            Y4U bridges this gap through hands-on, industry-led training programs.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            From industrial machinery to digital marketing, IT, tourism, real estate, 
            and manpower development — our training programs are created and delivered 
            by experienced alumni who already work in top companies and real industry environments.
            We prepare individuals to become job-ready from day one.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE / INFO CARD */}
        <div className="bg-card border border-border rounded-2xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-foreground mb-4">What Makes Us Different?</h3>

          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              Affordable training accessible to every Indian youth
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              Real factory machines, hotels, IT labs & industry setups
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              100% practical training focused on real job roles
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              Programs designed by experienced corporate alumni
            </li>

            <li className="flex gap-3">
              <span className="text-primary font-semibold">•</span>
              Multiple career paths: Industrial • IT • Tourism • Real Estate • Manpower • Marketing
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
