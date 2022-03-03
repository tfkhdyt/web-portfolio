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
    <div id='about'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-400'
      >
        <path
          fillOpacity='1'
          d='M0,192L48,176C96,160,192,128,288,106.7C384,85,480,75,576,101.3C672,128,768,192,864,208C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      {/* content */}
      <div className='-my-px w-screen bg-blue-400 py-2 text-accent-content'>
        <div className='container mx-auto space-y-8 px-6 md:px-12'>
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
            <div className='flex justify-center md:justify-start'>
              <motion.div
                variants={variants}
                initial='hidden'
                transition={{ duration: 1 }}
                whileInView='visible'
                viewport={{ once: true }}
                className='avatar'
              >
                <div className='w-48 md:w-full'>
                  <Image
                    src={about.picture}
                    width={500}
                    height={500}
                    className='rounded-full shadow-lg'
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
              className='flex flex-col justify-start space-y-4 text-justify font-medium'
            >
              <p>
                Hi everyone, my name is{' '}
                <GradientText
                  from='from-orange-500'
                  to='to-violet-600'
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
        className='fill-blue-400'
      >
        <path
          fillOpacity='1'
          d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,186.7C672,181,768,203,864,208C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
    </div>
  )
}

export default About
