import Link from 'next/link';
// import { motion } from 'framer-motion';

// import { variants } from '../../animations/variants';
// import SocialMediaIcons from '../SocialMediaIcons';
import { handleDrawer } from '../../lib/scroll-to-section/scroll-to-section';
import socialMedia from '../SocialMediaIcons/data';
import { menu } from '../Layout/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-screen bg-slate-800'>
      <div className='container mx-auto px-6 md:px-12 lg:px-56'>
        <div className='grid grid-cols-1 md:grid-cols-4 text-slate-200 gap-6 pt-12 pb-3'>
          <div className='space-y-1 mb-4 md:mb-0 md:col-span-2'>
            <p className='font-bold text-3xl font-mono tracking-tight'>
              ./tfkhdyt
            </p>
            <p className='font-light text-sm text-slate-400'>
              Junior Full Stack TypeScript Developer
            </p>
          </div>
          <div className='space-y-1'>
            <p className='font-bold text-lg'>Explore</p>
            {menu.map((value) => {
              return (
                <p
                  className='text-slate-400'
                  key={value.title}
                  onClick={() => handleDrawer(value.to)}
                >
                  {value.title}
                </p>
              );
            })}
          </div>
          <div className='space-y-1'>
            <p className='font-bold text-lg'>Reach me out on</p>
            {socialMedia.map((value) => {
              return (
                <Link href={value.link} key={value.title}>
                  <a className='text-slate-400 block' target='_blank'>
                    {value.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className='divider before:bg-slate-300/10 after:bg-slate-300/10'></div>
        <div className='my-4 md:my-6'>
          <p className='text-xs font-semibold flex justify-center text-slate-200'>
            © {currentYear} Taufik Hidayat • All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );

  /* return (
    <div className='w-screen'>
    <div className='bg-slate-800 -mb-2 px-6 md:px-56 py-10 mx-auto'>
        <div className='grid w-full w-screen place-items-center py-6 text-slate-200'>
        <div className='grid grid-cols-1 md:grid-cols-3 w-screen text-slate-200 gap-6 w-full'>
          <div className='space-y-1 mb-4 md:mb-0'>
            <p className='font-black text-3xl'>./tfkhdyt</p>
            <p className='font-thin text-sm text-slate-400'>
              Junior Full Stack TypeScript Developer
            </p>
          </div>
          <div className='space-y-1'>
            <p className='font-bold'>Explore</p>
            {menu.map((value) => {
              return (
                <p
                  className='text-slate-400'
                  key={value.title}
                  onClick={() => handleDrawer(value.to)}
                >
                  {value.title}
                </p>
              );
            })}
          </div>
          <div className='font-bold'>Reach me out on</div>
          <motion.div
            variants={variants}
            initial='fromBottom'
            whileInView='toTop'
            viewport={{ once: true }}
            className='flex flex-col items-center space-y-2'
          >
            <p className='text-lg font-bold'>Reach me out on</p>
            <SocialMediaIcons />
            <p className='pt-5 text-sm font-semibold'>
              © {currentYear} ./tfkhdyt • All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  ); */
};

export default Footer;
