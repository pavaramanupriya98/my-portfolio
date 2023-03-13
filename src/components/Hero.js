import React from "react";
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMediumCircle} from "react-icons/ai";
import heroImg from '../assets/images/pavara-hero-image.png';

function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Pavara Manupriya
        </h2>
        <h3 className="text-center py-2 md:text-3xl">Software Engineer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
          Final year undergraduate with 1+ years industry experience. Join me
          down below and let's get cracking!
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a
            href="https://www.linkedin.com/in/pavara-manupriya/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className='hover:text-teal-500' />
          </a>
          <a
            href="https://github.com/pavaramanupriya98"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <AiFillGithub  className='hover:text-teal-500' />
          </a>
          <a
              href="https://medium.com/@pavara.18"
              target={"_blank"}
              rel="noopener noreferrer"
          >
            <AiFillMediumCircle className='hover:text-teal-500' />
          </a>
          <a
            href="https://www.instagram.com/_manuu_98_/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <AiFillInstagram className='hover:text-teal-500' />
          </a>
        </div>
        <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-14 md:h-96 md:w-96">
          <img
            src={heroImg}
            objectfit="cover"
            alt="pavara"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
