"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Search, User, Heart, MapPin } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold text-foreground">Wanderlust</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/discover" className="text-foreground hover:text-primary transition-colors">
              Discover
            </Link>
            <Link href="/plan" className="text-foreground hover:text-primary transition-colors">
              Plan Trip
            </Link>
            <Link href="/profile" className="text-foreground hover:text-primary transition-colors">
              Profile
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
      </div>
 
      </div>
    </nav>
  )
}
