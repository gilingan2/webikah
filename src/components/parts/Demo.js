import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
export const Demo = () => {
  return (
    <div className='bg-gray-50'>
      <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 lg:w-20 lg:h-20'>
          <svg
            className='w-10 h-10 text-purple-500 lg:w-16 lg:h-16'
            stroke='currentColor'
            viewBox='0 0 52 52'>
            <polygon
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
              points='29 13 14 29 25 29 23 39 38 23 27 23'
            />
          </svg>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
            <h2 className='mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              No. 1 Platform
              <br className='hidden md:block' />
              <span className='inline-block text-purple-700 font-semibold text-2xl sm:text-3xl mt-2'>
                Website Undangan Pernikahan
              </span>
            </h2>
            <p className='text-gray-700 text-base md:text-lg'>
              Buat website undangan pernikahanmu secara ekslusif dengan mudah,
              murah dan cepat. Solusi website undangan pernikahan kamu jadi
              lebih berkesan!
            </p>
            <div className='inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-deep-purple-800 mt-3'>
              Temukan Kami:
              <a
                href='https://www.facebook.com/tsanikr'
                aria-label='Facebook'
                className='ml-3 text-xs inline-flex items-center'>
                <FaFacebook size={30} className='mr-2' /> Facebook
              </a>
              <a
                href='https://www.instagram.com/warungprintcom/'
                aria-label='Instagram'
                className='ml-3 text-xs inline-flex items-center'>
                <AiFillInstagram size={30} className='mr-2' /> Instagram
              </a>
              <a
                href='https://wa.me/085640199101'
                aria-label='Watsapp'
                className='ml-3 text-xs inline-flex items-center'>
                <IoLogoWhatsapp size={30} className='mr-2' /> Whatsapp
              </a>
            </div>
            {/* <a href='/' aria-label=''>
              Learn more
            </a> */}
          </div>
          <div className='lg:w-1/2'>
            <p className='text-base text-gray-700'>
              Buat website undangan pernikahanmu secara ekslusif dengan mudah,
              murah dan cepat. Solusi website undangan pernikahan kamu jadi
              lebih berkesan!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
