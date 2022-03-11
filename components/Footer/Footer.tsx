import SocialMediaIcons from '../SocialMediaIcons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='w-screen bg-slate-800'>
      <div className='container mx-auto'>
        <div className='grid w-full w-screen place-items-center py-6 text-slate-200'>
          <div className='flex flex-col items-center space-y-2'>
            <p className='text-lg font-bold'>Reach me out on</p>
            <SocialMediaIcons />
            <p className='pt-5 text-sm font-semibold'>
              © {currentYear} Taufik Hidayat All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
