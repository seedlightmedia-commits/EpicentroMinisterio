"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Video, Users } from "lucide-react"

const meetings = [
  {
    title: "Reunión Principal",
    day: "Domingos",
    time: "10:00 AM",
    type: "Presencial",
    location: "Calle 17 #105 29, Bogotá",
    icon: Users,
    description: "Un espacio para adorar y crecer juntos",
    color: "bg-accent",
    image: "dominical.png",
  },
  {
    title: "Reunión de Jóvenes",
    day: "Sábados (cada 15 días)",
    time: "5:00 PM",
    type: "Presencial",
    location: "Calle 17 #105 29, Bogotá",
    icon: Users,
    description: "Aprende sobre Dios de una forma divertida y conoce más jóvenes como tú",
    color: "bg-chart-2",
    image: "jovenes.jpg",
  },
  {
    title: "Oración Virtual",
    day: "Martes y Jueves",
    time: "6:00 AM",
    type: "Virtual",
    icon: Video,
    description: "Conecta con Dios desde casa",
    link: "https://zoom.us",
    color: "bg-chart-3",
    image: "Oracionmañana.jpg",
  },
  {
    title: "Comunidad de Mujeres",
    day: "Todos los Jueves",
    time: "8:00 PM",
    type: "Virtual",
    icon: Video,
    description: "Encuentro especial para mujeres",
    link: "https://zoom.us",
    whatsappLink: "https://whatsapp.com",
    color: "bg-chart-5",
    image: "comunidadmujeres.png",
  },
]

export function MeetingSchedule() {
  return (
    <section id="horarios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Nuestros Horarios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra el momento perfecto para conectar con Dios y nuestra comunidad
          </p>
        </div>

        {/* Meeting cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meetings.map((meeting, index) => (
            <Card
              key={meeting.title}
              className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image header if available */}
              {meeting.image && (
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={meeting.image}
                    alt={meeting.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              {!meeting.image && (
                <div className={`absolute top-0 left-0 right-0 h-1 ${meeting.color}`} />
              )}
              <CardContent className={`p-6 ${meeting.image ? 'pt-4' : ''}`}>
                <div className={`w-12 h-12 rounded-lg ${meeting.color} flex items-center justify-center mb-4`}>
                  <meeting.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Título e Ícono Oficial de WhatsApp de mayor tamaño (Ajustado a w-9 h-9) */}
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {meeting.title}
                  </h3>
                  {meeting.whatsappLink && (
                    <a
                      href={meeting.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-[#25D366] text-white rounded-xl hover:scale-110 transition-transform shadow-md inline-flex items-center justify-center shrink-0 p-1.5"
                      title="Unirse al grupo de WhatsApp"
                    >
                      <svg 
                        className="w-full h-full fill-current" 
                        viewBox="0 0 24 24" 
                        xmlns="http://w3.org"
                      >
                        <path d="M12.004 0C5.378 0 .004 5.374.004 12c0 2.112.551 4.17 1.596 5.977L.004 24l6.195-1.625A11.938 11.938 0 0 0 12.004 24c6.625 0 12-5.375 12-12s-5.375-12-12-12zm0 21.937c-1.956 0-3.87-.524-5.539-1.516l-.397-.235-3.669.962.979-3.578-.258-.41A9.902 9.902 0 0 1 1.94 12c0-5.503 4.478-9.937 9.937-9.937 5.504 0 9.938 4.48 9.938 9.937 0 5.504-4.48 9.937-9.938 9.937zm5.452-7.423c-.299-.149-1.765-.87-2.037-.969-.271-.1-.47-.149-.667.149-.198.299-.766.969-.94 1.168-.173.199-.347.224-.646.075-.3-.15-1.264-.465-2.408-1.485-.89-.793-1.49-1.773-1.664-2.072-.174-.3-.019-.462.13-.611.135-.134.3-.349.449-.523.149-.174.199-.299.299-.497.1-.2.05-.374-.025-.523-.075-.149-.667-1.609-.913-2.206-.24-.579-.485-.5-.667-.51-.173-.008-.372-.01-.571-.01-.199 0-.522.075-.795.373-.273.299-1.043 1.019-1.043 2.487 0 1.468 1.069 2.886 1.218 3.085.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.765-.72 2.013-1.417.248-.696.248-1.292.174-1.417-.075-.124-.273-.199-.572-.348z" />
                      </svg>
                    </a>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {meeting.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="text-foreground font-medium">{meeting.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="ml-6 text-muted-foreground">{meeting.time}</span>
                  </div>

                  {meeting.title !== "Comunidad de Mujeres" && (
                    <div className="flex items-center gap-2 text-sm">
                      {meeting.type === "Virtual" ? (
                        <Video className="h-4 w-4 text-accent" />
                      ) : (
                        <MapPin className="h-4 w-4 text-accent" />
                      )}
                      <span className="text-muted-foreground">{meeting.type}</span>
                    </div>
                  )}

                  {meeting.location && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{meeting.location}</span>
                    </div>
                  )}
                </div>

                {meeting.link && (
                  <a
                    href={meeting.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4zm8 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8.5 14h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    Unirse por Zoom
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
