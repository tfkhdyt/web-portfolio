import Image from 'next/image'
import { motion } from 'framer-motion'
import GradientText from '../GradientText'
import { skills } from './data'
import {useEffect, useState} from 'react'

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
  const [category, setCategory] = useState<string[]>([...new Set(skills.map(value => value.type))])
  const [activeTab, setActiveTab] = useState(category[0])

  const handleTabClick = (name: string) => {
    setActiveTab(name)
  }

  return (
    <div>
      {/* content */}
      <div
        className='-my-px w-screen scroll-mt-4 bg-base-100 py-16 text-base-content'
        id='skills'
      >
        <div className='container mx-auto space-y-10 px-6 md:px-12'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='hidden'
            transition={{ duration: 0.75 }}
            whileInView='visible'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            Skills
          </motion.div>
          <div>
            <motion.div
              variants={variants}
              initial='hidden'
              transition={{ duration: 0.75 }}
              whileInView='visible'
              viewport={{ once: true }}
              className='tabs flex justify-center'
            >
              {category.map(value => (
                  <a 
                    onClick={() => handleTabClick(value)}
                    className={`tab tab-bordered ${activeTab === value && 'tab-active'} transition-all duration-500`}
                    key={value}
                  >
                    {value}
                  </a>
              ))}
            </motion.div>
            <div></div>
          </div>
        </div>
      </div>
      {/* ======== */}
    </div>
  )
}

export default About
