import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({src, title, link}) => {
  return (
    <Card className='flex flex-col rounded-tr-none rounded-tl-none'>
        <CardHeader className='flex flex-col p-0'>
            <CardTitle className=''>
                <Image 
                    alt=""
                    src={src}
                    width={1000}
                    height={1000}
                />
            </CardTitle>
            <CardDescription className='px-3 py-5'>
                <span className="flex justify-between items-center gap-4">
                    <span className="font-bold text-black text-base laptop:text-lg">{title}</span>
                    <Link href={link} className="hover:animate-cursor">
                        <Image
                            className="w-10 h-10 object-cover"
                            alt=""
                            src={'/images/cursor.png'}
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </span>
            </CardDescription>
        </CardHeader>
    </Card>
  )
}

export default ProductCard