import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import config from '@/payload.config';

export const getProject = unstable_cache(
  async (id: string) => {
    console.log('QUERYING NEON FOR', id);
    const payload = await getPayload({ config });
    return payload.findByID({ collection: 'projects', id, depth: 2 });
  },
  ['project-by-id'],
  { revalidate: 3600, tags: ['projects'] }
);