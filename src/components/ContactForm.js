"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Oval  } from 'react-loader-spinner'
import { Label } from "./ui/label"

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  title: z.string(),
  company: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  phonenumber: z.preprocess(
    (value) => Number(value),
    z.number().min(7, {
      message: "phonenumber must be at least 7 digits",
    })
  ),
  message: z.string({ message: "Enter a message" })
})

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      title: '',
      company: '',
      email: '',
      phonenumber: '',
      message: '',
    },
  })
  
  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
  
  const onSubmit = async (values) => {

    try {
      await axios.post('/api/send-contact', values)
      toast('Message sent')
    } catch (error) {
      toast("Failed to send, try again")
    }

  }

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-x-8 gap-y-6 tablet:grid-cols-2 w-full h-full px-5 bg-[#277A80] rounded-sm">
        <h1 className='text-center text-xl font-bold col-span-full text-white mt-6 mb-3'>Connect with Junapril Advisor</h1>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
                <Label htmlFor='firstName' className='text-white font-semibold'>First Name *</Label>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
                <Label htmlFor='lastName' className='text-white font-semibold'>Last Name *</Label>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
                <Label htmlFor='title' className='text-white font-semibold'>Your Title *</Label>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
                <Label htmlFor='company' className='text-white font-semibold'>Your Company *</Label>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
                <Label htmlFor='email' className='text-white font-semibold'>Your Email *</Label>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
                <Label htmlFor='phonenumber' className='text-white font-semibold'>Phone Number *</Label>
              <FormControl>
                <Input className="bg-slate-100 rounded-md mb-2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="tablet:col-span-2">
                <Label htmlFor='message' className='text-white font-semibold'>Message *</Label>
              <FormControl>
                <Textarea className="bg-slate-100 rounded-md mb-2 h-40 laptop:h-60" row={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="tablet:col-span-2 mt-6 bg-[#40C0E7] hover:bg-[#40C0E795]" type="submit" disabled={!isDirty || !isValid} >
            {isSubmitting 
            ? <div className="flex gap-3 items-center justify-center"><Oval visible={true} height="18" width="18" color="white" ariaLabel="oval-loading" /> <p>Sending...</p></div>
            : <div>Contact Us</div>
            }
        </Button>
        <div className='tablet:col-span-2 mb-6 text-white font-semibold text-center max-w-lg mx-auto'>
            We respect your privacy and will never share any of your personal information with third parties.
        </div>
      </form>
    </Form>
  )
}