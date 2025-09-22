import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Goa, India",
    image: "/goa-beaches-palm-trees-golden-sand.jpg",
    rating: 4.9,
    reviews: 2847,
    category: "Beach",
    duration: "5-7 days",
    price: "$450",
    description: "Golden beaches, vibrant nightlife, and Portuguese colonial architecture. Perfect for beach lovers and party enthusiasts.",
  },
  {
    id: 2,
    name: "Manali, Himachal Pradesh",
    image: "/manali.jpg",
    rating: 4.8,
    reviews: 1923,
    category: "Culture",
    duration: "4-6 days",
    price: "$300",
    description: "Snow-capped Mountains, Natural Beauty.",
  },
  {
    id: 3,
    name: "Kerala Backwaters, India",
    image: "/kerala-backwaters-houseboat-coconut-palms.jpg",
    rating: 4.9,
    reviews: 1654,
    category: "Nature",
    duration: "6-8 days",
    price: "$300",
    description: "Serene backwaters, traditional houseboats, and lush green landscapes. God's Own Country awaits.",
  },
  {
    id: 4,
    name: "Rajasthan Golden Triangle, India",
    image: "rajasthan-jaipur-hawa-mahal-pink-city.jpg",
    rating: 4.7,
    reviews: 3241,
    category: "Culture",
    duration: "7-10 days",
    price: "$500",
    description: "Majestic palaces, desert landscapes, and royal heritage. Experience the grandeur of Rajput culture.",
  },
  {
    id: 5,
    name: "Ladakh, India",
    image: "/ladakh-leh-buddhist-monasteries-barren-mountains.jpg",
    rating: 4.8,
    reviews: 892,
    category: "Adventure",
    duration: "10-14 days",
    price: "$680",
    description: "Breathtaking landscapes, ancient monasteries, and high-altitude adventure. The Land of High Passes.",
  },
  {
    id: 6,
    name: "Tamil Nadu Temple Trail, India",
    image: "/tamil-nadu-madurai-meenakshi-temple-colorful-gopur.jpg",
    rating: 4.6,
    reviews: 1567,
    category: "Culture",
    duration: "4-5 days",
    price: "$350",
    description: "Ancient temples, classical dance, and rich cultural heritage. Explore the Dravidian architecture.",
  },
]

export function DestinationsShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Trending Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the most popular destinations chosen by travelers like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">
                  {destination.category}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{destination.name}</h3>
                  <span className="text-lg font-bold text-primary">{destination.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{destination.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{destination.reviews} reviews</span>
                  </div>
                </div>
                <Button className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Explore Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  )
}
