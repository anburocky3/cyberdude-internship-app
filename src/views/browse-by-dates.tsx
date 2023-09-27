import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
import MdiChevronRight from "~icons/mdi/chevron-right";

function BrowseByDates() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />

      <section className="bg-orange-200">
        <div className="container mx-auto pb-20 pt-40">
          <h4 className="text-3xl font-bold">Browse By Dates</h4>
          <select
            name="week"
            id="week"
            className="mt-5 w-52 rounded bg-orange-300 px-4 py-2 font-semibold"
          >
            <option value="">Select Week</option>
            <option value="1">Week 1</option>
          </select>
        </div>
      </section>

      <main className="container mx-auto">
        <section className="mb-20 mt-10">
          <h4 className="text-xl font-semibold">
            Showing session based on your search (Week 1)
          </h4>
          <div className="mt-5 space-y-4">
            {[1, 2, 3, 4].map((num) => (
              <div className="flex cursor-pointer items-center justify-between rounded bg-gray-800 px-5 py-5 text-white shadow hover:bg-gray-900">
                <div className="space-y-2">
                  <span className="text-sm">
                    Day #{num} - (Week 1)(Sept 6th - 2023)
                  </span>
                  <h4 className="text-xl font-semibold">Team Introduction</h4>
                  <p className="text-sm text-gray-400">
                    We introduced ourslefes during this session.
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="space-x-4">
                    <button className="rounded bg-red-500 px-4 py-2 font-semibold uppercase hover:bg-red-600">
                      Livestream
                    </button>
                    <button className="rounded bg-indigo-500 px-4 py-2 font-semibold uppercase hover:bg-indigo-600">
                      Internal Meet
                    </button>
                  </div>
                  <button className="w-full rounded border border-gray-400 px-4 py-2 font-semibold uppercase hover:border-none hover:bg-green-500">
                    View Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="float-right my-5 flex w-60 items-center justify-between rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
            <span>Next Week</span>
            <MdiChevronRight className="" />
          </button>
        </section>
      </main>

      <TheFooter />
    </div>
  );
}

export default BrowseByDates;
