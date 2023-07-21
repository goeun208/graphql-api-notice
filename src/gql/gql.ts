/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query getRcNotice(\n        $limit: Int\n        $offset: Int\n    ) {\n        rc_notice(\n            limit: $limit\n            offset: $offset\n        ) {\n            id\n            title\n            category\n            contents\n            created_at\n        }\n    }\n": types.GetRcNoticeDocument,
    "\n    query getCurrentRcNotice(\n        $id: uuid!\n    ) {\n        rc_notice_by_pk(\n            id: $id\n        ) {\n            id\n            title\n            category\n            contents\n        }\n    }\n": types.GetCurrentRcNoticeDocument,
    "\n        mutation updateNotice(\n            $id: uuid!,\n            $category: String,\n            $title: String,\n            $contents: String\n        ) {\n            update_rc_notice_by_pk(\n                pk_columns: {id: $id},\n                _set: {title: $title, category: $category, contents: $contents}\n            ){\n                id\n                title,\n                contents,\n                category\n            }\n        }\n    ": types.UpdateNoticeDocument,
    "\n        mutation deleteNotice(\n            $id: uuid!\n        ) {\n            delete_rc_notice_by_pk(\n                id: $id\n            ){\n                title\n            }\n        }\n    ": types.DeleteNoticeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getRcNotice(\n        $limit: Int\n        $offset: Int\n    ) {\n        rc_notice(\n            limit: $limit\n            offset: $offset\n        ) {\n            id\n            title\n            category\n            contents\n            created_at\n        }\n    }\n"): (typeof documents)["\n    query getRcNotice(\n        $limit: Int\n        $offset: Int\n    ) {\n        rc_notice(\n            limit: $limit\n            offset: $offset\n        ) {\n            id\n            title\n            category\n            contents\n            created_at\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getCurrentRcNotice(\n        $id: uuid!\n    ) {\n        rc_notice_by_pk(\n            id: $id\n        ) {\n            id\n            title\n            category\n            contents\n        }\n    }\n"): (typeof documents)["\n    query getCurrentRcNotice(\n        $id: uuid!\n    ) {\n        rc_notice_by_pk(\n            id: $id\n        ) {\n            id\n            title\n            category\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation updateNotice(\n            $id: uuid!,\n            $category: String,\n            $title: String,\n            $contents: String\n        ) {\n            update_rc_notice_by_pk(\n                pk_columns: {id: $id},\n                _set: {title: $title, category: $category, contents: $contents}\n            ){\n                id\n                title,\n                contents,\n                category\n            }\n        }\n    "): (typeof documents)["\n        mutation updateNotice(\n            $id: uuid!,\n            $category: String,\n            $title: String,\n            $contents: String\n        ) {\n            update_rc_notice_by_pk(\n                pk_columns: {id: $id},\n                _set: {title: $title, category: $category, contents: $contents}\n            ){\n                id\n                title,\n                contents,\n                category\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation deleteNotice(\n            $id: uuid!\n        ) {\n            delete_rc_notice_by_pk(\n                id: $id\n            ){\n                title\n            }\n        }\n    "): (typeof documents)["\n        mutation deleteNotice(\n            $id: uuid!\n        ) {\n            delete_rc_notice_by_pk(\n                id: $id\n            ){\n                title\n            }\n        }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;