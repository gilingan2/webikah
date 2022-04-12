import React from 'react'

export default function Template() {
  return (
    <div className='bg-gray-50'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
        <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
          <h2 className='max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group'>
            <span className='inline-block mb-1 sm:mb-4'>
              Pilih Desain Undangan
              <br className='hidden md:block' />
              Yang Kamu Suka
            </span>
            <div className='h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100' />
          </h2>
          <p className='text-gray-700 lg:text-sm lg:max-w-md'>
            Banyak variasi undangan kami pilih yang kamu mau dan sukai
          </p>
        </div>
        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
          <a href='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-auto'
                src='https://i.pinimg.com/474x/5f/c2/9f/5fc29f4887ee46b9ad8603b457dca5ae.jpg'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-purple-800 bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  Disini Nama Template Undangan
                </p>
              </div>
            </div>
          </a>
          <a href='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-auto'
                src='https://i.pinimg.com/474x/5f/c2/9f/5fc29f4887ee46b9ad8603b457dca5ae.jpg'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-purple-800 bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  Disini Nama Template Undangan
                </p>
              </div>
            </div>
          </a>
          <a href='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-auto'
                src='https://i.pinimg.com/474x/5f/c2/9f/5fc29f4887ee46b9ad8603b457dca5ae.jpg'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-purple-800 bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  Disini Nama Template Undangan
                </p>
              </div>
            </div>
          </a>
          <a href='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-auto'
                src='https://i.pinimg.com/474x/5f/c2/9f/5fc29f4887ee46b9ad8603b457dca5ae.jpg'
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-purple-800 bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  Disini Nama Template Undangan
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className='text-center'>
          <a
            href='/'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
            See more
            <svg
              className='inline-block w-3 ml-2'
              fill='currentColor'
              viewBox='0 0 12 12'>
              <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
