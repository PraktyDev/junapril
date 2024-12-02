"use client"
import Link from "next/link"
import Flicker from "@/components/Flicker"
import { useEffect, useState } from "react"
import SolutionReferCard from "@/components/SolutionReferCard"
import SwipeCard from "@/components/SwipeCard"

const page = () => {
    const texts = [
        "IT Consulting Solution",
        "E-Commerce Solution",
        "Recruitment",
        "Training",
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
      <div className="relative flex items-center laptop:items-end justify-center laptop:justify-end w-full h-[737px] bg-[url('/images/solutionhero.png')] bg-no-repeat">
          <div className='bg-black opacity-60 w-full h-[737px] absolute top-0'></div>
          <div className='z-10 w-full laptop:mb-40 container laptop:mx-auto flex flex-col items-center laptop:items-end justify-center gap-10'>
            <Link
                href={'/contact'}
                className="z-10 w-48 laptop:mr-20 laptop:w-56 laptop:justify-end text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 laptop:border-2 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl"
            >
                Get in Touch
            </Link>
            <div className="bg-black rounded-sm laptop:rounded-lg py-2 laptop:py-8 tablet:max-w-3xl  w-full mx-auto bg-opacity-70 cursor-default shadow-lg">
            <div className={`text-3xl laptop:text-4xl text-center text-white font-bold transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}>
                {texts[currentTextIndex]}
            </div>
            </div>
          </div>
          <Flicker text='Solutions' /> 
      </div>

        <SwipeCard />

        <div className="bg-[#D9D9D9] laptop:place-content-center laptop:place-items-center grid gap-3 laptop:gap-20 grid-cols-1 tablet:grid-cols-2 pt-5 pb-10 laptop:pb-40 mb-5 laptop:mb-10 px-10">
          <SolutionReferCard src={'/images/producthealth.png'} title="Health Record Policy" />
          <SolutionReferCard src={'/images/productconsult.png'} title="IT Consulting Solution" />
          <SolutionReferCard src={'/images/ittraining.png'} title="Training" />
          <SolutionReferCard src={'/images/productecom.png'} title="E-Commerce" />
          <SolutionReferCard src={'/images/itrecruit.png'} title="Recruitment" />
        </div>
    </section>
  )
}

export default page