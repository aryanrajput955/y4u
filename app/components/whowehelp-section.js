"use client";

import {
	Users,
	GraduationCap,
	BadgeCheck,
	Briefcase,
	Handshake,
} from 'lucide-react'

export default function WhoWeHelpSection() {
	return (
		<section className="py-24 bg-blue-50/30">
			<div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase">Who We Help</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Empowering Students, Professionals & Industries to Grow With Real Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We support individuals at every stage of their education and career—helping them gain real industry experience, improve employability, and build successful futures. Whether you’re starting your journey, advancing your skills, or looking for industry collaboration, we are here to help you grow.
          </p>
        </div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
					{[
						{
							icon: GraduationCap,
							title: 'ITI Students',
						},
						{
							icon: Users,
							title: 'Diploma & Bachelor Students',
						},
						{
							icon: BadgeCheck,
							title: 'Freshers & Job Seekers',
						},
						{
							icon: Briefcase,
							title: 'Upskilling Professionals',
						},
						{
							icon: Handshake,
							title: 'Industry Collaborators',
						},
					].map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white border border-blue-200 hover:border-blue-500 transition shadow-sm hover:shadow-lg text-center flex flex-col items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
								{item.title}
							</h3>
            </div>
					))}
				</div>

			</div>
		</section>
	)
}