"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

// Cambiado a exportación de función explícita para resolver el Runtime Error de page.tsx
export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setShowVideo(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        {showVideo ? (
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/logo%20animado%20epicentro.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-slate-950" />
        )}
        <div className="absolute inset-0 bg-black/65" /> 
      </div>

      {/* Contenedor alineado a la izquierda */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-start">
          
          <div className="w-full max-w-3xl py-16 md:py-24 text-left space-y-6 relative">
            
            {/* Título Principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight animate-fade-in-up">
              Como palmeras florecen los justos; como cedros del Líbano crecen.
              
              <span className="block mt-4 text-base md:text-xl font-medium text-accent/90 leading-relaxed">
                Plantados en la casa del Señor, florecen en los atrios de nuestro Dios.
              </span>
              
              <span className="block mt-3 text-sm md:text-lg font-normal text-white/90 italic leading-relaxed">
                Aun en su vejez, darán fruto, siempre estarán saludables y frondosos.
              </span>
            </h1>

            {/* Cita del Salmo */}
            <p className="text-xs md:text-sm uppercase tracking-widest text-white/60 font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Salmo 92:12-14
            </p>

            {/* Botón moderno con la flecha centrada adentro */}
            <div className="flex justify-start pt-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-accent/20 transition-all hover:scale-105 duration-300"
              >
                <a href="/eventos" className="flex items-center justify-center gap-2">
                  Próximos Eventos
                  <ChevronDown className="h-5 w-5 shrink-0" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
