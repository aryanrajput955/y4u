"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: [ "+91 82189 11085"],
    action: "tel:+918218911085",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["yogeshggangwar@gmail.com"],
    action: "mailto:yogeshggangwar@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Y4U Ultimate Training Center", "184, Subhash Nagar, Shankar Ashram, Alankar complex", "Jwalapur, Haridwar, Uttarakhand - 249407"],
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
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
      <p className="text-gray-600 mb-8">We are here to help you start your career journey.</p>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 bg-white border border-blue-200 rounded-xl hover:border-blue-300 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {item.action && idx === 0 ? (
                    <a href={item.action} className="hover:text-blue-600 transition-colors">
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
      <div className="mt-10 p-6 bg-gradient-to-br from-blue-50/50 to-blue-100/50 border border-blue-200 rounded-2xl">
        <h3 className="font-semibold text-gray-900 mb-4">Why Contact Us?</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Free career counseling session
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Detailed program information
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Scholarship opportunities
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Flexible payment options
          </li>
        </ul>
      </div>
    </div>
  )
}