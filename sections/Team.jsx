'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Image from 'next/image';
import { teamMembers } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
  return (
    <section
      id="team"
      className="w-full flex-row justify-center gap-10 max-container relative"
    >
      <div>
        <h1 className="lg:text-[5.5rem] text-4xl ml-12 mb-16 font-black text-white">
          Our Team
        </h1>
      </div>
      <Splide
        hasTrack={false}
        aria-label="Our Team"
        options={{
          width: '100%',
          gap: '2rem',
          pagination: false,
          perPage: 4,
          type: 'loop',
          autoplay: true,
          breakpoints: {
            640: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideTrack>
          {teamMembers.map((member, index) => (
            <SplideSlide key={index}>
              <div
                className="
              flex flex-col gap-4 p-5 bg-black/25 bg-opacity-25 shadow-md backdrop-blur-md backdrop-filter border border-opacity-25 border-[#FDD200] rounded-3xl"
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={280}
                  height={280}
                  className="rounded-3xl border border-[#FDD200]"
                />
                <h3 className="text-3xl font-black text-[#FDD200]">
                  {member.name}
                </h3>
                <p className="text-white">{member.description}</p>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows absolute bottom-8 right-16 md:top-[-140%] md:bottom[140%] md:right-24">
          <button className="splide__arrow splide__arrow--prev">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <FontAwesomeIcon icon={faArrowRight} rotation={180} />
          </button>
        </div>
      </Splide>
    </section>
  );
};

export default Team;
