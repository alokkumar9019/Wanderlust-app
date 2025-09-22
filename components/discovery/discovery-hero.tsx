"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Sliders } from "lucide-react"

export function DiscoveryHero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Discover Your Perfect
            <span className="block text-primary">Destination</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore personalized recommendations based on your travel preferences and discover hidden gems around the
            world.
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <div className="bg-card rounded-2xl p-6 shadow-lg max-w-4xl mx-auto border">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search destinations, countries, or cities..." className="pl-10 h-12" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="lg" className="h-12 bg-transparent">
                <Sliders className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button size="lg" className="h-12 px-8">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            "Adventure",
            "Culture",
            "Relaxation",
            "Romance",
            "Family",
            "Budget-Friendly",
            "Luxury",
            "Off-the-beaten-path",
          ].map((category) => (
            <Button key={category} variant="outline" size="sm" className="rounded-full bg-transparent">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
