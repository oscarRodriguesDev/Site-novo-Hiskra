
interface CardProps{
image:string,
link:string,
name:string,
description:string
}

export default function CardProjects({image,link,name,description}:CardProps){
  return(
    <div className="flex flex-wrap justify-center gap-9 p-6 bg-gray-900">
  
      <div
        className="bg-gray-800 rounded-lg p-4 w-64 text-center shadow-lg transform transition duration-200 hover:scale-105">
        <h1 className="text-white text-2xl mb-4">{name}</h1>
        <a href={link} target='blank'>
          <img
            src={image}
            alt={description}
            className="max-w-full max-h-40 object-contain rounded mb-4"
          />
        </a>
        <p className="text-white text-base">{description}</p>
      </div>
  
  </div>
  )
}