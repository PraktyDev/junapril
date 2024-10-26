import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const AboutCard = ({title, desc}) => {
  return (
    <Card className='flex flex-col justify-between h-[400px] rounded-sm'>
        <CardHeader className='flex flex-col gap-4'>
            <CardTitle className='text-center text-white uppercase py-4 bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 rounded-md'>{title}</CardTitle>
            <CardDescription className='text-justify'>{desc}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default AboutCard