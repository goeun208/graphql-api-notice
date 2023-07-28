import type { CodegenConfig } from '@graphql-codegen/cli';

const SECRET_KEY: any = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
      'http://server-url/graphql': {
      headers: {
        'X-Hasura-Admin-Secret': SECRET_KEY,
      },
    } 
  },
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
