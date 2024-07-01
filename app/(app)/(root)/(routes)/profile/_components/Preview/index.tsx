import React from 'react';

const ProfilePreview = ({ isLoading, name, email, jobTitle, bio }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Example of preview component */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">Preview</h3>
        <p className="text-gray-700">Name: {name}</p>
        <p className="text-gray-700">Email: {email}</p>
        <p className="text-gray-700">Job Title: {jobTitle}</p>
        <p className="text-gray-700">Bio: {bio}</p>
        {/* Add more preview data as needed */}
      </div>
    </div>
  );
};

export default ProfilePreview;
