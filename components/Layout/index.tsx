import { useEffect, useState } from 'react'
import { LayoutProps } from './index.d'
import { useMotionValue } from 'framer-motion'
import Navbar from '../Navbar'
import BackToTop from '../BackToTop'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='drawer h-screen w-full'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        <div className=''>
          {children}
        </div>
          <BackToTop />
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu w-3/6 overflow-y-auto bg-base-100 p-4'>
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Layout
