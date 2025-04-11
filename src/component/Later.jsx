export default function Later() {
  return (
    <section className='w-full my-10'>
      <div className='shadow-md w-full max-w-md mx-auto p-4'>
        <div>
          <h2 className='text-xl font-bold text-center py-2 uppercase md:text-2xl'>
            subscribe to our newsletter
          </h2>
          <p className='text-sm py-4 text-center md:text-base'>
            Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className='flex justify-center p-1 my-3 mb-10'>
          <input 
            type="text" 
            placeholder="Email address" 
            className='py-2 px-4 ring-1 rounded ring-slate-200 w-full max-w-xs'
          />
          <button className='bg-indigo-700 text-slate-200 rounded px-4 py-2 text-lg ring-slate-200 ring-1 capitalize hover:bg-indigo-800 transition-colors'>
            subscribe
          </button>
        </div>
      </div>
      <div>
        <SecondCard/>
      </div>
    </section>
  )
}

export function SecondCard() {
  return (
    <div className='mt-10'>
      <img 
        className='w-11/12 max-w-4xl object-cover h-16 mx-auto md:h-24 lg:h-32' 
        src="https://websitedemos.net/creative-blog-02/wp-content/uploads/sites/916/2021/07/short-add-01.jpg" 
        alt=""
      />
    </div>
  )
}

export function MenuCard() {
  return (
    <div className='py-10'>
      <div className='flex flex-col justify-between items-center'>
        <ul className='grid grid-cols-3 text-blue-500 underline justify-between gap-5 md:grid-cols-6 md:gap-4'>
          {['Design', 'Film', 'Photography', 'Digital', 'Contact', 'About'].map((item) => (
            <li key={item}>
              <a href="#" className='hover:text-blue-700 transition-colors'>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex justify-center gap-4 mt-8'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className='w-8 h-8 bg-gray-200 rounded-full'></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function EmailCard() {
  return (
    <div className='border border-gray-300 rounded-lg max-w-md w-full mx-auto my-10 p-6'>
      <h2 className='text-xl py-3 px-2 capitalize text-center'>
        sign up to receive email updates, fresh news and more!
      </h2>	
      <form className='flex flex-col sm:flex-row gap-2 justify-center my-2 p-1'>
        <input 
          type="text" 
          placeholder='email address' 
          className='py-2 px-4 text-md capitalize ring-1 rounded ring-gray-300 w-full'
        />
        <button className='bg-indigo-500 py-2 uppercase ring-1 rounded text-slate-200 px-4 hover:bg-indigo-600 transition-colors'>
          subscribe 
        </button>
      </form>
    </div>
  )
}