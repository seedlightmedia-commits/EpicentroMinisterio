"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Music } from "lucide-react"

interface MusicVideo {
  title: string
  description: string
  thumbnail: string
  videoId: string
}

interface ProduccionesPlayerProps {
  videos: MusicVideo[]
}

export default function ProduccionesPlayer({ videos }: ProduccionesPlayerProps) {
  const [activeVideo, setActiveVideo] = useState(videos[0])

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart-5/20 rounded-full text-chart-5 font-semibold text-sm mb-4 btn-animate">
            <Music className="h-4 w-4" />
            Producciones Musicales
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Nuestra Música
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Canciones que nacen del corazón para bendecir tu vida
          </p>
        </div>

        <div className="mb-10">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/50 bg-black shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Reproduciendo: <span className="font-semibold text-foreground">{activeVideo.title}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <button
              key={video.videoId}
              type="button"
              onClick={() => setActiveVideo(video)}
              className={`group w-full text-left transition-all duration-300 ${
                activeVideo.videoId === video.videoId ? "shadow-2xl ring-2 ring-accent/60" : "hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              <Card className="overflow-hidden border-border/50 bg-card">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{video.description}</p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
