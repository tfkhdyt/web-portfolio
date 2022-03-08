import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { projects } from './data'

const ProjectCard = dynamic(() => import('./ProjectCard'))

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

const Projects = () => {
  const [category] = useState<string[]>([
    ...new Set(projects.map((value) => value.type)),
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
        id='projects'
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
            Projects
          </motion.div>
          {/* category */}
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
                    {projects.filter((e) => e.type === value).length}
                  </span>
                </a>
              ))}
            </motion.div>
            {/* content */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {projects
                .filter((value) => value.type === activeTab)
                .map((value) => (
                  <div key={value.name}>
                    <AnimatePresence exitBeforeEnter>
                      <ProjectCard
                        variants={variants}
                        name={value.name}
                        type={value.type}
                        description={value.description}
                        tags={value.tags}
                        picture={value.picture}
                        repoLink={value.repoLink}
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

export default Projects
