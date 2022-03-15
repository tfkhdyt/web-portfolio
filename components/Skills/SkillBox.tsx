import { motion } from 'framer-motion'

import { ISkillBox } from './index.d'

const SkillBox = ({ title, icon, variants }: ISkillBox) => (
  <motion.div
    variants={variants}
    initial='fromLeft'
    whileInView='toRight'
    viewport={{ once: true }}
  >
    <div
      className={`space-y-2 rounded-2xl bg-base-200 p-6 shadow shadow-base-300/75 transition duration-500 hover:bg-base-300 umami--hover--${title}-skill-box`}
    >
      {icon ? (
        <div className='flex justify-center'>
          <img
            src={`/icons/${icon}`}
            alt={`${title} icon`}
            className={`pointer-events-none h-16`}
            height='100'
          />
        </div>
      ) : (
        <p className='flex justify-center font-semibold leading-none text-base-content'>
          {title}
        </p>
      )}
    </div>
  </motion.div>
)

export default SkillBox
