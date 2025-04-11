


//categories card

export  function CategoriesCard(props) {
	return (
		<div className='bg-indigo-500 w-80 h-auto md:w-48 '>
		<div className=' max-w-full relative '>
				<img className='w-full h-80  bg-cover object-cover ' src={props.img} alt={props.alt}/>
			<span className='absolute bottom-10 right-0 left-0 uppercase tracking-widest  text-center text-white font-semibold text-4xl md:text-xl'>{props.name}</span>
		</div>
		</div>
	)
}


//podcasts card

export  function PodcastsCard(props) {
	return (
<div className='w-80 h-auto ring-1 ring-slate-300 shadow-sm md:w-48 '>
<div className='border-1 rounded-2xl shadow-xl border-gray-300'>
	<div className='flex '>
		
<div className='w-2/3 p-3'>
	<a className='text-2xl  capitalize text-blue-500 md:text-sm' href={props.link}>{props.name}</a>
	<p className='mt-5 text-xl md:text-sm md:mt-3'>episode {props.number}</p>
</div>
<div className='  rounded-bl-full '>
	<img className='rounded-bl-full w-100 object-center md:w-100 md:h-28 ' src={props.img} alt={props.alt}/>
</div>
	</div>

	<p className='text-justify px-2 text-lg md:text-sm'>{props.para}</p>
</div>
<span></span>
	
</div>	
	
	)
}

