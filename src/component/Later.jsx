
export default  function Later() {
	return (
		<section className=' w-full'>
			
		<div className='shadow-2xl my-5 w-fit mx-auto '>
		<div>
			<h2 className='text-lg font-bold text-center py-2 uppercase'>subscribe to our newsletter</h2>
			<p className='text-sm w-80 mx-auto text-center '>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
		</div>
		<div className='  flex justify-center'>
			<input type="text" placeholder="Email address" className='py-2 '/>
			<button className='bg-indigo-500 px-2 py-2'>subscribe</button>
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
		<div className=' my-5'>
		<img className='w-11/12 object-cover h-16 mx-auto' src="https://websitedemos.net/creative-blog-02/wp-content/uploads/sites/916/2021/07/short-add-01.jpg" alt=""/>
		</div>
		)
}

export function MenuCard(){
	return(
		<div className=''>
			<div className='flex flex-col justify-between items-center mx-3'>
				<ul className='grid grid-cols-3 text-blue-500 underline justify-between  gap-5'>
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
		<div className='border-1 border-gray-300 shadow-xl  w-11/12 mx-auto my-5'>
		<h2 className='text-xl capitalize text-center'>sign up to receive email updates, fresh news and more!</h2>	
		<form action="" className='flex justify-center my-2'>
			<input type="text" placeholder='email address' className='py-2 text-md capitalize'/>
			<button className='bg-indigo-500  py-2 uppercase'>subscribe </button>
		</form>
		</div>
		)
}