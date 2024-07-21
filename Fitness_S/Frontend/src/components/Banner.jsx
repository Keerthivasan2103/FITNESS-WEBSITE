import React from "react";
import video from '../Img/video.mp4';

function Banner() {
  return (
    <>
      <section className="relative bg-gray-900 text-white">
        <video className="absolute top-0 left-0 object-cover w-full h-full" autoPlay loop muted>
          <source src={video} type="video/mp4" /> 
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-orange-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              WORK HARDER
              <span className="sm:block"> GET STRONGER </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              “Don’t give up!”- Never give up when things get tough! Keep working hard until the end!”
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none  sm:w-auto"
                href="#"
              >
                START TODAY
              </a>

              {/* <a
                className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                VIEW PLANS
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
