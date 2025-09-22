"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Star, MapPin, Clock, Heart, Filter } from "lucide-react"

const savedDestinations = [
  {
    id: 1,
    name: "Goa, India",
    image: "/goa-beaches-palm-trees-golden-sand.jpg",
    rating: 4.8,
    category: "Beach",
    duration: "5-7 days",
    price: 450,
    saved: true,
  },
  {
    id: 2,
    name: "Kerala Backwaters, India",
    image: "/kerala-backwaters-houseboat-coconut-palms.jpg",
    rating: 4.9,
    category: "Nature",
    duration: "6-8 days",
    price: 380,
    saved: true,
  },
  {
    id: 3,
    name: "Rajasthan Golden Triangle, India",
    image: "/rajasthan-jaipur-hawa-mahal-pink-city.jpg",
    rating: 4.7,
    category: "Culture",
    duration: "8-10 days",
    price: 520,
    saved: true,
  },
  {
    id: 4,
    name: "Himachal Pradesh, India",
    image: "/himachal-pradesh-manali-snow-mountains-valleys.jpg",
    rating: 4.8,
    category: "Adventure",
    duration: "7-9 days",
    price: 420,
    saved: true,
  },
  {
    id: 5,
    name: "Tamil Nadu Temple Trail, India",
    image: "/tamil-nadu-madurai-meenakshi-temple-colorful-gopur.jpg",
    rating: 4.6,
    category: "Culture",
    duration: "6-8 days",
    price: 350,
    saved: true,
  },
]

const recentTrips = [
  {
    id: 1,
    name: "Golden Triangle Explorer",
    destinations: ["Delhi", "Agra", "Jaipur"],
    duration: "7 days",
    status: "Planning",
  },
  {
    id: 2,
    name: "South India Discovery",
    destinations: ["Chennai", "Madurai", "Kochi"],
    duration: "10 days",
    status: "Completed",
  },
  {
    id: 3,
    name: "Himalayan Adventure",
    destinations: ["Manali", "Leh", "Dharamshala"],
    duration: "12 days",
    status: "Draft",
  },
]

export function SavedDestinations() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState<"saved" | "trips">("saved")

  const filteredDestinations = savedDestinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Your Collection</CardTitle>
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={activeTab === "saved" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("saved")}
                className="text-xs"
              >
                Saved
              </Button>
              <Button
                variant={activeTab === "trips" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("trips")}
                className="text-xs"
              >
                Trips
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={activeTab === "saved" ? "Search saved places..." : "Search trips..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Saved Destinations */}
      {activeTab === "saved" && (
        <div className="space-y-4">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex">
                <div className="w-20 h-20 relative overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-3">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-sm leading-tight">{destination.name}</h3>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{destination.rating}</span>
                    </div>
                    <Badge variant="outline" className="text-xs py-0">
                      {destination.category}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{destination.duration}</span>
                    </div>
                    <span className="font-medium text-primary">${destination.price}</span>
                  </div>
                  <Button size="sm" className="w-full mt-2 h-7 text-xs">
                    <Plus className="h-3 w-3 mr-1" />
                    Add to Trip
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Recent Trips */}
      {activeTab === "trips" && (
        <div className="space-y-4">
          {recentTrips.map((trip) => (
            <Card key={trip.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-sm">{trip.name}</h3>
                  <Badge
                    variant={
                      trip.status === "Completed" ? "default" : trip.status === "Planning" ? "secondary" : "outline"
                    }
                    className="text-xs"
                  >
                    {trip.status}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground mb-2">{trip.destinations.join(" → ")}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{trip.duration}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Plus className="h-4 w-4 mr-2" />
            Create New Trip
          </Button>
        </div>
      )}

    </div>
  )
}
