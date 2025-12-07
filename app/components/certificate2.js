"use client"

import { useState } from "react"
import { Award, ShieldCheck, X } from "lucide-react"
import Image from "next/image"

const trustDocs = [
  {
    title: "ISO Certified Quality Management",
    image: "/certificates/Certificate-of-Registration.jpg", // your ISO certificate image
    badge: Award,
    description:
      "Our institute operates under ISO 9001:2015, ISO 29990:2010 & ISO 21001:2018 certified quality and education management systems through private accreditation.",
  },
  {
    title: "Authorized Study Center – E-MAX India",
    image: "/certificates/Certificate-of-Authorisation.jpg", // your welcome letter image
    badge: ShieldCheck,
    description:
      "Y4U Ultimate (V4U Group UK India) is an officially authorized study and training center of Education Maximum Pvt. Ltd. (E-MAX India).",
  },
]

export default function LandingTrustCertificates() {
  const [activeDoc, setActiveDoc] = useState(null)

  return (
   <section className="py-28 bg-gradient-to-br from-blue-50 via-background to-blue-100/40">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Trust & Recognition
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Certifications & Authorizations
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            We operate under private ISO-certified quality standards and official
            authorization as a vocational & I.T. training center.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {trustDocs.map((doc, index) => {
            const Icon = doc.badge
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {doc.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {doc.description}
                </p>

                {/* Image Preview */}
                <div
                  onClick={() => setActiveDoc(doc)}
                  className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-background border border-border cursor-pointer group"
                >
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    className="object-contain group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium">
                      Click to View Full Document
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Small Legal Note */}
        <div className="mt-10 text-center text-xs text-muted-foreground max-w-3xl mx-auto">
          Both documents shown are issued by private organizations and do not constitute
          recognition by the Government of India or statutory education authorities.
        </div>
      </div>

      {/* FULL SCREEN PREVIEW MODAL */}
      {activeDoc && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <button
            onClick={() => setActiveDoc(null)}
            className="absolute top-6 right-6 bg-card border border-border rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition"
          >
            <X size={20} />
          </button>

          <div className="bg-card rounded-3xl p-6 max-w-5xl w-full shadow-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              {activeDoc.title}
            </h3>

            <div className="relative w-full h-[75vh] rounded-xl overflow-hidden bg-background">
              <Image
                src={activeDoc.image}
                alt={activeDoc.title}
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
