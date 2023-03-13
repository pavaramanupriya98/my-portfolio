import React from "react";

// Tailwind CSS Footer
const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="#hero" className="text-base text-gray-500 hover:text-gray-900">
                            Home
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#about" className="text-base text-gray-500 hover:text-gray-900">
                            About
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#projects" className="text-base text-gray-500 hover:text-gray-900">
                            Projects
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#skills" className="text-base text-gray-500 hover:text-gray-900">
                            Skills
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#experience" className="text-base text-gray-500 hover:text-gray-900">
                            Experience
                        </a>
                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy; Pavara Manupriya Portfolio
                </p>
            </div>
        </footer>
    );
};

export default Footer;