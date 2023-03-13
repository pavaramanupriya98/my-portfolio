import React from "react";
import { FaWindowClose } from "react-icons/fa";

function Header() {

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <section className="header section fixed w-full h-20 z-10" id="header">
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div
              /* Mobile Menu Button */ className="absolute inset-y-0 left-0 flex items-center sm:hidden"
            >
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="rond"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <div className="text-slate-50 font-sans font-bold text-xl">
                  Pavara
                </div>
              </div>

              <div className="hidden sm:ml-40 sm:block ">
                <div className="flex space-x-4">
                  <a
                    href="#hero"
                    className="active:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="active:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Skills
                  </a>
                    <a
                        href="#experience"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                        Experience
                    </a>
                </div>
              </div>

              <div className={` ${isNavOpen? 'block': 'hidden'} absolute top-20 rounded-lg left-0 bg-gray-800 w-full`}>
                <div className="flex flex-row justify-end items-center m-1 ">
                  <button type={"button"} onClick={() => setIsNavOpen(!isNavOpen)}>
                    <FaWindowClose className={"text-white text-2xl"} />
                  </button>
                </div>
                <div className="flex flex-col justify-start items-stretch m-2">
                    <a
                        href="#hero"
                        className="active:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                        aria-current="page"
                    >
                        Home
                    </a>
                  <a
                      href="#about"
                      className="active:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium m-0"
                      aria-current="page"
                  >
                    About
                  </a>
                  <a
                      href="#projects"
                      className="active:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                  >
                    Projects
                  </a>
                  <a
                      href="#skills"
                      className="active:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium m-0"
                      aria-current="page"
                  >
                    Skills
                  </a>
                  <a
                      href="#experience"
                      className="active:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium m-0"
                      aria-current="page"
                  >
                    Experience
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
