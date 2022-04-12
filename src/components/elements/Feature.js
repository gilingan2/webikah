import React from 'react'
import { IconContext } from 'react-icons/lib'
import { feature } from './dataFeature'

export default function Feature() {
  console.log(feature)
  return (
    <div className='grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4'>
      {feature.map((item, i) => (
        <div className='max-w-md'>
          <div
            className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-purple-100'
            key={i}>
            <IconContext.Provider
              value={{ className: 'w-6 h-6 text-purple-700' }}>
              {item.icon}
            </IconContext.Provider>
          </div>
          {/* <GrGallery className='w-12 h-12 text-gray-500' size={15} /> */}
          <h6 className='mb-2 font-semibold leading-5'>{item.title}</h6>
          <p className='mb-3 text-sm text-gray-900'>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
