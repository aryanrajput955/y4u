"use client"

import { useState } from "react"
import { ShieldCheck, Award, X } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    type: "iso",
    title: "ISO Certified Management System",
    image: "/certificates/Certificate-of-Registration.jpg",
    description:
      "Our institution operates under ISO 9001:2015, ISO 29990:2010 and ISO 21001:2018 certified management standards through private accreditation.",
    points: [
      "Regular surveillance & audit compliance",
      "Verified operational quality standards",
      "Process-driven education management",
      "Valid till: 06 December 2026",
    ],
    icon: Award,
  },
  {
    type: "authorization",
    title: "Authorized Study Center – E-MAX India",
    image: "/certificates/Certificate-of-Authorisation.jpg",
    description:
      "Y4U Ultimate (V4U Group UK India) is an officially authorized study center of Education Maximum Private Limited (E-MAX India).",
    points: [
      "Authorization Code: EMAX/FP99589",
      "Authorization Date: 06 December 2025",
      "Authorized to enroll students & issue certificates",
      "Verified on: www.emaxindia.in",
    ],
    icon: ShieldCheck,
  },
]

export default function AboutCertifications() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Accreditations & Authorizations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
            Recognized for Quality & Authorized Operations
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            Y4U Ultimate operates under private ISO-certified management systems and is
            officially authorized as a vocational & I.T. study center under E-MAX India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certificates.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {cert.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cert.description}
                </p>

                <ul className="space-y-3 text-muted-foreground text-sm mb-8">
                  {cert.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                {/* Certificate Image */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-background border border-border cursor-pointer group"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium">
                      Click to View Full Certificate
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 text-center text-xs text-muted-foreground max-w-4xl mx-auto">
          Disclaimer: All accreditations and authorizations shown are issued by private
          ISO-certified organizations and do not constitute approval or recognition by
          the Government of India, UGC, AICTE, NCVT, or any other statutory authority.
        </div>
      </div>

      {/* FULL SCREEN MODAL PREVIEW */}
      {activeCert && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <button
            onClick={() => setActiveCert(null)}
            className="absolute top-6 right-6 bg-card border border-border rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition"
          >
            <X size={20} />
          </button>

          <div className="bg-card rounded-3xl p-6 max-w-5xl w-full shadow-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              {activeCert.title}
            </h3>

            <div className="relative w-full h-[75vh] rounded-xl overflow-hidden bg-background">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
