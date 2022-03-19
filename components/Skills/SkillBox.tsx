import { motion } from 'framer-motion'

import { ISkillBox } from './index.d'

const SkillBox = ({ title, icon, variants, isFirstRender }: ISkillBox) => (
  <motion.div
    variants={variants}
    initial='fromLeft'
    whileInView='toRight'
    exit='exitToRight'
    transition={{
      duration: isFirstRender ? 1.5 : 0.75,
      type: 'tween',
      ease: 'backInOut',
    }}
    viewport={{ once: true }}
  >
    <div
      className={`space-y-2 rounded-2xl bg-base-200 p-8 shadow shadow-base-300/75 transition duration-500 hover:bg-base-300 w-full aspect-square flex justify-center items-center`}
    >
      {icon ? (
        <img
          src={`/icons/${icon}`}
          alt={`${title} icon`}
          className={`object-contain h-20 md:h-22 lg:h-24`}
        />
      ) : (
        <p className='flex justify-center font-semibold leading-none text-base-content'>
          {title}
        </p>
      )}
    </div>
  </motion.div>
)

export default SkillBox
