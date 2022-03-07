import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IProjectCard } from './index.d'

const ProjectCard = ({
  variants,
  name,
  description,
  tags,
  picture,
  repoLink,
}: IProjectCard) => (
  <motion.div
    variants={variants}
    initial={{ x: -25, opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{ x: 0, opacity: 1 }}
    exit={{ x: -25, opacity: 0 }}
    viewport={{ once: true }}
  >
    <div className='relative aspect-video h-44 w-full rounded-2xl'>
      <Image
        src={`/projects/${picture}`}
        className='w-full rounded-2xl'
        width={1920}
        height={1080}
      />
      <div className='absolute inset-0 grid h-full h-full w-full place-items-center rounded-2xl bg-black/75 px-4 py-3 text-center text-white'>
        <div>
          <p className='text-xl font-bold'>{name}</p>
          <p className='text-sm font-light'>{description}</p>
          <div className='space-x-1'>
            {tags.map((tag) => (
              <div className='badge badge-sm badge-info font-bold' key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <Link href={repoLink}>
            <a className='group btn btn-outline btn-xs mt-1.5' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='mr-1 h-3.5 w-3.5 fill-white transition duration-300 [fillRule:evenodd] [clipRule:evenodd] [strokeLinejoin:round] [strokeMiterlimit:1.41421] group-hover:fill-black'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              Open in GitHub
            </a>
          </Link>
        </div>
      </div>
    </div>
    {/* <div className='space-y-2 rounded-2xl bg-base-200 p-6 shadow shadow-base-300/75 transition duration-500 hover:bg-base-300'>
      {icon ? (
        <div className='flex justify-center'>
          <img
            src={`/icons/${icon}`}
            alt={`${title} icon`}
            className={`pointer-events-none h-16`}
          />
        </div>
      ) : (
        <p className='flex justify-center font-semibold leading-none text-base-content'>
          {title}
        </p>
      )}
      </div>*/}
  </motion.div>
)

export default ProjectCard