import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import InputField from '../Input';
import TextareaField from '../TextArea';
import TemplateGallery from '../Templates';
import Accordion from '../Accordion';

interface ProfileFormProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  jobTitle: string;
  setJobTitle: Dispatch<SetStateAction<string>>;
  bio: string;
  setBio: Dispatch<SetStateAction<string>>;
  setSelectedTemplate: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  name,
  setName,
  email,
  setEmail,
  jobTitle,
  setJobTitle,
  bio,
  setBio,
  setSelectedTemplate,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e: { target: { value: any; }; }) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <InputField
          label="Job Title"
          type="text"
          value={jobTitle}
          onChange={(e: { target: { value: any; }; }) => setJobTitle(e.target.value)}
          placeholder="Enter your job title" required={undefined}        />
        <TextareaField
          value={bio}
          onChange={(e: { target: { value: any; }; }) => setBio(e.target.value)}
          placeholder="Write a short bio"
        />

        {/* Example of template gallery component */}
        <TemplateGallery setSelectedTemplate={setSelectedTemplate} />

        {/* Example of accordion input blocks */}
        <Accordion>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Text Input</h3>
            <p className="text-gray-700">Add a text input field</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Number Input</h3>
            <p className="text-gray-700">Add a number input field</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Image Upload</h3>
            <p className="text-gray-700">Add an image upload field</p>
          </div>
          {/* Add more input card examples */}
        </Accordion>

        <div className="flex items-center justify-between mt-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
