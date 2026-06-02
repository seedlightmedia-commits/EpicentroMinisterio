"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, MapPin, Clock, Ticket, Loader2, CheckCircle } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Encuentro de Mujeres",
    subtitle: "Un tiempo especial de renovación",
    date: "19 de junio",
    time: "8:00 am",
    location: "Calle 17 # 105 29, Bogotá",
    image: "/eventomujer.png",
    color: "from-pink-500 to-rose-600",
    available: true,
  },
  {
    id: 2,
    title: "Evento de Parejas",
    subtitle: "Fortaleciendo tu matrimonio",
    date: "Próximamente",
    time: "Por confirmar",
    location: "Calle 17 # 105 29, Bogotá",
    image: "/eventoparejas.png",
    color: "from-purple-500 to-indigo-600",
    available: false,
    statusText: "Aún no se reciben inscripciones",
  },
  {
    id: 3,
    title: "Encuentro de Sanidad",
    subtitle: "Experimenta el poder de Dios",
    date: "Próximamente",
    time: "Por confirmar",
    location: "Calle 17 # 105 29, Bogotá",
    image: "/eventosanidad.png",
    color: "from-amber-500 to-orange-600",
    available: false,
    statusText: "Aún no se reciben inscripciones",
  },
]

function RegistrationForm({ eventTitle, onSuccess }: { eventTitle: string; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
    evento: eventTitle,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // REEMPLAZA ESTA URL CON LA NUEVA QUE COPIASTE EN EL PASO 2
      await fetch(
        "https://script.google.com/macros/s/AKfycbzx5ZQChvKv8IIbdysn4K01RIMyzOIpYEVoHXnchbMHgMkSz9Wymz-0CO5bclZsjw9_Cw/exec",
        { 
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      )
      onSuccess()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre completo *</Label>
        <Input
          id="nombre"
          required
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          placeholder="Tu nombre"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="celular">Número de celular *</Label>
        <Input
          id="celular"
          type="tel"
          required
          value={formData.celular}
          onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
          placeholder="+57 300 000 0000"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="correo">Correo electrónico</Label>
        <Input
          id="correo"
          type="email"
          value={formData.correo}
          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
          placeholder="tu@email.com"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Registrando...
          </>
        ) : (
          <>
            <Ticket className="mr-2 h-4 w-4" />
            Confirmar Registro
          </>
        )}
      </Button>
    </form>
  )
}

function EventCard({ event }: { event: any }) {
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <Card className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-70`} />
          
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-card" style={{
            clipPath: "polygon(0 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)"
          }} />
          
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
            Entrada Libre
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-black text-foreground mb-1">{event.title}</h3>
            <p className="text-muted-foreground">{event.subtitle}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-foreground">{event.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">{event.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">{event.location}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className={`w-full font-bold bg-gradient-to-r ${event.color} hover:opacity-90 text-white`}
                disabled={!event.available}
              >
                <Ticket className="mr-2 h-4 w-4" />
                {event.available ? "Registrarme" : event.statusText ?? "Próximamente"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  Registro para {event.title}
                </DialogTitle>
              </DialogHeader>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h4 className="text-lg font-bold text-foreground mb-2">¡Registro exitoso!</h4>
                  <p className="text-muted-foreground">Te esperamos en el evento. Revisa tu bandeja de correo electrónico para verificar tu código QR.</p>
                </div>
              ) : (
                <RegistrationForm 
                  eventTitle={event.title} 
                  onSuccess={() => setIsSuccess(true)} 
                />
              )}
            </DialogContent>
          </Dialog>
        </CardContent>
      </div>

      <div className="absolute top-1/2 -left-3 w-6 h-6 bg-background rounded-full" />
      <div className="absolute top-1/2 -right-3 w-6 h-6 bg-background rounded-full" />
    </Card>
  )
}

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section 
          className="relative py-24 flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
          style={{ backgroundImage: "url('/Eventos.png')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Próximos Eventos</h1>
            <p className="text-lg text-gray-200">Separa tu cupo de forma gratuita y acompáñanos.</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
