import CardProjects from '../CardProject'
import emBreve from '@/assets/breve.png'
import escolaReal from '@/assets/escola-real.png'
import redeSocial from '@/assets/rede-social.png'
import CardProjectContainer from '../CardProjectContainer'
import clinicaVeterinaria from '@/assets/clinica-veterinaria.png'
import Title from '../Title'
import { getData } from '@/utils/data'
import { ProductAndServicesProps } from '@/types'



export default async function Projects() {

  const urlapi = `${process.env.API_URL}objects/665686aeb6cce150ff0983b0?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`;
  const data: ProductAndServicesProps | null = await getData({ url_api: urlapi });


  if (!data || !data.object || !data.object.metadata) {
    console.error("Failed to fetch or parse data");
    return (
      <div className="relative pb-16">

        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Meus Projetos
            </h2>
            <p className="mt-4 text-zinc-400">
              Não foi possível carregar os projetos. Por favor, tente novamente mais tarde.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const produtos = data.object.metadata.produto;

  return (
    <div className="relative pb-16">


      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-zinc-400">
            Confira alguns projetos desevolvidos pela hiskra:
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-9 p-6 bg-gray-900">
          {produtos.map((item) => (
            <div
              className="bg-gray-800 rounded-lg p-4 w-64 text-center shadow-lg transform transition duration-200 hover:scale-105"
              key={item.link}
            >
              <h1 className="text-white text-2xl mb-4">{item.product_name}</h1>
              <a href={item.link} target='blank'>
                <img
                  src={item.product_image.url}
                  alt={item.description}
                  className="max-w-full max-h-40 object-contain rounded mb-4"
                />
              </a>
              <p className="text-white text-base">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}


