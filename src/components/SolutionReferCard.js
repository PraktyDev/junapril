import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"

const SolutionReferCard = ({src, title}) => {
  return (
    <Card className='flex flex-col rounded-tr-none rounded-tl-none '>
        <CardHeader className='flex flex-col p-0'>
            <CardTitle className=''>
                <Image 
                    alt=""
                    src={src}
                    width={1000}
                    height={1000}
                    className="h-[300px] laptop:h-[450px] object-cover laptop:w-[550px]"
                />
            </CardTitle>
            <CardDescription className='px-5 py-3'>
                <span className="font-bold text-black text-base laptop:text-xl">{title}</span>
            </CardDescription>
        </CardHeader>
    </Card>
  )
}

export default SolutionReferCard