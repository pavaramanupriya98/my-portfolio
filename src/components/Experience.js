import React from "react";
import Timeline from "./Timeline";

// Porfolio Experience Component
const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="text-center pt-36">
                <h2 className="text-4xl py-2 text-teal-600 font-extrabold md:text-6xl underline-offset-8">
                    Experience
                </h2>
            </div>

                    <div className="max-w-xl mx-auto">
                        <div className="relative p-3">
                            <Timeline />
                        </div>
                    </div>
        </section>
    );
}

export default Experience;