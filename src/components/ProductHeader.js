import Image from "next/image"
import Link from "next/link"
import { RiWhatsappLine } from "react-icons/ri"
import Flicker from "@/components/Flicker"
import { ArrowLeft } from "lucide-react"


const ProductHeader = ({src, title }) => {

  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className={`relative flex items-center justify-center laptop:justify-end w-full h-[705px] bg-no-repeat ${src}`}>
          <div className='bg-black opacity-50 w-full h-[705px] absolute top-0'></div>
          <Link href={'/products'} className='absolute top-5 left-5 bg-[#277A80] text-white p-2 rounded-full'>
            <ArrowLeft size={20} />
          </Link>
          <div className='z-10 container mx-auto flex flex-col items-center justify-center gap-10'>
            <Link href={'https://wa.link/wdgpv6'} className='bg-[#277A80] hover:bg-opacity-90 text-white hover:text-green-300 rounded-sm py-2 px-10 shadow-md flex gap-3 items-center justify-center'>
              <RiWhatsappLine size={20} />
              <span className='text-lg'>Speak with an Expert</span>
            </Link>
            <Link href={'/contact'} className='w-40 laptop:w-56 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl'>Get in Touch</Link>
          </div>
          <Flicker text='Products' />
      </div>

      <div className='w-full flex flex-col gap-1 py-4 items-center text-center'>
        <span className='text-black font-semibold text-lg laptop:text-2xl'>{title}</span>
        <Image className="w-auto h-10" src={'/images/divider.png'} alt="" width={1000} height={1000} />
      </div>
    </section>
  )}

export default ProductHeader