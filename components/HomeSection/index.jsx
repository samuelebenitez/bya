import Carousel from "../Carousel";

function HomeSection() {
  return (
    <section className="w-screen flex flex-col bg-secondary py-12  gap-4 md:gap-12 md:px-4 px-4">
      <h1 className="text-title font-light  text-md md:text-3xl font-serif leading-loose w-full md:w-2/3 md:tracking-wider  md:px-24">
        Nuestros productos
      </h1>
      <Carousel />
    </section>
  );
}

export default HomeSection;
