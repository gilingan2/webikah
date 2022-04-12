export default function Pricing() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div>
          <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
            Our Pricing
          </p>
        </div>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              className='text-purple-700 absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              viewBox='0 0 52 24'
              fill='currentColor'>
              <defs>
                <pattern
                  id='7e5e8ff8-1960-4094-a63a-2a0c0f922d69'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'>
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Harga</span>
          </span>{' '}
          terbaik untuk anda
        </h2>
        <p className='text-base text-gray-700 md:text-lg normal-case'>
          kamu adalah segalanya, untuk kamu harga terbaik dengan jaminan website
          yang berkualitas
        </p>
      </div>
      <div className='grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto'>
        <div className='flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow'>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Start</div>
            <div className='flex items-center justify-center mt-2'>
              <div className='mr-1 text-5xl font-bold'>IDR75.000</div>
            </div>
            <div className='mt-4 space-y-3'>
              <div className='text-gray-700'>Preset/Design standart</div>
              <div className='text-gray-700'>Quotes</div>
              <div className='text-gray-700'>Detail Info Acara</div>
              <div className='text-gray-700'>Profil Pasangan</div>
              <div className='text-gray-700'>Protokol Kesehatan</div>
              <div className='text-gray-700'>Navigasi Lokasi</div>
              <div className='text-gray-700'>
                Menambahkan ke google calendar
              </div>
              <div className='text-gray-700'>Unlimited Custom jadwal acara</div>
              <div className='text-gray-700'>RSVP</div>
              <div className='text-gray-700 font-semibold'>
                Masa Aktif Selamanya Edit Tanpa Batas
              </div>
            </div>
          </div>
          <div>
            <a
              href='/'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none'>
              Pesan Sekarang
            </a>
          </div>
        </div>
        <div className='relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-purple-500'>
          <div className='absolute inset-x-0 top-0 flex justify-center -mt-3'>
            <div className='inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-purple-500'>
              Most Popular
            </div>
          </div>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Pro</div>
            <div className='flex items-center justify-center mt-2'>
              <div className='mr-1 text-5xl font-bold'>IDR100.000</div>
            </div>
            <div className='mt-4 space-y-3'>
              <div className='text-gray-700'>Semua yang ada di paket BASIC</div>
              <div className='text-gray-700'>80 GB of storage</div>
              <div className='text-gray-700'>Amplop digital</div>
              <div className='text-gray-700'>Kirim Ucapan</div>
              <div className='text-gray-700'>Gallery (max 10)</div>
              <div className='text-gray-700'>Love Stories</div>
              <div className='text-gray-700'>
                Share Eklusif - nama tamu (max 50)
              </div>
              <div className='text-gray-700'>Background Music (list only</div>
              <div className='text-gray-700'>Preset/Design Premium</div>
              <div className='text-gray-700 font-semibold'>
                Masa Aktif Selamanya Edit Tanpa Batas
              </div>
            </div>
          </div>
          <div>
            <a
              href='/'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none'>
              Most Popular
            </a>
          </div>
        </div>
        <div className='flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow'>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Business</div>
            <div className='flex items-center justify-center mt-2'>
              <div className='mr-1 text-5xl font-bold'>IDR150.000</div>
            </div>
            <div className='mt-4 space-y-3'>
              <div className='text-gray-700'>
                Semua yang ada di paket PREMIUM
              </div>
              <div className='text-gray-700'>Unlimited domains</div>
              <div className='text-gray-700'>Gallery (max 20)</div>
              <div className='text-gray-700'>
                Share Eklusif - nama tamu (unlimited)
              </div>
              <div className='text-gray-700'>
                Background Music (list dan custom)
              </div>
              <div className='text-gray-700'>Tersedia Versi Inggris</div>
              <div className='text-gray-700'>Semua Jenis Preset</div>
              <div className='text-gray-700'>Support Prioritas</div>
              <div className='text-gray-700 font-semibold'>
                Masa Aktif Selamanya Edit Tanpa Batas
              </div>
            </div>
          </div>
          <div>
            <a
              href='/'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none'>
              Most Popular
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
