import Feature from '../elements/Feature'
export const Features = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col mb-6 lg:flex-row md:mb-10'>
        <div className='lg:w-1/2'>
          <h2 className='max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg '>
            Fitur Yang Keren dan Lengkap
          </h2>
        </div>
        <div className='lg:w-1/2'>
          <p className='text-base text-gray-700 md:text-lg'>
            Keneki arep di tulisi opo di gawe kosong?
          </p>
        </div>
      </div>
      <Feature />
    </div>
  )
}
