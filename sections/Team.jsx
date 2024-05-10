'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Image from 'next/image';
import { teamMembers } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
  return (
    <section className="w-full flex-row justify-center gap-10 max-container relative">
      <div>
        <h1 className="section-title ml-12">Our Team</h1>
      </div>
      <Splide
        hasTrack={false}
        aria-label="Our Team"
        options={{
          perMove: '1',
          width: '100%',
          gap: '2rem',
          pagination: false,
          perPage: 4,
          type: 'loop',
          autoplay: true,
          breakpoints: {
            1024: {
              perPage: 3,
            },
            768: {
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
              flex flex-col gap-4 p-5 glass-container rounded-3xl"
              >
                <Image
                  src={
                    member.imageUrl
                      ? member.imageUrl
                      : '/sections/team/placeholder.jpg'
                  }
                  alt={member.name}
                  width={280}
                  height={280}
                  className="rounded-3xl border border-[#FDD200] h-[280px] w-auto object-cover object-top"
                />
                <div className="flex flex-col gap-0">
                  <p className="md:text-[40px] text-3xl font-bold sm:font-black text-[#FDD200]">
                    {member.name.split(' ')[0]}
                  </p>
                  <p className="md:text-[40px] text-3xl font-bold sm:font-black text-[#FDD200]">
                    {member.name.split(' ')[(1, 3)]}
                  </p>
                </div>
                <p className="text-white">{member.description}</p>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows absolute bottom-[2.15rem] right-20 md:bottom-[110%] md:right-24">
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

export default Team;
