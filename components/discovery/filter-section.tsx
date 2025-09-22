"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

export function FilterSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [budget, setBudget] = useState([1000])
  const [duration, setDuration] = useState([7])
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedClimate, setSelectedClimate] = useState<string[]>([])

  const interests = [
    "Adventure Sports",
    "Cultural Sites",
    "Beaches",
    "Mountains",
    "Cities",
    "Wildlife",
    "Food & Drink",
    "History",
    "Art & Museums",
    "Nightlife",
  ]

  const climates = ["Tropical", "Temperate", "Desert", "Mediterranean", "Arctic", "Subtropical"]

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const toggleClimate = (climate: string) => {
    setSelectedClimate((prev) => (prev.includes(climate) ? prev.filter((c) => c !== climate) : [...prev, climate]))
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Filter Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="lg:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <div className="hidden lg:block">
              <h2 className="text-lg font-semibold text-foreground">Filter Destinations</h2>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Showing 247 destinations</div>
        </div>

        {/* Active Filters */}
        {(selectedInterests.length > 0 || selectedClimate.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedInterests.map((interest) => (
              <Badge key={interest} variant="secondary" className="gap-1">
                {interest}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleInterest(interest)} />
              </Badge>
            ))}
            {selectedClimate.map((climate) => (
              <Badge key={climate} variant="secondary" className="gap-1">
                {climate}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleClimate(climate)} />
              </Badge>
            ))}
          </div>
        )}

        {/* Filter Panel */}
        <div className={`${isFilterOpen ? "block" : "hidden"} lg:block`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Budget Filter */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Budget Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Slider value={budget} onValueChange={setBudget} max={5000} min={200} step={100} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$200</span>
                    <span className="font-medium">${budget[0]}</span>
                    <span>$5000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Duration Filter */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Trip Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Slider value={duration} onValueChange={setDuration} max={30} min={1} step={1} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 day</span>
                    <span className="font-medium">{duration[0]} days</span>
                    <span>30+ days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Season Filter */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Best Season</CardTitle>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spring">Spring</SelectItem>
                    <SelectItem value="summer">Summer</SelectItem>
                    <SelectItem value="autumn">Autumn</SelectItem>
                    <SelectItem value="winter">Winter</SelectItem>
                    <SelectItem value="year-round">Year Round</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Difficulty Filter */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Travel Difficulty</CardTitle>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="challenging">Challenging</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* Interests */}
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Your Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={selectedInterests.includes(interest)}
                      onCheckedChange={() => toggleInterest(interest)}
                    />
                    <label
                      htmlFor={interest}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {interest}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Climate */}
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Preferred Climate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {climates.map((climate) => (
                  <div key={climate} className="flex items-center space-x-2">
                    <Checkbox
                      id={climate}
                      checked={selectedClimate.includes(climate)}
                      onCheckedChange={() => toggleClimate(climate)}
                    />
                    <label
                      htmlFor={climate}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {climate}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
