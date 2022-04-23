import { motion } from 'framer-motion'

import { IContactSection } from './index.d'
import { variants } from '../../animations/variants'

const ContactSection = ({ icon, title, content }: IContactSection) => {
  const Icon = icon

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
  }

  return (
    <motion.div
      variants={variants}
      initial='fromBottom'
      whileInView='toTop'
      viewport={{ once: true }}
      className='flex items-center space-x-3 md:space-x-4'
    >
      <div>
        <div className='flex aspect-square h-12 items-center justify-center rounded-full bg-base-100'>
          <Icon />
        </div>
      </div>
      <div>
        <p className='text-xl font-bold'>{title}</p>
        <div
          className='tooltip'
          data-tip={`Click to copy the ${title.toLowerCase()}${
            title === 'Telegram' ? ' username' : ''
          }`}
        >
          <p onClick={handleCopy} className='text-base-200'>
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactSection