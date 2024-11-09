import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const AboutCard = ({title, desc}) => {
  return (
    <Card className='flex flex-col justify-between h-auto rounded-sm border-none shadow-none'>
        <CardHeader className='flex flex-col gap-4'>
            <CardTitle className='text-center text-base laptop:text-lg text-white uppercase py-4 bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 rounded-md'>{title}</CardTitle>
            <CardDescription className='text-left text-base laptop:text-lg'>{desc}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default AboutCard