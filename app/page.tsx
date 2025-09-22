import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DestinationsShowcase } from "@/components/destinations-showcase"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DestinationsShowcase />
      <CTASection />
      <Footer />
    </main>
  )
}
