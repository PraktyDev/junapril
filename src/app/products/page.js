'use client'
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { RiWhatsappLine } from "react-icons/ri"
import { useEffect, useState } from "react"
import Flicker from "@/components/Flicker"
import ProductCard from "@/components/ProductCard"


const page = () => {

  const texts = [
    "IT CONSULTING",
    "Health Record Privacy ",
    "TRAINING",
    "RECRUITMENT",
    "E-COMMERCE SOLUTION",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setFade(true)
      }, 400)
    }, 5500)

    return () => clearInterval(interval)
  }, [texts.length]);

  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[737px] animate-productBgSlide bg-no-repeat">
          <div className='bg-black opacity-50 w-full h-[737px] absolute top-0'></div>
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
        <span className='text-[#B5BDC0] uppercase font-semibold text-lg laptop:text-2xl'>Products</span>
        <Image className="w-auto h-10" src={'/images/divider.png'} alt="" width={1000} height={1000} />
      </div>

      <div className="bg-[#D9D9D9] grid gap-3 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 pt-5 pb-10 laptop:pb-40 mb-5 laptop:mb-10 px-10">
        <ProductCard link={'/products/BCDRaaS'} src={'/images/prod1.png'} title="Business Continuity And Disaster Recovery As A Service (BCDRaaS)" />
        <ProductCard link={'/products/TRAS'} src={'/images/prod2.png'} title="Threat Risk Assessment (TRA) Services" />
        <ProductCard link={'/products/ITRDS'} src={'/images/prod3.png'} title="IT Roadmap Development Services" />
        <ProductCard link={'/products/CRAS'} src={'/images/prod4.png'} title="Cloud Readiness Assessment Services" />
        <ProductCard link={'/products/CADS'} src={'/images/prod5.png'} title="Cloud Architecture Design Services" />
        <ProductCard link={'/products/CSCS'} src={'/images/prod6.png'} title="Cloud Security And Compliance Services" />
        <ProductCard link={'/products/ITGTWS'} src={'/images/prod7.png'} title="IT Governance And Technical Writing Services" />
        <ProductCard link={'/products/ITACRSS'} src={'/images/prod8.png'} title="IT Audit, Compliance & Regulatory Support Services" />
        <ProductCard link={'/products/RPIS'} src={'/images/prod9.png'} title="Remediation Planning And Implementation Services" />
        <ProductCard link={'/products/ITTS'} src={'/images/prod10.png'} title="IT Training Services" />
        <ProductCard link={'/products/MTPRMS'} src={'/images/prod11.png'} title="Managed Third-Party Risk Management Services" />
        <ProductCard link={'/products/HRPS'} src={'/images/prod12.png'} title="Health Record Privacy Services" />
        <ProductCard link={'/products/ECS'} src={'/images/prod13.png'} title="E-Commerce Services" />
        <ProductCard link={'/products/RS'} src={'/images/prod14.png'} title="Recruitment Solutions" />
      </div>
    </section>
  )
}

export default page