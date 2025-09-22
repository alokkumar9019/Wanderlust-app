"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plane, Camera, Star, Trophy, Target } from "lucide-react"

const travelGoals = [
  {
    id: 1,
    title: "Visit 30 Countries",
    current: 23,
    target: 30,
    progress: 77,
    icon: MapPin,
  },
  {
    id: 2,
    title: "Take 1000 Photos",
    current: 847,
    target: 1000,
    progress: 85,
    icon: Camera,
  },
  {
    id: 3,
    title: "Try 50 Local Dishes",
    current: 34,
    target: 50,
    progress: 68,
    icon: Star,
  },
]

const achievements = [
  {
    id: 1,
    title: "First International Trip",
    description: "Completed your first trip abroad",
    icon: Plane,
    earned: true,
    date: "March 2023",
  },
  {
    id: 2,
    title: "Continent Hopper",
    description: "Visited 3 different continents",
    icon: MapPin,
    earned: true,
    date: "August 2023",
  },
  {
    id: 3,
    title: "Photo Enthusiast",
    description: "Uploaded 500+ travel photos",
    icon: Camera,
    earned: true,
    date: "December 2023",
  },
  {
    id: 4,
    title: "Adventure Seeker",
    description: "Completed 10 adventure activities",
    icon: Trophy,
    earned: false,
    progress: 7,
  },
]


export function TravelStats() {
  return (
    <div className="space-y-6">
      {/* Travel Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="h-5 w-5" />
            Travel Goals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {travelGoals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <goal.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{goal.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {goal.current}/{goal.target}
                </span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-3 rounded-lg border ${
                achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/30 border-border"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.earned ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <achievement.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                  {achievement.earned ? (
                    <Badge variant="outline" className="mt-2 text-xs">
                      Earned {achievement.date}
                    </Badge>
                  ) : (
                    <div className="mt-2">
                      <Progress value={(achievement.progress! / 10) * 100} className="h-1" />
                      <span className="text-xs text-muted-foreground">{achievement.progress}/10</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
