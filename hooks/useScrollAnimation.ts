"use client"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    })

    // Observe all elements with scroll animation classes
    const animateElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-text, .scroll-animate-card, .scroll-animate-up, .scroll-fade-zoom",
    )

    animateElements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return observerRef
}
