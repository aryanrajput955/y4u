
import ContactHero from "../components/contact/contact-hero"
import ContactForm from "../components/contact/contact-form"
import ContactInfo from "../components/contact/contact-info"
import MapSection from "../components/contact/map-section"

export const metadata = {
  title: "Contact Us | Y4U Ultimate Industrial Training",
  description:
    "Get in touch with Y4U Ultimate for inquiries about our industrial training programs, enrollment, and partnerships.",
}

export default function ContactPage() {
  return (
    <>
 
      <main>
        <ContactHero />
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        <MapSection />
      </main>
   
    </>
  )
}
