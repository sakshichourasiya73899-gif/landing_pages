"use client"

import { useState } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
  Maximize2,
  ListMusic,
} from "lucide-react"
import Image from "next/image"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [volume, setVolume] = useState(75)
  const [progress, setProgress] = useState(35)
  const [isShuffled, setIsShuffled] = useState(false)
  const [isRepeating, setIsRepeating] = useState(false)

  const currentSong = {
    title: "Golden Hour",
    artist: "JVKE",
    albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-card/95 backdrop-blur-xl border-t border-border px-4 lg:px-6">
      <div className="h-full flex items-center justify-between gap-4">
        {/* Currently Playing */}
        <div className="flex items-center gap-4 w-72 min-w-0">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={currentSong.albumArt}
              alt="Album cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-medium text-foreground truncate">{currentSong.title}</h4>
            <p className="text-sm text-muted truncate">{currentSong.artist}</p>
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="flex-shrink-0 p-2 hover:bg-card-hover rounded-full transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isLiked ? "text-primary fill-primary" : "text-muted hover:text-foreground"
              }`}
            />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex-1 max-w-2xl flex flex-col items-center gap-2">
          {/* Control Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              className={`p-2 rounded-full transition-colors ${
                isShuffled ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="p-2 text-muted hover:text-foreground rounded-full transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-background fill-background" />
              ) : (
                <Play className="w-5 h-5 text-background fill-background ml-0.5" />
              )}
            </button>
            <button className="p-2 text-muted hover:text-foreground rounded-full transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsRepeating(!isRepeating)}
              className={`p-2 rounded-full transition-colors ${
                isRepeating ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center gap-3">
            <span className="text-xs text-muted tabular-nums w-10 text-right">1:13</span>
            <div className="flex-1 h-1 bg-border rounded-full overflow-hidden group cursor-pointer">
              <div
                className="h-full bg-foreground group-hover:bg-primary transition-colors rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="text-xs text-muted tabular-nums w-10">3:29</span>
          </div>
        </div>

        {/* Volume & Extra Controls */}
        <div className="hidden md:flex items-center gap-3 w-72 justify-end">
          <button className="p-2 text-muted hover:text-foreground rounded-full transition-colors">
            <ListMusic className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-muted hover:text-foreground rounded-full transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <div className="w-24 h-1 bg-border rounded-full overflow-hidden group cursor-pointer">
              <div
                className="h-full bg-foreground group-hover:bg-primary transition-colors rounded-full"
                style={{ width: isMuted ? "0%" : `${volume}%` }}
              />
            </div>
          </div>
          <button className="p-2 text-muted hover:text-foreground rounded-full transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
