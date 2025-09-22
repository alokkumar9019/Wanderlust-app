"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, DollarSign } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/stunning-mountain-landscape-with-turquoise-lake-at.jpg"
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Discover Your Next
          <span className="block text-accent">Adventure</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
          Get personalized travel recommendations, plan your perfect trip, and explore the world with confidence.
        </p>

        {/* Search Bar */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Where to?" className="pl-10 h-12 border-0 bg-muted/50" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="When?" className="pl-10 h-12 border-0 bg-muted/50" />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Budget?" className="pl-10 h-12 border-0 bg-muted/50" />
            </div>
            <Button size="lg" className="h-12 bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5 mr-2" />
              Explore
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.9★</div>
            <div className="text-white/80">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
