import { Navigation } from "@/components/navigation"
import { DiscoveryHero } from "@/components/discovery/discovery-hero"
import { FilterSection } from "@/components/discovery/filter-section"
import { DestinationGrid } from "@/components/discovery/destination-grid"
import { Footer } from "@/components/footer"

export default function DiscoverPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DiscoveryHero />
      <FilterSection />
      <DestinationGrid />
      <Footer />
    </main>
  )
}
