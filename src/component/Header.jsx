import HeroImg from "../assets/home-hero-img.jpg";
import Patten from "../assets/dotted-pattern.png";
import Categories_04 from "../assets/tall-ad-01.jpg";
import Later, { MenuCard, EmailCard } from "./Later.jsx";
import Layout from "./Layout.jsx";
import { CategoriesCard, PodcastsCard } from "./Card.jsx";

export default function HomePage() {
  return (
    <section className=''>
      <div>
        <Layout />
      </div>
      <div>
        <Content />
      </div>
      <div className='my-5'>
        <Later />
      </div>
      <div>
        <section className='text-center'>
          <div className="grid gap-5 xl:grid-cols-4 mx-5 justify-center items-center my-5 md:grid-cols-4 md:mx-0">
            <CategoriesCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGnvVpESw9kg-TyxB_av1h6z4xLaG_hIDAQ&s"
              name="design"
            />
            <CategoriesCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGnvVpESw9kg-TyxB_av1h6z4xLaG_hIDAQ&s"
              name="worker"
            />
            <CategoriesCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGnvVpESw9kg-TyxB_av1h6z4xLaG_hIDAQ&s"
              name="guest house"
            />
            <CategoriesCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGnvVpESw9kg-TyxB_av1h6z4xLaG_hIDAQ&s"
              name="redesign"
            />
          </div>
          <button className="capitalize text-slate-100 font-bold bg-indigo-500 rounded p-[10px] hover:bg-indigo-600 transition-colors duration-200">
            explore them all
          </button>
        </section>
      </div>

      <div>
        <section className="my-10">
          <div className="grid gap-5 xl:grid-cols-4 mx-5 justify-center items-center md:grid-cols-2 lg:grid-cols-4 md:mx-0">
            <PodcastsCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8J9QY1QsByAuNuZN5IB0vrDDjLWnxQesJw&s"
              alt="..."
              name="jennify oliver"
              number="50"
              para="jennifer oliver talks about magna aliquaa enim ad minim veniam quis nostrud"
            />
            <PodcastsCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8J9QY1QsByAuNuZN5IB0vrDDjLWnxQesJw&s"
              alt="..."
              name="jennify oliver"
              number="50"
              para="jennifer oliver talks about magna aliquaa enim ad minim veniam quis nostrud"
            />
            <PodcastsCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8J9QY1QsByAuNuZN5IB0vrDDjLWnxQesJw&s"
              alt="..."
              name="jennify oliver"
              number="50"
              para="jennifer oliver talks about magna aliquaa enim ad minim veniam quis nostrud"
            />
            <PodcastsCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8J9QY1QsByAuNuZN5IB0vrDDjLWnxQesJw&s"
              alt="..."
              name="jennify oliver"
              number="50"
              para="jennifer oliver talks about magna aliquaa enim ad minim veniam quis nostrud"
            />
          </div>
        </section>
      </div>
      <div>
        <MenuCard />
      </div>
      <div>
        <EmailCard />
      </div>
    </section>
  )
}

function Content() {
  return (
    <div className="my-10 w-full m-auto md:flex">
      <div className="flex flex-col md:w-1/2">
        <div className='text-center py-10 md:py-20 px-4'>
          <b className='text-sm'>help and support the creative community</b>
          <h1 className='text-3xl font-semibold uppercase py-2 md:text-4xl lg:text-5xl text-neutral-600'>
            we are creative80
          </h1>
          <p className='text-center text-md md:text-lg px-4 md:px-10 lg:px-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mt-4 bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition-colors duration-200">
            read articles
          </button>
        </div>

        <div className="mt-10 hidden md:block">
          <img className="w-full" src={Patten} alt="" />
        </div>
      </div>

      <div className='pt-5 md:w-1/2 flex justify-center'>
        <img 
          className="w-[330px] h-[330px] mx-auto rounded md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover" 
          src={HeroImg} 
          alt="" 
        />
      </div>
    </div>
  )
}