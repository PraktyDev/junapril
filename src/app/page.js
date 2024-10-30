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
      "Health Record Privacy ",
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
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[800px] bg-[url('/images/homehero.png')] bg-no-repeat">
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

      <div className='grid grid-cols-2 laptop:grid-cols-4 gap-4 justify-center mx-auto'>
        <ImageCard src='/images/itconsult.png' text='IT CONSULTING' alt='IT consult' />
        <ImageCard src='/images/itrecruit.png' text='RECRUITMENT' alt='recruitment' />
        <ImageCard src='/images/ittraining.png' text='TRAINING' alt='training' />
        <ImageCard src='/images/ecom.png' text='E-COMMERCE' alt='ecommerce' />
      </div>

      <div className="w-full relative flex flex-col items-center laptop:items-start h-[600px] bg-no-repeat animate-home2BgSlide">
        <div className='bg-black opacity-50 w-full h-[600px] absolute top-0'></div>
        <div className='z-10 w-full laptop:w-[500px] mb-16 flex items-center justify-center shadow-sm rounded-sm laptop:ml-5 bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40'>
          <p className='text-white text-center text-lg laptop:text-xl font-bold py-4'>OUR SERVICES</p>
        </div>

        <div className='z-10 laptop:ml-5 flex flex-col w-[450px] tablet:w-[500px] space-y-8'>
          <ServiceLinks title='IT CONSULTING' content='We understand the critical importance of safeguarding your digital assets and protecting your organization from cyber threats.Our team of experienced security professionals offers comprehensive consulting services to assess, design, and implement robust cybersecurity strategies tailored to your unique business needs.' />
          <ServiceLinks title='RECRUITMENT' content='Finding the right talent is essential for the success of any organization. With our extensive network and industry expertise, Junapril Solutions specializes in recruiting top-tier IT security professionals who possess the skills and expertise needed to drive your organization forward.' />
          <ServiceLinks title='TRAINING' content="Stay ahead of the curve with our cutting-edge training programs designed to empower your team with the knowledge and skills necessary to navigate today's complex IT security landscape. From cybersecurity fundamentals to advanced threat detection techniques, our training courses are tailored to address the specific needs of your organization." />
          <ServiceLinks title='E-COMMERCE SOLUTION' content="In an increasingly digital world, eCommerce has become essential for businesses looking to expand their reach and increase revenue. Junapril Solutions offers comprehensive eCommerce solutions, including website development, payment gateway integration, and digital marketing services, to help you establish and grow your online presence." />
          <ServiceLinks title='HEALTH RECORD PRIVACY' content={`Healthcare: Protecting sensitive patient data and ensuring compliance with industry regulations. 1. HIPAA (Health Insurance Portability and Accountability Act) 2. HITECH (Health Information Technology for Economic and Clinical Health) Act. Consultants help implement policies, procedures, and training to safeguard PHI, manage breaches, and ensure compliance.`}  />
        </div>
      </div>

      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 laptop:mt-5 mx-2 laptop:container laptop:mx-auto'>
        <ServiceCard href='/products/it-consulting' src='/images/card1.png' title='IT CONSULTING' desc='We understand the critical importance of safeguarding your digital assets and protecting your organization from cyber threats. Our team of experienced security professionals offers comprehensive consulting services to assess, design, and implement robust cybersecurity strategies tailored to your unique business needs.' />
        <ServiceCard href='/products/health-record-policy' src='/images/hprc.png' title='HEALTH RECORD PRIVACY' desc='Health Record Privacy is essential to protect patients, sensitive medical information. examples: Confidentiality, Integrity and Availability.' />
        <ServiceCard href='/products/training' src='/images/cc.png' title='TRAINING' desc='Compliance Consulting helps organizations navigate regulatory requirements, manage risk and ensure adherence to laws and standards.' />
        <ServiceCard href='/products/recruitment' src='/images/rct.png' title='RECRUITMENT' desc='Recruitment is the process of finding, attracting and selecting the best candidates for a job opening.' />
        <ServiceCard href='/products/e-commerce' src='/images/eCommerce.png' title='E-COMMERCE SOLUTION' desc='E-commerce solutions typically offers these functions 1. Website design and development 2. Product catalog management 3. Shopping Cart and Checkout etc.' />
      </div>
    </section>
  )
}

export default page