import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache';

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
  hooks: {
  afterChange: [
    async () => {
      revalidatePath('/projects', 'layout')
      revalidatePath('/', 'layout')
    },
  ],
  afterDelete: [
    async () => {
      revalidatePath('/projects', 'layout')
      revalidatePath('/', 'layout')
    },
  ],
},
}