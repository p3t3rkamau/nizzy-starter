'use client'
import React, { useState } from 'react';
import { Footer } from '@/components/footer';
import axios from 'axios'; // Import Axios for making HTTP requests
import ProfileForm from './_components/ProfileForm';
import ProfilePreview from './_components/Preview';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [bio, setBio] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [expanded, setExpanded] = useState(false); // State for accordion expand/collapse
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      setIsLoading(true); // Set loading state while submitting

      // Construct the payload to send to Payload CMS
      const payload = {
        name,
        email,
        jobTitle,
        bio,
        template: selectedTemplate, // Include selected template
      };

      // Example URL for your Payload CMS API endpoint
      const apiUrl = 'https://your-payload-cms-api-endpoint';

      // Make a POST request to your Payload CMS API
      const response = await axios.post(apiUrl, payload);

      // Handle success or any additional logic after successful submission
      console.log('Data submitted successfully:', response.data);

      // Optionally, reset the form fields after submission
      setName('');
      setEmail('');
      setJobTitle('');
      setBio('');
      setSelectedTemplate('');
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error scenarios, e.g., display error message to user
    } finally {
      setIsLoading(false); // Reset loading state after submission
    }
  };

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      
      <section className="flex min-vh-100 w-full items-flex-start justify-space-between  gap-2 flex-col sm:flex-col">
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 sm:flex-col">
          <div>
            <ProfileForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              jobTitle={jobTitle}
              setJobTitle={setJobTitle}
              bio={bio}
              setBio={setBio}
              setSelectedTemplate={setSelectedTemplate}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="w-full max-w-lg mt-8">
            <ProfilePreview isLoading={isLoading} name={name} email={email} jobTitle={jobTitle} bio={bio} />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ProfilePage;
