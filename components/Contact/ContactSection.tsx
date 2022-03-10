import { motion } from 'framer-motion'

import { IContactSection } from './index.d'

const ContactSection = ({ icon, title, content }: IContactSection) => {
  const Icon = icon

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
  }

  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='flex items-center space-x-3 md:space-x-4'
    >
      <div>
        <div className='flex aspect-square h-12 items-center justify-center rounded-full bg-base-100'>
          <Icon />
        </div>
      </div>
      <div>
        <p className='text-xl font-semibold'>{title}</p>
        <div
          className='tooltip'
          data-tip={`Click to copy the ${title.toLowerCase()}${
            title === 'Telegram' ? ' username' : ''
          }`}
        >
          <p onClick={handleCopy} className='text-base-300'>
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactSection
