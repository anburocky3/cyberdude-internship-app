import { useState } from 'react'; // Import useState
import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
import { Link } from "react-router-dom";
import MdiChevronRight from "~icons/mdi/chevron-right";
import MdiChevronLeft from "~icons/mdi/chevron-left";
import sessionData from '../data/internship-data.json';

function BrowseByDates() {
  // Add state to manage selected week
  const [selectedWeek, setSelectedWeek] = useState('');
  // Convert week property to strings in your data
  const stringSessionData = sessionData.sessionData.map(session => ({
    ...session,
    week: session.week.toString(),
  }));

  // Filter sessions by week or show all if no week is selected
  const filteredSessions = selectedWeek
    ? stringSessionData.filter(session => session.week === selectedWeek)
    : stringSessionData;

  const weekOptions = [];
  for (let i = 1; i <= 26; i++) {
    weekOptions.push(
      <option key={i} value={i.toString()}>Week {i}</option>
    );
  }

  const buttonText = selectedWeek ? 'Next Week' : 'Next';

  const handleNextWeekClick = () => {
    if (parseInt(selectedWeek) < 26) {
      const nextWeek = parseInt(selectedWeek) + 1;
      setSelectedWeek(nextWeek.toString());
    }
  };
  const handlePrevWeekClick = () => {
    if (parseInt(selectedWeek) > 1) {
      const nextWeek = parseInt(selectedWeek) - 1;
      setSelectedWeek(nextWeek.toString());
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />

      <section className="bg-orange-200">
        <div className="container mx-auto px-24 sm:px-0 pb-20 pt-40">
          <h4 className="text-3xl font-bold">Browse By Dates</h4>
          <select
            name="week"
            id="week"
            className="mt-5 w-52 rounded bg-orange-300 px-4 py-2 font-semibold"
            onChange={(e) => setSelectedWeek(e.target.value)}
            value={selectedWeek}
          >
            <option value="">Select Week</option>
            {weekOptions}

          </select>
        </div>
      </section>

      <main className="container sm:mx-auto p-2">
        <section className="mb-20 mt-10">
          <h4 className="text-xl font-semibold">
            Showing sessions based on your search ({selectedWeek ? `Week ${selectedWeek}` : 'All Days'})
          </h4>
          <div className="mt-5 space-y-4">
            {filteredSessions.length === 0 ? ( // Check if filteredSessions is empty
              <div className="text-gray-400">No data available for this week.</div>
            ) : (
              filteredSessions.map((session) => (
                <div
                  key={session.day}
                  className="flex cursor-pointer items-center justify-between rounded bg-gray-800 px-5 py-5 text-white shadow hover:bg-gray-900"
                >
                  <div className="space-y-2">
                    <span className="text-sm">
                      Day #{session.day} - (Week {session.week})({session.date})
                    </span>
                    <h4 className="text-xl font-semibold">{session.title}</h4>
                    <p className="text-sm text-gray-400">{session.description.whatWeDid[0]}</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
                      {session.livestream && (
                        <button className="rounded  bg-red-500 px-4 py-2 font-semibold uppercase hover:bg-red-600">
                          Livestream
                        </button>
                      )}
                      {session.meet && (
                        <button className="rounded  mt-2 sm:mt-0 bg-indigo-500 px-4 py-2 font-semibold uppercase hover:bg-indigo-600">
                          Internal Meet
                        </button>
                      )}
                    </div>
                    <Link
                      to={`/internship/${session.day}`}
                      className="block w-full rounded border border-gray-400 px-4 py-2 text-center font-semibold uppercase hover:border-none hover:bg-green-500"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
<div>

<button
            className="float-right my-5 flex w-40 items-center justify-between rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={handleNextWeekClick} // Add click event handler
          >
            <span>{buttonText}</span>
            <MdiChevronRight className="" />
          </button>
          <button
            className="float-right my-5 mx-4 flex w-50 items-center justify-between rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={handlePrevWeekClick} // Add click event handler
          >
           
            <MdiChevronLeft className="" />
            <span>prev</span>
          </button>
</div>
        </section>
      </main>
      <TheFooter />
    </div>
  );
}

export default BrowseByDates;
