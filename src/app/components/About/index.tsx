'use client'
import React, { useState } from 'react'
import Title from '../Title'
import Image from 'next/image'
import AboutMobileAccordion from './AboutMobileAccordion'
import { AboutMock } from '../../../mocks/AboutMock'
import { BiSolidRocket } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'

export default function About() {
  const [openItems, setOpenItems] = useState(
    Array(AboutMock.length).fill(false),
  )

  const toggleAccordion = (index: number) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = [...prevOpenItems]
      newOpenItems[index] = !newOpenItems[index]
      return newOpenItems
    })
  }

  return (
    <section className="container mb-10 mt-28">
      <Title text="Sobre" />
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        <article className="w-full xl:w-[45.5rem]">
          <h2 className="text-2xl font-semibold leading-9 text-zinc-50">
            Estamos moldando o futuro a cada
          </h2>
          <p className="mt-6 leading-8 text-zinc-50">
            Você esta preste a embarcar em uma jornada de{' '}
            <span className="text-primary-400">
              auto descoberta e transformação
            </span>{' '}
            que vai tranformar todas as suas perspectivas com relação tecnologia{' '}
            <span className="text-primary-400">Somos arquitetos digitais</span>,
            que desafiam o limite do possível{' '}
            <span className="text-primary-400">
              A criativdade é nossa ferramenta principal
            </span>{' '}
            O ciberespaço e nosso campo de batalha{' '}
            <span className="text-primary-400">
              Seja bem vindo ao mundo da Hiskra, onde a única constante e
              inovacão e as oportunidades são ilimitadas
            </span>
            .
          </p>
          <Image
            width={688}
            height={337}
            alt="Picture of a computer on a table"
            src={'/About02.png'}
            className="mt-5 xl:m-0 xl:hidden xl:w-[416px]"
          />
          <div className="mt-4 hidden grid-cols-2 gap-4 sm:grid">
            <article className="rounded border border-primary-400 p-4 pl-0 text-zinc-50 transition-all duration-500 ease-out sm:border-none">
              <div className="flex items-center justify-between">
                <figure className="flex items-center gap-4">
                  <BiSolidRocket className="h-8 w-8 text-primary-400" />
                  <h2 className="font-bold">Missão</h2>
                </figure>
              </div>
              <p className="mt-5 leading-8 transition-all duration-500 ease-out">
                Nossa missão é criar um{' '}
                <span className="text-primary-400">espaço colaborativo</span>{' '}
                que permita a cada membro do grupo{' '}
                <span className="text-primary-400">
                  aprender, crescer e compartilhar experiências
                </span>{' '}
                no mundo do desenvolvimento web. Unindo nossas habilidades e
                conhecimentos, buscamos{' '}
                <span className="text-primary-400">
                  superar os desafios e impulsionar o potencial
                </span>{' '}
                de cada indivíduo, promovendo o desenvolvimento pessoal e
                coletivo.
              </p>
            </article>
            <article className="rounded border border-primary-400 pt-4 text-zinc-50 transition-all duration-500 ease-out sm:border-none">
              <div className="flex items-center justify-between">
                <figure className="flex items-center gap-4">
                  <IoEyeSharp className="h-8 w-8 text-primary-400" />
                  <h2 className="font-bold">Visão</h2>
                </figure>
              </div>
              <p className="mt-5 leading-8 transition-all duration-500 ease-out">
                Somos um grupo{' '}
                <span className="text-primary-400">
                  voluntário sem fins lucrativos
                </span>
                , buscando projetos impactantes na sociedade, valorizando
                soluções inovadoras e inclusivas. Unindo apaixonados pelo
                desenvolvimento web, incentivamos a troca de conhecimento e
                trabalho em equipe para um{' '}
                <span className="text-primary-400">
                  futuro digital promissor
                </span>
                . Junte-se a nós e cresça pessoal e profissionalmente.
              </p>
            </article>
          </div>
          <article className="mt-10 hidden rounded border border-primary-400 text-zinc-50 transition-all duration-500 ease-out sm:block sm:border-none">
            <div className="flex items-center justify-between">
              <figure className="flex items-center gap-4">
                <AiFillLike className="h-8 w-8 text-primary-400" />
                <h2 className="font-bold">Valores</h2>
              </figure>
            </div>
            <p className="mt-5 leading-8 transition-all duration-500 ease-out">
              Somos movidos pela paixão pela tecnologia, comprometidos com a
              colaboração, o aprendizado contínuo e o impacto positivo na
              comunidade. Valorizamos a{' '}
              <span className="text-primary-400">
                inovação, a acessibilidade e a inclusão
              </span>
              , mantendo um{' '}
              <span className="text-primary-400">
                ambiente acolhedor, respeitoso e colaborativo
              </span>{' '}
              para todos os membros.
            </p>
          </article>
        </article>
        <Image
          width={416}
          height={780}
          alt="Picture of a computer on a table"
          src={'/about.png'}
          className="hidden bg-cover xl:block"
        />

        {AboutMock.map((about) => (
          <AboutMobileAccordion
            key={about.id}
            text={about.text}
            title={about.title}
            icon={about.icon}
            open={openItems[about.id]}
            onClick={() => toggleAccordion(about.id)}
          />
        ))}
      </div>
    </section>
  )
}
