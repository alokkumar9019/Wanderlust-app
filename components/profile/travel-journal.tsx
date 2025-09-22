"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Camera, Heart, MessageCircle, Share2, Plus, Search } from "lucide-react"

interface JournalEntry {
  id: number
  title: string
  location: string
  date: string
  content: string
  images: string[]
  tags: string[]
  likes: number
  comments: number
  isPublic: boolean
}

const journalEntries: JournalEntry[] = [
  {
    id: 1,
    title: "Golden Twilight at Marine Drive",
    location: "Mumbai, India",
    date: "2024-01-15",
    content:
      "Today was unforgettable! Watched a mesmerizing sunset along Marine Drive, where the waves gently crashed and the city lights slowly awakened. The vibrant atmosphere and the iconic Queen’s Necklace view created the perfect backdrop. Met friendly Mumbaikars at a nearby café and traded stories over spicy chaats and kulfi. Moments like these showcase the energy and warmth of Mumbai, reminding me why India’s cities are so captivating.",
    images: ["/marine_drive.jpg", "/marine_drive2.png"],
    tags: ["sunset", "mumbai", "photography", "city life"],
    likes: 47,
    comments: 12,
    isPublic: true,
  },
  {
    id: 2,
    title: "Spiritual Escape in Varanasi",
    location: "Varanasi, India",
    date: "2024-01-08",
    content:
      "Spent the day immersed in the ancient spirituality of Varanasi. Started early with a serene boat ride on the Ganges, watching the sunrise illuminate the ghats and temples. Witnessed heartwarming rituals and aarti in the evening, with lamps floating on the water creating a magical sight. The winding alleys, bustling with color and history, were a stark contrast to the peaceful riverside. Varanasi's mystical aura left a deep impression on me.",
    images: ["/varanasi-ghats-sunrise.jpg"],
    tags: ["spirituality", "varanasi", "culture", "history"],
    likes: 32,
    comments: 8,
    isPublic: true,
  },
  {
    id: 3,
    title: "Nature Escape in Munnar Hills",
    location: "Munnar, Kerala, India",
    date: "2023-12-22",
    content:
      "Had an amazing adventure hiking through the misty tea plantations of Munnar! The lush green hills and winding paths were truly rejuvenating. Enjoyed the scent of fresh tea leaves and spotted playful Nilgiri langurs in the treetops. The scenery was peaceful, and the cool mountain air made every step worthwhile. Kerala’s natural beauty reminds me why adventure travel in India is always rewarding.",
    images: ["/munnar-tea-plantations-nature.jpg"],
    tags: ["hiking", "mountains", "kerala", "adventure"],
    likes: 28,
    comments: 5,
    isPublic: false,
  },
]


export function TravelJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>(journalEntries)
  const [isCreating, setIsCreating] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterTag, setFilterTag] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const [newEntry, setNewEntry] = useState({
    title: "",
    location: "",
    content: "",
    tags: "",
    isPublic: true,
  })

  const allTags = Array.from(new Set(entries.flatMap((entry) => entry.tags)))

  const filteredEntries = entries
    .filter((entry) => {
      const matchesSearch =
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.content.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = filterTag === "all" || entry.tags.includes(filterTag)
      return matchesSearch && matchesTag
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime()
      if (sortBy === "popular") return b.likes - a.likes
      return 0
    })

  const handleCreateEntry = () => {
    if (newEntry.title && newEntry.location && newEntry.content) {
      const entry: JournalEntry = {
        id: Date.now(),
        title: newEntry.title,
        location: newEntry.location,
        date: new Date().toISOString().split("T")[0],
        content: newEntry.content,
        images: [],
        tags: newEntry.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        likes: 0,
        comments: 0,
        isPublic: newEntry.isPublic,
      }
      setEntries([entry, ...entries])
      setNewEntry({ title: "", location: "", content: "", tags: "", isPublic: true })
      setIsCreating(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Travel Journal</h2>
          <p className="text-muted-foreground">Document your adventures and share your experiences</p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Entry
        </Button>
      </div>

      {/* Create New Entry */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Journal Entry</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input
                  placeholder="Give your entry a title..."
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Location</label>
                <Input
                  placeholder="Where were you?"
                  value={newEntry.location}
                  onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Your Story</label>
              <Textarea
                placeholder="Share your experience, thoughts, and memories..."
                rows={6}
                value={newEntry.content}
                onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tags (comma separated)</label>
              <Input
                placeholder="adventure, culture, food, photography..."
                value={newEntry.tags}
                onChange={(e) => setNewEntry({ ...newEntry, tags: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="public"
                  checked={newEntry.isPublic}
                  onChange={(e) => setNewEntry({ ...newEntry, isPublic: e.target.checked })}
                />
                <label htmlFor="public" className="text-sm">
                  Make this entry public
                </label>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateEntry}>Publish Entry</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search your journal entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterTag} onValueChange={setFilterTag}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tags</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Journal Entries */}
      <div className="space-y-6">
        {filteredEntries.map((entry) => (
          <Card key={entry.id} className="overflow-hidden">
            <CardContent className="p-0">
              {/* Entry Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?key=avatar" alt="Chloe" />
                      <AvatarFallback>CA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{entry.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{entry.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(entry.date).toLocaleDateString()}</span>
                        </div>
                        {!entry.isPublic && <Badge variant="outline">Private</Badge>}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Entry Content */}
                <p className="text-foreground leading-relaxed mb-4">{entry.content}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Entry Images */}
              {entry.images.length > 0 && (
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {entry.images.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg aspect-video">
                        <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Entry Actions */}
              <div className="px-6 py-4 border-t border-border bg-muted/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="h-4 w-4" />
                      <span>{entry.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>{entry.comments}</span>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Camera className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-muted-foreground">
              <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No journal entries found</h3>
              <p className="text-sm">
                {searchTerm || filterTag !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Start documenting your travel adventures!"}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
