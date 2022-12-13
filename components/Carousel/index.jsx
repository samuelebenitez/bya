import foto1 from "../../public/bya.webp";
import { useRef } from "react";
import Card from "../Card";

function Carousel() {
  const slider = useRef();
  const images = [...Array(25).keys()];

  return (
    <div className="flex items-center justify-center w-full h-full gap-2  md:gap-8  ">
      <button
        className=" 
         rounded-full rotate-90"
        onClick={() => (slider.current.scrollLeft -= 200)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7929 22.7071C17.4030 22.3166 17.4024 21.6834 17.7929 21.2929C18.1834 20.9024 18.8166 20.9024 19.2071 21.2929L25.5 27.5858L31.7929 21.2929C32.1834 20.9024 32.8166 20.9024 33.2071 21.2929C33.5976 21.6834 33.5976 22.3166 33.2071 22.7071L26.2071 29.7071C25.8166 30.0976 25.1834 30.0976 24.7929 29.7071L17.7929 22.7071Z"
            fill="#8d371c"
          />
          <rect
            x="1.5"
            y="1.5"
            width="48"
            height="48"
            rx="24"
            stroke="#8d371c"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div
        ref={slider}
        className="snap-x overflow-hidden scroll-smooth h-full flex items-center justify-start gap-8 "
      >
        {images.map((e, i) => (
          <div
            key={i}
            className="snap-start flex flex-shrink-0 w-auto cursor-pointer "
          >
            <img
              src={`https://picsum.photos/id/${i}/250/250`}
              alt={`images${i}`}
              className="object-cover object-center w-full rounded-lg "
            />
          </div>
        ))}
      </div>
      <button
        className="  rounded-full -rotate-90"
        onClick={() => (slider.current.scrollLeft += 200)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7929 22.7071C17.4024 22.3166 17.4024 21.6834 17.7929 21.2929C18.1834 20.9024 18.8166 20.9024 19.2071 21.2929L25.5 27.5858L31.7929 21.2929C32.1834 20.9024 32.8166 20.9024 33.2071 21.2929C33.5976 21.6834 33.5976 22.3166 33.2071 22.7071L26.2071 29.7071C25.8166 30.0976 25.1834 30.0976 24.7929 29.7071L17.7929 22.7071Z"
            fill="#8d371c"
          />
          <rect
            x="1.5"
            y="1.5"
            width="48"
            height="48"
            rx="24"
            stroke="#8d371c"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
