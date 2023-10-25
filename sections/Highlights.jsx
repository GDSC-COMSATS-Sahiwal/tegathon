"use client";

import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { highlights } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="w-full flex-row justify-center gap-10 max-container relative"
    >
      <div>
        <h1 className="section-title ml-12">Last Year Highlights</h1>
      </div>
      <Splide
        hasTrack={false}
        aria-label="Last Year Highlights"
        options={{
          fixedHeight: "400px",
          cover: true,
          width: "100%",
          gap: "2rem",
          pagination: false,
          perPage: 2,
          type: "loop",
          autoplay: true,
          breakpoints: {
            1024: {
              perPage: 2,
              fixedHeight: "250px",
            },
            480: {
              fixedHeight: "200px",
              perPage: 1,
            },
          },
        }}
      >
        <SplideTrack>
          {highlights.map((slide) => (
            <SplideSlide
              key={slide.imageUrl}
              className="flex flex-col glass-container gap-4 rounded-3xl"
            >
              <Image
                src={slide.imageUrl}
                alt={slide.alt}
                fill={true}
                className="aspect-ratio object-contain rounded-3xl "
              />
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows absolute bottom-10 right-20 md:top-[-130%] md:bottom[130%] md:right-24">
          <button
            style={{
              border: "1px solid #FDD200",
              borderRadius: "18px",
              background: "rgba(0, 0, 0, 0.50);",
              backdropFilter: "blur(50px);",
              padding: "1.5rem",
              opacity: "1",
              width: "24px",
              marginRight: "-12px",
            }}
            className="splide__arrow splide__arrow--next"
          >
            <FontAwesomeIcon icon={faArrowLeft} color="#FDD200" />
          </button>
          <button
            style={{
              border: "1px solid #FDD200",
              borderRadius: "18px",
              background: "rgba(0, 0, 0, 0.50);",
              backdropFilter: "blur(50px);",
              padding: "1.5rem",
              opacity: "1",
              width: "24px",
            }}
            className="splide__arrow splide__arrow--prev"
          >
            <FontAwesomeIcon icon={faArrowLeft} color="#FDD200" />
          </button>
        </div>
      </Splide>
    </section>
  );
};

export default Highlights;
