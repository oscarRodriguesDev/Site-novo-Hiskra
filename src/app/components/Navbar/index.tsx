'use client'
import { usePathname } from 'next/navigation'
import RouterLinks from '../RouterLinks'
import { NavbarTypeProps } from './types'
import { Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = ({ openModal }: NavbarTypeProps) => {
  const path = usePathname()
  return (
    <nav className="flex items-center justify-between">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li className="m-2 p-2">
          <RouterLinks href="/" text="Início" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks
            href={`${path === '/' ? '#about-us' : '/#about-us'}`}
            text="Sobre"
          />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="/vacancies" text="Vagas" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="/blog" text="Blog" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks
            href={`${path === '/' ? '#projects' : '/#projects'}`}
            text="Projetos"
          />
        </li>
      </ul>

      <Bars3Icon
        data-testid="svg-close-modal"
        className="h-6 w-6 cursor-pointer text-white md:hidden"
        onClick={openModal}
      />
    </nav>
  )
}

export default Navbar
