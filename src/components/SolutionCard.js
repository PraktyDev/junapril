import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
  

const SolutionCard = ({ src, title, desc}) => {
  return (
    <Card  className='relative flex flex-col h-auto bg-[#D9D9D9] grow rounded-sm'>
        <div className="w-auto h-60 inset-0 transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95">
            <Image
                src={src}
                alt='service image'
                layout="fill"
                objectFit="cover"
                className="rounded-tr-lg rounded-tl-lg "
            />
        </div>
        <CardHeader className='flex flex-col'>
            <CardTitle className='text-black font-semibold'>{title}</CardTitle>
            <CardDescription className='text-black text-justify leading-5 laptop:leading-6'>{desc}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default SolutionCard