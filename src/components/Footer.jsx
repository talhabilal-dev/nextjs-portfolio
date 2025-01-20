import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 text-white" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/svg/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="heading lg:max-w-[45vw] text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-300">
        Crafting Solutions with Precision, Power, and Purpose.
        </p>
        <p className=" md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
            href="mailto:m.talha.bilal.dev@gmail.com"
            className="mt-5"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-transparent text-black dark:text-white flex items-center space-x-2 w-[200px] h-12 justify-center p-2.5"
              duration={1}
              
            >
              <span>Let&apos;s get in touch
               
              </span>
              <FaLocationArrow/>
            </HoverBorderGradient>
          </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          &copy; {new Date().getFullYear()} Talha Bilal | All rights reserved
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <a
              href="https://github.com/talhabilal-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <a
              href="https://www.linkedin.com/in/muhammad-talha-bilal-965992322/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="text-2xl" />
            </a>
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <a
              href="https://www.facebook.com/TBtech18/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
