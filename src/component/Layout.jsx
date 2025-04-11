import SVGICON from '../assets/search.svg'
import MENUICON	from '../assets/menu-burger.svg'
export default function Layout() {
	return (
		<section>
			<LogoComponent/>
			<MenuComponent/>
		</section>
			
	)
}

function LogoComponent(){
	return(
		<div className='  w-auto text-center py-4 lg:py-7 hidden md:block '>
		<a href='#' className='text-2xl lg:text-3xl  uppercase font-semibold '>the creative80 room</a>	
		</div>
		)
}

function MenuComponent(){
	return(
		<div className=' border-b-2  md:border-1   border-red-600 flex justify-between items-center w-screen py-5 md:py-6 sm:py-5 px-7 md:px-0 lg:px-0'>
			<a href="" className=' text-xl md:text-sm  lg:text-xl font-semibold uppercase '>the creative80 room</a>
			<button className='md:hidden'><img className='size-8 sm:size-8 bg-white ' src={MENUICON} alt=""/></button>
			
			<div className='hidden md:block'>
				<ul className='  flex md:text-[13px] lg:text-lg md:gap-2  capitalize ml-7 md:ml-0 '>
					<li><a href="">design</a></li>
					<li><a href=""></a>flim</li>
					<li><a href=""></a>advertising</li>
					<li><a href=""></a>photography</li>
					<li><a href=""></a>digital</li>
					<li><a href=""></a>podcasts</li>
					<li><a href=""></a>about</li>
					<li><a href=""></a>contact</li>


				</ul>
			</div>
			<div className='hidden md:block'>
				<button className='bg-red-500 px-4 py-2 md:px-1 md:py-2	rounded mr-5 md:mr-3 text-white font-bold uppercase'>subcribtion</button>
			</div>
		</div>
		)
}