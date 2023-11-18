'use client';

import Image from 'next/image';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Splide css is added in globals.css, no need to add it here as css styles are global.

import { highlights } from '../constants/highlights.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Highlights = () => {
  return (
    <section className="w-full flex-row justify-center gap-10 max-container relative">
      <div>
        <h1 className="section-title ml-12">Last Year Highlights</h1>
      </div>
      <Splide
        hasTrack={false}
        aria-label="Last Year Highlights"
        options={{
          perMove: '1',
          autoWidth: true,
          fixedHeight: '400px',
          gap: '2rem',
          pagination: false,
          perPage: 2,
          type: 'loop',
          autoplay: true,
          breakpoints: {
            1024: {
              perPage: 2,
              fixedHeight: '250px',
            },
            480: {
              fixedHeight: '170px',
              perPage: 1,
            },
          },
        }}
      >
        <SplideTrack>
          {highlights.map((slide, index) => (
            <SplideSlide
              key={index}
              className="flex flex-col glass-container gap-4 rounded-3xl"
            >
              <Image
                src={slide.imageUrl}
                alt={slide.alt}
                className="rounded-3xl w-auto h-full object-cover"
              />
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows absolute bottom-10 right-20 md:bottom-[120%] md:right-24 text-white">
          <button
            style={{
              marginLeft: '-50px',
            }}
            className="splide__arrow splide__arrow--prev"
          >
            <FontAwesomeIcon icon={faArrowRight} color="#FDD200" />
          </button>
          <button
            style={{
              marginRight: '-90px',
            }}
            className="splide__arrow splide__arrow--next"
          >
            <FontAwesomeIcon icon={faArrowRight} color="#FDD200" />
          </button>
        </div>
      </Splide>
    </section>
  );
};

export default Highlights;
