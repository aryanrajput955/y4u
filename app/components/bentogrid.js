"use client";

import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=1000",
    alt: "Photo by Minh Pham",
    label: "Virtual Reality",
    href: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1500",
    alt: "Photo by Magicle",
    label: "Industry 4.0",
    href: "#",
    span: "md:col-span-2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1500",
    alt: "Photo by Martin Sanchez",
    label: "Development",
    href: "#",
    span: "md:col-span-2",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=1000",
    alt: "Photo by Lorenzo Herrera",
    label: "Retro Tech",
    href: "#",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* New Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-bold text-foreground mb-16">
          Discover Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Industrial Vision
          </span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {galleryItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative flex h-48 items-end overflow-hidden rounded-3xl bg-muted shadow-lg border border-border/30 ${item.span ||
                ""} md:h-80 transition-all`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover object-center transition duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw,
	                 (max-width: 1200px) 50vw,
	                 33vw"
              />

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-80" />

              {/* Label */}
              <span className="relative ml-4 mb-4 inline-block text-sm md:text-lg font-medium text-primary drop-shadow-lg">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
