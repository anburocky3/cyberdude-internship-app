import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// import file from "../md/day1.md";

function DayDetail() {
  // const [markdown, setMarkdown] = useState("");

  // useEffect(() => {
  //   fetch(file)
  //     .then((res) => res.text())
  //     .then((text) => setMarkdown(text));
  // }, []);

  const markdown = "# Hi, *Pluto*!";

  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />

      <section className="bg-orange-200">
        <div className="container mx-auto flex items-center justify-between pb-20 pt-40">
          <div className="space-y-2">
            <span>Day #2 - (Week 1) (Sept 6th - 2023)</span>
            <h4 className="text-3xl font-bold">Basic HTML Introduction</h4>
            <p>We introduced ourselves durning this session.</p>
          </div>
          <div className="space-x-4 text-sm text-white">
            <button className="rounded bg-red-500 px-4 py-2 font-semibold uppercase hover:bg-red-600">
              Livestream
            </button>
            <button className="rounded bg-indigo-500 px-4 py-2 font-semibold uppercase hover:bg-indigo-600">
              Internal Meet
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto ">
        <section className="mb-20 mt-10 rounded bg-white px-10 py-10  shadow">
          <div className="mt-5 space-y-4">
            some info <br />
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </section>
      </main>

      <TheFooter />
    </div>
  );
}

export default DayDetail;
