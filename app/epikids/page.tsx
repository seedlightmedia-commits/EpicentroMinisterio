import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, BookOpen, Users, Star } from "lucide-react"

export const metadata = {
  title: "EpiKids | Epicentro Ministerio",
  description: "Escuela dominical para niños de 2 a 13 años. Un espacio seguro donde los niños aprenden sobre el amor de Dios.",
}

const features = [
  {
    icon: Heart,
    title: "Amor Incondicional",
    description: "Enseñamos a los niños sobre el amor de Dios a través de actividades divertidas y significativas.",
  },
  {
    icon: BookOpen,
    title: "Enseñanza Bíblica",
    description: "Clases diseñadas para que los niños comprendan las historias de la Biblia de manera práctica.",
  },
  {
    icon: Users,
    title: "Comunidad Segura",
    description: "Un ambiente seguro donde los niños pueden hacer amigos y crecer en su fe.",
  },
  {
    icon: Star,
    title: "Diversión con Propósito",
    description: "Juegos, manualidades y actividades que refuerzan los valores cristianos.",
  },
]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Epikids-iUEHrGiCV1oGXq1sRWI2UVtXb3vEF1.png",
    alt: "EpiKids evento La Gran Aventura",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucia.JPG-WyCGaujLgeYPVDC9BpRIPGz35p0KKF.jpeg",
    alt: "Niña en EpiKids",
  },
]

export default function EpiKidsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-pink-500/20 via-yellow-500/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-full text-pink-400 font-semibold text-sm mb-6">
              Para niños de 2 a 13 años
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              <span className="text-pink-500">Epi</span>Kids
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Un espacio mágico donde los niños descubren el amor de Dios a través de aventuras, 
              juegos y enseñanzas que marcarán sus vidas para siempre.
            </p>
          </div>
        </div>
      </section>

      {/* What is Sunday School */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                ¿Qué es la Escuela Dominical?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  La Escuela Dominical es un ministerio fundamental en la vida de la iglesia, 
                  diseñado especialmente para guiar a los niños en su camino de fe desde temprana edad.
                </p>
                <p>
                  Es un espacio sagrado donde los más pequeños aprenden las verdades bíblicas de 
                  manera creativa y adaptada a su edad, sentando las bases de una relación personal 
                  con Dios que los acompañará toda su vida.
                </p>
                <p>
                  En EpiKids creemos que cada niño es único y especial para Dios. Por eso, nuestros 
                  maestros están comprometidos a crear un ambiente de amor, seguridad y aprendizaje 
                  donde cada niño pueda florecer espiritualmente.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Epikids-iUEHrGiCV1oGXq1sRWI2UVtXb3vEF1.png"
                  alt="EpiKids La Gran Aventura"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              ¿Por qué EpiKids?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nuestro programa está diseñado para nutrir el crecimiento espiritual de cada niño
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50 hover:border-pink-500/50 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-pink-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Momentos Especiales
            </h2>
            <p className="text-muted-foreground text-lg">
              Capturando la alegría de aprender sobre Dios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-video rounded-2xl overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-gradient-to-b from-pink-500/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            ¡Te esperamos!
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Trae a tus hijos a vivir una experiencia única cada domingo
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card rounded-2xl border border-border/50">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Horario</p>
              <p className="text-2xl font-bold text-foreground">Domingos 10:00 AM</p>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground">
            Inscripción gratuita • WhatsApp: <a href="https://wa.me/573213344144" className="text-pink-500 hover:underline">321 334 4144</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
