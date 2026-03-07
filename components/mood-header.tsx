"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

const moods = [
  { name: "Happy", emoji: "😊", gradient: "from-yellow-500 to-orange-500" },
  { name: "Sad", emoji: "😢", gradient: "from-blue-500 to-indigo-600" },
  { name: "Chill", emoji: "😌", gradient: "from-teal-400 to-cyan-500" },
  { name: "Focus", emoji: "🎯", gradient: "from-purple-500 to-pink-500" },
  { name: "Energetic", emoji: "⚡", gradient: "from-red-500 to-orange-500" },
]

export function MoodHeader() {
  const [currentMood] = useState(moods[0])

  return (
    <header className="mb-8">
      {/* Mood Display */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${currentMood.gradient}`}>
          <span className="text-3xl">{currentMood.emoji}</span>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-black" />
          </div>
        </div>
        <div>
          <p className="text-muted text-sm font-medium uppercase tracking-wider">Your Mood</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            {currentMood.name} <span className="text-2xl lg:text-3xl">{currentMood.emoji}</span>
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-muted text-lg max-w-xl">
        Based on your listening history and current vibe, here are some tracks we think you&apos;ll love.
      </p>
    </header>
  )
}
