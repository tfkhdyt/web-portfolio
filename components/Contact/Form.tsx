import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import dynamic from 'next/dynamic'

import { variants } from '../../animations/variants'

const InputForm = dynamic(() => import('./InputForm'))
const TextArea = dynamic(() => import('./TextArea'))
const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID as string

const Form = () => {
  const [state, handleSubmit] = useForm(FORM_ID)

  if (state.succeeded)
    toast.success('Message has been sent, thank you for reaching me out', {
      toastId: 'success',
    })

  if (state.errors.length >= 1) {
    state.errors.forEach((error) => {
      toast.error(error.message, { toastId: 'error' })
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
            <InputForm label='Name' name='name' />
          </div>
          <div className='w-full md:w-3/6'>
            <InputForm label='Email' name='email' type='email' />
          </div>
        </div>
        <div className='w-full'>
          <TextArea label='Message' name='message' />
        </div>
        <div className='w-full'>
          <button
            className={`btn ${
              state.submitting && 'loading pointer-events-none opacity-50'
            } no-animation transition-all duration-500`}
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default Form
