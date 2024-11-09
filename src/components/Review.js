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

const Review = () => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )

    const reviews =[
        { review: `"From day One, Junapril took time to fully understand our practice and how we deliver services to our clients.
         This was reflected in both the hands on structuring of our New Compliance Program and the Development of New Policies and Procedures
          of our Staff"` },
        { review: `"Even as an experienced compliance officer, I found the solution provided by Junapril IT consulting, valuable in enhancing and evolving our compliance program"` },
        { review: `"I want to express our appreciation for the work done by Junapril IT Consulting to assist with our Corporate Integrity Agreement, SMS provided us with the expertise and guidance needed to meet up the requirement and greatly improve our Compliance Programme"` },
    ] 

  return (
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="p-1">
                    <p className=' text-center text-md font-semibold'>{review.review}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden laptop:flex laptop:-left-10" />
          <CarouselNext className="hidden laptop:flex laptop:-right-10" />
        </Carousel>
  )
}

export default Review