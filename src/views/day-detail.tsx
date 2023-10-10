import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
// import { useEffect, useState } from "react";
// import file from "../md/day1.md";
import sessionData from '../data/internship-data.json';
import { useParams } from 'react-router-dom';

function DayDetail() {

  const { day } = useParams();
  const dayNum = Number(day);
  let dayIndex = dayNum - 1;
  console.log(dayIndex)
  // Check if there is a session with the specified day
  const isDayValid = sessionData.sessionData.some((session) => session.day === dayNum);
  const daydetail = sessionData.sessionData.find(session => session.day === dayNum);



  if (!isDayValid) {

    return <div className="min-h-screen bg-gray-50">
      <TheNavbar />

      <section className="bg-orange-200">
        <div className="container mx-auto flex items-center justify-center pb-20 pt-40">
          <div className="space-y-2 text-4xl">
            <span>Day #{day} </span>
            <h4 className="text-3xl font-bold text-red-500">
              sorry</h4>
          </div>

        </div>
      </section>

      <main className="container mx-auto ">
        <section className="mb-20 mt-10 rounded bg-white px-10 py-10  shadow">
          <div className="mt-5 space-y-4 text-red-500 font-bold">
            <img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png" alt="error" className="w-14 h-14" />

            <div>Invalid Day, this day is not updated or it has not happened yet.</div>
          </div>
        </section>
      </main>

      <TheFooter />
    </div>;
  }






  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />

      <section className="bg-orange-200">
        <div className="container mx-auto flex flex-col sm:flex-row  items-center justify-between md:pb-20 p-24 pt-40">
          <div className="space-y-2">
            <span>Day #{daydetail?.day} - (Week {daydetail?.week}) ({daydetail?.date})</span>
            <h4 className="text-3xl font-bold">{daydetail?.title}</h4>
          </div>
          <div className="space-x-2 text-sm flex flex-col sm:flex-row justify-center mt-5 md:mt-0 items-center text-white">
            {
              daydetail?.livestream ? (
                <button className="rounded bg-red-500 px-4 py-2 font-semibold uppercase hover:bg-red-600">
                  Livestream
                </button>
              ) : null
            }
            {
              daydetail?.meet ? (
                <button className="rounded bg-indigo-500 px-4 py-2 mt-3 sm:mt-0 font-semibold uppercase hover:bg-indigo-600">
                  Internal Meet
                </button>
              ) : null
            }

          </div>
        </div>
      </section>

      <main className="container mx-auto ">
        <section className="mb-20 mt-10 rounded bg-white px-10 py-10  shadow">
          <div className="mt-2 space-y-4 mb-12">
            <h1 className="font-bold text-3xl">What we did? </h1>
            <ul className="ml-8">
              {daydetail?.description.whatWeDid.map((item, index) => (
                <li className="list-disc" key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2 space-y-4 mb-12">
            <h1 className="font-bold text-3xl">What you should do? </h1>
            <ul className="ml-8">
              {daydetail?.description.whatToDo.map((item, index) => (
                <li className="list-disc" key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2 space-y-4 mb-12">
            <h1 className="font-bold text-3xl">Live sessions :</h1>
            <div className="md:ml-4 flex flex-wrap -mx-4">
              {daydetail?.description.youtubeLink.map((item, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                  <div className="relative">
                    <iframe
                      className="w-full h-48 md:h-56 lg:h-64"
                      src={item}
                      title="YouTube video player"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>


            <div className="mt-2 space-y-4 mb-12">
              <h1 className="font-bold text-3xl">Tasks assigned:</h1>
              {daydetail?.description.tasks.map((task) => (
                <div className="bg-gray-300 rounded-lg p-5" key={task.taskId}>
                  <h1 className="font-semibold">Task #{task.taskId}</h1>
                  <p className="mt-2 mb-3">{task.taskName}</p>
                  <span className="py-1 px-4 rounded-full bg-gray-400 text-sm">Completing Duration ⏰: {task.taskCompletingDuration}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 space-y-4 mb-12">
              <h1 className="font-bold text-3xl">Tasks completed by our interns :</h1>
              <div className="bg-gray-300 rounded-lg px-3 sm:p-5">
                {daydetail?.description.tasksCompletedBy.map((intern) => (
                  <div className=" rounded-lg py-5 flex justify-between items-center" key={intern.internName}>

                    <div className="flex justify-center items-center space-x-2 md:space-x-6">
                      <div className="w-10 h-10 md:h-14 rounded-full bg-gray-600 md:w-14 hover:scale-110">
                        {/* <img src="" alt="" /> */}

                      </div>
                      <h1 className="font-bold">{intern.internName}</h1>
                    </div>
                    <div className="flex md:space-x-2 flex-col sm:flex-row ">
                      <a href={intern.demo} target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white font-bold sm:py-2 sm:px-4 py-1 px-2  rounded">
                        demo
                      </a>
                      <a href={intern.sourceCode} target="_blank" className="bg-green-500 mt-3 sm:mt-0 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        source code
                      </a>
                    </div>

                  </div>
                ))}
              </div>
            </div>


          </div>

        </section>
      </main>

      <TheFooter />
    </div>
  );
}

export default DayDetail;
