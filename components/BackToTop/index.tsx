import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 125) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const handleClick = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <button
        className={`z-50 fixed bottom-6 left-8 -ml-0.5 rounded-full bg-sky-700 p-2 text-white transition-opacity duration-300 ease-in-out ${
          showButton ? 'opacity-100' : 'pointer-events-none opacity-0'
        } active:bg-sky-800`}
        onClick={showButton ? handleClick : undefined}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 15l7-7 7 7'
          />
        </svg>
      </button>
    </>
  )
}

export default BackToTop
