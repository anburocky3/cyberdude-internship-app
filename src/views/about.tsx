import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
import MaterialSymbolsArrowRightAltRounded from "~icons/material-symbols/arrow-right-alt-rounded";
import CyberDudeLogoBlack from "../assets/cyberdude-logo-black.svg";
import MdiFacebookBox from "~icons/mdi/facebook-box";
import MdiInstagram from "~icons/mdi/instagram";
import MdiYoutube from "~icons/mdi/youtube";
import MdiTwitter from "~icons/mdi/twitter";


const Aboutus = () => {
    return (
        <div className="container mx-auto">
            <section className="mb-20 mt-10 px-4">
                <div>
                    <div className=" text-center relative flex justify-center items-center">
                        <span className=" text-red-400   mb-4 text-3xl font-extrabold  md:text-4xl lg:text-5xl bg-gray-50 px-5 z-10">OUR VISION 🧠</span>
                        <hr className="h-1 rounded-full absolute w-full bg-red-400" />
                    </div>
                    <div className="mx-auto my-10 max-w-4xl rounded-xl p-4 text-center text-gray-800">
                        <p>
                            In our journey, We are going to build some massive projects that
                            could elevate your skills in the tech stacks. Let’s fIN out what are
                            the real-life projects that we are going to build? From beginner
                            level to advanced level and it will slowly boost your experience to
                            build things. Yes. <strong>BUILD THINGS.</strong>
                        </p>
                    </div>
                </div>
                <div>
                    <div className=" text-center relative flex justify-center items-center">
                        <span className=" text-red-400   mb-4 text-3xl font-extrabold  md:text-4xl lg:text-5xl bg-gray-50 px-5 z-10">OUR GOAL 🚀</span>
                        <hr className="h-1 rounded-full absolute w-full bg-red-400" />
                    </div>
                    <div className="mx-auto my-10 max-w-4xl rounded-xl p-4 text-center text-gray-800">
                        <p>
                            Our goal is to make coding accessible to anyone, even if starting from scratch, by building a strong foundation in full-stack engineering .<strong>NOTHING IMPOSSIBLE.</strong>
                        </p>
                    </div>
                </div>



            </section>
        </div>

    )
}


export const Contactform = () => {
    return (
        <div className="bg-gray-800 text-gray-100 px-8 py-12 lg:px-48">
            <h1 className="text-center  text-3xl font-extrabold  dark:text-white md:text-5xl lg:text-6xl">Contact</h1>

            <form
                action="#" className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                        <div className="text-gray-700 mt-8">
                            Hate forms? Send us an <span className="underline"><a href="#"> email</a></span> instead.
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <img src={CyberDudeLogoBlack} alt="CyberDude logo" />
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-red-500 hover:bg-red-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <TheNavbar />

            <section className="flex flex-col bg-orange-50 items-center justify-center px-10 pb-0 pt-32 sm:pt-0 md:flex-row md:px-20 md:py-32 md:pb-10">
                <div className="max-w-xl">
                    <h3 className="text-5xl font-bold">
                        About <span className="text-red-400">Cyberdude Network</span>
                    </h3>
                    <p className="mt-5 text-black">
                        CyberDude Networks Pvt. Ltd. is creative product startup company that primary focuses on tech and product development. <br /><br />
                        We stimulate the creativity in each and everything that appears to our eye. We love doing it.
                    </p>



                    <div className="flex flex-col items-center space-x-10 space-y-2 text-sm mt-8 md:flex-row md:space-y-0">
                        <button className=" hidden md:flex w-full items-center justify-center rounded px-4 py-2 font-bold text-white bg-red-500 hover:bg-red-700 md:w-fit relative">
                            <span >Reach Us</span>
                            <span className="ml-2">
                                <MaterialSymbolsArrowRightAltRounded className="text-lg transition-transform transform translate-x-0 hover:translate-x-2" />
                            </span>
                        </button>


                        <ul className="flex space-x-4">
                            <li className="transition-transform transform hover:scale-125">
                                <a href="#" >
                                    <div className="bg-blue-500 shadow-2xl text-white rounded-full p-2">
                                        <MdiFacebookBox className="text-lg" />
                                    </div>
                                </a>
                            </li>
                            <li className="transition-transform transform hover:scale-125">
                                <a href="#" >
                                    <div className="bg-pink-600 shadow-2xl text-white rounded-full p-2">
                                        <MdiInstagram className="text-lg" />
                                    </div>
                                </a>
                            </li>
                            <li className="transition-transform transform hover:scale-125">
                                <a href="#" >
                                    <div className="bg-red-500 shadow-2xl text-white rounded-full p-2">
                                        <MdiYoutube className="text-lg" />
                                    </div>
                                </a>
                            </li>
                            <li className="transition-transform transform hover:scale-125">
                                <a href="#" >
                                    <div className="bg-blue-400 shadow-2xl text-white rounded-full p-2">
                                        <MdiTwitter className="text-lg" />
                                    </div>
                                </a>
                            </li>
                        </ul>



                    </div>
                </div>
                <div>
                    <img src="/images/cyberdude-email.png" alt="Developer Male" />
                </div>
            </section>
            <Aboutus />
            <Contactform />

            <TheFooter />
        </div>
    );
}

export default About;
