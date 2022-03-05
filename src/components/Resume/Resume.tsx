import { motion } from 'framer-motion'
import Card from './Card'
// import { about } from './data'

const variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  slideToRightStart: {
    x: -25,
    opacity: 0,
  },
  slideToRightEnd: {
    x: 0,
    opacity: 1,
  },
}

const Resume = () => {
  return (
    <div id='resume'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500'
      >
        <path d='M0,32L48,42.7C96,53,192,75,288,101.3C384,128,480,160,576,165.3C672,171,768,149,864,122.7C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
      </svg>
      {/* content */}
      <div className='-my-px w-screen bg-blue-500 text-accent-content'>
        <div className='container mx-auto space-y-8 px-6 md:px-12'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='hidden'
            transition={{ duration: 1 }}
            whileInView='visible'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            Resume
          </motion.div>
          <div className='grid grid-cols-1 gap-8'>
            <div>
              <motion.h1
                variants={variants}
                initial='slideToRightStart'
                transition={{ duration: 1 }}
                whileInView='slideToRightEnd'
                viewport={{ once: true }}
                className='mb-4 text-2xl font-bold text-base-100'
              >
                Work Experience
              </motion.h1>
              <Card
                title='Internship'
                location='PT. Inovindo Digital Media'
                time='Jan 2019 - Mar 2019'
              >
                <ul className='ml-6 list-disc font-light'>
                  <li>Web Hosting Service</li>
                  <li>Google SEO</li>
                  <li>Database Management</li>
                  <li>E-commerce Website Development</li>
                  <li>Blog Article Publishing</li>
                </ul>
              </Card>
            </div>
            <div>
              <motion.h1
                variants={variants}
                initial='slideToRightStart'
                transition={{ duration: 1 }}
                whileInView='slideToRightEnd'
                viewport={{ once: true }}
                className='mb-4 text-2xl font-bold text-base-100'
              >
                Education
              </motion.h1>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <Card
                  title='Vocational High School'
                  location='SMKN 7 Baleendah'
                  jurusan='Software Engineering'
                  time='2017 - 2020'
                ></Card>
                <Card
                  title='University'
                  location='Universitas Bale Bandung'
                  jurusan='Informatics Engineering'
                  time='2020 - now'
                ></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======== */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500 [fillRule:evenodd] [clipRule:evenodd] [strokeLinejoin:round] [strokeMiterlimit:1.41421]'
      >
        <path d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,186.7C672,181,768,203,864,208C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
      </svg>
    </div>
  )
}

export default Resume
