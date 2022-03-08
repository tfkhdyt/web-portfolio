import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { skills } from './data'

const SkillBox = dynamic(() => import('./SkillBox')) 

const variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  startFade: {
    opacity: 0,
  },
  endFade: {
    opacity: 1,
  },
}

const About = () => {
  const [category] = useState<string[]>([
    ...new Set(skills.map((value) => value.type)),
  ])
  const [activeTab, setActiveTab] = useState(category[0])

  const handleTabClick = (name: string) => {
    setActiveTab(name)
  }

  return (
    <div>
      {/* content */}
      <div
        className='mb-8 w-screen scroll-mt-8 bg-base-100 py-16 text-base-content'
        id='skills'
      >
        <div className='container mx-auto space-y-10 px-6 md:h-[34rem] md:px-12 lg:px-56'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='hidden'
            transition={{ duration: 1 }}
            whileInView='visible'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            Skills
          </motion.div>
          <div className='space-y-8'>
            <motion.div
              variants={variants}
              initial='hidden'
              transition={{ duration: 1 }}
              whileInView='visible'
              viewport={{ once: true }}
              className='tabs flex justify-center'
            >
              {category.map((value) => (
                <a
                  onClick={() => handleTabClick(value)}
                  className={`tab tab-bordered ${
                    activeTab === value && 'tab-active'
                  } space-x-2 transition-all duration-500`}
                  key={value}
                >
                  <span>{value}</span>
                  <span className={`badge badge-outline badge-sm`}>
                    {skills.filter((e) => e.type === value).length}
                  </span>
                </a>
              ))}
            </motion.div>
            <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
              {skills
                .filter((value) => value.type === activeTab)
                .map((value) => (
                  <div
                    className='tooltip'
                    data-tip={value.title}
                    key={value.title}
                  >
                    <AnimatePresence exitBeforeEnter>
                      <SkillBox
                        title={value.title}
                        icon={value.icon}
                        variants={variants}
                      />
                    </AnimatePresence>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* ======== */}
    </div>
  )
}

export default About
