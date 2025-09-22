"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, Users, Settings, Share2, Camera } from "lucide-react"

export function ProfileHeader() {

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <Card className="overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-primary/20 to-accent/20">
            <img
              src="/stunning-mountain-landscape-with-turquoise-lake-at.jpg"
              alt="Profile cover"
              className="w-full h-full object-cover"
            />
           
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Avatar */}
              <div className="relative -mt-16 md:-mt-12">
                <Avatar className="w-24 h-24 border-4 border-background">
                  <AvatarImage src="/alok.jpg" alt="Alok" />
                  <AvatarFallback className="text-2xl">CA</AvatarFallback>
                </Avatar>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute -bottom-2 -right-2 w-8 h-8 p-0 rounded-full bg-background"
                >
                  <Camera className="h-3 w-3" />
                </Button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">Alok Kumar Singh</h1>
                    <p className="text-muted-foreground">Passionate traveler & adventure seeker</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Rohtas, Bihar</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Joined March 2023</span>
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* Travel Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">
                    <MapPin className="h-3 w-3 mr-1" />
                    Explorer
                  </Badge>
                  <Badge variant="secondary">
                    <Users className="h-3 w-3 mr-1" />
                    Community Member
                  </Badge>
                  <Badge variant="secondary">
                    <Camera className="h-3 w-3 mr-1" />
                    Photographer
                  </Badge>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 mt-6 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">23</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">47</div>
                    <div className="text-sm text-muted-foreground">Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">156</div>
                    <div className="text-sm text-muted-foreground">Days Traveled</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
