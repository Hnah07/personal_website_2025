"use client";

export default function AddTripForm() {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide light:text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
            htmlFor="Title"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="Title"
            type="text"
            placeholder="Write here the title of your trip"
          />
        </div>
      </div>
    </form>
  );
}
