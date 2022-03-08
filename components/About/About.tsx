import Image from 'next/image'
import { motion } from 'framer-motion'
import GradientText from '../GradientText'
import { about } from './data'

const variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const About = () => {
  return (
    <div className='mt-2 w-screen'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500'
      >
        <path
          fillOpacity='1'
          d='M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,58.7C672,43,768,53,864,74.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      {/* content */}
      <div
        className='-my-px scroll-mt-24 bg-blue-500 text-accent-content'
        id='about'
      >
        <div className='container mx-auto space-y-10 px-6 md:px-12 lg:px-56'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='hidden'
            transition={{ duration: 1 }}
            whileInView='visible'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            About
          </motion.div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='flex justify-center'>
              <motion.div
                variants={variants}
                initial='hidden'
                transition={{ duration: 1 }}
                whileInView='visible'
                viewport={{ once: true }}
                className='avatar'
              >
                <div className='w-36 md:w-5/6'>
                  <Image
                    src={about.picture}
                    width={500}
                    height={500}
                    className='rounded-full'
                    alt='Foto gweh'
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              initial='hidden'
              transition={{ duration: 1 }}
              whileInView='visible'
              viewport={{ once: true }}
              className='flex flex-col justify-start space-y-4 text-justify'
            >
              <p>
                Hi everyone, my name is{' '}
                <GradientText
                  from='from-rose-600'
                  to='to-indigo-600'
                  style='inline font-bold'
                >
                  Taufik Hidayat
                </GradientText>
                . I'm a Full Stack Developer, Informatics Student, YouTuber,
                Free/Libre and Open Source Software Enthusiast, and Professional
                Googler.
              </p>
              {about.description.map((value, i) => (
                <span key={i}>
                  <p>{value}</p>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* ======== */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500 [fillRule:evenodd] [clipRule:evenodd] [strokeLinejoin:round] [strokeMiterlimit:1.41421]'
      >
        <path d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,186.7C672,181,768,203,864,208C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
      </svg>
    </div>
  )
}

export default About
