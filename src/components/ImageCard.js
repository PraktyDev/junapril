import Image from 'next/image'

const ImageCard = ({src, text, alt}) => {
  return (
    <div className="relative w-56 laptop:w-60 h-56 laptop:h-60 overflow-hidden rounded-md group">
      <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform scale-110 group-hover:scale-100">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className="absolute bottom-5 left-0 right-0 text-center text-white text-xl font-bold z-10 bg-[#277A8080] flex justify-center items-center py-1">{text}</p>
    </div>
  )
}

export default ImageCard