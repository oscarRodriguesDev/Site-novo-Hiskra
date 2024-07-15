'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../Navbar'
import logo from '@/assets/jdg.png'
import NavbarMobile from '../NavbarMobile'
import { useToggle } from '@/hooks/useToggle'
import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname()
  const { modal, openModal, closeModal } = useToggle()

  return (
    <header className="container flex h-20 w-full items-center justify-between bg-primary transition-all">
      <Link href="/" className="flex" data-testid="logo-link">
        <figure className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
          <Image
            src={logo}
            alt="logo"
            className="h-full w-full object-cover p-1"
          />
        </figure>
      </Link>

      <Navbar openModal={openModal} />
      <NavbarMobile modal={modal} closeModal={closeModal} />

      <Link
        href={`${path === '/' ? '#contact' : '/#contact'}`}
        className="hidden h-10 w-36 items-center justify-center rounded-lg bg-primary-400 text-base font-semibold text-secondary-950 transition-all hover:text-white md:flex"
      >
        Contato
      </Link>
    </header>
  )
}

export default Header
