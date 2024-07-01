import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'jobTitle',
      label: 'Job Title',
      type: 'text',
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
    },
    {
      name: 'template',
      label: 'Template',
      type: 'relationship',
      relationTo: 'templates',
      hasMany: false, // Set to true if each user can have multiple templates
      required: true,
    },
    // Add other fields as needed for your users
  ],
};
