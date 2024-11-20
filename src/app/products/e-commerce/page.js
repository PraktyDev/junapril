import Flicker from "@/components/Flicker"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RiWhatsappLine } from "react-icons/ri"


const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[737px] bg-[url('/images/productecommerce.png')] bg-no-repeat">
          <div className='bg-[#277A80] opacity-40 w-full h-[737px] absolute top-0'></div>
          <Link href={'/solutions'} className='absolute top-5 left-5 bg-[#277A80] text-white p-2 rounded-full flex items-center justify-center'>
            <ArrowLeft size={20} />
          </Link>
          <div className='z-10 container mx-auto flex flex-col items-center justify-center gap-10'>
            <Link href={'https://wa.link/wdgpv6'} className='bg-[#277A80] hover:bg-opacity-90 text-white hover:text-green-300 rounded-sm py-2 px-10 shadow-md flex gap-3 items-center justify-center'>
              <RiWhatsappLine size={20} />
              <span className='text-lg'>Speak with an Expert</span>
            </Link>
            <div className='text-xl laptop:text-2xl bg-[#709A9D] rounded-sm py-4 px-10 text-nowrap laptop:px-20 shadow-lg cursor-default text-white font-bold uppercase'>E-COMMERCE</div>
            <Link href={'/contact'} className='w-40 laptop:w-56 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl'>Get in Touch</Link>
          </div>
          <Flicker text='E-Commerce' />
      </div>

      <div className='w-full bg-[#474040] text-white px-4 laptop:px-0 py-4 text-center my-7 laptop:my-14 font-semibold'>
        See our products page for more information on products that we offer as part of our <br />E-Commerce Solution
      </div>

      <div className='flex flex-col gap-4 laptop:gap-20 px-2 laptop:px-5'>
        <div className='flex flex-col laptop:flex-row gap-4'>
          <div className="laptop:basis-1/3 relative w-full h-72 tablet:h-96 overflow-hidden rounded-md group">
            <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform scale-110 group-hover:scale-100">
              <Image
                src='/images/productecom.png'
                alt=''
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="absolute bottom-0 left-0 right-0 text-center h-20 text-white text-md font-bold z-10 bg-[#47404090] flex justify-center items-center py-1">E-Commerce</p>
          </div>
          <div className='laptop:basis-2/3 flex flex-col gap-2'>
            <span className="font-semibold">E-COMMERCE</span>
            <span className="">In the rapidly evolving e-commerce landscape, we provide expert guidance that empowers businesses to thrive online. Our team has a proven track record of developing successful e-commerce strategies, creating user-friendly platforms, and executing effective digital marketing campaigns. We stay ahead of industry trends, ensuring that our clients can capitalize on new opportunities while delivering exceptional customer experiences.</span>
            <span className="font-semibold">Our E-Commerce Solution offers a combination of the following services:</span>
            <ul className='flex flex-col list-disc list-inside'>
                <li className='pl-4'>E-Commerce Strategy Development</li>
                <li className='pl-4'>Website Design and Development</li>
                <li className='pl-4'>Payment Processing Solutions</li>
                <li className='pl-4'>Digital Marketing and SEO</li>
                <li className='pl-4'>Customer Experience Optimization</li>
                <li className='pl-4'>E-Commerce Analytics and Reporting</li>
            </ul>
          </div>
        </div>
        </div>
    </section>
  )
}

export default page