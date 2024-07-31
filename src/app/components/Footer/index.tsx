'use client'
import FooterLogo from '../FooterLogo'
import FooterContainer from '../FooterContainer'
import FooterNavLinks from '../FooterNavLinks'
import FooterSocialLinks from '../FooterSocialLinks'
import FooterCopyright from '../FooterCopyright'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdWhatsapp, MdOutlineMailOutline } from 'react-icons/md'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const path = usePathname()
  return (
    <footer
      id="contact"
      className="bg-gradient-footer flex w-full items-center justify-center bg-primary pt-20"
    >
      <FooterContainer>
        <section className="flex w-full flex-wrap items-center justify-between md:items-start">
          <FooterLogo />
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <FooterNavLinks
              title="Links"
              links={[
                {
                  name: 'Início',
                  href: '/',
                },
                {
                  name: 'Sobre',
                  href: `${path === '/' ? '#about-us' : '/#about-us'}`,
                },
                {
                  name: 'Blog',
                  href: 'https://bloghiskra.blogspot.com/',
                },
                {
                  name: 'Projetos',
                  href: `${path === '/' ? '#projects' : '/#projects'}`,
                },
              ]}
            />

            <FooterNavLinks
              title="Vagas"
              links={[
                {
                  name: 'Front-End',
                  href: '/vacancies',
                },
                {
                  name: 'Back-End',
                  href: '/vacancies',
                },
                {
                  name: 'Mobile',
                  href: '/vacancies',
                },
                {
                  name: 'UX/UI',
                  href: '/vacancies',
                },
              ]}
            />

            <FooterNavLinks
              title="Empresa"
              links={[
                {
                  name: 'Privacidade',
                  href: '#',
                },
                {
                  name: 'Termos e condições de uso',
                  href: '#',
                },
                {
                  name: 'Direitos reservados',
                  href: '#',
                },
              ]}
            />
          </aside>
        </section>
        <FooterSocialLinks
          socialMedia={[
            {
              social_name: '+55 279889911663',
              href: 'https://w.app/hiskra',
              icon: MdWhatsapp,
            },
            {
              social_name: 'adm@hiskra.com.br',
              href: '#',
              icon: MdOutlineMailOutline,
            },
            {
              social_name: 'Hiskra',
              href: 'https://www.linkedin.com/company/hiskra/about/',
              icon: SlSocialLinkedin,
            },
          ]}
        />
        <FooterCopyright />
      </FooterContainer>
    </footer>
  )
}

export default Footer
