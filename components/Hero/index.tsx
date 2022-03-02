import GradientText from '../GradientText'
import SocialMediaIcons from '../SocialMediaIcons'

const Hero = () => {
  return (
    <div className='hero static top-0 -mt-20 min-h-screen bg-gradient-to-bl from-primary-content via-base-100 to-base-100'>
      <div className='hero-content'>
        <div className='max-w-md px-4'>
          <h1 className='text-2xl font-bold'>Hi, my name is</h1>
          <h1 className='bg-gradient-to-br from-sky-400 to-blue-700 bg-clip-text py-2 text-4xl font-extrabold text-transparent'>
            Taufik Hidayat
          </h1>
          <p className='pt-2 pb-4 font-medium'>
            I'm a{' '}
            <GradientText
              from='from-rose-400'
              to='to-violet-600'
              style='inline font-semibold'
            >
              Full Stack Developer
            </GradientText>{' '}
            from Bandung, Indonesia
          </p>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  )
}

export default Hero
