import { Navigation } from "@/components/navigation"
import { PlanningHero } from "@/components/planning/planning-hero"
import { TripBuilder } from "@/components/planning/trip-builder"
import { SavedDestinations } from "@/components/planning/saved-destinations"
import { Footer } from "@/components/footer"

export default function PlanPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PlanningHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TripBuilder />
          </div>
          <div className="lg:col-span-1">
            <SavedDestinations />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
