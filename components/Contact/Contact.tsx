import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

import { contacts } from './data'
import Form from './Form'

const ContactSection = dynamic(() => import('./ContactSection'))

// import { ips, chartKuliahOptions, chartSMKOptions, nilaiSemester } from './data'

// const Card = dynamic(() => import('./Card'))

const variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  slideToRightStart: {
    x: -25,
    opacity: 0,
  },
  slideToRightEnd: {
    x: 0,
    opacity: 1,
  },
}

const Contact = () => {
  return (
    <div className='w-screen'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500'
      >
        <path d='M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,186.7C672,160,768,96,864,69.3C960,43,1056,53,1152,80C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
      </svg>
      {/* content */}
      <div
        className='-my-px scroll-mt-24 bg-blue-500 text-accent-content'
        id='contact'
      >
        <div className='container mx-auto space-y-8 px-6 pb-12 md:px-12 lg:px-56'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='hidden'
            transition={{ duration: 1 }}
            whileInView='visible'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            Contact
          </motion.div>
          <div className='flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
            {/* info contact */}
            <div className='flex w-full flex-col space-y-6 md:w-5/12'>
              {contacts.map((value) => (
                <div key={value.title}>
                  <ContactSection {...value} />
                </div>
              ))}
            </div>
            {/* end of info contact */}
            <div className='divider before:bg-base-300/10 after:bg-base-300/10 md:divider-horizontal'></div>
            <Form />
          </div>
        </div>
      </div>
      {/* ======== */}
    </div>
  )
}

export default Contact
