import Link from 'next/link'
import { motion } from 'framer-motion'

import data from './data'

const SocialMediaIcons = ({ ...rest }) => {
  return (
    <motion.div className='flex space-x-2' {...rest}>
      {data.map((value) => {
        return (
          <div key={value.title}>
            <Link href={value.link}>
              <a target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='fill-base-content [fillRule:evenodd] [clipRule:evenodd] [strokeLinejoin:round] [strokeMiterlimit:1.41421]'
                >
                  <path d={value.icon} />
                </svg>
              </a>
            </Link>
          </div>
        )
      })}
    </motion.div>
  )
}

export default SocialMediaIcons
