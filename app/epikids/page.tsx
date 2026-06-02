import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "Nuestros Ministerios | Epicentro Ministerio",
  description: "Conoce los ministerios de nuestro equipo, desde Epikids hasta EpiCoffee, con corazón de servicio y adoración.",
}

const ministries = [
  {
    title: "Epikids",
    description:
      "Un espacio mágico donde los niños descubren el amor de Dios a través de aventuras, juegos y enseñanzas que marcarán sus vidas para siempre.",
    image: "/Epikids.png",
    alt: "Niños en EpiKids",
  },
  {
    title: "Alabanza",
    description:
      "Guiar a la congregación a la presencia de Dios a través de la música y la adoración genuina. Ser un equipo unido, espiritual y técnicamente preparado, que inspire a la iglesia a vivir una vida de constante adoración.",
    image: "/Alabanza.jpg",
    alt: "Ministerio de alabanza",
  },
  {
    title: "Comunidad de Mujeres",
    description:
      "Sanar, restaurar y edificar el corazón de cada mujer, ayudándola a descubrir su identidad y propósito en Dios. Levantar una generación de mujeres firmes en la fe, que transformen sus hogares, familias y comunidades con la sabiduría de la Palabra.",
    image: "/comunidadmujeres.png",
    alt: "Natalia Castellanos",
  },
  {
    title: "Epifire",
    description:
      "Conectar a los jóvenes con Dios, equiparlos para la vida diaria y construir una comunidad real. Ser una generación que vive con pasión por Jesús y transforma su entorno a través del servicio y el amor.",
    image: "/jovenes.jpg",
    alt: "Reunión de jóvenes",
  },
  {
    title: "EpiCoffee",
    description:
      "Recibir a cada persona con amor y servir refrigerios que faciliten la comunión y la integración familiar después del servicio. Ser el reflejo de la hospitalidad de Cristo, logrando que cada miembro y visitante se sienta bienvenido, valorado y en casa.",
    image: "/cafetería.jpg",
    alt: "Cafetería EpiCoffee",
  },
]

export default function EpiKidsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-pink-500/20 via-yellow-500/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-full text-pink-400 font-semibold text-sm mb-6">
              Nuestros Ministerios
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Nuestros Ministerios
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubre cada área del ministerio de Epicentro: desde los niños hasta los jóvenes, mujeres, adoración y la hospitalidad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {ministries.map((ministry) => (
              <article key={ministry.title} className="overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={ministry.image}
                    alt={ministry.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-black text-foreground mb-4">{ministry.title}</h2>
                  <p className="text-base leading-7 text-muted-foreground">{ministry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
