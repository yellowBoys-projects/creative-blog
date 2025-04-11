// Categories Card
export function CategoriesCard(props) {
  return (
    <div className='group bg-indigo-500 w-full sm:w-80 md:w-48 h-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto'>
      <div className='relative'>
        <img 
          className='w-full h-60 sm:h-80 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105' 
          src={props.img} 
          alt={props.alt}
          loading='lazy'
        />
        <span className='absolute bottom-4 inset-x-0 uppercase tracking-widest text-center text-white font-semibold text-2xl sm:text-3xl md:text-xl px-2 drop-shadow-md'>
          {props.name}
        </span>
      </div>
    </div>
  )
}

// Podcasts Card
export function PodcastsCard(props) {
  return (
    <div className='w-full sm:w-80 md:w-48 h-auto rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white mx-auto'>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-2/3 p-3 sm:p-2 md:p-3'>
          <a 
            className='text-xl sm:text-2xl md:text-sm font-medium capitalize text-blue-600 hover:text-blue-800 transition-colors duration-200 line-clamp-2' 
            href={props.link}
          >
            {props.name}
          </a>
          <p className='mt-2 sm:mt-5 md:mt-3 text-lg sm:text-xl md:text-sm text-gray-600'>Episode {props.number}</p>
        </div>
        <div className='w-full sm:w-1/3 overflow-hidden'>
          <img 
            className='w-full h-24 sm:h-full object-cover sm:rounded-bl-full' 
            src={props.img} 
            alt={props.alt}
            loading='lazy'
          />
        </div>
      </div>
      <p className='px-3 pb-3 text-base sm:text-lg md:text-sm text-gray-700 line-clamp-3 sm:line-clamp-4'>
        {props.para}
      </p>
    </div>
  )
}