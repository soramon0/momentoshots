function checkEnv(env: string | undefined, name: string) {
  if (!env) {
    throw new Error(
      `Please define the ${name} environment variable inside .env.local`
    );
  }

  return env;
}

export function getGqlEndpoint() {
  const env = process.env.NEXT_PUBLIC_GQL_URL;
  return checkEnv(env, 'NEXT_PUBLIC_GQL_URL');
}

export function getBackendEndpoint() {
  const env = process.env.NEXT_PUBLIC_BACKEND_URL;
  return checkEnv(env, 'NEXT_PUBLIC_BACKEND_URL');
}

export function getSanityProjectId() {
  const env = process.env.SANITY_PROJECT_ID;
  return checkEnv(env, 'SANITY_PROJECT_ID');
}

export function getSanityDataset() {
  const env = process.env.SANITY_DATASET;
  return checkEnv(env, 'SANITY_DATASET');
}
