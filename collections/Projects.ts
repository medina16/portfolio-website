import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache';

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'year',
      type:'text',
    },
    {
      name: 'sortDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMMM yyyy',
        },
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tagName',
          type: 'text'
        }
      ]
    },
    {
      name: 'techsAndTools',
      type: 'relationship',
      relationTo: 'tech_or_tools',
      hasMany: true,
    },
    {
      name:'links',
      type: 'array',
      fields: [
        {
          name: 'linkName',
          type: 'text',
        },
         {
          name: 'linkUrl',
          type: 'text',
        }
      ],
    },
    {
      name: 'overview',
      type: 'richText',
    },
    {
      name: 'keyFeatures',
      type: 'richText',
    },
    {
      name: 'myProcess',
      type: 'richText',
    },
    {
      name: 'thumbnailImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'sliderImages',
      type: 'array',
      fields: [
        {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
      ]
    }
  ],
  hooks: {
  afterChange: [
    async ({ doc }) => {
      revalidatePath('/')
      revalidatePath('/projects')
      revalidatePath(`/projects/${doc.id}`)
    },
  ],
  afterDelete: [
    async ({ doc }) => {
      revalidatePath('/')
      revalidatePath('/projects')
      revalidatePath(`/projects/${doc.id}`)
    },
  ],
},
}