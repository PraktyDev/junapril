import Link from 'next/link'
import Subscription from './Subscription'
import { FaFacebook } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { RiInstagramFill, RiWhatsappLine } from "react-icons/ri"
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='bg-white flex flex-col w-full mt-10 overflow-x-hidden'>
        <div className='bg-[#7EADAF] flex flex-col items-center gap-5 laptop:flex-row laptop:gap-16 justify-between px-5 py-5'>
            <div className='w-auto mx-4'>
                <Subscription />
            </div>
            <div className='flex gap-16 laptop:mr-20'>
                <Link href={'https://wa.link/wdgpv6'} className='hover:opacity-85'>
                    <RiWhatsappLine color='green' size={30} />
                </Link>
                <Link href={''} className='hover:opacity-85'>
                    <FaFacebook color='blue' size={30} />
                </Link>
                <Link href={''} className='hover:opacity-85'>
                    <FaSquareXTwitter size={30} />
                </Link>
                <Link href={''} className='hover:opacity-85'>
                    <RiInstagramFill className='text-pink-900' size={30} />
                </Link>
            </div>
        </div>

        <div className="flex flex-col laptop:flex-row gap-5 laptop:gap-14 justify-between px-2 laptop:px-5 pt-3 pb-5 laptop:pb-10">
            <div className="flex flex-col gap-2 items-center laptop:items-start">
                <Link href={'/'} className='bg-[#277A80] w-40 h-14 flex justify-end'>
                    <Image src={'/images/junapril.png'} width={100} height={100} alt='junapril logo' className="z-50 object-cover w-32 h-14" />
                </Link>
                <p className='w-auto laptop:w-[390px] text-md text-justify tablet:text-center laptop:text-justify'>
                Your trusted partner in IT security consulting, recruitment, and eCommerce solutions. Established with a commitment to excellence, Junapril Solutions combines expertise, innovation, and dedication to deliver unparalleled services to our clients across various industries.
                </p>
            </div>

            <div className='flex justify-between w-full gap-14'>
                <div className='flex flex-col gap-2 w-[368px]'>
                    <h1 className='font-bold text-lg'>Head Office</h1>
                    <p className='text-md'>1225 Kennedy Road, Suite 2000, Scarborough, ON M1P 4Y1, Canada</p>
                    <Link href={'mailto:info@junapril.com'} >
                        <p className='text-sm text-blue-500 hover:text-blue-400'>info@junapril.com</p>
                    </Link>
                    <Link href={'mailto:admin@junapril.com'} >
                        <p className='text-sm text-blue-500 hover:text-blue-400'>admin@junapril.com</p>
                    </Link>
                </div>

                <div className='flex flex-col gap-2 w-[368px]'>
                    <h1 className='font-bold text-lg'>Quick Links</h1>
                    <Link href={'/'} >
                        <p className='hover:opacity-80'>Home</p>
                    </Link>
                    <Link href={'/about'} >
                        <p className='hover:opacity-80'>About Us</p>
                    </Link>
                    <Link href={'/solutions'} >
                        <p className='hover:opacity-80'>Solutions</p>
                    </Link>
                    <Link href={'/products'} >
                        <p className='hover:opacity-80'>Products</p>
                    </Link>
                    <Link href={'/contact'} >
                        <p className='hover:opacity-80'>Contacts</p>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer