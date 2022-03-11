import { useForm } from '@formspree/react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

import { variants } from '../../animations/variants'

import InputForm from './InputForm'
import TextArea from './TextArea'
const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID as string

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Form = () => {
  const [state, handleSubmit] = useForm(FORM_ID)
  const [haveSentMessage, setHaveSentMessage] = useState(false)

  useEffect(() => {
    setHaveSentMessage(Boolean(Cookies.get('haveSentMessage')))
  }, [])

  if (state.succeeded) {
    toast.success('Message has been sent, thank you for reaching me out', {
      toastId: 'success',
      onOpen: () => {
        Cookies.set('haveSentMessage', 'true', { expires: 30 })
        setHaveSentMessage(true)
      },
    })
  }

  if (state.errors.length >= 1 && !state.succeeded) {
    state.errors.forEach((error) => {
      toast.error(
        `${capitalize(error.field as string)} field's value ${error.message}`,
        { toastId: 'error' }
      )
    })
    console.log('Formspree errors:', state.errors)
  }

  return (
    <motion.div
      variants={variants}
      initial='fromBottom'
      whileInView='toTop'
      viewport={{ once: true }}
      className='w-full'
    >
      <form className='flex w-full flex-col space-y-4' onSubmit={handleSubmit}>
        <div className='flex w-full flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
          <div className='w-full md:w-3/6'>
            <InputForm label='Name' name='name' placeholder='Your name' />
          </div>
          <div className='w-full md:w-3/6'>
            <InputForm
              label='Email'
              name='email'
              type='email'
              placeholder='Your email'
            />
          </div>
        </div>
        <div className='w-full'>
          <TextArea label='Message' name='message' placeholder='Your message' />
        </div>
        <div className='w-full'>
          <div
            className={`${
              haveSentMessage ? 'tooltip tooltip-bottom' : undefined
            } w-full`}
            data-tip='Message is limited to 1 message per month'
          >
            <button
              className={`btn w-full md:w-fit ${
                state.submitting && 'loading pointer-events-none opacity-50'
              } no-animation transition-all duration-500 ${
                haveSentMessage && 'pointer-events-none opacity-50'
              }`}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default Form
