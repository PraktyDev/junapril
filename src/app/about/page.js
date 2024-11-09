import AboutCard from "@/components/AboutCard";
import AboutImageCard from "@/components/AboutImageCard";
import Link from "next/link";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import Flicker from "@/components/Flicker";

const page = () => {
  return (
    <>
    <section className="flex flex-col justify-center gap-4">
      <div className="relative flex items-center justify-between w-full h-screen bg-[url('/images/aboutheroimg.png')] bg-no-repeat">
        <div className="bg-black opacity-20 w-full h-screen absolute top-0"></div>
        <div className="container mx-auto flex flex-col laptop:flex-row w-full justify-center laptop:justify-between items-center gap-14 laptop:gap-0">
          <div className="z-10 flex flex-col items-center laptop:items-start gap-4 laptop:gap-6">
            <Separator className="bg-white rounded-lg w-20 laptop:w-36 h-1 laptop:h-2" />
            <h1 className="text-5xl laptop:text-6xl text-center laptop:text-left  text-white">
              <span className="font-bold">Skilled</span> <br />
              Recruiters
            </h1>
          </div>
          <Link
            href={'/contact'}
            className="z-10 w-48 laptop:w-56 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 laptop:border-4 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl"
          >
            Get in Touch
          </Link>
        </div>
        <Flicker text='About Us' />
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 container mx-auto place-items-center">
        <div className="flex flex-col gap-2 mx-4">
          <AboutCard
            title="WHO WE ARE"
            desc="Welcome to Junapril Solutions Ltd, your trusted partner in IT security consulting, recruitment, and  eCommerce solutions. Established with a commitment to excellence,  Junapril Solutions combines expertise, innovation, and dedication to  deliver unparalleled services to our clients across various industries. We specialize in cutting-edge IT Security and comprehensive health record privacy consulting services. Our aim is to assist enterprises in safeguarding their Information assets and data -  including Patient Health Information (PHI) - through governance and a proactive risk management approach to reduce security risks, improve data protection, ensure compliance with the highest industry standards and laws, such as HIPAA, GDPR, and ISO/IEC 27001, and preserve client confidence."
          />
            <Card className='flex flex-col justify-between h-auto rounded-sm border-none shadow-none'>
                <CardHeader className='flex flex-col gap-4'>
                    <CardTitle className='text-center text-base laptop:text-lg text-white uppercase py-4 bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 rounded-md'>Our Industry Expertise</CardTitle>
                    <CardDescription className='text-left text-base laptop:text-lg'>
                     At Junapril Solutions Ltd, we pride ourselves on our deep industry expertise across diverse sectors, enabling us to provide tailored solutions that drive success for our clients. With a focus on IT consulting, e-commerce, recruitment, and health record privacy, our multidisciplinary team combines technical knowledge, strategic insights, and practical experience to address the unique challenges faced by businesses today.
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className='flex flex-col justify-between h-auto rounded-sm border-none shadow-none'>
                <CardHeader className='flex flex-col gap-4'>
                    <CardTitle className='text-center text-base laptop:text-lg text-white uppercase py-4 bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 rounded-md'>Why Work with Junapril Solutions?</CardTitle>
                    <CardDescription className='text-left text-base laptop:text-lg'>
                    <li className='font-semibold'>Expertise You Can Trust:</li> Our team of certified IT consultants brings years of industry experience and a proven track record of success across various sectors.
                    <br /><br />
                    <li className='font-semibold'>Customized Solutions:</li> We tailor our services to meet your unique business needs and ensure that you get the most value from your technology investments.
                    <br /><br />
                    <li className='font-semibold'>Commitment to Innovation:</li> We stay on the cutting edge of technology trends and bring the latest innovations to your organization.
                    <br /><br />
                    <li className='font-semibold'>End-to-End Support:</li> From strategic planning to implementation and ongoing support, we are here to assist you throughout your IT journey.
                    <br /><br />
                    <li className='font-semibold'>Focus on Security and Compliance:</li> We prioritize your data security and ensure that your systems comply with industry standards and regulations.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>

        <div className="grid grid-cols-2 gap-4 tablet:gap-20 laptop:grid-cols-1 justify-between mt-4">
            <AboutImageCard src='/images/itcs.png' text='IT CONSULTING SOLUTIONS' alt='IT consultant solution'/>
            <AboutImageCard src='/images/itrec.png' text='RECRUITMENT' alt='IT recruitment'/>
            <AboutImageCard src='/images/itecom.png' text='E-COMMERCE' alt='eCommerce'/>
            <AboutImageCard src='/images/ithpr.png' text='HEALTH PRIVACY RECORD' alt='health privacy record'/>
            <AboutImageCard src='/images/ittraining.png' text='TRAINING' alt='training'/>
        </div>
      </div>
    </section>

    <section className="bg-[#D9D9D9] p-5 laptop:p-10 mt-20">
      <Card className='w-full laptop:px-10 py-4 rounded-none'>
        <CardHeader className='flex flex-col gap-4'>
            <CardTitle className='text-center uppercase text-lg laptop:text-xl laptop:my-5'>Mission Statement</CardTitle>
            <CardDescription className='text-center text-base laptop:text-xl text-black'>
             Our mission is to empower businesses with cutting-edge IT consulting services and innovative e-commerce solutions. We are committed to delivering exceptional technology strategies and seamless digital platforms that drive efficiency, scalability, and success. By leveraging our expertise and a customer-centric approach, we aim to transform challenges into opportunities, helping our clients thrive in a dynamic digital landscape while fostering long-term partnerships built on trust, innovation, and excellence.
            </CardDescription>
        </CardHeader>
      </Card>
    </section>
    </>
  );
};

export default page;
