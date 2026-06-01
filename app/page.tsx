import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MeetingSchedule } from "@/components/meeting-schedule"
import { AboutSection } from "@/components/about-section"
import { ConnectionSection } from "@/components/connection-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MeetingSchedule />
      <AboutSection />
      <ConnectionSection />
      <Footer />
    </main>
  )
}
