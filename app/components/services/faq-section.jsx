"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What are the eligibility criteria for your training programs?",
    answer:
      "Our programs are open to individuals who have completed their 10th standard or higher. Some advanced courses may require basic knowledge of mathematics and physics. We conduct an initial assessment to determine the right program for each candidate.",
  },
  {
    question: "Do you provide placement assistance after training?",
    answer:
      "Yes! We have partnerships with over 100+ manufacturing companies and provide dedicated placement assistance. Our placement rate is above 98%, and we continue to support alumni in their career progression.",
  },
  {
    question: "What certifications will I receive?",
    answer:
      "Upon successful completion, you will receive industry-recognized certifications aligned with NSDC, ISO, and relevant industry bodies. These certifications are widely accepted by employers across India and abroad.",
  },
  {
    question: "Are there flexible timing options for working professionals?",
    answer:
      "We offer weekend batches and evening batches for working professionals. We also have hybrid programs that combine online theory sessions with hands-on practical workshops.",
  },
  {
    question: "What equipment do you use for training?",
    answer:
      "We invest in state-of-the-art industrial equipment including CNC machines from Fanuc and Siemens, industrial welding stations, PLC trainers from Allen Bradley and Siemens, and comprehensive metrology labs.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden bg-background">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
