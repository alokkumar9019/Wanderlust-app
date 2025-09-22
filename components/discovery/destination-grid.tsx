"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Heart, Camera, Users } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Goa, India",
    country: "India",
    images: ["/goa-beaches-palm-trees-golden-sand.jpg", "/placeholder.svg?key=goa2", "/placeholder.svg?key=goa3"],
    rating: 4.8,
    reviews: 3247,
    category: "Beach",
    duration: "5-7 days",
    price: 450,
    difficulty: "Easy",
    season: "October-March",
    climate: "Tropical",
    interests: ["Beaches", "Nightlife", "Portuguese Heritage"],
    description:
      "Golden beaches, vibrant nightlife, and Portuguese colonial architecture. Perfect for beach lovers and party enthusiasts.",
    highlights: ["Baga Beach", "Old Goa Churches", "Spice Plantations", "Beach Shacks"],
  },
  {
    id: 2,
    name: "Kerala Backwaters, India",
    country: "India",
    images: ["/kerala-backwaters-houseboat-coconut-palms.jpg", "/placeholder.svg?key=kerala2", "/placeholder.svg?key=kerala3"],
    rating: 4.9,
    reviews: 2156,
    category: "Nature",
    duration: "6-8 days",
    price: 380,
    difficulty: "Easy",
    season: "October-March",
    climate: "Tropical",
    interests: ["Backwaters", "Ayurveda", "Wildlife"],
    description: "Serene backwaters, traditional houseboats, and lush green landscapes. God's Own Country awaits.",
    highlights: ["Alleppey Houseboats", "Munnar Tea Gardens", "Periyar Wildlife", "Ayurvedic Spas"],
  },
  {
    id: 3,
    name: "Rajasthan Golden Triangle, India",
    country: "India",
    images: ["/rajasthan-jaipur-hawa-mahal-pink-city.jpg", "/placeholder.svg?key=rajasthan2", "/placeholder.svg?key=rajasthan3"],
    rating: 4.7,
    reviews: 2834,
    category: "Culture",
    duration: "8-10 days",
    price: 520,
    difficulty: "Moderate",
    season: "October-March",
    climate: "Desert",
    interests: ["Palaces", "Forts", "Desert Safari"],
    description: "Majestic palaces, desert landscapes, and royal heritage. Experience the grandeur of Rajput culture.",
    highlights: ["Amber Fort", "City Palace", "Thar Desert", "Camel Safari"],
  },
  {
    id: 4,
    name: "Himachal Pradesh, India",
    country: "India",
    images: ["/himachal-pradesh-manali-snow-mountains-valleys.jpg", "/placeholder.svg?key=himachal2", "/placeholder.svg?key=himachal3"],
    rating: 4.8,
    reviews: 1923,
    category: "Adventure",
    duration: "7-9 days",
    price: 420,
    difficulty: "Moderate",
    season: "March-June, September-November",
    climate: "Himalayan",
    interests: ["Mountains", "Trekking", "Adventure Sports"],
    description: "Snow-capped peaks, apple orchards, and adventure activities. Perfect for mountain enthusiasts.",
    highlights: ["Rohtang Pass", "Solang Valley", "Dharamshala", "River Rafting"],
  },
  {
    id: 5,
    name: "Ladakh, India",
    country: "India",
    images: ["/ladakh-leh-buddhist-monasteries-barren-mountains.jpg", "/placeholder.svg?key=ladakh2", "/placeholder.svg?key=ladakh3"],
    rating: 4.9,
    reviews: 1456,
    category: "Adventure",
    duration: "10-12 days",
    price: 680,
    difficulty: "Challenging",
    season: "May-September",
    climate: "High Altitude Desert",
    interests: ["Buddhism", "High Altitude", "Motorcycling"],
    description: "Breathtaking landscapes, ancient monasteries, and high-altitude adventure. The Land of High Passes.",
    highlights: ["Pangong Lake", "Nubra Valley", "Hemis Monastery", "Khardung La Pass"],
  },
  {
    id: 6,
    name: "Tamil Nadu Temple Trail, India",
    country: "India",
    images: ["/tamil-nadu-madurai-meenakshi-temple-colorful-gopur.jpg", "/placeholder.svg?key=tamilnadu2", "/placeholder.svg?key=tamilnadu3"],
    rating: 4.6,
    reviews: 1789,
    category: "Culture",
    duration: "6-8 days",
    price: 350,
    difficulty: "Easy",
    season: "November-March",
    climate: "Tropical",
    interests: ["Temples", "Classical Arts", "South Indian Cuisine"],
    description: "Ancient temples, classical dance, and rich cultural heritage. Explore the Dravidian architecture.",
    highlights: ["Meenakshi Temple", "Mahabalipuram", "Thanjavur Palace", "Classical Music"],
  },
]

export function DestinationGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* View Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Recommended for You</h2>
            <p className="text-muted-foreground">Based on your preferences and travel history</p>
          </div>
          <div className="flex gap-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              Grid
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              List
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.images[0] || "/placeholder.svg"}
                  alt={destination.name}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === "grid" ? "h-64" : "h-48"
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                {/* Overlay Content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge className="bg-white/90 text-foreground hover:bg-white">{destination.category}</Badge>
                  <div className="flex gap-2">
                    <div className="bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{destination.rating}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white h-8 w-8 p-0"
                      onClick={() => toggleFavorite(destination.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(destination.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-white/90 text-sm">{destination.country}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{destination.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-primary">${destination.price}</div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {destination.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{destination.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{destination.reviews} reviews</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">🌡️</span>
                    <span>{destination.climate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">📅</span>
                    <span>{destination.season}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Destinations
          </Button>
        </div>
      </div>
    </section>
  )
}
