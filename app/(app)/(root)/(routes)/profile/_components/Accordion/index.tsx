import React, { useState } from 'react';

const Accordion = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="m-4">
      <button
        type="button"
        className="w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <span className="text-gray-700">Inputs</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${expanded ? 'transform rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a.75.75 0 0 1-.53-.22l-7-7a.75.75 0 0 1 1.06-1.06L10 16.94l6.47-6.47a.75.75 0 0 1 1.06 1.06l-7 7A.75.75 0 0 1 10 18z"
          />
        </svg>
      </button>
      {expanded && <div className="grid grid-cols-1 gap-4 mt-2">{children}</div>}
    </div>
  );
};

export default Accordion;
