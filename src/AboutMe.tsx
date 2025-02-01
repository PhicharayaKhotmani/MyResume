import { useState } from 'react'

function AboutMe() {

  return (
    <>
      <div className="max-w-screen-xl items-center justify-between mx-auto py-16" id='about'>

        <h1 className="mb-4 font-bold text-4xl md:text-5xl xl:text-6xl text-center">About Me</h1>

        <div className="grid max-w-screen-xl px-4 mx-auto gap-6 lg:py-2 lg:grid-cols-3">

          <div className="place-self-center">
            <p className="text-center max-w-2xl font-bold text-gray-800 lg:mb-0 md:text-lg lg:text-xl">
              3rd Year
            </p>
            <p className="text-center max-w-2xl font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg">
              student at Computer Science <br /> Chiang Mai University
            </p>
          </div>

          <div className="place-self-center">
            <p className="text-center max-w-2xl font-bold text-gray-800 lg:mb-0 md:text-lg lg:text-xl">
              Kawfang
            </p>
            <p className="text-center max-w-2xl font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg">
              It's my nickname
            </p>
          </div>

          <div className="place-self-center">
            <p className="text-center max-w-2xl font-bold text-gray-800 lg:mb-0 md:text-lg lg:text-xl">
              Software Development
            </p>
            <p className="text-center max-w-2xl font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg">
              interested
            </p>
          </div>
        </div>

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:py-2 lg:grid-cols-3">

          <div className="place-self-center">
            <p className="text-center max-w-2xl font-bold text-gray-800 lg:mb-0 md:text-lg lg:text-xl">
              UX/UI designer
            </p>
            <p className="text-center max-w-2xl font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg">

            </p>

            <p className="text-center max-w-2xl font-bold text-gray-800 lg:mb-0 md:text-lg lg:text-xl">
              Web Application Developer
            </p>
            <p className="text-center max-w-2xl font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg">

            </p>
          </div>

          <div className="relative flex justify-center items-end">
            {/* ครึ่งวงกลม */}
            <div className="absolute bottom-0 w-48 h-24 bg-[#F5F1CB] rounded-t-full"></div>

            {/* รูปภาพ */}
            <img src="me2.png" className="relative z-10 w-40 h-40 object-cover" />
          </div>

          <div className="place-self-center">
            <p className="text-center max-w-2xl font-bold text-gray-800 lg:mb-0 md:text-lg lg:text-xl">
              Software Engineer
            </p>
            <p className="text-center max-w-2xl font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg">

            </p>

            <p className="text-center max-w-2xl font-bold text-gray-800 lg:mb-0 md:text-lg lg:text-xl">
              Project Owner
            </p>
            <p className="text-center max-w-2xl font-light text-gray-500 lg:mb-8 md:text-sm lg:text-lg">
              in Betagro Workshop in Software Engineering class
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutMe
