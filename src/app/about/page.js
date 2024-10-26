import AboutCard from "@/components/AboutCard";
import AboutImageCard from "@/components/AboutImageCard";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex flex-col justify-center gap-4">
      <div className="relative flex items-center justify-between w-full h-screen bg-[url('/images/abouthero.png')] bg-no-repeat">
        <div className="-z-10 bg-black opacity-70 w-full h-screen absolute top-0"></div>
        <div className="container mx-auto flex flex-col laptop:flex-row w-full justify-center laptop:justify-between items-center gap-14 laptop:gap-0">
          <div className="flex flex-col items-center laptop:items-start gap-4 laptop:gap-6">
            <Separator className="bg-white rounded-lg w-28 laptop:w-36 h-1 laptop:h-2" />
            <h1 className="z-10 text-5xl laptop:text-6xl text-center laptop:text-left  text-white">
              <span className="font-bold">Skilled</span> <br />
              Recruiters
            </h1>
          </div>
          <Link
            href={""}
            className="z-10 w-48 laptop:w-56 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 laptop:border-4 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 container mx-auto place-items-center">
        <div className="flex flex-col gap-2 mx-4">
          <AboutCard
            title="WHO WE ARE"
            desc="Welcome to Junapril Solutions Ltd, your trusted partner in IT security consulting, recruitment, and  eCommerce solutions. Established with a commitment to excellence,  Junapril Solutions combines expertise, innovation, and dedication to  deliver unparalleled services to our clients across various industries. We specialize in cutting-edge IT Security and comprehensive health record privacy consulting services. Our aim is to assist enterprises in safeguarding their Information assets and data -  including Patient Health Information (PHI) - through governance and a proactive risk management approach to reduce security risks, improve data protection, ensure compliance with the highest industry standards and laws, such as HIPAA, GDPR, and ISO/IEC 27001, and preserve client confidence."
          />
          <AboutCard
            title="Our Industry Expertise"
            desc="Over the years, Junapril Solutions has had the privilege of serving clients across a wide range of industries, including: Healthcare: Protecting sensitive patient data and ensuring compliance with industry regulations. Service Organizations: Safeguarding critical infrastructure and enhancing operational resilience. Financial Sector: Strengthening security measures to protect financial assets and customer information."
          />
          <AboutCard
            title="Why Work with Junapril Solutions?"
            desc="Expertise: Our team brings a wealth of knowledge and experience to every project, ensuring exceptional results. Innovation: We stay ahead of the curve by embracing emerging technologies and best practices in the field of IT security and eCommerce. Client-Centric Approach: Your success is our top priority, and we are committed to delivering  solutions that meet your unique requirements and exceed your  expectations."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 tablet:gap-20 justify-between">
            <AboutImageCard src='/images/itcs.png' text='IT CONSULTANT SOLUTION' alt='IT consultant solution'/>
            <AboutImageCard src='/images/itrec.png' text='RECRUITMENT' alt='IT recruitment'/>
            <AboutImageCard src='/images/itecom.png' text='E-COMMERCE' alt='eCommerce'/>
            <AboutImageCard src='/images/ithpr.png' text='HEALTH PRIVACY RECORD' alt='health privacy record'/>
        </div>
      </div>
    </section>
  );
};

export default page;
