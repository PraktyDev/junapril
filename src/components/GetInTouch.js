import { CircleCheckBig } from "lucide-react"
import Link from "next/link"
import { FaSquareXTwitter } from "react-icons/fa6"
import { RiInstagramFill, RiWhatsappLine } from "react-icons/ri"


const GetInTouch = () => {
  return (
    <div className='flex flex-col gap-6 w-auto laptop:w-[455px]'>
        <h1 className='text-xl laptop:text-2xl font-bold'>Get In Touch</h1>
        <p className='font-light'>Ready to transform your IT landscape? Contact us today to schedule a consultation and discover how our IT consulting services can take your business to the next level.</p>
        <div className='flex gap-4'>
            <Link href={'https://wa.link/wdgpv6'} className='hover:opacity-85'>
                <RiWhatsappLine color='green' size={25} />
            </Link>
            <Link href={'https://x.com/Junapril_1?t=84HXvP3Fjz9Xjwe4XhkF1g&s=08'} className='hover:opacity-85'>
                <FaSquareXTwitter size={25} />
            </Link>
            <Link href={'https://www.instagram.com/junapril_solutions_ltd?igsh=ZWV4cncwcG5vaGRu&utm_source=qr'} className='hover:opacity-85'>
                <RiInstagramFill className='text-pink-900' size={25} />
            </Link>
        </div>

        <p className='font-light'>One of our consultants will be in touch within one business day to schedule a meeting to discuss your needs.</p>
    </div>
  )
}

export default GetInTouch