import { CircleCheckBig } from "lucide-react"
import Link from "next/link"
import { FaSquareXTwitter } from "react-icons/fa6"
import { RiInstagramFill, RiWhatsappLine } from "react-icons/ri"


const GetInTouch = () => {
  return (
    <div className='flex flex-col gap-6 w-auto laptop:w-[455px]'>
        <h1 className='text-xl laptop:text-2xl font-bold'>Get In Touch</h1>
        <p className='font-light text-justify'>Speak with a certified compliance and privacy professional to learn how Junapril Consulting Solution can help your organization with all its compliance, privacy and securities need.</p>
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

        <div className='flex flex-col gap-5 mt-5'>
            <div className='flex gap-5'>
                <CircleCheckBig className='text-blue-500' size={30} />
                <p className='text-justify'>The only 100% focused healthcare compliance consulting firm</p>
            </div>
            <div className='flex gap-5'>
                <CircleCheckBig className='text-blue-500' size={30} />
                <p className='text-justify'>Expert Consultants with decades of experience in compliance leaders</p>
            </div>
            <div className='flex gap-5'>
                <CircleCheckBig className='text-blue-500' size={30} />
                <p className='text-justify'>Comprehensive, full-cycle compliance services</p>
            </div>
        </div>

        <p className='font-light text-justify'>One of our consultants will be in touch within one business day to schedule a meeting to discuss your healthcare compliance needs.</p>
    </div>
  )
}

export default GetInTouch