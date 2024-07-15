import Image from 'next/image'
import banner from '@/assets/banner.png'

const BannerImage = () => {
  return (
    <figure className="relative">
      <Image
        src={banner}
        alt="banner-image"
        className="h-full w-full object-cover"
      />
      <div className="to-shadow pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent"></div>
    </figure>
  )
}

export default BannerImage
