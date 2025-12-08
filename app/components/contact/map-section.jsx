"use client"

export default function MapSection() {
  const mapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3457.6778603202843!2d78.12651855!3d29.93117496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094711105efa61%3A0x10ead441c71de046!2sY4U%20ULTIMATE%20INDUSTRIAL%20SKILL%20TRAINING%20SOLUTIONS%20Pvt.LTD!5e0!3m2!1sen!2sin!4v1765183397838!5m2!1sen!2sin";
  const mapsLink = "https://www.google.com/maps/search/Y4U%20Ultimate%20Industrial%20Skill%20Training%20Solutions%20Pvt%20Ltd/@29.93117496,78.12651855,17z";

  return (
    <section className="py-24 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-medium uppercase tracking-wider">Location</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Visit Our Training Center</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the spiritual city of Haridwar, our facility in Jwalapur is easily accessible by public transport and offers a peaceful learning environment.
          </p>
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-blue-200">
          <iframe
            src={mapsEmbedSrc}
            className="w-full h-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            Open in Google Maps
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}