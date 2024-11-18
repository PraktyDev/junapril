import Link from 'next/link'
import Subscription from './Subscription'
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
            <div className='flex gap-4 laptop:mr-20'>
                <Link href={'https://wa.link/wdgpv6'} className='hover:opacity-85'>
                    <RiWhatsappLine color='green' size={30} />
                </Link>
                <Link href={'https://x.com/Junapril_1?t=84HXvP3Fjz9Xjwe4XhkF1g&s=08'} className='hover:opacity-85'>
                    <FaSquareXTwitter size={30} />
                </Link>
                <Link href={'https://www.instagram.com/junapril_solutions_ltd?igsh=ZWV4cncwcG5vaGRu&utm_source=qr'} className='hover:opacity-85'>
                    <RiInstagramFill className='text-pink-900' size={30} />
                </Link>
            </div>
        </div>

        <div className="flex flex-col laptop:flex-row gap-5 laptop:gap-14 justify-between px-2 laptop:px-5 pt-3 pb-5 laptop:pb-10">
            <div className="flex flex-col gap-2 items-center laptop:items-start">
                <Link href={'/'} className='bg-[#277A80] w-40 h-14 flex justify-end'>
                    <Image src={'/images/junapril.png'} width={100} height={100} alt='junapril logo' className="z-50 object-cover w-32 h-14" />
                </Link>
                <p className='w-auto laptop:w-[487px] text-base laptop:text-lg text-center laptop:text-left'>
                    MISSION STATEMENT<br />Our mission is to empower businesses with cutting-edge IT consulting services and innovative e-commerce solutions. We are committed to delivering exceptional technology strategies and seamless digital platforms that drive efficiency, scalability, and success. By leveraging our expertise and a customer-centric approach, we aim to transform challenges into opportunities, helping our clients thrive in a dynamic digital landscape while fostering long-term partnerships built on trust, innovation, and excellence.
                </p>
            </div>

            <div className='flex justify-between w-full gap-14'>
                <div className='flex flex-col gap-2 basis-1/3 grow'>
                    <h1 className='font-bold text-lg'>Head Office</h1>
                    <p className='text-base laptop:text-lg'>1225 Kennedy Road, Suite 2000, Scarborough, ON M1P 4Y1</p>
                    <Link href={'mailto:info@junapril.com'} >
                        <p className='text-base laptop:text-lg text-blue-500 hover:text-blue-400'>info@junapril.com</p>
                    </Link>
                    <Link href={'mailto:admin@junapril.com'} >
                        <p className='text-base laptop:text-lg text-blue-500 hover:text-blue-400'>admin@junapril.com</p>
                    </Link>
                </div>

                <div className='text-lg flex flex-col gap-4 basis-1/3 grow'>
                    <h1 className='font-bold '>Quick Links</h1>
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