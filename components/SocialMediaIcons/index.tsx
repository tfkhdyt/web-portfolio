import Link from 'next/link'
import { ReactNode } from 'react'
import data from './data'

interface SocialMedia {
  title: string
  icon: ReactNode
  link: string
}

const SocialMediaIcons = () => {
  return (
    <div className='flex space-x-2'>
      {data.map((value) => {
        return (
          <div key={value.title}>
            <Link href={value.link}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-base-content'
              >
                <path d={value.icon} />
              </svg>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default SocialMediaIcons
