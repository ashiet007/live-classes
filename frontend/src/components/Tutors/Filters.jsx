import { Radio, Typography } from "@material-tailwind/react";
import React from "react";

const priceRanges = [
  {
    id: 1,
    name: "0-100",
    value: "0-100",
  },
  {
    id: 2,
    name: "1000-2000",
    value: "1000-2000",
  },
  {
    id: 3,
    name: "2000-3000",
    value: "2000-3000",
  },
  {
    id: 4,
    name: "3000-4000",
    value: "3000-4000",
  },
  {
    id: 5,
    name: "4000-5000",
    value: "4000-5000",
  },
  {
    id: 6,
    name: "5000-6000",
    value: "5000-6000",
  },
];

const expRanges = [
  {
    id: 1,
    name: "0-5 years",
    value: "0-5",
  },
  {
    id: 2,
    name: "5-10 years",
    value: "5-10",
  },
  {
    id: 3,
    name: "10-15 years",
    value: "10-15",
  },
  {
    id: 4,
    name: "15 years-above",
    value: "15-99",
  },
];

const Filters = ({ filters, setFilters, expFilter, setExpFilter }) => {
  return (
    <div className="px-4 w-1/3">
      <Typography variant="h5" className="mb-2" placeholder={"Title"}>
        {"Filters"}
      </Typography>
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden mb-2">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Price </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700">
              {" "}
              {filters ? 1 : 0} filter Selected{" "}
            </span>

            <button
              type="button"
              className="text-sm text-gray-900 underline underline-offset-4"
              onClick={() => setFilters(null)}
            >
              Reset
            </button>
          </header>

          <ul className="space-y-1 border-t border-gray-200 p-4">
            {priceRanges.map((range) => {
              return (
                <li key={range.id}>
                  <Radio
                    name="type"
                    label={range.name}
                    onClick={() => setFilters(range)}
                    checked={filters && range.id === filters.id ? true : false}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </details>
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden mb-2">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Experience </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700">
              {" "}
              {expFilter ? 1 : 0} filter Selected{" "}
            </span>

            <button
              type="button"
              className="text-sm text-gray-900 underline underline-offset-4"
              onClick={() => setExpFilter(null)}
            >
              Reset
            </button>
          </header>

          <ul className="space-y-1 border-t border-gray-200 p-4">
            {expRanges.map((range) => {
              return (
                <li key={range.id}>
                  <Radio
                    name="type"
                    label={range.name}
                    onClick={() => setExpFilter(range)}
                    checked={
                      expFilter && range.id === expFilter.id ? true : false
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </details>

      {/* <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden mb-2">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Price </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700">
              {" "}
              The highest price is $600{" "}
            </span>

            <button
              type="button"
              className="text-sm text-gray-900 underline underline-offset-4"
            >
              Reset
            </button>
          </header>

          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between gap-4">
              <label
                htmlFor="FilterPriceFrom"
                className="flex items-center gap-2"
              >
                <span className="text-sm text-gray-600">$</span>

                <input
                  type="number"
                  id="FilterPriceFrom"
                  placeholder="From"
                  className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>

              <label
                htmlFor="FilterPriceTo"
                className="flex items-center gap-2"
              >
                <span className="text-sm text-gray-600">$</span>

                <input
                  type="number"
                  id="FilterPriceTo"
                  placeholder="To"
                  className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </details> */}
    </div>
  );
};

export default Filters;
