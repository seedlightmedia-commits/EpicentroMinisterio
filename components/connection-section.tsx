"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, MessageCircle, Users, Loader2, CheckCircle } from "lucide-react"

export function ConnectionSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
    peticion: "",
    grupo: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxKcE6KTEg5W3mZeQ4aUQ7xJurrm06axybIb5jHRLEyEB_7GMEZ-KxcQlkOWdW4yoUM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
      
      setIsSuccess(true)
      setFormData({
        nombre: "",
        celular: "",
        correo: "",
        peticion: "",
        grupo: "",
      })
      
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contactanos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Contáctanos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              Conéctate con nosotros
            </h3>
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">¡Gracias por inscribirte!</h4>
                <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre completo"
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
                  <Label htmlFor="correo">Correo electrónico (opcional)</Label>
                  <Input
                    id="correo"
                    type="email"
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="peticion">Petición de oración (opcional)</Label>
                  <Textarea
                    id="peticion"
                    value={formData.peticion}
                    onChange={(e) => setFormData({ ...formData, peticion: e.target.value })}
                    placeholder="Comparte tu petición de oración..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grupo">Grupo de conexión (opcional)</Label>
                  <Select
                    value={formData.grupo}
                    onValueChange={(value) => setFormData({ ...formData, grupo: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un grupo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mujeres">Grupo de Mujeres</SelectItem>
                      <SelectItem value="jovenes">Grupo de Jóvenes</SelectItem>
                      <SelectItem value="general">Reunión General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Petición"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <a
                href="https://wa.me/573227158848"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-green-500 transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-muted-foreground">+57 322 715 8848</p>
                </div>
              </a>

              <a
                href="https://chat.whatsapp.com/KA0aP0qpZ6UAhIkwI6ntAU?s=cl&p=a&mlu=3&amv=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-pink-300 hover:bg-pink-50 transition-all group"
              >
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-pink-500 transition-colors">
                    Únete a nuestra comunidad de mujeres en WhatsApp
                  </p>
                </div>
              </a>

              <a
                href="mailto:epicentromnisterio@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Correo electrónico
                  </p>
                  <p className="text-muted-foreground">epicentromnisterio@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-chart-3 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Calle 17 # 105 29, Bogotá - Fontibón</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-border/50 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.875!2d-74.15!3d4.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle%2017%20%23105-29%2C%20Fontib%C3%B3n%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Epicentro Ministerio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
