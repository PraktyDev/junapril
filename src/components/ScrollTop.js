'use client'

import { useState, useEffect } from 'react'
import { ArrowUpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Check if window.scrollY is available, otherwise fall back to document.documentElement.scrollTop
      const scrollY = window.scrollY !== undefined ? window.scrollY : document.documentElement.scrollTop
      
      // Show button when page is scrolled down 300px
      if (scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)

    // Call toggleVisibility initially to check scroll position on mount
    toggleVisibility()

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          className="h-8 w-8 p-2 rounded-full shadow-lg transition-opacity duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}