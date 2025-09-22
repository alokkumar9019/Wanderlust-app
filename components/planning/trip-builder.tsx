"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, DollarSign, Users, Edit, Trash2, GripVertical } from "lucide-react"

interface TripDay {
  id: number
  date: string
  location: string
  activities: Activity[]
}

interface Activity {
  id: number
  time: string
  title: string
  description: string
  cost: number
  category: string
}

export function TripBuilder() {
  const [tripName, setTripName] = useState("European Adventure")
  const [isEditing, setIsEditing] = useState(false)
  const [tripDays, setTripDays] = useState<TripDay[]>([
    {
      id: 1,
      date: "2024-06-15",
      location: "Paris, France",
      activities: [
        {
          id: 1,
          time: "09:00",
          title: "Visit Eiffel Tower",
          description: "Iconic landmark and city views",
          cost: 25,
          category: "Sightseeing",
        },
        {
          id: 2,
          time: "14:00",
          title: "Louvre Museum",
          description: "World's largest art museum",
          cost: 17,
          category: "Culture",
        },
        {
          id: 3,
          time: "19:00",
          title: "Seine River Cruise",
          description: "Evening cruise with dinner",
          cost: 65,
          category: "Experience",
        },
      ],
    },
    {
      id: 2,
      date: "2024-06-16",
      location: "Paris, France",
      activities: [
        {
          id: 4,
          time: "10:00",
          title: "Montmartre District",
          description: "Explore artistic neighborhood",
          cost: 0,
          category: "Walking",
        },
        {
          id: 5,
          time: "15:00",
          title: "Versailles Palace",
          description: "Day trip to royal palace",
          cost: 45,
          category: "Sightseeing",
        },
      ],
    },
  ])

  const addNewDay = () => {
    const newDay: TripDay = {
      id: Date.now(),
      date: "",
      location: "",
      activities: [],
    }
    setTripDays([...tripDays, newDay])
  }

  const addActivity = (dayId: number) => {
    const newActivity: Activity = {
      id: Date.now(),
      time: "",
      title: "",
      description: "",
      cost: 0,
      category: "Sightseeing",
    }
    setTripDays(
      tripDays.map((day) => (day.id === dayId ? { ...day, activities: [...day.activities, newActivity] } : day)),
    )
  }

  const getTotalCost = () => {
    return tripDays.reduce(
      (total, day) => total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.cost, 0),
      0,
    )
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Sightseeing: "bg-blue-100 text-blue-800",
      Culture: "bg-purple-100 text-purple-800",
      Experience: "bg-green-100 text-green-800",
      Walking: "bg-orange-100 text-orange-800",
      Food: "bg-red-100 text-red-800",
      Transport: "bg-gray-100 text-gray-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      {/* Trip Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {isEditing ? (
                <Input
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                  className="text-2xl font-bold border-0 p-0 h-auto"
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
                  autoFocus
                />
              ) : (
                <CardTitle className="text-2xl cursor-pointer" onClick={() => setIsEditing(true)}>
                  {tripName}
                  <Edit className="h-4 w-4 ml-2 inline opacity-50" />
                </CardTitle>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{tripDays.length} days</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>${getTotalCost()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>2 travelers</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Trip Days */}
      <div className="space-y-6">
        {tripDays.map((day, dayIndex) => (
          <Card key={day.id} className="overflow-hidden">
            <CardHeader className="bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {dayIndex + 1}
                  </div>
                  <div>
                    <Input
                      type="date"
                      value={day.date}
                      onChange={(e) =>
                        setTripDays(tripDays.map((d) => (d.id === day.id ? { ...d, date: e.target.value } : d)))
                      }
                      className="border-0 p-0 h-auto font-semibold bg-transparent"
                    />
                    <Input
                      placeholder="Location"
                      value={day.location}
                      onChange={(e) =>
                        setTripDays(tripDays.map((d) => (d.id === day.id ? { ...d, location: e.target.value } : d)))
                      }
                      className="border-0 p-0 h-auto text-sm text-muted-foreground bg-transparent mt-1"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    ${day.activities.reduce((total, activity) => total + activity.cost, 0)}
                  </span>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Activities */}
              <div className="space-y-0">
                {day.activities.map((activity, activityIndex) => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 border-b border-border last:border-b-0">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                    <div className="w-16">
                      <Input
                        type="time"
                        value={activity.time}
                        className="border-0 p-0 h-auto text-sm"
                        onChange={(e) =>
                          setTripDays(
                            tripDays.map((d) =>
                              d.id === day.id
                                ? {
                                    ...d,
                                    activities: d.activities.map((a) =>
                                      a.id === activity.id ? { ...a, time: e.target.value } : a,
                                    ),
                                  }
                                : d,
                            ),
                          )
                        }
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Input
                          placeholder="Activity title"
                          value={activity.title}
                          className="border-0 p-0 h-auto font-medium"
                          onChange={(e) =>
                            setTripDays(
                              tripDays.map((d) =>
                                d.id === day.id
                                  ? {
                                      ...d,
                                      activities: d.activities.map((a) =>
                                        a.id === activity.id ? { ...a, title: e.target.value } : a,
                                      ),
                                    }
                                  : d,
                              ),
                            )
                          }
                        />
                        <Badge className={getCategoryColor(activity.category)}>{activity.category}</Badge>
                      </div>
                      <Textarea
                        placeholder="Description"
                        value={activity.description}
                        className="border-0 p-0 h-auto text-sm text-muted-foreground resize-none"
                        rows={1}
                        onChange={(e) =>
                          setTripDays(
                            tripDays.map((d) =>
                              d.id === day.id
                                ? {
                                    ...d,
                                    activities: d.activities.map((a) =>
                                      a.id === activity.id ? { ...a, description: e.target.value } : a,
                                    ),
                                  }
                                : d,
                            ),
                          )
                        }
                      />
                    </div>
                    <div className="w-20">
                      <div className="flex items-center">
                        <span className="text-sm">$</span>
                        <Input
                          type="number"
                          value={activity.cost}
                          className="border-0 p-0 h-auto text-sm text-right"
                          onChange={(e) =>
                            setTripDays(
                              tripDays.map((d) =>
                                d.id === day.id
                                  ? {
                                      ...d,
                                      activities: d.activities.map((a) =>
                                        a.id === activity.id ? { ...a, cost: Number(e.target.value) } : a,
                                      ),
                                    }
                                  : d,
                              ),
                            )
                          }
                        />
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              {/* Add Activity Button */}
              <div className="p-4 border-t border-border bg-muted/10">
                <Button variant="ghost" size="sm" onClick={() => addActivity(day.id)} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Activity
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Day Button */}
      <Card className="border-dashed">
        <CardContent className="p-8 text-center">
          <Button variant="ghost" onClick={addNewDay} className="text-muted-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Add Another Day
          </Button>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button className="flex-1">Save Trip</Button>
        <Button variant="outline">Share Trip</Button>
        <Button variant="outline">Export PDF</Button>
      </div>
    </div>
  )
}
