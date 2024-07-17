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
            Você está prestes a embarcar em uma jornada de{' '}
            <span className="text-primary-400">
              auto descoberta e transformação
            </span>{' '}
            que vai transformar todas as suas perspectivas com relação à tecnologia.{' '}
            <span className="text-primary-400">Somos arquitetos digitais</span>,
            que desafiam o limite do possível.{' '}
            <span className="text-primary-400">
              A criatividade é nossa ferramenta principal
            </span>. O ciberespaço é nosso campo de batalha.{' '}
            <span className="text-primary-400">
              Seja bem-vindo ao mundo da Hiskra, onde a única constante é
              inovação e as oportunidades são ilimitadas
            </span>.
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
                Nossa missão é desenvolver{' '}
                <span className="text-primary-400">soluções tecnológicas inovadoras</span>{' '}
                que simplifiquem o cotidiano das pessoas. Criamos sites, sistemas e aplicativos web e mobile de alta qualidade, além de oferecer consultoria em adequação à LGPD, criação de logos e identidades visuais, e serviços de registro de marca e patentes. Buscamos{' '}
                <span className="text-primary-400">
                  solucionar problemas que impedem o avanço
                </span>{' '}
                de nossos clientes, contribuindo para um mundo mais conectado e eficiente.
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
                Ser reconhecida como a principal fonte geradora de inovação e tecnologia no Brasil, sendo referência nacional e internacional no setor. Almejamos transformar a maneira como as pessoas implementam tecnologia, criando produtos únicos e impactantes que posicionem nossa empresa como líder no mercado, semelhante à Microsoft.
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
              1. Acreditamos que qualquer pessoa pode lidar com tecnologia desde que seja utilizada da forma correta 
              2. Esperamos que nossos colaboradores se sintam valorizados dentro de nossa organização de forma que esse sentimento se expanda a nossos clientes e parceiros.<br/>
              3. Nossas qualidades são persistência, inovação e busca de novidades.<br/>
              4. Acreditamos que o mundo pode ser um lugar melhor se aliado à tecnologia.
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
