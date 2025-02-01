function Project() {
    return (
        <>
            <section className="bg-white" id="project">

                <div className=" max-w-screen-xl items-center justify-between mx-auto pt-16">
                    <h1 className="mb-4 font-bold text-4xl md:text-5xl xl:text-6xl text-center">Projects</h1>
                </div>

                <div className="gap-16 items-center py-6 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-16 pb-0 lg:px-6">
                    <div className="font-light sm:text-lg">
                        <h2 className="mb-1 font-bold text-3xl md:text-4xl xl:text-5xl text-center">
                            NadNurse
                        </h2>
                        <p className="text-center mb-4">(Agile Meeting Manager)</p>

                        <p className="mb-4">
                            For worked on a real project in the software engineering course, that I collaborated with a <b className="font-semibold"> real client </b> from the Faculty of Nursing.
                            This project is to design a web application to help <b className="font-semibold">manage meetings for nursing faculty staff</b>.
                        </p>
                        <p className="font-semibold">
                            The main goals
                        </p>
                        <p className="mb-4">
                            <li>Lean and Agile concept</li>
                            <li>increase efficiency in managing meetings</li>
                            <li>reduce complexity or errors in managing meetings</li>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="./dashboard.png" alt="dashboard" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="./baseHistory.png" alt="history" />
                    </div>
                </div>

                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light sm:text-lg">
                        <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl text-center">
                            NoVex
                        </h2>
                        <p className="text-center mb-4">(Novel Vortex)</p>

                        <p className="mb-4">
                            The <b className="font-semibold">second-year student project</b> for the <b className="font-semibold">Modern Application Development course </b>
                            focuses on designing and developing a web application for those passionate about writing and reading novels.
                        </p>
                        <p className="font-semibold">
                            The main goals
                        </p>
                        <p className="mb-4">
                            <li>create a space where users can share their own writing</li>
                            <li>connect with readers who are interested in various types of novel content</li>
                        </p>
                        <p>
                            The main features of the system are developed using the CRUD (Create, Read, Update, Delete) principle.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="./HomePage.png" alt="home page" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="./FavPage.png" alt="favorite novel" />
                        <img className="w-full rounded-lg" src="./NovelPage.png" alt="novel" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Project