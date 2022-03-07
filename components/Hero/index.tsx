import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import GradientText from '../GradientText'
import SocialMediaIcons from '../SocialMediaIcons'

const variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const Hero = () => {
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    document
      .querySelector('.drawer-content')!
      .addEventListener('scroll', () => {
        const element: Element = document.querySelector('.drawer-content')!
        // console.log(element.scrollTop)
        setScrollY(element.scrollTop)
      })
  }, [])
  const handleArrow = () => {
    document.querySelector('#about')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div
      className='hero top-0 -mt-20 min-h-screen w-screen bg-gradient-to-bl from-primary-content via-base-100 to-base-100 pb-px'
      id='hero'
    >
      <div className='hero-content'>
        <div className='max-w-md px-4 md:max-w-4xl'>
          <div className='flex grid grid-cols-1 items-center gap-x-4 md:grid-cols-2'>
            <div>
              <motion.h1
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 1,
                }}
                className='text-2xl font-bold md:text-4xl'
              >
                Hi, my name is
              </motion.h1>
              <motion.h1
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 1,
                }}
                className='bg-gradient-to-br from-sky-400 to-blue-700 bg-clip-text py-2 text-4xl font-extrabold leading-3 tracking-normal text-transparent md:text-6xl'
              >
                Taufik Hidayat
              </motion.h1>
              <motion.p
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 1,
                }}
                className='pt-2 pb-4 font-medium md:text-xl'
              >
                I'm a{' '}
                <GradientText
                  from='from-rose-400'
                  to='to-violet-600'
                  style='inline font-semibold'
                >
                  Full Stack Developer
                </GradientText>{' '}
                from Bandung, Indonesia
              </motion.p>
              <SocialMediaIcons
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 1,
                }}
              />
            </div>
            <motion.div
              variants={variants}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 1,
              }}
              className='hidden md:flex'
            >
              <img src='/illustration1.svg' className='pointer-events-none' />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='grid place-items-center'
            onClick={handleArrow}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`-mb-80 h-10 w-10 animate-bounce ${
                scrollY >= 140 && 'pointer-events-none opacity-0'
              } transition-all duration-500`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
