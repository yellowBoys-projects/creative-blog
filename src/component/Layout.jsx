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
		<div className='  w-full text-center py-3 px-4 lg:py-7 hidden md:block '>
		<a href='#' className='text-2xl lg:text-3xl  uppercase font-semibold hover:text-indigo-600 transition-colors duration-200 lg:text-3xl xl:text-4xl '>the creative80 room</a>	
		</div>
		)
}

function MenuComponent() {
  return (
    <nav className='border-b-2 lg:border-2 border-red-600 md:border-b-1 w-full py-4 px-4 sm:py-5 sm:px-6 md:py-6 lg:px-8'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <a 
          href="#" 
          className='text-xl font-semibold uppercase tracking-tight md:text-base lg:text-xl xl:text-2xl text-gray-900 hover:text-red-600 transition-colors'
        >
          the creative80 room
        </a>

        {/* Mobile Menu Button */}
        <button className='md:hidden p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'>
          <img 
            className='w-8 h-8' 
            src={MENUICON} 
            alt="Menu" 
          />
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-1 lg:space-x-4 xl:space-x-6'>
          <ul className='flex items-center space-x-3 text-sm lg:text-base xl:text-lg capitalize'>
            {['design', 'film', 'advertising', 'photography', 'digital', 'podcasts', 'about', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className='px-2 py-1 text-gray-700 hover:text-red-600 transition-colors'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-bold uppercase text-sm lg:text-base transition-colors ml-4'>
            subscription
          </button>
        </div>
      </div>
    </nav>
  )
}