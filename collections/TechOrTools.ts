import type { CollectionConfig } from 'payload'

export const TechOrTools: CollectionConfig = {
  slug: 'tech_or_tools',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'logoImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
        name: 'logoWide',
        type: 'checkbox',
        defaultValue: 'false'
    }
  ],
}