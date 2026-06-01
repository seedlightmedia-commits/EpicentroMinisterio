import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Music, Video } from "lucide-react"

export const metadata = {
  title: "Producciones y Prédicas | Epicentro Ministerio",
  description: "Descubre nuestras producciones musicales y prédicas. Contenido que alimentará tu espíritu.",
}

const musicVideos = [
  {
    title: "A ti Dios",
    description: "Una adoración que eleva tu espíritu",
    thumbnail: "https://img.youtube.com/vi/aiGe5rhaps8/maxresdefault.jpg", 
    url: "https://youtu.be/aiGe5rhaps8?si=1RQvlvWvRrQjpOX4",
  },
  {
    title: "Espontánea: Habita entre nosotros",
    description: "Un momento de adoración espontánea",
    thumbnail: "https://img.youtube.com/vi/TIv55NKa5Us/maxresdefault.jpg",
    url: "https://youtu.be/TIv55NKa5Us?si=Gkix9LHxLt9HYS3b",
  },
  {
    title: "Te necesito",
    description: "Una declaración de dependencia en Dios",
    thumbnail: "https://img.youtube.com/vi/QDLmrz_WI8U/maxresdefault.jpg",
    url: "https://youtu.be/QDLmrz_WI8U?si=K67Qwzx3NJOSKJs9",
  },
  {
    title: "Mamá",
    description: "Un tributo especial",
    thumbnail: "https://img.youtube.com/vi/LqYuW_SB04M/maxresdefault.jpg",
    url: "https://youtu.be/LqYuW_SB04M?si=eqAg3KJ-0hhhMdxd",
  },
  {
    title: "Te vi",
    description: "Una canción de testimonio",
    thumbnail: "https://img.youtube.com/vi/jLpuWixhqPA/maxresdefault.jpg",
    url: "https://youtu.be/jLpuWixhqPA?si=_YrznwDsK6FYPgxg",
  },
  {
    title: "Santo es mi Dios",
    description: "Adoración que exalta la santidad de Dios",
    thumbnail: "https://img.youtube.com/vi/BhImn52qs_Q/hqdefault.jpg",
    url: "https://youtu.be/BhImn52qs_Q?si=iLatN00Q9CtHIfiN",
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

      {/* Music Productions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <a
              href="https://www.youtube.com/@epicentroministerio/videos?view=0&sort=p&shelf_id=3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-chart-5/20 rounded-full text-chart-5 font-semibold text-sm mb-4 btn-animate"
            >
              <Music className="h-4 w-4" />
              Producciones Musicales
            </a>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Nuestra Música
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Canciones que nacen del corazón para bendecir tu vida
            </p>
          </div>

          {/* Music Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicVideos.map((video) => (
              <a
                key={video.title}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl bg-card">
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg btn-glow">
                        <Play className="h-8 w-8 text-white ml-1 fill-current" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {video.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

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
