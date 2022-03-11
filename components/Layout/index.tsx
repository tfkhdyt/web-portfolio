import { useRef } from 'react'

import { LayoutProps } from './index.d'
import { menu } from './data'

import Navbar from '../Navbar'

const Layout = ({ children }: LayoutProps) => {
  const checkbox = useRef<HTMLInputElement>(null)

  const handleDrawer = (target: string) => {
    setTimeout(() => {
      document.querySelector(target)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 150)
  }

  return (
    <div className='drawer h-screen w-full'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
        ref={checkbox}
      />
      <div className='drawer-content overflow-x-hidden'>
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='gpu drawer-overlay'></label>
        <ul className='menu w-4/6 overflow-y-auto bg-base-100 p-4'>
          {/* Sidebar content here */}
          {menu.map((value) => {
            return (
              <li key={value.title}>
                <label
                  htmlFor='my-drawer-3'
                  className='font-semibold hover:bg-blue-500'
                  onClick={() => handleDrawer(value.to)}
                >
                  {value.title}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Layout
