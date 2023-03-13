import React from "react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="text-center pt-36">
        <h2 className="text-4xl py-2 text-teal-600 font-extrabold md:text-6xl underline-offset-8">
          About Me
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-shrink-0">
            <img
              className="rounded-lg md:w-80"
              src="./my-portfolio/images/profile-picture.jpg"
              alt="Pavara"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              I'm Pavara Manupriya
            </h2>
            <p className="mt-2 text-lg text-gray-600 text-left">
              As a passionate and dedicated software engineer, I am committed to
              learning and sharing knowledge with the community. I enjoy staying
              up-to-date with the latest industry trends and technologies and
              constantly seek out opportunities to expand my skills. With
              valuable leadership experience gained as the head of the web and
              technology pillar at Moraspirit, I have a proven track record of
              motivating teams and achieving success through collaboration. My
              technical skills have been honed through previous internships,
              including a successful stint at 4Axis Solutions Pvt Ltd.
              <br />
              <br />
              In my free time, I enjoy listening to music, which helps me to
              improve my thinking capacity and thus enhance my technical skills.
              I find that music provides a creative outlet and helps me to
              approach technical challenges from different perspectives. My
              ultimate career goal is to become a skilled IT professional, and I
              am committed to working tirelessly to achieve this objective. I
              believe that my passion for learning, collaborative spirit, and
              dedication to my craft will help me to achieve success in my
              career and make a meaningful contribution to the tech community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
