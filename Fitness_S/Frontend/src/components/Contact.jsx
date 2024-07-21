import React from 'react'
import bac from '../Img/gym-equipment.png'

const Contact = () => {
  return (
    <>
      <section className="bg-gray-50">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold text-orange-900 md:text-3xl">
      We Help To Get Fitness Goal
      </h2>

      <p className="hidden text-black-500 sm:mt-4 sm:block">
      We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme or recommend.
      </p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">Email</label>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
      <div>
        
      </div>
        <button 
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> APPOINTMENT </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form> 
    </div>
  </div>
</section>
<div className="relative w-full h-2/3">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          <h3>DON’T <span className='text-orange-500'>THINK</span>, BEGIN <span className='text-orange-500'>TODAY</span>!</h3>
          <p className='font-size-sm'>"Embarking on your fitness journey is not just about building a better body"</p>
        </div>

        
    <div className="h-[450px] flex justify-center items-top">
      <img
        src={bac}
        alt="Random Image"
        className="object-cover w-full h-full"
      />


  </div>
  </div>
  </>
  )
}

export default Contact




 