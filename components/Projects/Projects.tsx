import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { projects } from './data'
import { variants } from '../../animations/variants'

import ProjectCard from './ProjectCard'

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
        <div className='container mx-auto space-y-10 px-6 md:px-12 lg:px-56'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='fromBottom'
            whileInView='toTop'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            Projects
          </motion.div>
          {/* category */}
          <div className='space-y-8'>
            <motion.div
              variants={variants}
              initial='fromBottom'
              whileInView='toTop'
              viewport={{ once: true }}
              className='tabs flex flex-nowrap overflow-x-auto md:justify-center'
            >
              {category.map((value) => (
                <a
                  onClick={() => handleTabClick(value)}
                  className={`tab tab-bordered ${
                    activeTab === value && 'tab-active'
                  } shrink-0 space-x-2 transition-all duration-500 umami--click--${value}-tab`}
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
