import { createClient } from 'sanity-codegen';

import type { Documents } from './schemaTypes';
import { getSanityProjectId } from '@/utils/env';

export default createClient<Documents>({
  projectId: getSanityProjectId(),
  dataset: getSanityProjectId(),
  fetch: window.fetch,
});
