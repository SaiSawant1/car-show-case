import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl flex-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter /*  title="fuel" */ />
            <CustomFilter /* title="year" */ />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>We have cars</section>
        ) : (
          <div>
            <h2>
              We have no cars
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
