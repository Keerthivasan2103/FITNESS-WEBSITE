
import React from "react";
import img from '../Img/trainer1.png'
import img1 from '../Img/trainer2.png'
import img2 from '../Img/trainer3.png'
import img3 from '../Img/trainer4.png'
function Course() {
  return (
    <>
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src={img}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-orange-500">Best trainer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Ron Lach</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          
Ron Lach, an embodiment of excellence in the fitness realm, is not merely a gym trainer but a beacon of inspiration and transformation. With unparalleled dedication and expertise, Ron has sculpted countless success stories, guiding individuals on their journey to peak physical prowess and holistic well-being.
        </p>
      </div>
    </div>
  </div>
</a>
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">OUR <span className='text-orange-500'>TRAINERS</span></h2>

        <p className="mt-4 text-black-700">
        <span className='font-bold'>W</span>e are truly exceptional, with a wealth of experience and expertise that sets them apart. Each member of our team is meticulously trained, possessing a deep understanding of fitness principles and techniques. With their dedication and passion, they've successfully guided and empowered over 20,000 individuals on their fitness journeyTheir wealth of knowledge, combined with their compassionate approach, creates an environment where clients feel supported, encouraged, and inspired to reach new heights of physical strength and vitality. When you train with us, you're not just getting a workout—you're gaining access to a team of dedicated professionals who are committed to helping you become the best version of yourself. Join us and experience the transformative power of our exceptional gym trainers.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg--700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          VIEW MORE..
        </a>
        
      </div>
      
    </div>
    <div className="grid grid-cols-3 gap-4">
        <div className="group rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
          <img src={img1} alt="Card 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Oliver</h2>
            <p className="text-gray-600">
Oliver: With a background in competitive athletics, Oliver brings a wealth of experience to his training sessions. His dynamic approach combines strength training, agility drills, and personalized nutrition plans to help clients achieve their fitness goals.</p>
          </div>
        </div>
        <div className="group rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
          <img src={img2} alt="Card 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">James</h2>
            <p className="text-gray-600">James: A certified yoga instructor and mindfulness coach, James focuses on holistic wellness in his training sessions. He integrates yoga flows, meditation practices, and stress-relief techniques to promote physical strength, mental clarity, and emotional balance.

</p>
          </div>
        </div>
        <div className="group rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
          <img src={img3} alt="Card 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">William</h2>
            <p className="text-gray-600">William: As a former bodybuilding champion, William specializes in muscle building and physique transformation. His tailored workout programs, attention to detail, and motivational coaching style inspire clients to push their limits and sculpt their ideal physique.

</p>
          </div>
        </div>
      </div>
  </div>
  

</section>
    </>
  );
}

export default Course;
