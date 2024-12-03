"use client"
import Flicker from "@/components/Flicker"
import ImageCard from "@/components/ImageCard"
import ServiceCard from "@/components/ServiceCard"
import ServiceLinks from "@/components/ServiceLinks"
import Link from "next/link"
import { useEffect, useState } from "react"

const page = () => {
    const texts = [
      "Welcome to Junapril Solutions Ltd",
      "Compliance Consulting for Business",
      "Health Record Privacy",
    ];
  
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [fade, setFade] = useState(true)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false)
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setFade(true)
        }, 300)
      }, 5000)
  
      return () => clearInterval(interval)
    }, [texts.length]);

  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[800px] bg-[url('/images/homehero.png')] bg-no-repeat bg-center laptop:bg-cover">
          <div className='bg-black opacity-40 w-full h-[800px] absolute top-0'></div>
          <div className='z-10 flex flex-col justify-center laptop:items-end laptop:pr-10 items-center gap-14 '> 
            <h1
              className={`text-4xl tablet:text-5xl laptop:text-6xl w-full laptop:w-[700px] text-white text-center font-bold transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {texts[currentTextIndex]}
            </h1>
            <p className='laptop:-mt-8 mx-4 tablet:mx-0 text-md laptop:text-lg text-center font-semibold text-white'>Your trusted partner in IT security consulting, recruitment, and eCommerce solutions.</p>
            <Link href={'/contact'} className='w-40 laptop:w-56 laptop:-mt-8 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl'>Get in Touch</Link>
          </div>
          <Flicker text='Home' />
      </div>

      <div className='grid grid-cols-2 laptop:grid-cols-5 gap-4 justify-center mx-auto'>
        <ImageCard src='/images/itconsult.png' text='IT CONSULTING' alt='IT consult' />
        <ImageCard src='/images/itrecruit.png' text='RECRUITMENT' alt='recruitment' />
        <ImageCard src='/images/ittraining.png' text='TRAINING' alt='training' />
        <ImageCard src='/images/hprc.png' text='HEALTH RECORD PRIVACY' alt='health record privacy' />
        <ImageCard src='/images/ecom.png' text='E-COMMERCE' alt='ecommerce' />
      </div>

      <div className="w-full relative flex flex-col items-center laptop:items-start h-[600px] bg-no-repeat animate-home2BgSlide">
        <div className='bg-black opacity-50 w-full h-[600px] absolute top-0'></div>
        <div className='z-10 w-full laptop:w-[500px] mb-16 flex items-center justify-center shadow-sm rounded-sm laptop:ml-5 bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40'>
          <p className='text-white text-center text-lg laptop:text-xl font-bold py-4'>OUR SERVICES</p>
        </div>

        <div className='z-10 laptop:ml-5 flex flex-col w-[450px] tablet:w-[500px] space-y-8'>
          <ServiceLinks title='IT CONSULTING' content='At Junapril Solutions Ltd, we understand that technology is the backbone of your business. Our IT consulting services are designed to help you harness the power of technology to drive efficiency, innovation, and growth. Whether you are looking to optimize your current infrastructure, implement new solutions, or safeguard your digital assets, our team of experts is here to guide you every step of the way.' />
          <ServiceLinks title='RECRUITMENT' content='Our recruitment solutions are built on a foundation of industry knowledge and a keen understanding of workforce dynamics. We specialize in connecting organizations with top talent across various fields, including technology, healthcare, and finance.' />
          <ServiceLinks title='TRAINING' content="In an ever-evolving technological landscape, continuous learning and development are crucial for organizations looking to stay competitive and secure. At Junapril Solutions Ltd, we offer comprehensive IT Training Services designed to equip your team with the knowledge and skills necessary to navigate today's digital challenges effectively. Our training programs are tailored to meet the unique needs of Investing in IT training is not just about keeping up with the latest technologies; it's about empowering your workforce to maximize productivity, enhance security, and foster innovation. With well-trained employees, organizations can mitigate risks, ensure compliance, and improve overall operational efficiency." />
          <ServiceLinks title='E-COMMERCE SOLUTION' content="In the rapidly evolving e-commerce landscape, we provide expert guidance that empowers businesses to thrive online. Our team has a proven track record of developing successful e-commerce strategies, creating user-friendly platforms, and executing effective digital marketing campaigns. We stay ahead of industry trends, ensuring that our clients can capitalize on new opportunities while delivering exceptional customer experiences." />
          <ServiceLinks title='HEALTH RECORD PRIVACY' content="In the healthcare sector, safeguarding patient information is paramount. Our health record privacy solutions are designed to help healthcare organizations comply with regulations while implementing robust security measures to protect sensitive data. Our team is well-versed in HIPAA compliance and best practices for privacy management, providing our clients with the expertise needed to navigate the complexities of health information security."  />
        </div>
      </div>

      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 laptop:mt-5 mx-2 laptop:container laptop:mx-auto'>
        <ServiceCard href='/products/it-consulting' src='/images/card1.png' title='IT CONSULTING' desc='At Junapril Solutions Ltd, we understand that technology is the backbone of your business. Our IT consulting services are designed to help you harness the power of technology to drive efficiency, innovation, and growth.' />
        <ServiceCard href='/products/health-record-policy' src='/images/hprc.png' title='HEALTH RECORD PRIVACY' desc='In the healthcare sector, safeguarding patient information is paramount. Our health record privacy solutions are designed to help healthcare organizations comply with regulations while implementing robust security measures to protect sensitive data.' />
        <ServiceCard href='/products/training' src='/images/cc.png' title='TRAINING' desc='In an ever-evolving technological landscape, continuous learning and development are crucial for organizations looking to stay competitive and secure.' />
        <ServiceCard href='/products/recruitment' src='/images/rct.png' title='RECRUITMENT' desc='Our recruitment solutions are built on a foundation of industry knowledge and a keen understanding of workforce dynamics.' />
        <ServiceCard  href='/products/e-commerce' src='/images/eCommerce.png' title='E-COMMERCE' desc='In the rapidly evolving e-commerce landscape, we provide expert guidance that empowers businesses to thrive online.' />
      </div>
    </section>
  )
}

export default page