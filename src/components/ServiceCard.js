import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from 'next/image'
import Link from "next/link"
  

const ServiceCard = ({ src, title, desc, href}) => {
  return (
    <Card  className='relative flex flex-col h-[500px] bg-[#5F9CA1] text-black rounded-sm'>
        <div className="w-auto h-48 inset-0 transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95">
            <Image
                src={src}
                alt='service image'
                layout="fill"
                objectFit="cover"
                className="rounded-tr-lg rounded-tl-lg h-48"
            />
        </div>
        <CardHeader className='flex flex-col justify-between py-3 grow'>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className='mt-5 text-base laptop:text-lg text-black text-left leading-5 laptop:leading-6'>{desc}</CardDescription>
          </div>
          <Link  href={href}>
            <Button className='bg-white text-black hover:text-white'>Learn More</Button>
          </Link>
        </CardHeader>
    </Card>
  )
}

export default ServiceCard