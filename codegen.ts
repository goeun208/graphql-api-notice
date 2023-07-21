import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
      'http://192.168.0.62/v1/graphql': {
      headers: {
        'X-Hasura-Admin-Secret': 'aniauto-dev',
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
