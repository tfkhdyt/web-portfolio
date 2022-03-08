import { useEffect, useState } from 'react'
import { menu } from '../Layout/data'
import Icon from './Icon'

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
        // console.log(element.scrollTop)
        setScrollY(element.scrollTop)
      })
  }, [])

  const handleDrawer = (target: string) => {
    setTimeout(() => {
      document.querySelector(target)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 150)
  }

  return (
    <div
      className={`min-w-screen navbar sticky inset-x-0 top-0 z-50 ${
        scrollY >= 140 ? 'bg-base-100/50 backdrop-blur' : 'bg-ghost'
      } transition-all duration-500 lg:px-48`}
    >
      <div className='flex-none md:hidden'>
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
      <div
        className={`flex-1 items-center space-x-1 text-xl font-bold transition-all duration-500 md:ml-2 ${
          scrollY <= 140 && 'opacity-0'
        }`}
      >
        <Icon />
        <span>TFKHDYT</span>
      </div>
      <div className='hidden flex-none md:block'>
        <ul className='menu menu-horizontal'>
          {/* Navbar menu content here */}
          {menu.map((value) => {
            return (
              <li key={value.title}>
                <label
                  className='font-semibold'
                  onClick={() => handleDrawer(value.to)}
                >
                  {value.title}
                </label>
              </li>
              // <li key={value.title}>
              //   <a href={value.to} className='font-semibold'>
              //     {value.title}
              //   </a>
              // </li>
            )
          })}
        </ul>
      </div>
      <div className='mr-2 flex-none'>
        <div className='form-control'>
          <label className='label cursor-pointer space-x-1'>
            <span className='label-text'>🌞</span>
            <input
              data-toggle-theme='dracula,light'
              data-act-class='ACTIVECLASS'
              className='toggle'
              type='checkbox'
              defaultChecked={currentTheme == 'dracula' ? true : false}
            />
            {/* <input type='checkbox' className='toggle' /> */}
            <span className='label-text'>🌚</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
