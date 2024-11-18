import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ServiceCard from "./ServiceCard"

export default function SwipeCard() {

    const cards =[
        <ServiceCard href='/products/it-consulting' src='/images/card1.png' title='IT CONSULTING' desc='At Junapril Solutions Ltd, we understand that technology is the backbone of your business. Our IT consulting services are designed to help you harness the power of technology to drive efficiency, innovation, and growth.' />,
        <ServiceCard href='/products/health-record-policy' src='/images/hprc.png' title='HEALTH RECORD PRIVACY' desc='In the healthcare sector, safeguarding patient information is paramount. Our health record privacy solutions are designed to help healthcare organizations comply with regulations while implementing robust security measures to protect sensitive data.' />,
        <ServiceCard href='/products/training' src='/images/cc.png' title='TRAINING' desc='In an ever-evolving technological landscape, continuous learning and development are crucial for organizations looking to stay competitive and secure.' />,
        <ServiceCard  href='/products/e-commerce' src='/images/eCommerce.png' title='E-COMMERCE' desc='In the rapidly evolving e-commerce landscape, we provide expert guidance that empowers businesses to thrive online.' />,
        <ServiceCard href='/products/recruitment' src='/images/rct.png' title='RECRUITMENT' desc='Our recruitment solutions are built on a foundation of industry knowledge and a keen understanding of workforce dynamics.' />,
    ] 


  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-5 laptop:px-10 mb-20 relative"
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="tablet:basis-1/2 laptop:basis-1/3">
            {card}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center items-center">
        <div className="absolute -bottom-8">
            <CarouselPrevious />
            <CarouselNext />
        </div>
      </div>
    </Carousel>
  )
}
