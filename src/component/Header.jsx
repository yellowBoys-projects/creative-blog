import HeroImg from "../assets/home-hero-img.jpg";
import Patten from "../assets/dotted-pattern.png";
import Categories_04 from "../assets/tall-ad-01.jpg";
import Later, { MenuCard, EmailCard } from "./Later.jsx";
import Layout from "./Layout.jsx";
import { CategoriesCard, PodcastsCard } from "./Card.jsx";

export default function HomePage() {
  return (
    <section>
      <div>
        <Layout />
      </div>
      <div>
        <Contnet />
      </div>
      <div className='my-5'>
        <Later />
      </div>
      <div>
        <section className=''>
          <div className="grid gap-5 xl:grid-cols-4 mx-5 justify-center items-center my-5 ">
            <CategoriesCard
              img="data:image/jpeg;base64,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"
              name="design"
            />
            <CategoriesCard
              img="data:image/jpeg;base64,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"
              name="worker"
            />
            <CategoriesCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGnvVpESw9kg-TyxB_av1h6z4xLaG_hIDAQ&s"
              name="guest house "
            />
            <CategoriesCard img={Categories_04} name="" />
          </div>
          <button className=" ml-24 capitalize bg-indigo-500 font-bold  text-white text-lg py-2 px-2  rounded-md">
            explore them all
          </button>
        </section>
      </div>

      <div>
        <section className="my-10">
          <div className="grid gap-5 xl:grid-cols-4 mx-5 justify-center  items-center">
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

            <PodcastsCard img={Categories_04} alt="..." />
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
  );
}

function Contnet() {
  return (
    <div className="my-10 w-screen m-auto md:flex justify-between items-center">
      <div className="flex flex-col">
        <div className='text-center'>
          <b className='text-sm'>help and support the creative community</b>
          <h1 className='text-2xl font-semibold uppercase py-2'>we are creative80</h1>
          <p className='text-center text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button>read articles</button>
        </div>

        <div className="mt-20 hidden">
          <img className="" src={Patten} alt="" />
        </div>
      </div>

      <div className='pt-5'>
        <img className="size-80 mx-auto rounded" src={HeroImg} alt="" />
      </div>
    </div>
  );
}
