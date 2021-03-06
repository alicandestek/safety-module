import React from "react";

const Tooltip = (props) => {
  // eslint-disable-next-line react/prop-types
  const { tooltipdata } = props;
  return (
    <div className="relative flex flex-col group cursor-pointer">
      <svg
        width="16"
        height="16"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 0.5C2.74292 0.5 0.5 2.74292 0.5 5.5C0.5 8.25708 2.74292 10.5 5.5 10.5C8.25708 10.5 10.5 8.25708 10.5 5.5C10.5 2.74292 8.25708 0.5 5.5 0.5ZM6.6075 8.11833C6.33208 8.22667 5.3775 8.6825 4.8275 8.19792C4.66333 8.05375 4.58167 7.87083 4.58167 7.64875C4.58167 7.23292 4.71833 6.87042 4.96458 6C5.00792 5.83542 5.06083 5.62208 5.06083 5.45292C5.06083 5.16083 4.95 5.08333 4.64958 5.08333C4.50292 5.08333 4.34042 5.13542 4.19333 5.19042L4.27458 4.8575C4.6025 4.72417 5.01417 4.56167 5.36667 4.56167C5.89542 4.56167 6.28458 4.82542 6.28458 5.32708C6.28458 5.47167 6.25958 5.725 6.20708 5.9L5.90292 6.97583C5.84 7.19333 5.72625 7.67292 5.9025 7.815C6.07583 7.95542 6.48625 7.88083 6.68875 7.78542L6.6075 8.11833ZM6.105 3.83333C5.76 3.83333 5.48 3.55333 5.48 3.20833C5.48 2.86333 5.76 2.58333 6.105 2.58333C6.45 2.58333 6.73 2.86333 6.73 3.20833C6.73 3.55333 6.45 3.83333 6.105 3.83333Z"
          fill="#545757"
        />
      </svg>

      <div
        className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex rotate-180"
        style={{ minWidth: 218, marginLeft: "-6.25rem" }}
      >
        <span
          className="z-10 p-2 text-xs text-white whitespace-no-wrap bg-[#545757] rounded shadow-lg rotate-180 text-center leading-4"
          style={{ marginTop: "-6rem" }}
        >
          {`${tooltipdata}`}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-[#545757]"></div>
      </div>
    </div>
  );
};

export default Tooltip;
