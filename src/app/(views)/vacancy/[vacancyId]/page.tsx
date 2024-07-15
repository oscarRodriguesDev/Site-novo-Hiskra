import { VacancyMock } from '@/mocks/VacancyMock'
import VacancyCardPage from '@/app/components/VacancyDetailsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JDG | Vagas',
  description: 'Generated by create next app',
}

export default function Vacancy() {
  return (
    <VacancyCardPage
      id={VacancyMock.id}
      title={VacancyMock.title}
      techs={VacancyMock.techs}
      date={VacancyMock.createdAt}
      category={VacancyMock.category}
      description={VacancyMock.description}
    />
  )
}
