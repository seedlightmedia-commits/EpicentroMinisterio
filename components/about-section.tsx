"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const familyMembers = [
  {
    name: "Samuel Calderón",
    role: "Pastor Fundador",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samuel.JPG-GUIDjotb2ffgkOojpPcoLTcbIzepcr.jpeg",
    objectPosition: "center",
  },
  {
    name: "Natalia Castellanos",
    role: "Pastora Fundadora",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J3SFDT6OhTlt6z0Bqb3YYLgFKFCqzo.png",
    objectPosition: "left top",
  },
  {
    name: "Lucía Calderón",
    role: "Hija de los Pastores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JOj6V9UFKW9StN15BUBjBXj50mHd8s.png",
    objectPosition: "center",
  },
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Quiénes Somos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un ministerio nacido del espíritu. Juan 3:6
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Faith Statement */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold">
                  +
                </span>
                En qué creemos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Somos un ministerio de sana doctrina que cree en el Padre,
                el Hijo y el Espíritu Santo. Creemos en el nuevo nacimiento
                y en los dones del Espíritu Santo como manifestación de su
                poder en la vida de cada creyente. Creemos en las 5 asignaciones
                ministeriales instituidas en Efesios 4 para la edificación
                de los creyentes en nuestro tiempo. 
                Nuestra fe está fundamentada en la Biblia como palabra de Dios 
                y como fuente de verdad y de autoridad suprema para la vida cristiana.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-chart-2 rounded-lg flex items-center justify-center text-white font-bold">
                  ✦
                </span>
                Nuestra Historia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fundada el <strong className="text-foreground">5 de diciembre del 2021</strong> por una palabra 
                sobre el Espíritu Santo. Cuando los pastores se disponían a viajar a otro país, 
                Dios habló y les pidió quedarse; así nace <strong className="text-foreground">EPICENTRO MINISTERIO</strong>. 
                Un lugar donde el poder de Dios se manifiesta y las vidas son transformadas.
              </p>
            </div>
          </div>

          {/* Family Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center lg:text-left">
              Familia Pastoral
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {familyMembers.map((member) => (
                <Card 
                  key={member.name} 
                  className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.objectPosition }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-white/90 backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-muted-foreground text-sm">{member.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
