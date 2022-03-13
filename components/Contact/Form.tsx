import { ChangeEvent, useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import axios from 'axios'

import { variants } from '../../animations/variants'

import InputForm from './InputForm'
import TextArea from './TextArea'

const Form = () => {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [message, setMessage] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await axios.post(process.env.NEXT_PUBLIC_MESSAGE_FORM_API + '/message', {
        name,
        email,
        message,
      })
      toast.success('Message has been sent, thank you for reaching me out')
      form.current!.reset()
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        switch (err.response.status) {
          case 500:
            toast.error('Server error! Try it next time')
            break
          case 429:
            toast.warning("You're sending message too often! Try it next time")
            break
          case 400:
            err.response.data.message.forEach((error: string) => {
              toast.error(error.charAt(0).toUpperCase() + error.slice(1))
            })
            break
          default:
            toast.error('Unknown error')
            break
        }
      }
    }
    setIsLoading(false)
  }

  return (
    <motion.div
      variants={variants}
      initial='fromBottom'
      whileInView='toTop'
      viewport={{ once: true }}
      className='w-full'
    >
      <form
        className='flex w-full flex-col space-y-4'
        onSubmit={handleSubmit}
        ref={form}
      >
        <div className='flex w-full flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
          <div className='w-full md:w-3/6'>
            <InputForm
              label='Name'
              name='name'
              placeholder='Your name'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div className='w-full md:w-3/6'>
            <InputForm
              label='Email'
              name='email'
              type='email'
              placeholder='Your email'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
        </div>
        <div className='w-full'>
          <TextArea
            label='Message'
            name='message'
            placeholder='Your message'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
          />
        </div>
        <div className='w-full'>
          {/*<div
            className={`${
              haveSentMessage ? 'tooltip tooltip-bottom' : undefined
            } w-full`}
            data-tip='Message is limited to 1 message per month'
            >*/}
          <button
            type='submit'
            className={`btn w-full md:w-fit ${
              isLoading && 'loading pointer-events-none opacity-50'
            } no-animation transition-all duration-500`}
          >
            Send Message
          </button>
        </div>
        {/*</div>*/}
      </form>
    </motion.div>
  )
}

export default Form
