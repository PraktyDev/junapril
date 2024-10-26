import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from 'next/image'
  

const ServiceCard = ({ src, title, desc}) => {
  return (
    <Card  className='relative flex flex-col h-[420px] bg-[#277A8080] text-white rounded-sm'>
        <div className="w-auto h-48 inset-0 transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95">
            <Image
                src={src}
                alt='service image'
                layout="fill"
                objectFit="cover"
                className="rounded-tr-lg rounded-tl-lg "
            />
        </div>
        <CardHeader className='flex flex-col'>
            <CardTitle>{title}</CardTitle>
            <CardDescription className='text-white text-justify leading-5'>{desc}</CardDescription>
        </CardHeader>
        <CardFooter className='absolute bottom-0 left-0'>
            <Button className='bg-white text-black hover:text-white'>Learn More</Button>
        </CardFooter>
    </Card>
  )
}

export default ServiceCard