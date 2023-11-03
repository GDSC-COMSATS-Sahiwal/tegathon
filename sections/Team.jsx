"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Image from "next/image";
import { teamMembers } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  return (
    <section
      id="team"
      className="w-full flex-row justify-center gap-10 max-container relative"
    >
      <div>
        <h1 className="section-title ml-12">Our Team</h1>
      </div>
      <Splide
        hasTrack={false}
        aria-label="Our Team"
        options={{
          perMove: "1",
          width: "100%",
          gap: "2rem",
          pagination: false,
          perPage: 4,
          type: "loop",
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
                      : "/sections/team/placeholder.jpg"
                  }
                  alt={member.name}
                  width={280}
                  height={280}
                  className="rounded-3xl border border-[#FDD200] h-[280px] w-auto object-cover object-top"
                />
                <h3 className="md:text-4xl text-3xl font-bold sm:font-black text-[#FDD200]">
                  {member.name}
                </h3>
                <p className="text-white">{member.description}</p>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows absolute bottom-[2.15rem] right-20 md:top-[-130%] md:bottom[130%] md:right-24">
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
        </div>
      </Splide>
    </section>
  );
};

export default Team;
