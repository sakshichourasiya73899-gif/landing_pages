"use client"

import { useState } from "react"
import { Play, Pause, Heart } from "lucide-react"
import Image from "next/image"

interface Song {
  id: number
  title: string
  artist: string
  album: string
  albumArt: string
  duration: string
}

const songs: Song[] = [
  {
    id: 1,
    title: "Golden Hour",
    artist: "JVKE",
    album: "Golden Hour",
    albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
    duration: "3:29",
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    duration: "3:20",
  },
  {
    id: 3,
    title: "Good Days",
    artist: "SZA",
    album: "Good Days",
    albumArt: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
    duration: "4:39",
  },
  {
    id: 4,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    duration: "3:23",
  },
  {
    id: 5,
    title: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
    duration: "3:18",
  },
  {
    id: 6,
    title: "Stay",
    artist: "The Kid LAROI",
    album: "F*ck Love 3",
    albumArt: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop",
    duration: "2:21",
  },
  {
    id: 7,
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    albumArt: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
    duration: "3:58",
  },
  {
    id: 8,
    title: "Montero",
    artist: "Lil Nas X",
    album: "Montero",
    albumArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop",
    duration: "2:17",
  },
]

export function SongGrid() {
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set([1, 3]))

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id)
  }

  const toggleLike = (id: number) => {
    setLikedSongs((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl lg:text-2xl font-semibold text-foreground">Recommended for You</h2>
        <button className="text-sm text-primary hover:text-primary-hover transition-colors font-medium">
          See all
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="group relative bg-card rounded-xl p-4 transition-all duration-300 hover:bg-card-hover hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
          >
            {/* Album Art */}
            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
              <Image
                src={song.albumArt}
                alt={`${song.album} album cover`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Play Button Overlay */}
              <button
                onClick={() => togglePlay(song.id)}
                className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 hover:bg-primary-hover shadow-lg"
              >
                {playingId === song.id ? (
                  <Pause className="w-5 h-5 text-black fill-black" />
                ) : (
                  <Play className="w-5 h-5 text-black fill-black ml-1" />
                )}
              </button>

              {/* Like Button */}
              <button
                onClick={() => toggleLike(song.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    likedSongs.has(song.id) ? "text-primary fill-primary" : "text-white"
                  }`}
                />
              </button>
            </div>

            {/* Song Info */}
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground truncate mb-1">{song.title}</h3>
              <p className="text-sm text-muted truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
