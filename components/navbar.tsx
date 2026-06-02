"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Youtube, Instagram, Facebook, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "/producciones", label: "Producciones Musicales" },
  { href: "/epikids", label: "Ministerios" },
  { href: "/eventos", label: "Próximos Eventos" },
  { href: "/donaciones", label: "Donaciones", highlight: true },
]

const socialLinks = [
  { href: "https://www.youtube.com/@epicentroministerio", icon: Youtube, label: "YouTube" },
  { href: "https://www.instagram.com/epicentroministerio/", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/epicentroministerio", icon: Facebook, label: "Facebook" },
  { href: "https://www.tiktok.com/@epicentro.ministe", icon: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  ), label: "TikTok" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    // Only run scroll logic on the client after mount
    setMounted(true)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-xs text-white/85">
            <span className="hidden sm:block">Bienvenidos a Epicentro Ministerio</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "fixed top-10 left-0 right-0 z-40 transition-all duration-300",
          // Avoid depending on scroll state until after mount to prevent
          // hydration mismatches between server and client.
          mounted && isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EPICENTRO%20BLANCO-Y28KFW8egWZRPe6Xwq6dQqbKdHhlrl.png"
                  alt="Epicentro Ministerio"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    link.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : isScrolled
                        ? "text-foreground/80 hover:text-foreground hover:bg-secondary"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a href="/#contactanos">Soy Nuevo</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-lg",
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  link.highlight
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a href="/#contactanos" onClick={() => setIsMobileMenuOpen(false)}>
                Soy Nuevo
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
