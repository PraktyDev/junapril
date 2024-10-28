'use client'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react"
import Image from "next/image"

const CarouselImg = () => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )

    const images =[
        { src: '/images/producthero.png' },
        { src: '/images/solutionshero.png' },
        { src: '/images/contacthero.png' },
        { src: '/images/aboutheroimg.png' },
        { src: '/images/homehero.png' },
    ]

  return (
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="bg-transparent border-none shadow-lg">
                  <CardContent className="p-1">
                    <Image
                      src={image.src}
                      alt='images'
                      width={1200}
                      height={800}
                      className="w-full h-[650px] object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
  )
}

export default CarouselImg