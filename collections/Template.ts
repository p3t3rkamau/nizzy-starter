import type { CollectionConfig } from 'payload';

export const Templates: CollectionConfig = {
  slug: 'templates',
  admin: {
    useAsTitle: 'name',
  },
  // auth: true,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'UserImages',
      type: 'array',
      maxRows: 100,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
       
        },
      ],
    },
   
  ],
};
