function Hero() {
    return (
        <>
            <section className="bg-white pt-16">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                    <div className="mr-auto place-self-center lg:col-span-7">

                        <h1 className="max-w-xl mb-4 text-3xl tracking-tight leading-none md:text-4xl xl:text-5xl">
                            Hi!, I'm
                        </h1>
                        <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            Phicharaya Khotmani
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            I'm a Computer Science student at Chiang Mai University. <br /> I have a strong interest in frontend development, software engineering, and UX/UI design.
                        </p>


                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            View Projects
                        </a>
                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
                        <img src="me.jpg" className="rounded-full  object-cover" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero