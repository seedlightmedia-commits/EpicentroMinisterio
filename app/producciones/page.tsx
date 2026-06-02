import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProduccionesPlayer from "@/components/producciones-player"
import { Music, Video } from "lucide-react"

export const metadata = {
  title: "Producciones y Prédicas | Epicentro Ministerio",
  description: "Descubre nuestras producciones musicales y prédicas. Contenido que alimentará tu espíritu.",
}

const musicVideos = [
  {
    title: "A ti Dios",
    description: "Una adoración que eleva tu espíritu",
    thumbnail: "https://img.youtube.com/vi/aiGe5rhaps8/maxresdefault.jpg",
    videoId: "aiGe5rhaps8",
  },
  {
    title: "Espontánea: Habita entre nosotros",
    description: "Un momento de adoración espontánea",
    thumbnail: "https://img.youtube.com/vi/TIv55NKa5Us/maxresdefault.jpg",
    videoId: "TIv55NKa5Us",
  },
  {
    title: "Te necesito",
    description: "Una declaración de dependencia en Dios",
    thumbnail: "https://img.youtube.com/vi/QDLmrz_WI8U/maxresdefault.jpg",
    videoId: "QDLmrz_WI8U",
  },
  {
    title: "Mamá",
    description: "Un tributo especial",
    thumbnail: "https://img.youtube.com/vi/LqYuW_SB04M/maxresdefault.jpg",
    videoId: "LqYuW_SB04M",
  },
  {
    title: "Te vi",
    description: "Una canción de testimonio",
    thumbnail: "https://img.youtube.com/vi/jLpuWixhqPA/maxresdefault.jpg",
    videoId: "jLpuWixhqPA",
  },
  {
    title: "Santo es mi Dios",
    description: "Adoración que exalta la santidad de Dios",
    thumbnail: "https://img.youtube.com/vi/BhImn52qs_Q/hqdefault.jpg",
    videoId: "BhImn52qs_Q",
  },
]

export default function ProduccionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section Rediseñado para Alta Visibilidad */}
      <section className="relative pt-44 pb-36 overflow-hidden min-h-[75vh] flex items-center bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="/Producciones.png"
            alt="Producciones y Prédicas"
            className="w-full h-full object-cover object-center opacity-85"
          />
          {/* Capa de degradado optimizada: Oscurece sutilmente arriba para el menú y se desvanece al fondo */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10" />
      </section>

      {/* Latest Sermon (Sección optimizada con el nuevo link y espacios reducidos) */}
      <section className="pt-12 pb-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <a
              href="https://youtu.be/_VEZfQXpElQ?si=sOfh1R8k1A15nGhP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-4 hover:bg-accent/30 transition-colors btn-animate"
            >
              <Video className="h-4 w-4" />
              Última Prédica
            </a>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Mensaje de la semana
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No te pierdas el mensaje más reciente de nuestros pastores
            </p>
          </div>
        </div>
      </section>

      <ProduccionesPlayer videos={musicVideos} />

      {/* Upcoming Releases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            Próximos Estrenos
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Estamos trabajando en nuevas producciones que pronto estarán disponibles. 
            ¡Suscríbete a nuestro canal para no perderte nada!
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Suscribirse en YouTube
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
