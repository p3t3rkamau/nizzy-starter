import React from 'react';

const TemplateGallery = ({ setSelectedTemplate }) => {
  // Example data for templates (replace with actual data fetching logic)
  const templates = [
    { id: 1, title: 'Template 1', description: 'Description for Template 1' },
    { id: 2, title: 'Template 2', description: 'Description for Template 2' },
    { id: 3, title: 'Template 3', description: 'Description for Template 3' },
    { id: 3, title: 'Template 3', description: 'Description for Template 3' },
    // Add more templates as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
          onClick={() => setSelectedTemplate(template)}
        >
          <h3 className="text-black font-bold mb-2">{template.title}</h3>
          <p className="text-gray-700">{template.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TemplateGallery;
