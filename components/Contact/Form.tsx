import {useForm} from '@formspree/react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

import { variants } from '../../animations/variants'

const InputForm = dynamic(() => import('./InputForm'))
const TextArea = dynamic(() => import('./TextArea'))
const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID as string


const Form = () => {
  const [state, handleSubmit] = useForm(`${FORM_ID}`)

  return (
    <motion.div
      variants={variants}
      initial='fromBottom'
      whileInView='toTop'
      viewport={{ once: true }}
      className='flex w-full flex-col space-y-4'
    >
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
        <button className="btn">Submit</button>
      </div>
    </motion.div>
  )
}

export default Form
