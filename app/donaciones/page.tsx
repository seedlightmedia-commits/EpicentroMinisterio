"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Shield, Loader2, CheckCircle, Gift, Home, HandHeart } from "lucide-react"

const donationTypes = [
  {
    value: "diezmo",
    label: "Diezmo",
    icon: Gift,
    description: "El diezmo es una expresión de gratitud a Dios por sus bendiciones",
  },
  {
    value: "ofrenda",
    label: "Ofrenda",
    icon: Heart,
    description: "Una ofrenda voluntaria para la obra de Dios",
  },
  {
    value: "pro-templo",
    label: "Pro Templo",
    icon: Home,
    description: "Contribuye al crecimiento de nuestras instalaciones",
  },
  {
    value: "voto",
    label: "Voto",
    icon: HandHeart,
    description: "Cumple tu promesa hecha a Dios",
  },
]

export default function DonacionesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedType, setSelectedType] = useState("")
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
    peticion: "",
    tipo: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx0kfBo0-gX0oWbnfDohLTXT0_VOHYkyZdWK7UeVColZMd8wLAZc9XEMAn6mpg9t-aJ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            tipo: selectedType,
          }),
        }
      )
      
      setIsSuccess(true)
      setFormData({
        nombre: "",
        celular: "",
        correo: "",
        peticion: "",
        tipo: "",
      })
      setSelectedType("")
      
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary via-primary/95 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-6">
              Donaciones
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Tu generosidad hace posible que sigamos compartiendo el amor de Dios. 
              Cada donación contribuye a transformar vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm">Transacción segura</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm">Confirmación inmediata</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-sm">100% para la obra de Dios</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Tipos de Donación
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Elige la forma en que deseas contribuir a la obra de Dios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {donationTypes.map((type) => (
              <Card 
                key={type.value}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedType === type.value 
                    ? "border-accent bg-accent/5 ring-2 ring-accent" 
                    : "border-border/50 hover:border-accent/50"
                }`}
                onClick={() => setSelectedType(type.value)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    selectedType === type.value ? "bg-accent" : "bg-accent/20"
                  }`}>
                    <type.icon className={`h-7 w-7 ${
                      selectedType === type.value ? "text-accent-foreground" : "text-accent"
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{type.label}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Donation Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Registra tu donación
                </h3>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">¡Gracias por tu donación!</h4>
                    <p className="text-muted-foreground">
                      Hemos registrado tu donación. Recibirás un correo de confirmación si proporcionaste tu email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
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
                      <Label htmlFor="correo">Correo electrónico (para recibir confirmación)</Label>
                      <Input
                        id="correo"
                        type="email"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de donación *</Label>
                      <Select
                        required
                        value={selectedType}
                        onValueChange={(value) => setSelectedType(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de donación" />
                        </SelectTrigger>
                        <SelectContent>
                          {donationTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="peticion">Petición de oración *</Label>
                      <Textarea
                        id="peticion"
                        required
                        value={formData.peticion}
                        onChange={(e) => setFormData({ ...formData, peticion: e.target.value })}
                        placeholder="Comparte tu petición de oración..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
                      disabled={isSubmitting || !selectedType}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Heart className="mr-2 h-5 w-5" />
                          Registrar Donación
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bible Verse */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground italic mb-4">
              &quot;Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, 
              porque Dios ama al dador alegre.&quot;
            </p>
            <cite className="text-muted-foreground font-semibold">— 2 Corintios 9:7</cite>
          </blockquote>
        </div>
      </section>

      <Footer />
    </main>
  )
}
