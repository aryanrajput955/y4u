"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@y4uultimate.com", "admissions@y4uultimate.com"],
    action: "mailto:info@y4uultimate.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Y4U Ultimate Training Center", "Plot 45, Industrial Area, Sector 5", "Mumbai, Maharashtra 400001"],
    action: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    action: null,
  },
]

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
      <p className="text-muted-foreground mb-8">We are here to help you start your career journey.</p>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground text-sm">
                  {item.action && idx === 0 ? (
                    <a href={item.action} className="hover:text-primary transition-colors">
                      {detail}
                    </a>
                  ) : (
                    detail
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-10 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
        <h3 className="font-semibold text-foreground mb-4">Why Contact Us?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Free career counseling session
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Detailed program information
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Scholarship opportunities
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Flexible payment options
          </li>
        </ul>
      </div>
    </div>
  )
}
