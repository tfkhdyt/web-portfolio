import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrollY, setScrollY] = useState<number>(0)
  const [currentTheme, setCurrentTheme] = useState('')

  useEffect(() => {
    setCurrentTheme(localStorage.getItem('theme') || 'light')
  })

  useEffect(() => {
    document
      .querySelector('.drawer-content')!
      .addEventListener('scroll', () => {
        const element: Element = document.querySelector('.drawer-content')!
        console.log(element.scrollTop)
        setScrollY(element.scrollTop)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [])

  return (
    <div
      className={`navbar sticky top-0 z-50 w-full ${
        scrollY >= 140 ? 'bg-base-100 shadow-md' : 'bg-ghost'
      } transition-all duration-300`}
    >
      <div className='flex-none lg:hidden'>
        <label htmlFor='my-drawer-3' className='btn btn-ghost btn-square'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-6 w-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
      </div>
      <div className={`mx-2 flex-1 px-2 text-xl font-bold transition-all duration-300 ${scrollY < 140 && 'opacity-0'}`}>TFKHDYT</div>
      <div className='flex-none mr-2 lg:mr-0'>
        <div className='form-control'>
          <label className='label cursor-pointer space-x-1'>
            <span className='label-text'>🌞</span>
            <input 
              data-toggle-theme="dracula,light" 
              data-act-class="ACTIVECLASS" 
              className='toggle' 
              type='checkbox' 
              defaultChecked={currentTheme == 'dracula' ? true : false} 
            />
            {/* <input type='checkbox' className='toggle' /> */}
            <span className='label-text'>🌚</span>
          </label>
        </div>
      </div>
      <div className='hidden flex-none lg:block'>
        <ul className='menu menu-horizontal'>
          {/* Navbar menu content here */}
          <li>
            <a>Navbar Item 1</a>
          </li>
          <li>
            <a>Navbar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
