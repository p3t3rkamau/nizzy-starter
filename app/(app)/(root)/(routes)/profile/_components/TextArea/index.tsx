import React from 'react';

const TextareaField = ({ value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Bio</label>
      <textarea
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextareaField;
