import React from "react";
import {
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaHandshake,
} from "react-icons/fa";

const Timeline = () => {
  return (
    <ol className="left-50 border-l-2 border-info-100">
      <li>
        <div className="flex-start md:flex">
          <div className="-ml-[25px] flex h-[50px] w-[50px] text-sm items-center justify-center rounded-full bg-info-100 text-info-700">
            <FaBriefcase size="1.5rem" />
          </div>
          <div className="ml-6 mb-10 bg-neutral-50 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
            <div className="mb-4 flex justify-center text-left">
              <h4 className="-mt-2 text-xl font-semibold">Software Engineer</h4>
            </div>
            <p className="text-neutral-700 mb-2">
              Azend Technologies (Pvt) Ltd
            </p>
            <p className="mb-6 text-gray-500">
              Working under Full Stack dev team in developing Student Evaluation
              Portal client based project.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-info px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              disabled
              data-te-ripple-color="light"
            >
              2023 June - Present
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-start md:flex">
          <div className="-ml-[25px] flex h-[50px] w-[50px] text-sm items-center justify-center rounded-full bg-info-100 text-info-700">
            <FaGraduationCap size="1.5rem" />
          </div>
          <div className="ml-6 mb-10 bg-neutral-50 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
            <div className="mb-4 flex justify-center">
              <h4 className="-mt-2 text-xl font-semibold text-left">
                BSc (Hons) in Information Technology
              </h4>
            </div>
            <p className="text-neutral-700 mb-2">
              Faculty of Information Technology - University of Moratuwa
            </p>
            <p className="mb-6 text-gray-500">
              Completed BSc (Hons) in Information Technology
            </p>
            <button
              type="button"
              className="inline-block rounded bg-info px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              disabled
              data-te-ripple-color="light"
            >
              2018 NOV - 2023 DEC
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-start md:flex">
          <div className="-ml-[25px] flex h-[50px] w-[50px] text-sm items-center justify-center rounded-full bg-info-100 text-info-700">
            <FaBriefcase size="1.5rem" />
          </div>
          <div className="ml-6 mb-10 bg-neutral-50 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
            <div className="mb-4 flex justify-center text-left">
              <h4 className="-mt-2 text-xl font-semibold">
                Software Engineer Intern
              </h4>
            </div>
            <p className="text-neutral-700 mb-2">4 Axis Solutions (Pvt) Ltd</p>
            <p className="mb-6 text-gray-500">
              Worked under IOS team in developing Colorgram mobile application.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-info px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              disabled
              data-te-ripple-color="light"
            >
              2022 Jan - 2022 July
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-start md:flex">
          <div className="-ml-[25px] flex h-[50px] w-[50px] text-sm items-center justify-center rounded-full bg-info-100 text-info-700">
            <FaHandshake size="1.5rem" />
          </div>
          <div className="ml-6 mb-10 bg-neutral-50 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
            <div className="mb-4 flex justify-center text-left">
              <h4 className="-mt-2 text-xl font-semibold">
                Head of Web & Technology Pillar
              </h4>
            </div>
            <p className="text-neutral-700 mb-2">MoraSpirit Committee</p>
            <p className="mb-6 text-gray-500">
              Contributed to MoraSpirit mobile application and human resource
              management system.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-info px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              disabled
              data-te-ripple-color="light"
            >
              2020 - 2021
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-start md:flex">
          <div className="-ml-[25px] flex h-[50px] w-[50px] text-sm items-center justify-center rounded-full bg-info-100 text-info-700">
            <FaCertificate size="1.5rem" />
          </div>
          <div className="ml-6 mb-10 bg-neutral-50 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
            <div className="mb-4 flex justify-center text-left">
              <h4 className="-mt-2 text-xl font-semibold">
                Diploma in Object Oriented Programming
              </h4>
            </div>
            <p className="text-neutral-700 mb-2">
              Institute of Java and Software Engineering (IJSE)
            </p>
            <button
              type="button"
              className="inline-block rounded bg-info px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              disabled
              data-te-ripple-color="light"
            >
              2018
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-start md:flex">
          <div className="-ml-[25px] flex h-[50px] w-[50px] text-sm items-center justify-center rounded-full bg-info-100 text-info-700">
            <FaCertificate size="1.5rem" />
          </div>
          <div className="ml-6 mb-10 bg-neutral-50 block md:min-w-fit lg:min-w-[448px]  max-w-md rounded-lg p-6 shadow-md shadow-black/5">
            <div className="mb-4 flex justify-center">
              <h4 className="-mt-2 text-xl font-semibold">
                Diploma in English Language
              </h4>
            </div>
            <p className="text-neutral-700 mb-2">ESOFT Metro Campus</p>
            <button
              type="button"
              className="inline-block rounded bg-info px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              disabled
              data-te-ripple-color="light"
            >
              2018
            </button>
          </div>
        </div>
      </li>
    </ol>
  );
};

export default Timeline;
