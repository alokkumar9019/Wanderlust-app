import { Navigation } from "@/components/navigation"
import { ProfileHeader } from "@/components/profile/profile-header"
import { TravelStats } from "@/components/profile/travel-stats"
import { TravelJournal } from "@/components/profile/travel-journal"
import { Footer } from "@/components/footer"

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProfileHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <TravelStats />
          </div>
          <div className="lg:col-span-2">
            <TravelJournal />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
