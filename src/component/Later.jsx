
export default  function Later() {
	return (
		<section className=' w-full my-10'>
			
		<div className='shadow-md w-fit mx-auto '>
		<div>
			<h2 className='text-xl  font-bold text-center py-2 uppercase md:text-2xl'>subscribe to our newsletter</h2>
			<p className='text-sm py-4 w-80 mx-auto text-center md:text-xl md:w-full'>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
		</div>
		<div className='  flex justify-center p-1 my-3 mb-10'>
			<input type="text" placeholder="Email address" className='py-2 ring-1 rounded  ring-accent-slate-200  '/>
			<button className='bg-indigo-700 text-slate-200 rounded   px-2 py-2 text-lg ring-accent-slate-200 ring-1  capitalize'>subscribe</button>
		</div>
		</div>
		<div>
			<SecondCard/>
		</div>
		</section>

	)
}

export function SecondCard(){
	return(
		<div className=' mt-10'>
		<img className='w-11/12 object-cover h-16 mx-auto' src="https://websitedemos.net/creative-blog-02/wp-content/uploads/sites/916/2021/07/short-add-01.jpg" alt=""/>
		</div>
		)
}

export function MenuCard(){
	return(
		<div className=''>
			<div className='flex flex-col justify-between items-center '>
				<ul className='grid grid-cols-3 text-blue-500 underline justify-between  gap-5 md:grid-cols-6 md:gap-4'>
					<li><a href="#">Design</a></li>
					<li><a href="#">Film</a></li>
					<li><a href="#">photography</a></li>
					<li><a href="#">Digital</a></li>
					<li><a href="#">contact</a></li>
					<li><a href="#">About</a></li>

				</ul>
				<ul className='border-2'>
					<li><img src="" alt=""/></li>
					<li><img src="" alt=""/></li>
					<li><img src="" alt=""/></li>
					<li><img src="" alt=""/></li>
					<li><img src="" alt=""/></li>
					<li><img src="" alt=""/></li>

				</ul>
			</div>
		</div>
		)
}

export function EmailCard(){
	return(
		<div className='  border-gray-300   w-80 mx-auto my-10'>
		<h2 className='text-xl py-3 px-2 capitalize text-center'>sign up to receive email updates, fresh news and more!</h2>	
		<form action="" className='flex justify-center my-2 p-1'>
			<input type="text" placeholder='email address' className='py-2 text-md capitalize ring-1 rounded  '/>
			<button className='bg-indigo-500  py-2 uppercase ring-1 rounded text-slate-200 px-1 '>subscribe </button>
		</form>
		</div>
		)
}