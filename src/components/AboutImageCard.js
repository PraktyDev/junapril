import Image from 'next/image'

const AboutImageCard = ({src, text, alt}) => {
  return (
    <div className="relative w-56 bg-teal-700 laptop:w-96 h-56 laptop:h-60 overflow-hidden rounded-tl-2xl rounded-br-2xl drop-shadow-lg border-r-4 border-b-2 border-teal-800 group">
      <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform scale-110 group-hover:scale-100">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="absolute bottom-5 left-0 right-0 text-center text-white text-md uppercase font-bold z-10 bg-[#47404080] flex justify-center items-center py-1">{text}</p>
    </div>
  )
}

export default AboutImageCard