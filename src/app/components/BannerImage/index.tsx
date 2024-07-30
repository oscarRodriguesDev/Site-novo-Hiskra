import Image from 'next/image'
import banner from '@/assets/banner.png'
import Link from 'next/link'

const BannerImage = () => {
  return (
    <figure className="relative">
      <Link href='google.com'>
        <Image
          src={banner}
          alt="banner-image"
          className="h-full w-full object-cover"
        />
      </Link>
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white"></div> */}
      <button className='absolute bottom-8 right-8 text-white font-semibold py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'>
        Saiba mais
      </button>
    </figure>
  )
}

export default BannerImage

