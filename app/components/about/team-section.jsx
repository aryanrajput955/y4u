"use client"

import Image from "next/image"

const teamMembers = [
  {
      id: 1,
      name: 'Mr Yogesh Gangwar',
      designation: 'CEO',
      image: '/team/img1.jpg',
  },
  {
      id: 9,
      name: 'Geeta Gangwar',
      designation: 'CEO',
      image: '/team/img9.jpeg',
  },
  {
      id: 5,
      name: 'Mr Manik Bansal',
      designation: 'IT Consultant',
      image: '/team/img5.jpg',
  },
  {
      id: 2,
      name: 'Mr Suresh Mohan',
      designation: 'Marketing Executive',
      image: '/team/img2.jpg',
  },
  {
      id: 3,
      name: 'Mr Gopal Chaturvedi',
      designation: 'Legal Consultant',
      image: '/team/img3.jpg',
  },
  {
      id: 4,
      name: 'Aryan Rajput',
      designation: 'Full Stack Developer',
      image: '/team/img4.jpg',
  },
  {
      id: 6,
      name: 'Mr Vineet',
      designation: 'Marketing head Pan India',
      image: '/team/img6.jpeg',
  },
  {
      id: 7,
      name: 'V4U GROUP UK INDIA',
      designation: 'Professional recruitment team',
      image: '/team/img7.JPG',
  },
  {
      id: 8,
      name: 'Mr Amardeep Robin',
      designation: 'Office management head',
      image: '/team/img8.jpg',
  },
  {
      id: 10,
      name: 'Ishant Gangwar',
      designation: 'IT department cyber security',
      image: '/team/img10.JPG',
  },
  {
      id: 11,
      name: 'Mr Dhanesh Chandra Tiwari',
      designation: 'Office coordinator',
      image: '/team/img11.jpeg',
  },
  {
      id: 12,
      name: 'Shivam Sharma',
      designation: 'B2B industrial marketing officer',
      image: '/team/img12.JPG',
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Meet the Team Behind Y4U
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to transforming industrial education in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary text-sm mb-3">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
