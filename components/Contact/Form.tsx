import { motion } from 'framer-motion'

import { IInputForm } from './index'
import { variants } from '../../animations/variants'

const InputForm = ({ label, name, type = 'text' }: IInputForm) => {
  return (
    <div className='form-control'>
      <label className='label pt-0'>
        <span className='label-text font-bold text-base-100'>{label}</span>
      </label>
      <input
        type={type}
        placeholder='Type here'
        name={name}
        className='input input-bordered w-full font-medium text-base-content/90'
      />
    </div>
  )
}

const TextArea = ({ label, name }: IInputForm) => {
  return (
    <div className='form-control'>
      <label className='label pt-0'>
        <span className='label-text font-bold text-base-100'>{label}</span>
      </label>
      <textarea
        name={name}
        className='textarea textarea-bordered h-24 font-medium text-base-content/90'
        placeholder='Type here'
      ></textarea>
    </div>
  )
}

const Form = () => {
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
        <button className='btn'>Submit</button>
      </div>
    </motion.div>
  )
}

export default Form
