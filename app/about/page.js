
import AboutHero from "../components/about/about-hero"
import MissionVision from "../components/about/mission-vision"
import TeamSection from "../components/about/team-section"
import Timeline from "../components/about/timeline"
import AboutCertifications from "../components/about/certifications"
export const metadata = {
  title: "About Us | Y4U Ultimate Industrial Training",
  description:
    "Learn about Y4U Ultimate's mission to empower skills and build futures through superior industrial training.",
}

export default function AboutPage() {
  return (
    <>
  
      <main>
        <AboutHero />
        <MissionVision />
        <AboutCertifications />
        <Timeline />
        <TeamSection />
      </main>

    </>
  )
}
