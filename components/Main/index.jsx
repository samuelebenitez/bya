export default function Main() {
  return (
    <div className="w-screen flex bg-hero bg-cover bg-no-repeat md:bg-secondary py-12 md:py-0">
      <main
        className="flex flex-col md:gap-6 justify-evenly items-center w-full md:w-1/2 h-screen md:bg-secondary   
       md:px-12 md:py-28 px-4  "
      >
        <p className=" text-secondary md:text-title font-bold uppercase font-sans tracking-wider">
          De barro y amor
        </p>
        <h1 className="text-secondary md:text-title font-light md:text-2xl font-serif text-center leading-loose w-full md:w-2/3 tracking-wider ">
          Cerámica artesanal hecha con amor
        </h1>
        <h2 className="text-secondary md:text-title font-light text-md font-sans text-center md:w-1/2  w-full ">
          Objetos únicos, hechos especialmente para convivir en la armonía de tu
          hogar
        </h2>
        <svg
          className="animate-bounce"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7929 22.7071C17.4024 22.3166 17.4024 21.6834 17.7929 21.2929C18.1834 20.9024 18.8166 20.9024 19.2071 21.2929L25.5 27.5858L31.7929 21.2929C32.1834 20.9024 32.8166 20.9024 33.2071 21.2929C33.5976 21.6834 33.5976 22.3166 33.2071 22.7071L26.2071 29.7071C25.8166 30.0976 25.1834 30.0976 24.7929 29.7071L17.7929 22.7071Z"
            fill=" #c89a8a"
          />
          <rect
            x="1.5"
            y="1.5"
            width="48"
            height="48"
            rx="24"
            stroke=" #c89a8a"
            strokeWidth="2"
          />
        </svg>
      </main>
      <div
        className=" hidden md:block md:bg-hero w-1/2 md:bg-cover   md: bg-no-repeat  rounded-full "
        style={{ backgroundPosition: "0px -120px" }}
      ></div>
    </div>
  );
}
