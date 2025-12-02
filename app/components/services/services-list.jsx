"use client"

import Image from "next/image"
import { Clock, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "CNC Machine Operations",
    description:
      "Master Computer Numerical Control operations with hands-on training on industry-standard CNC machines. Learn programming, setup, and precision machining techniques.",
    duration: "12 Weeks",
    students: "250+",
    certification: "NSDC Certified",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    features: ["G-code Programming", "Machine Setup & Calibration", "Quality Control", "Safety Protocols"],
  },
  {
    id: 2,
    title: "Industrial Welding",
    description:
      "Comprehensive welding training covering MIG, TIG, and Arc welding techniques. Perfect for those seeking careers in construction, manufacturing, and fabrication.",
    duration: "8 Weeks",
    students: "180+",
    certification: "AWS Aligned",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    features: ["MIG/TIG/Arc Welding", "Blueprint Reading", "Joint Preparation", "Welding Inspection"],
  },
  {
    id: 3,
    title: "PLC Programming & Automation",
    description:
      "Learn Programmable Logic Controller programming and industrial automation. Control systems, ladder logic, and SCADA fundamentals covered extensively.",
    duration: "10 Weeks",
    students: "200+",
    certification: "Industry Recognized",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    features: ["Ladder Logic", "HMI Programming", "SCADA Systems", "Troubleshooting"],
  },
  {
    id: 4,
    title: "Quality Control & Inspection",
    description:
      "Become a certified quality inspector with training in metrology, inspection techniques, and quality management systems used in manufacturing.",
    duration: "6 Weeks",
    students: "320+",
    certification: "ISO Aligned",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    features: ["Metrology Tools", "Statistical Analysis", "ISO Standards", "Documentation"],
  },
  {
    id: 5,
    title: "Industrial Maintenance",
    description:
      "Comprehensive training in preventive and predictive maintenance for industrial machinery. Essential for plant operations and equipment reliability.",
    duration: "8 Weeks",
    students: "150+",
    certification: "NSDC Certified",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    features: ["Preventive Maintenance", "Troubleshooting", "Hydraulics & Pneumatics", "Motor Controls"],
  },
  {
    id: 6,
    title: "CAD/CAM Design",
    description:
      "Master computer-aided design and manufacturing with industry-standard software. Create technical drawings and CNC programs for modern manufacturing.",
    duration: "10 Weeks",
    students: "180+",
    certification: "Autodesk Certified",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    features: ["AutoCAD", "SolidWorks", "CAM Programming", "3D Modeling"],
  },
]

export default function ServicesList() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      {service.certification}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    {service.students} Trained
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award size={16} className="text-primary" />
                    {service.certification}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-background border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Enroll in this program
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
