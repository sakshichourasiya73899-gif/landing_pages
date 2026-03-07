"use client"

import { useState } from "react"
import { Home, Search, Library, Plus, Heart, Music2 } from "lucide-react"

const moods = [
  { name: "Happy", emoji: "😊", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { name: "Sad", emoji: "😢", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Chill", emoji: "😌", color: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
  { name: "Focus", emoji: "🎯", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { name: "Energetic", emoji: "⚡", color: "bg-red-500/20 text-red-400 border-red-500/30" },
]

const playlists = [
  { name: "Morning Coffee", songs: 24 },
  { name: "Workout Mix", songs: 48 },
  { name: "Late Night Vibes", songs: 32 },
  { name: "Focus Flow", songs: 56 },
  { name: "Throwback Hits", songs: 78 },
]

export function Sidebar() {
  const [activeMood, setActiveMood] = useState("Happy")

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-card border-r border-border p-4 h-[calc(100vh-96px)]">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
          <Music2 className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          MoodTunes
        </span>
      </div>

      {/* Navigation */}
      <nav className="mb-8">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-foreground bg-card-hover transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-muted hover:text-foreground hover:bg-card-hover transition-colors"
            >
              <Search className="w-5 h-5" />
              <span className="font-medium">Search</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-muted hover:text-foreground hover:bg-card-hover transition-colors"
            >
              <Library className="w-5 h-5" />
              <span className="font-medium">Your Library</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mood Filters */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-muted uppercase tracking-wider px-2 mb-3">Mood Filters</h3>
        <div className="flex flex-wrap gap-2">
          {moods.map((mood) => (
            <button
              key={mood.name}
              onClick={() => setActiveMood(mood.name)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeMood === mood.name
                  ? mood.color
                  : "bg-card-hover text-muted border-border hover:text-foreground"
              }`}
            >
              {mood.emoji} {mood.name}
            </button>
          ))}
        </div>
      </div>

      {/* Playlists */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-2 mb-3">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">Playlists</h3>
          <button className="w-6 h-6 rounded-full bg-card-hover flex items-center justify-center hover:bg-border transition-colors">
            <Plus className="w-4 h-4 text-muted" />
          </button>
        </div>

        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-muted hover:text-foreground hover:bg-card-hover transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-md flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-sm">Liked Songs</span>
            </a>
          </li>
          {playlists.map((playlist) => (
            <li key={playlist.name}>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-muted hover:text-foreground hover:bg-card-hover transition-colors"
              >
                <div className="w-8 h-8 bg-card-hover rounded-md flex items-center justify-center">
                  <Music2 className="w-4 h-4 text-muted" />
                </div>
                <div className="min-w-0">
                  <span className="font-medium text-sm block truncate">{playlist.name}</span>
                  <span className="text-xs text-muted-foreground">{playlist.songs} songs</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
