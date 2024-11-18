import Flicker from "@/components/Flicker"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RiWhatsappLine } from "react-icons/ri"


const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[737px] bg-[url('/images/productitconsult.png')] bg-no-repeat">
          <div className='bg-[#277A80] opacity-40 w-full h-[737px] absolute top-0'></div>
          <Link href={'/solutions'} className='absolute top-5 left-5 bg-[#277A80] text-white p-2 rounded-full flex items-center justify-center'>
            <ArrowLeft size={20} />
          </Link>
          <div className='z-10 container mx-auto flex flex-col items-center justify-center gap-10'>
            <Link href={'https://wa.link/wdgpv6'} className='bg-[#277A80] hover:bg-opacity-90 text-white hover:text-green-300 rounded-sm py-2 px-10 shadow-md flex gap-3 items-center justify-center'>
              <RiWhatsappLine size={20} />
              <span className='text-lg'>Speak with an Expert</span>
            </Link>
            <div className='text-xl laptop:text-2xl bg-[#709A9D] rounded-sm py-4 px-10 text-nowrap laptop:px-20 shadow-lg cursor-default text-white font-bold uppercase'>IT CONSULTING</div>
            <Link href={'/contact'} className='w-40 laptop:w-56 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl'>Get in Touch</Link>
          </div>
          <Flicker text='IT Consulting' />
      </div>

      <div className='w-full bg-[#474040] text-white px-4 laptop:px-0 py-4 text-center my-7 laptop:my-14 font-semibold'>
        See our products page for more information on products that we offer as part of our <br />IT Consulting Solution
      </div>

      <div className='flex flex-col gap-4 laptop:gap-20 px-2 laptop:px-5'>
        <div className='flex flex-col laptop:flex-row gap-4'>
          <div className="laptop:basis-1/3 relative w-full h-72 tablet:h-96 laptop:h-[600px] overflow-hidden rounded-md group">
            <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform scale-110 group-hover:scale-100">
              <Image
                src='/images/productconsult.png'
                alt=''
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="absolute bottom-0 left-0 right-0 text-center h-20 text-white text-md font-bold z-10 bg-[#47404090] flex justify-center items-center py-1">IT Consulting</p>
          </div>
          <div className='laptop:basis-2/3 flex flex-col gap-4'>
            <span className="font-semibold">IT CONSULTING</span>
            <span className="">At Junapril Solutions Ltd, we understand that technology is the backbone of your business. Our IT consulting services are designed to help you harness the power of technology to drive efficiency, innovation, and growth. Whether you are looking to optimize your current infrastructure, implement new solutions, or safeguard your digital assets, our team of experts is here to guide you every step of the way.</span>
            <span className="font-semibold">Our IT Consulting Services:</span>
            <div>
              <p className="font-semibold">1. IT Strategy & Planning</p>
              <p>We work closely with your leadership team to develop a robust IT strategy that aligns with your business objectives. Our consultants provide expert guidance on technology investments, ensuring that your IT roadmap supports your short-term needs and long-term goals.</p>
              <p className="font-semibold">Our IT Strategy & Planning services include:</p>
              <ul className='flex flex-col space-y-2 list-disc list-inside'>
                  <li className=''>Technology assessment and gap analysis</li>
                  <li className=''>IT roadmap development</li>
                  <li className=''>Business continuity and disaster recovery planning</li>
                  <li className=''>Budgeting and resource allocation</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">2. Cloud Solutions & Migration</p>
              <p>Embrace the power of the cloud with our comprehensive cloud consulting and migration services. We help you transition seamlessly to cloud platforms, ensuring minimal disruption and maximum security.</p>
              <p className="font-semibold">Our Cloud Solutions services include:</p>
              <ul className='flex flex-col space-y-2 list-disc list-inside'>
                  <li className=''>Cloud readiness assessment</li>
                  <li className=''>Cloud architecture design</li>
                  <li className=''>Migration planning and execution</li>
                  <li className=''>Hybrid and multi-cloud strategies</li>
                  <li className=''>Cloud security and compliance </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">3. Cybersecurity Services</p>
              <p>Protect your business from evolving cyber threats with our proactive and strategic cybersecurity solutions. We implement best practices and advanced technologies to safeguard your critical data and systems.</p>
              <p className="font-semibold">Our Cybersecurity services include:</p>
              <ul className='flex flex-col space-y-2 list-disc list-inside'>
                  <li className=''>Risk assessment and management</li>
                  <li className=''>Network security and endpoint protection</li>
                  <li className=''>Security information and event management (SIEM)</li>
                  <li className=''>Incident response and recovery</li>
                  <li className=''>Compliance and regulatory support (e.g., GDPR, HIPAA)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">4. Infrastructure Optimization</p>
              <p>Maximize the performance of your IT infrastructure with our optimization services. We help you identify inefficiencies, modernize your systems, and implement solutions that enhance productivity and reliability.</p>
              <p className="font-semibold">Our Infrastructure Optimization services include:</p>
              <ul className='flex flex-col space-y-2 list-disc list-inside'>
                  <li className=''>Network design and implementation</li>
                  <li className=''>Server and storage solutions</li>
                  <li className=''>Virtualization and consolidation</li>
                  <li className=''>Performance monitoring and tuning</li>
                  <li className=''>IT asset management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page