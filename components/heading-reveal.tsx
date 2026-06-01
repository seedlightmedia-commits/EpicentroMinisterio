"use client"

import { useEffect } from "react"

export default function HeadingReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return


    const selector = "h1, h2, h3, h4"
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const idx = els.indexOf(el)
            const delay = (idx % 10) * 0.06 // small stagger, reset every 10
            el.style.setProperty("--delay", `${delay}s`)
            el.style.setProperty("--duration", `0.62s`)
            el.classList.add("animate-fade-in-up")
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => {
      // start hidden to avoid flash before JS runs
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
