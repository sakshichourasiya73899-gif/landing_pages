import { MoodHeader } from "@/components/mood-header"
import { SongGrid } from "@/components/song-grid"
import { Sidebar } from "@/components/sidebar"
import { MusicPlayer } from "@/components/music-player"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8">
            <MoodHeader />
            <SongGrid />
          </div>
        </main>
      </div>
      
      {/* Persistent Music Player */}
      <MusicPlayer />
    </div>
  )
}
