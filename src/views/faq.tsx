import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
import { useState } from 'react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

  const colorClasses = [
    'bg-orange-500',
    'bg-violet-500',
    'bg-red-400',
    'bg-blue-400',

  ];

  const randomColorIndex = Math.floor(Math.random() * colorClasses.length);

  const randomColorClass = colorClasses[randomColorIndex];

    return (
        <div className={`w-full rounded-lg ${randomColorClass} border-l-8 border-rose-500 text-white text-lg mb-4`}>
        <div
          className={`cursor-pointer rounded-lg flex ${randomColorClass}`}
          onClick={toggleAnswer}
        >
          <span className="font-thin text-black p-5 text-xl">{isOpen ? '-' : '+'}</span>
          <p className="font-bold p-5">{question}</p>
        </div>
        {isOpen && (
          <div className={`w-full rounded-lg ${randomColorClass} flex items-center text-white text-lg mb-4`}>
            <p className="font-thin p-5">{answer}</p>
          </div>
        )}
      </div>
    );
}

function Accordion() {
    return (
        <div className="m-auto max-w-xl">
            <FAQItem
                question="Do I need to learn HTML to build projects?"
                answer="Yes, you need to learn HTML as your fundamental skill to build beginner-level projects. We at Cyberdude have already created plenty of HTML projects."
            />
            <FAQItem
                question="Which code editor do I need to use?"
                answer="You can use popular code editors like Visual Studio Code, Sublime Text, or Atom. Choose the one you are comfortable with."
            />
            <FAQItem
                question="Can I practice HTML & CSS through my mobile?"
                answer="Yes, you can practice HTML and CSS on your mobile device using code editor apps and web development learning platforms."
            />
            <FAQItem
                question="Is This Internship Paid?"
                answer="Please check with the internship program or company you are applying to for details about compensation."
            />
            <FAQItem
                question="What does the curriculum cover in the Internship?"
                answer="The curriculum of the internship program may include topics related to web development, programming languages, and practical skills. Please refer to the internship program's documentation for specific details."
            />
            <FAQItem
                question="Is there any placement after completing the Internship?"
                answer="The availability of placement opportunities after completing the internship may vary. It's advisable to inquire with the internship program or company about placement possibilities."
            />

        </div>
    );
}






function Faq() {
    return (
        <div className="min-h-screen bg-gray-50">
            <TheNavbar />

            <section className="bg-gradient-to-r from-rose-300 via-rose-400 to-violet-500 flex justify-center items-center flex-col">
                <div className="flex flex-col justify-center items-center pb-20 pt-40 px-10 text-white">
                    <h4 className="md:text-3xl text-2xl text-center font-bold mb-8">Frequently Asked Questions</h4>
                    <p className="md:text-lg text-base text-center font-thin max-w-lg mb-12">These are the common questions asked by you.
                        We loved to answer that questions.</p>
                    <form className="relative">

                        <div className="pt-2 relative mx-auto text-gray-600 flex justify-center items-center">
                            <input type="text" className=" bg-white h-10 px-5 pr-16 rounded-full text-sm outline-none truncate ... sm:w-96" placeholder="Search Your Questions Here" />
                            <button type="submit" className="absolute right-1 bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white fill-current w-6 h-6"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
                            </button>
                        </div>
                    </form>

                </div>

            </section>

            <main className="container mx-auto">
                <section className="mb-20 mt-10 px-4">
                    <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-400 to-violet-500  mb-4 text-3xl font-extrabold  dark:text-white md:text-5xl lg:text-6xl">FAQ's</h1>
                    <Accordion />
                </section>
            </main>

            <TheFooter />
        </div>
    );
}

export default Faq;
