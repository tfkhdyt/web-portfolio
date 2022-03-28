import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { variants } from '../../animations/variants'

import GradientText from '../GradientText'
import SocialMediaIcons from '../SocialMediaIcons'

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
      className='hero top-0 -mt-20 min-h-screen w-screen bg-gradient-to-bl from-blue-500/10 via-base-100 to-base-100 pb-px'
      id='hero'
    >
      <div className='hero-content'>
        <div className='max-w-md px-4 md:max-w-3xl lg:max-w-5xl'>
          <div className='flex grid grid-cols-1 items-center gap-x-4 md:grid-cols-2'>
            <motion.div
              variants={variants}
              initial='fromLeft'
              animate='toRight'
            >
              <h1 className='text-2xl font-bold md:text-4xl'>Hi, my name is</h1>
              <h1 className='bg-gradient-to-br from-sky-400 to-blue-700 bg-clip-text py-2 text-4xl font-extrabold text-transparent md:text-6xl'>
                Taufik Hidayat
              </h1>
              <p className='pt-2 pb-4 font-medium md:text-xl'>
                I'm a{' '}
                <GradientText
                  from='from-rose-400'
                  to='to-violet-600'
                  style='inline font-semibold'
                >
                  Full Stack Developer
                </GradientText>{' '}
                from Bandung, Indonesia
              </p>
              <div className='text-base-content'>
                <SocialMediaIcons
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                    duration: 1,
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial='fromBottom'
              animate='toTop'
              className='hidden md:flex'
            >
              <img src='/illustration3.svg' className='pointer-events-none' />
            </motion.div>
          </div>
          <motion.div
            initial='startFade'
            animate='endFade'
            className='grid place-items-center'
            onClick={handleArrow}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`-mb-80 md:-mb-64 h-10 w-10 animate-bounce ${
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
