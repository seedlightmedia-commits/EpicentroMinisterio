import Link from "next/link"
import { Youtube, Instagram, Facebook, Heart } from "lucide-react"

const socialLinks = [
  { href: "https://www.youtube.com/@epicentroministerio", icon: Youtube, label: "YouTube" },
  { href: "https://www.instagram.com/epicentroministerio/", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/epicentroministerio", icon: Facebook, label: "Facebook" },
]

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "/producciones", label: "Producciones" },
  { href: "/epikids", label: "EpiKids" },
  { href: "/eventos", label: "Eventos" },
  { href: "/donaciones", label: "Donaciones" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EPICENTRO%20BLANCO-Y28KFW8egWZRPe6Xwq6dQqbKdHhlrl.png"
                  alt="Epicentro Ministerio"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Epicentro Ministerio</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Una iglesia de sana doctrina donde experimentarás el amor de Dios y encontrarás tu propósito.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="https://wa.me/573227158848" className="hover:text-primary-foreground transition-colors">
                  +57 322 715 8848
                </a>
              </li>
              <li>
                <a href="mailto:epicentromnisterio@gmail.com" className="hover:text-primary-foreground transition-colors">
                  epicentromnisterio@gmail.com
                </a>
              </li>
              <li>Calle 17 # 105 29</li>
              <li>Bogotá, Fontibón</li>
            </ul>
          </div>

          {/* Social & Service Times */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                    <social.icon className="h-5 w-5 text-primary-foreground" />
                </a>
              ))}
            </div>
            <div className="text-sm text-primary-foreground/70">
              <p className="font-semibold text-primary-foreground mb-1">Reunión Principal</p>
              <p>Domingos 10:00 AM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Epicentro Ministerio. Todos los derechos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-red-500 fill-red-500" /> en Bogotá
          </p>
        </div>
      </div>
    </footer>
  )
}
