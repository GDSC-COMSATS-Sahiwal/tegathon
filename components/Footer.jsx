import FooterLogo from "../public/sections/footer/footer-logo.webp";
import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// import { RiTwitterXLine } from "react-icons/ri";
import { ImHeart } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-cover bg-center bg-[url('../public/sections/footer/bg-footer.webp')] padding">
      <div className="w-full max-container grid gap-8 md:grid-cols-2 place-items-center">
        {/* Footer Img */}
        <div className="flex w-full items-center justify-center md:justify-start">
          <Image
            priority={true}
            src={FooterLogo}
            alt="tegathon logo"
            width={400}
            height={400}
          />
        </div>
        {/* Socials & Copyright Container */}
        <div className="text-yellow-400 md:justify-self-end ">
          <div className="space-y-4 md:space-y-8 w-full">
            {/* Socials */}
            <div className="flex items-center md:items-end gap-2 flex-col">
              <p>Follow Us:</p>
              <div className="flex text-lg items-center gap-4">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/gdsc-comsats-sahiwal/"
                >
                  <FiLinkedin />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/gdsccuiswl/"
                >
                  <FiInstagram />
                </Link>
                {/* <Link href="">
                  <RiTwitterXLine />
                </Link> */}
                <Link
                  target="_blank"
                  href="https://chat.whatsapp.com/DUS1YV1lmqbGRZTkFJYOBS"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
            {/* Copyright */}
            <div>
              <p>
                Made with{" "}
                <span className=" inline-flex text-red-500">
                  <ImHeart />
                </span>{" "}
                for Tegathon. <br /> &copy; 2023 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
