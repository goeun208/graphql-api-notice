/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _text: { input: any; output: any; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AddStaffInput = {
  cell_phone_number: Scalars['String']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type AddStaffOutput = {
  __typename?: 'AddStaffOutput';
  account_id: Scalars['String']['output'];
  company_id: Scalars['String']['output'];
  staff_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

export type AlimtalkInput = {
  data?: InputMaybe<Scalars['String']['input']>;
  template_code: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type BusinessStatusInput = {
  bno_list: Array<InputMaybe<Scalars['String']['input']>>;
};

export type CertificatePersonInput = {
  is_mobile: Scalars['Boolean']['input'];
  return_url: Scalars['String']['input'];
};

export type CommonOutput = {
  __typename?: 'CommonOutput';
  results: Scalars['String']['output'];
};

export type CompanyForSignUpInput = {
  business_name: Scalars['String']['input'];
  business_number: Scalars['String']['input'];
  business_registration?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  rent_business_registration?: InputMaybe<Scalars['String']['input']>;
  setting_data?: InputMaybe<Scalars['String']['input']>;
};

export type FaxInput = {
  file_keys: Array<InputMaybe<Scalars['String']['input']>>;
  receiver_name: Scalars['String']['input'];
  receiver_number: Scalars['String']['input'];
  sender_name: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type FileDeleteOutput = {
  __typename?: 'FileDeleteOutput';
  key: Scalars['String']['output'];
};

export type FileGetInput = {
  key: Scalars['String']['input'];
};

export type FileGetOutput = {
  __typename?: 'FileGetOutput';
  key: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
};

export type FilePutInput = {
  content_type: Scalars['String']['input'];
  file_name: Scalars['String']['input'];
  file_size: Scalars['Int']['input'];
};

export type FilePutOutput = {
  __typename?: 'FilePutOutput';
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LicenseInput = {
  from_date?: InputMaybe<Scalars['String']['input']>;
  license_code: Scalars['String']['input'];
  license_no: Scalars['String']['input'];
  name: Scalars['String']['input'];
  to_date?: InputMaybe<Scalars['String']['input']>;
};

export type LicenseOutput = {
  __typename?: 'LicenseOutput';
  results: Scalars['String']['output'];
};

export type MailAttachments = {
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MailInput = {
  attachments?: InputMaybe<Array<InputMaybe<MailAttachments>>>;
  contents: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type SearchAddressInput = {
  count_per_page: Scalars['Int']['input'];
  current_page: Scalars['Int']['input'];
  keyword: Scalars['String']['input'];
};

export type SearchAddressOutput = {
  __typename?: 'SearchAddressOutput';
  results: Scalars['String']['output'];
};

export type SearchCarInput = {
  auto_selection?: InputMaybe<Scalars['Boolean']['input']>;
  car_number: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SearchCarOutput = {
  __typename?: 'SearchCarOutput';
  results: Scalars['String']['output'];
};

export type SearchCoordInput = {
  admCd: Scalars['String']['input'];
  buldMnnm: Scalars['Int']['input'];
  buldSlno: Scalars['Int']['input'];
  rnMgtSn: Scalars['String']['input'];
  udrtYn: Scalars['String']['input'];
};

export type SignInInput = {
  password: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type SignInOutput = {
  __typename?: 'SignInOutput';
  access: Token;
  refresh: Token;
};

export type SignUpInput = {
  password: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type SignUpOutput = {
  __typename?: 'SignUpOutput';
  access: Token;
  refresh: Token;
};

export type StaffForSignUpInput = {
  data?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  expires_in: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type UpdateStaffInput = {
  account_id: Scalars['String']['input'];
  cell_phone_number?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type UserForSignUpInput = {
  cell_phone_number: Scalars['String']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  platform?: InputMaybe<Scalars['String']['input']>;
};

export type VerificationMail = {
  to: Scalars['String']['input'];
};

export type VerificationMailOutput = {
  __typename?: 'VerificationMailOutput';
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type VerifyCodeInput = {
  code: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type VerifyCodeOutput = {
  __typename?: 'VerifyCodeOutput';
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']['input']>;
  _gt?: InputMaybe<Scalars['_text']['input']>;
  _gte?: InputMaybe<Scalars['_text']['input']>;
  _in?: InputMaybe<Array<Scalars['_text']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['_text']['input']>;
  _lte?: InputMaybe<Scalars['_text']['input']>;
  _neq?: InputMaybe<Scalars['_text']['input']>;
  _nin?: InputMaybe<Array<Scalars['_text']['input']>>;
};

/** 유저 계정 정보 */
export type Account = {
  __typename?: 'account';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** 로그인 비밀번호 */
  password: Scalars['String']['output'];
  /** 로그인 아이디 */
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};


/** 유저 계정 정보 */
export type AccountUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** 유저 계정 정보 */
export type AccountUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<User_Bool_Exp>;
  users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'account_pkey',
  /** unique or primary key constraint on columns "uid" */
  AccountUidKey = 'account_uid_key'
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 로그인 비밀번호 */
  password?: InputMaybe<Scalars['String']['input']>;
  /** 로그인 아이디 */
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 로그인 비밀번호 */
  password?: Maybe<Scalars['String']['output']>;
  /** 로그인 아이디 */
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 로그인 비밀번호 */
  password?: Maybe<Scalars['String']['output']>;
  /** 로그인 아이디 */
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 로그인 비밀번호 */
  password?: InputMaybe<Scalars['String']['input']>;
  /** 로그인 아이디 */
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 로그인 비밀번호 */
  password?: InputMaybe<Scalars['String']['input']>;
  /** 로그인 아이디 */
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** 자동차 정보  */
export type Car_Info = {
  __typename?: 'car_info';
  /** An array relationship */
  car_info_details: Array<Car_Info_Detail>;
  /** An aggregate relationship */
  car_info_details_aggregate: Car_Info_Detail_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  data: Scalars['jsonb']['output'];
  id: Scalars['uuid']['output'];
  number: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 자동차 정보  */
export type Car_InfoCar_Info_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Detail_Order_By>>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};


/** 자동차 정보  */
export type Car_InfoCar_Info_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Detail_Order_By>>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};


/** 자동차 정보  */
export type Car_InfoDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "car_info" */
export type Car_Info_Aggregate = {
  __typename?: 'car_info_aggregate';
  aggregate?: Maybe<Car_Info_Aggregate_Fields>;
  nodes: Array<Car_Info>;
};

/** aggregate fields of "car_info" */
export type Car_Info_Aggregate_Fields = {
  __typename?: 'car_info_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Car_Info_Max_Fields>;
  min?: Maybe<Car_Info_Min_Fields>;
};


/** aggregate fields of "car_info" */
export type Car_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Car_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Car_Info_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "car_info". All fields are combined with a logical 'AND'. */
export type Car_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Car_Info_Bool_Exp>>;
  _not?: InputMaybe<Car_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Car_Info_Bool_Exp>>;
  car_info_details?: InputMaybe<Car_Info_Detail_Bool_Exp>;
  car_info_details_aggregate?: InputMaybe<Car_Info_Detail_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "car_info" */
export enum Car_Info_Constraint {
  /** unique or primary key constraint on columns "number", "owner" */
  CarInfoNumberOwnerKey = 'car_info_number_owner_key',
  /** unique or primary key constraint on columns "id" */
  CarInfoPkey = 'car_info_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Car_Info_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Car_Info_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Car_Info_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** 자동차 정보 상세 */
export type Car_Info_Detail = {
  __typename?: 'car_info_detail';
  /** An object relationship */
  car_info: Car_Info;
  car_info_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data: Scalars['jsonb']['output'];
  id: Scalars['uuid']['output'];
  seriesno: Scalars['String']['output'];
  ts_key: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 자동차 정보 상세 */
export type Car_Info_DetailDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "car_info_detail" */
export type Car_Info_Detail_Aggregate = {
  __typename?: 'car_info_detail_aggregate';
  aggregate?: Maybe<Car_Info_Detail_Aggregate_Fields>;
  nodes: Array<Car_Info_Detail>;
};

export type Car_Info_Detail_Aggregate_Bool_Exp = {
  count?: InputMaybe<Car_Info_Detail_Aggregate_Bool_Exp_Count>;
};

export type Car_Info_Detail_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Car_Info_Detail_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "car_info_detail" */
export type Car_Info_Detail_Aggregate_Fields = {
  __typename?: 'car_info_detail_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Car_Info_Detail_Max_Fields>;
  min?: Maybe<Car_Info_Detail_Min_Fields>;
};


/** aggregate fields of "car_info_detail" */
export type Car_Info_Detail_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "car_info_detail" */
export type Car_Info_Detail_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Car_Info_Detail_Max_Order_By>;
  min?: InputMaybe<Car_Info_Detail_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Car_Info_Detail_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "car_info_detail" */
export type Car_Info_Detail_Arr_Rel_Insert_Input = {
  data: Array<Car_Info_Detail_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Car_Info_Detail_On_Conflict>;
};

/** Boolean expression to filter rows from the table "car_info_detail". All fields are combined with a logical 'AND'. */
export type Car_Info_Detail_Bool_Exp = {
  _and?: InputMaybe<Array<Car_Info_Detail_Bool_Exp>>;
  _not?: InputMaybe<Car_Info_Detail_Bool_Exp>;
  _or?: InputMaybe<Array<Car_Info_Detail_Bool_Exp>>;
  car_info?: InputMaybe<Car_Info_Bool_Exp>;
  car_info_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  seriesno?: InputMaybe<String_Comparison_Exp>;
  ts_key?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "car_info_detail" */
export enum Car_Info_Detail_Constraint {
  /** unique or primary key constraint on columns "seriesno", "car_info_id" */
  CarInfoDetailCarInfoIdSeriesnoKey = 'car_info_detail_car_info_id_seriesno_key',
  /** unique or primary key constraint on columns "id" */
  CarInfoDetailPkey = 'car_info_detail_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Car_Info_Detail_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Car_Info_Detail_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Car_Info_Detail_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "car_info_detail" */
export type Car_Info_Detail_Insert_Input = {
  car_info?: InputMaybe<Car_Info_Obj_Rel_Insert_Input>;
  car_info_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  seriesno?: InputMaybe<Scalars['String']['input']>;
  ts_key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Car_Info_Detail_Max_Fields = {
  __typename?: 'car_info_detail_max_fields';
  car_info_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  seriesno?: Maybe<Scalars['String']['output']>;
  ts_key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "car_info_detail" */
export type Car_Info_Detail_Max_Order_By = {
  car_info_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  seriesno?: InputMaybe<Order_By>;
  ts_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Car_Info_Detail_Min_Fields = {
  __typename?: 'car_info_detail_min_fields';
  car_info_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  seriesno?: Maybe<Scalars['String']['output']>;
  ts_key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "car_info_detail" */
export type Car_Info_Detail_Min_Order_By = {
  car_info_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  seriesno?: InputMaybe<Order_By>;
  ts_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "car_info_detail" */
export type Car_Info_Detail_Mutation_Response = {
  __typename?: 'car_info_detail_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Car_Info_Detail>;
};

/** on_conflict condition type for table "car_info_detail" */
export type Car_Info_Detail_On_Conflict = {
  constraint: Car_Info_Detail_Constraint;
  update_columns?: Array<Car_Info_Detail_Update_Column>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};

/** Ordering options when selecting data from "car_info_detail". */
export type Car_Info_Detail_Order_By = {
  car_info?: InputMaybe<Car_Info_Order_By>;
  car_info_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  seriesno?: InputMaybe<Order_By>;
  ts_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: car_info_detail */
export type Car_Info_Detail_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Car_Info_Detail_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "car_info_detail" */
export enum Car_Info_Detail_Select_Column {
  /** column name */
  CarInfoId = 'car_info_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Seriesno = 'seriesno',
  /** column name */
  TsKey = 'ts_key',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "car_info_detail" */
export type Car_Info_Detail_Set_Input = {
  car_info_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  seriesno?: InputMaybe<Scalars['String']['input']>;
  ts_key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "car_info_detail" */
export type Car_Info_Detail_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Car_Info_Detail_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Car_Info_Detail_Stream_Cursor_Value_Input = {
  car_info_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  seriesno?: InputMaybe<Scalars['String']['input']>;
  ts_key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "car_info_detail" */
export enum Car_Info_Detail_Update_Column {
  /** column name */
  CarInfoId = 'car_info_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Seriesno = 'seriesno',
  /** column name */
  TsKey = 'ts_key',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Car_Info_Detail_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Car_Info_Detail_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Car_Info_Detail_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Car_Info_Detail_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Car_Info_Detail_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Car_Info_Detail_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Car_Info_Detail_Set_Input>;
  /** filter the rows which have to be updated */
  where: Car_Info_Detail_Bool_Exp;
};

/** input type for inserting data into table "car_info" */
export type Car_Info_Insert_Input = {
  car_info_details?: InputMaybe<Car_Info_Detail_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Car_Info_Max_Fields = {
  __typename?: 'car_info_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Car_Info_Min_Fields = {
  __typename?: 'car_info_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "car_info" */
export type Car_Info_Mutation_Response = {
  __typename?: 'car_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Car_Info>;
};

/** input type for inserting object relation for remote table "car_info" */
export type Car_Info_Obj_Rel_Insert_Input = {
  data: Car_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Car_Info_On_Conflict>;
};

/** on_conflict condition type for table "car_info" */
export type Car_Info_On_Conflict = {
  constraint: Car_Info_Constraint;
  update_columns?: Array<Car_Info_Update_Column>;
  where?: InputMaybe<Car_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "car_info". */
export type Car_Info_Order_By = {
  car_info_details_aggregate?: InputMaybe<Car_Info_Detail_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: car_info */
export type Car_Info_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Car_Info_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "car_info" */
export enum Car_Info_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "car_info" */
export type Car_Info_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "car_info" */
export type Car_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Car_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Car_Info_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "car_info" */
export enum Car_Info_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Car_Info_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Car_Info_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Car_Info_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Car_Info_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Car_Info_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Car_Info_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Car_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Car_Info_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** 팩스 요청정보 */
export type Fax_Info = {
  __typename?: 'fax_info';
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  file_keys: Scalars['_text']['output'];
  id: Scalars['uuid']['output'];
  receiver_name: Scalars['String']['output'];
  receiver_number: Scalars['String']['output'];
  sender_name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 팩스 요청정보 */
export type Fax_InfoDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "fax_info" */
export type Fax_Info_Aggregate = {
  __typename?: 'fax_info_aggregate';
  aggregate?: Maybe<Fax_Info_Aggregate_Fields>;
  nodes: Array<Fax_Info>;
};

/** aggregate fields of "fax_info" */
export type Fax_Info_Aggregate_Fields = {
  __typename?: 'fax_info_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Fax_Info_Max_Fields>;
  min?: Maybe<Fax_Info_Min_Fields>;
};


/** aggregate fields of "fax_info" */
export type Fax_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fax_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Fax_Info_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "fax_info". All fields are combined with a logical 'AND'. */
export type Fax_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Fax_Info_Bool_Exp>>;
  _not?: InputMaybe<Fax_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Fax_Info_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  file_keys?: InputMaybe<_Text_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  receiver_name?: InputMaybe<String_Comparison_Exp>;
  receiver_number?: InputMaybe<String_Comparison_Exp>;
  sender_name?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "fax_info" */
export enum Fax_Info_Constraint {
  /** unique or primary key constraint on columns "id" */
  FaxInfoPkey = 'fax_info_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Fax_Info_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Fax_Info_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Fax_Info_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "fax_info" */
export type Fax_Info_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  file_keys?: InputMaybe<Scalars['_text']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  receiver_name?: InputMaybe<Scalars['String']['input']>;
  receiver_number?: InputMaybe<Scalars['String']['input']>;
  sender_name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Fax_Info_Max_Fields = {
  __typename?: 'fax_info_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  receiver_name?: Maybe<Scalars['String']['output']>;
  receiver_number?: Maybe<Scalars['String']['output']>;
  sender_name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Fax_Info_Min_Fields = {
  __typename?: 'fax_info_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  receiver_name?: Maybe<Scalars['String']['output']>;
  receiver_number?: Maybe<Scalars['String']['output']>;
  sender_name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "fax_info" */
export type Fax_Info_Mutation_Response = {
  __typename?: 'fax_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fax_Info>;
};

/** on_conflict condition type for table "fax_info" */
export type Fax_Info_On_Conflict = {
  constraint: Fax_Info_Constraint;
  update_columns?: Array<Fax_Info_Update_Column>;
  where?: InputMaybe<Fax_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "fax_info". */
export type Fax_Info_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  file_keys?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_name?: InputMaybe<Order_By>;
  receiver_number?: InputMaybe<Order_By>;
  sender_name?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fax_info */
export type Fax_Info_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Fax_Info_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "fax_info" */
export enum Fax_Info_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  FileKeys = 'file_keys',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverName = 'receiver_name',
  /** column name */
  ReceiverNumber = 'receiver_number',
  /** column name */
  SenderName = 'sender_name',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "fax_info" */
export type Fax_Info_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  file_keys?: InputMaybe<Scalars['_text']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  receiver_name?: InputMaybe<Scalars['String']['input']>;
  receiver_number?: InputMaybe<Scalars['String']['input']>;
  sender_name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "fax_info" */
export type Fax_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fax_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fax_Info_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  file_keys?: InputMaybe<Scalars['_text']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  receiver_name?: InputMaybe<Scalars['String']['input']>;
  receiver_number?: InputMaybe<Scalars['String']['input']>;
  sender_name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "fax_info" */
export enum Fax_Info_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  FileKeys = 'file_keys',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverName = 'receiver_name',
  /** column name */
  ReceiverNumber = 'receiver_number',
  /** column name */
  SenderName = 'sender_name',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Fax_Info_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Fax_Info_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Fax_Info_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Fax_Info_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Fax_Info_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Fax_Info_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fax_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fax_Info_Bool_Exp;
};

/** 가마페이 결제이력 */
export type Gp_Payment_History = {
  __typename?: 'gp_payment_history';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data: Scalars['jsonb']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  rc_company: Rc_Company;
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 가마페이 결제이력 */
export type Gp_Payment_HistoryDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "gp_payment_history" */
export type Gp_Payment_History_Aggregate = {
  __typename?: 'gp_payment_history_aggregate';
  aggregate?: Maybe<Gp_Payment_History_Aggregate_Fields>;
  nodes: Array<Gp_Payment_History>;
};

export type Gp_Payment_History_Aggregate_Bool_Exp = {
  count?: InputMaybe<Gp_Payment_History_Aggregate_Bool_Exp_Count>;
};

export type Gp_Payment_History_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Gp_Payment_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "gp_payment_history" */
export type Gp_Payment_History_Aggregate_Fields = {
  __typename?: 'gp_payment_history_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Gp_Payment_History_Max_Fields>;
  min?: Maybe<Gp_Payment_History_Min_Fields>;
};


/** aggregate fields of "gp_payment_history" */
export type Gp_Payment_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "gp_payment_history" */
export type Gp_Payment_History_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gp_Payment_History_Max_Order_By>;
  min?: InputMaybe<Gp_Payment_History_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gp_Payment_History_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "gp_payment_history" */
export type Gp_Payment_History_Arr_Rel_Insert_Input = {
  data: Array<Gp_Payment_History_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Gp_Payment_History_On_Conflict>;
};

/** Boolean expression to filter rows from the table "gp_payment_history". All fields are combined with a logical 'AND'. */
export type Gp_Payment_History_Bool_Exp = {
  _and?: InputMaybe<Array<Gp_Payment_History_Bool_Exp>>;
  _not?: InputMaybe<Gp_Payment_History_Bool_Exp>;
  _or?: InputMaybe<Array<Gp_Payment_History_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "gp_payment_history" */
export enum Gp_Payment_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  GpPaymentHistoryPkey = 'gp_payment_history_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gp_Payment_History_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gp_Payment_History_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gp_Payment_History_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "gp_payment_history" */
export type Gp_Payment_History_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Gp_Payment_History_Max_Fields = {
  __typename?: 'gp_payment_history_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "gp_payment_history" */
export type Gp_Payment_History_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gp_Payment_History_Min_Fields = {
  __typename?: 'gp_payment_history_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "gp_payment_history" */
export type Gp_Payment_History_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gp_payment_history" */
export type Gp_Payment_History_Mutation_Response = {
  __typename?: 'gp_payment_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Gp_Payment_History>;
};

/** on_conflict condition type for table "gp_payment_history" */
export type Gp_Payment_History_On_Conflict = {
  constraint: Gp_Payment_History_Constraint;
  update_columns?: Array<Gp_Payment_History_Update_Column>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};

/** Ordering options when selecting data from "gp_payment_history". */
export type Gp_Payment_History_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gp_payment_history */
export type Gp_Payment_History_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gp_Payment_History_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "gp_payment_history" */
export enum Gp_Payment_History_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "gp_payment_history" */
export type Gp_Payment_History_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "gp_payment_history" */
export type Gp_Payment_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gp_Payment_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gp_Payment_History_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "gp_payment_history" */
export enum Gp_Payment_History_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Gp_Payment_History_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Gp_Payment_History_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Gp_Payment_History_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Gp_Payment_History_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Gp_Payment_History_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Gp_Payment_History_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gp_Payment_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gp_Payment_History_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** 메일인증 */
export type Mail_Verification = {
  __typename?: 'mail_verification';
  code: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  status: Scalars['String']['output'];
  target: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "mail_verification" */
export type Mail_Verification_Aggregate = {
  __typename?: 'mail_verification_aggregate';
  aggregate?: Maybe<Mail_Verification_Aggregate_Fields>;
  nodes: Array<Mail_Verification>;
};

/** aggregate fields of "mail_verification" */
export type Mail_Verification_Aggregate_Fields = {
  __typename?: 'mail_verification_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Mail_Verification_Max_Fields>;
  min?: Maybe<Mail_Verification_Min_Fields>;
};


/** aggregate fields of "mail_verification" */
export type Mail_Verification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mail_Verification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "mail_verification". All fields are combined with a logical 'AND'. */
export type Mail_Verification_Bool_Exp = {
  _and?: InputMaybe<Array<Mail_Verification_Bool_Exp>>;
  _not?: InputMaybe<Mail_Verification_Bool_Exp>;
  _or?: InputMaybe<Array<Mail_Verification_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  target?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "mail_verification" */
export enum Mail_Verification_Constraint {
  /** unique or primary key constraint on columns "id" */
  MailVerificationPkey = 'mail_verification_pkey',
  /** unique or primary key constraint on columns "code", "target", "created_at" */
  MailVerificationTargetCodeCreatedAtKey = 'mail_verification_target_code_created_at_key'
}

/** input type for inserting data into table "mail_verification" */
export type Mail_Verification_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Mail_Verification_Max_Fields = {
  __typename?: 'mail_verification_max_fields';
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Mail_Verification_Min_Fields = {
  __typename?: 'mail_verification_min_fields';
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "mail_verification" */
export type Mail_Verification_Mutation_Response = {
  __typename?: 'mail_verification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Mail_Verification>;
};

/** on_conflict condition type for table "mail_verification" */
export type Mail_Verification_On_Conflict = {
  constraint: Mail_Verification_Constraint;
  update_columns?: Array<Mail_Verification_Update_Column>;
  where?: InputMaybe<Mail_Verification_Bool_Exp>;
};

/** Ordering options when selecting data from "mail_verification". */
export type Mail_Verification_Order_By = {
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: mail_verification */
export type Mail_Verification_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "mail_verification" */
export enum Mail_Verification_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Target = 'target',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "mail_verification" */
export type Mail_Verification_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "mail_verification" */
export type Mail_Verification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mail_Verification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mail_Verification_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "mail_verification" */
export enum Mail_Verification_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Target = 'target',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Mail_Verification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Mail_Verification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Mail_Verification_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** CRMA 직원추가 */
  add_staff?: Maybe<AddStaffOutput>;
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "car_info" */
  delete_car_info?: Maybe<Car_Info_Mutation_Response>;
  /** delete single row from the table: "car_info" */
  delete_car_info_by_pk?: Maybe<Car_Info>;
  /** delete data from the table: "car_info_detail" */
  delete_car_info_detail?: Maybe<Car_Info_Detail_Mutation_Response>;
  /** delete single row from the table: "car_info_detail" */
  delete_car_info_detail_by_pk?: Maybe<Car_Info_Detail>;
  /** delete data from the table: "fax_info" */
  delete_fax_info?: Maybe<Fax_Info_Mutation_Response>;
  /** delete single row from the table: "fax_info" */
  delete_fax_info_by_pk?: Maybe<Fax_Info>;
  /** 파일업로드 삭제 */
  delete_file: FileDeleteOutput;
  /** delete data from the table: "gp_payment_history" */
  delete_gp_payment_history?: Maybe<Gp_Payment_History_Mutation_Response>;
  /** delete single row from the table: "gp_payment_history" */
  delete_gp_payment_history_by_pk?: Maybe<Gp_Payment_History>;
  /** delete data from the table: "mail_verification" */
  delete_mail_verification?: Maybe<Mail_Verification_Mutation_Response>;
  /** delete single row from the table: "mail_verification" */
  delete_mail_verification_by_pk?: Maybe<Mail_Verification>;
  /** delete data from the table: "penalty_info" */
  delete_penalty_info?: Maybe<Penalty_Info_Mutation_Response>;
  /** delete single row from the table: "penalty_info" */
  delete_penalty_info_by_pk?: Maybe<Penalty_Info>;
  /** delete data from the table: "rc_car" */
  delete_rc_car?: Maybe<Rc_Car_Mutation_Response>;
  /** delete data from the table: "rc_car_attachments" */
  delete_rc_car_attachments?: Maybe<Rc_Car_Attachments_Mutation_Response>;
  /** delete single row from the table: "rc_car_attachments" */
  delete_rc_car_attachments_by_pk?: Maybe<Rc_Car_Attachments>;
  /** delete single row from the table: "rc_car" */
  delete_rc_car_by_pk?: Maybe<Rc_Car>;
  /** delete data from the table: "rc_client" */
  delete_rc_client?: Maybe<Rc_Client_Mutation_Response>;
  /** delete data from the table: "rc_client_attachments" */
  delete_rc_client_attachments?: Maybe<Rc_Client_Attachments_Mutation_Response>;
  /** delete single row from the table: "rc_client_attachments" */
  delete_rc_client_attachments_by_pk?: Maybe<Rc_Client_Attachments>;
  /** delete single row from the table: "rc_client" */
  delete_rc_client_by_pk?: Maybe<Rc_Client>;
  /** delete data from the table: "rc_company" */
  delete_rc_company?: Maybe<Rc_Company_Mutation_Response>;
  /** delete data from the table: "rc_company_attachments" */
  delete_rc_company_attachments?: Maybe<Rc_Company_Attachments_Mutation_Response>;
  /** delete single row from the table: "rc_company_attachments" */
  delete_rc_company_attachments_by_pk?: Maybe<Rc_Company_Attachments>;
  /** delete single row from the table: "rc_company" */
  delete_rc_company_by_pk?: Maybe<Rc_Company>;
  /** delete data from the table: "rc_consignment" */
  delete_rc_consignment?: Maybe<Rc_Consignment_Mutation_Response>;
  /** delete single row from the table: "rc_consignment" */
  delete_rc_consignment_by_pk?: Maybe<Rc_Consignment>;
  /** delete data from the table: "rc_inquiry" */
  delete_rc_inquiry?: Maybe<Rc_Inquiry_Mutation_Response>;
  /** delete single row from the table: "rc_inquiry" */
  delete_rc_inquiry_by_pk?: Maybe<Rc_Inquiry>;
  /** delete data from the table: "rc_notice" */
  delete_rc_notice?: Maybe<Rc_Notice_Mutation_Response>;
  /** delete single row from the table: "rc_notice" */
  delete_rc_notice_by_pk?: Maybe<Rc_Notice>;
  /** delete data from the table: "rc_notification" */
  delete_rc_notification?: Maybe<Rc_Notification_Mutation_Response>;
  /** delete single row from the table: "rc_notification" */
  delete_rc_notification_by_pk?: Maybe<Rc_Notification>;
  /** delete data from the table: "rc_partner" */
  delete_rc_partner?: Maybe<Rc_Partner_Mutation_Response>;
  /** delete single row from the table: "rc_partner" */
  delete_rc_partner_by_pk?: Maybe<Rc_Partner>;
  /** delete data from the table: "rc_quotation" */
  delete_rc_quotation?: Maybe<Rc_Quotation_Mutation_Response>;
  /** delete single row from the table: "rc_quotation" */
  delete_rc_quotation_by_pk?: Maybe<Rc_Quotation>;
  /** delete data from the table: "rc_rental" */
  delete_rc_rental?: Maybe<Rc_Rental_Mutation_Response>;
  /** delete data from the table: "rc_rental_attachments" */
  delete_rc_rental_attachments?: Maybe<Rc_Rental_Attachments_Mutation_Response>;
  /** delete single row from the table: "rc_rental_attachments" */
  delete_rc_rental_attachments_by_pk?: Maybe<Rc_Rental_Attachments>;
  /** delete single row from the table: "rc_rental" */
  delete_rc_rental_by_pk?: Maybe<Rc_Rental>;
  /** delete data from the table: "rc_settlement" */
  delete_rc_settlement?: Maybe<Rc_Settlement_Mutation_Response>;
  /** delete single row from the table: "rc_settlement" */
  delete_rc_settlement_by_pk?: Maybe<Rc_Settlement>;
  /** delete data from the table: "rc_staff" */
  delete_rc_staff?: Maybe<Rc_Staff_Mutation_Response>;
  /** delete single row from the table: "rc_staff" */
  delete_rc_staff_by_pk?: Maybe<Rc_Staff>;
  /** delete data from the table: "self_certification" */
  delete_self_certification?: Maybe<Self_Certification_Mutation_Response>;
  /** delete single row from the table: "self_certification" */
  delete_self_certification_by_pk?: Maybe<Self_Certification>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** 파일업로드 미리 서명된 URL 생성 */
  file_put_url?: Maybe<FilePutOutput>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "car_info" */
  insert_car_info?: Maybe<Car_Info_Mutation_Response>;
  /** insert data into the table: "car_info_detail" */
  insert_car_info_detail?: Maybe<Car_Info_Detail_Mutation_Response>;
  /** insert a single row into the table: "car_info_detail" */
  insert_car_info_detail_one?: Maybe<Car_Info_Detail>;
  /** insert a single row into the table: "car_info" */
  insert_car_info_one?: Maybe<Car_Info>;
  /** insert data into the table: "fax_info" */
  insert_fax_info?: Maybe<Fax_Info_Mutation_Response>;
  /** insert a single row into the table: "fax_info" */
  insert_fax_info_one?: Maybe<Fax_Info>;
  /** insert data into the table: "gp_payment_history" */
  insert_gp_payment_history?: Maybe<Gp_Payment_History_Mutation_Response>;
  /** insert a single row into the table: "gp_payment_history" */
  insert_gp_payment_history_one?: Maybe<Gp_Payment_History>;
  /** insert data into the table: "mail_verification" */
  insert_mail_verification?: Maybe<Mail_Verification_Mutation_Response>;
  /** insert a single row into the table: "mail_verification" */
  insert_mail_verification_one?: Maybe<Mail_Verification>;
  /** insert data into the table: "penalty_info" */
  insert_penalty_info?: Maybe<Penalty_Info_Mutation_Response>;
  /** insert a single row into the table: "penalty_info" */
  insert_penalty_info_one?: Maybe<Penalty_Info>;
  /** insert data into the table: "rc_car" */
  insert_rc_car?: Maybe<Rc_Car_Mutation_Response>;
  /** insert data into the table: "rc_car_attachments" */
  insert_rc_car_attachments?: Maybe<Rc_Car_Attachments_Mutation_Response>;
  /** insert a single row into the table: "rc_car_attachments" */
  insert_rc_car_attachments_one?: Maybe<Rc_Car_Attachments>;
  /** insert a single row into the table: "rc_car" */
  insert_rc_car_one?: Maybe<Rc_Car>;
  /** insert data into the table: "rc_client" */
  insert_rc_client?: Maybe<Rc_Client_Mutation_Response>;
  /** insert data into the table: "rc_client_attachments" */
  insert_rc_client_attachments?: Maybe<Rc_Client_Attachments_Mutation_Response>;
  /** insert a single row into the table: "rc_client_attachments" */
  insert_rc_client_attachments_one?: Maybe<Rc_Client_Attachments>;
  /** insert a single row into the table: "rc_client" */
  insert_rc_client_one?: Maybe<Rc_Client>;
  /** insert data into the table: "rc_company" */
  insert_rc_company?: Maybe<Rc_Company_Mutation_Response>;
  /** insert data into the table: "rc_company_attachments" */
  insert_rc_company_attachments?: Maybe<Rc_Company_Attachments_Mutation_Response>;
  /** insert a single row into the table: "rc_company_attachments" */
  insert_rc_company_attachments_one?: Maybe<Rc_Company_Attachments>;
  /** insert a single row into the table: "rc_company" */
  insert_rc_company_one?: Maybe<Rc_Company>;
  /** insert data into the table: "rc_consignment" */
  insert_rc_consignment?: Maybe<Rc_Consignment_Mutation_Response>;
  /** insert a single row into the table: "rc_consignment" */
  insert_rc_consignment_one?: Maybe<Rc_Consignment>;
  /** insert data into the table: "rc_inquiry" */
  insert_rc_inquiry?: Maybe<Rc_Inquiry_Mutation_Response>;
  /** insert a single row into the table: "rc_inquiry" */
  insert_rc_inquiry_one?: Maybe<Rc_Inquiry>;
  /** insert data into the table: "rc_notice" */
  insert_rc_notice?: Maybe<Rc_Notice_Mutation_Response>;
  /** insert a single row into the table: "rc_notice" */
  insert_rc_notice_one?: Maybe<Rc_Notice>;
  /** insert data into the table: "rc_notification" */
  insert_rc_notification?: Maybe<Rc_Notification_Mutation_Response>;
  /** insert a single row into the table: "rc_notification" */
  insert_rc_notification_one?: Maybe<Rc_Notification>;
  /** insert data into the table: "rc_partner" */
  insert_rc_partner?: Maybe<Rc_Partner_Mutation_Response>;
  /** insert a single row into the table: "rc_partner" */
  insert_rc_partner_one?: Maybe<Rc_Partner>;
  /** insert data into the table: "rc_quotation" */
  insert_rc_quotation?: Maybe<Rc_Quotation_Mutation_Response>;
  /** insert a single row into the table: "rc_quotation" */
  insert_rc_quotation_one?: Maybe<Rc_Quotation>;
  /** insert data into the table: "rc_rental" */
  insert_rc_rental?: Maybe<Rc_Rental_Mutation_Response>;
  /** insert data into the table: "rc_rental_attachments" */
  insert_rc_rental_attachments?: Maybe<Rc_Rental_Attachments_Mutation_Response>;
  /** insert a single row into the table: "rc_rental_attachments" */
  insert_rc_rental_attachments_one?: Maybe<Rc_Rental_Attachments>;
  /** insert a single row into the table: "rc_rental" */
  insert_rc_rental_one?: Maybe<Rc_Rental>;
  /** insert data into the table: "rc_settlement" */
  insert_rc_settlement?: Maybe<Rc_Settlement_Mutation_Response>;
  /** insert a single row into the table: "rc_settlement" */
  insert_rc_settlement_one?: Maybe<Rc_Settlement>;
  /** insert data into the table: "rc_staff" */
  insert_rc_staff?: Maybe<Rc_Staff_Mutation_Response>;
  /** insert a single row into the table: "rc_staff" */
  insert_rc_staff_one?: Maybe<Rc_Staff>;
  /** insert data into the table: "self_certification" */
  insert_self_certification?: Maybe<Self_Certification_Mutation_Response>;
  /** insert a single row into the table: "self_certification" */
  insert_self_certification_one?: Maybe<Self_Certification>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** 파일업로드 미리 서명된 URL 생성 public */
  public_file_put_url?: Maybe<FilePutOutput>;
  /** 알림톡 전송 */
  send_alimtalk?: Maybe<CommonOutput>;
  /** 팩스전송 */
  send_fax?: Maybe<CommonOutput>;
  /** 메일전송 */
  send_mail?: Maybe<CommonOutput>;
  /** 인증 메일 발송 */
  send_verification_mail?: Maybe<VerificationMailOutput>;
  /** CRMA 회원가입 */
  sign_up_for_crma?: Maybe<SignUpOutput>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "car_info" */
  update_car_info?: Maybe<Car_Info_Mutation_Response>;
  /** update single row of the table: "car_info" */
  update_car_info_by_pk?: Maybe<Car_Info>;
  /** update data of the table: "car_info_detail" */
  update_car_info_detail?: Maybe<Car_Info_Detail_Mutation_Response>;
  /** update single row of the table: "car_info_detail" */
  update_car_info_detail_by_pk?: Maybe<Car_Info_Detail>;
  /** update multiples rows of table: "car_info_detail" */
  update_car_info_detail_many?: Maybe<Array<Maybe<Car_Info_Detail_Mutation_Response>>>;
  /** update multiples rows of table: "car_info" */
  update_car_info_many?: Maybe<Array<Maybe<Car_Info_Mutation_Response>>>;
  /** update data of the table: "fax_info" */
  update_fax_info?: Maybe<Fax_Info_Mutation_Response>;
  /** update single row of the table: "fax_info" */
  update_fax_info_by_pk?: Maybe<Fax_Info>;
  /** update multiples rows of table: "fax_info" */
  update_fax_info_many?: Maybe<Array<Maybe<Fax_Info_Mutation_Response>>>;
  /** update data of the table: "gp_payment_history" */
  update_gp_payment_history?: Maybe<Gp_Payment_History_Mutation_Response>;
  /** update single row of the table: "gp_payment_history" */
  update_gp_payment_history_by_pk?: Maybe<Gp_Payment_History>;
  /** update multiples rows of table: "gp_payment_history" */
  update_gp_payment_history_many?: Maybe<Array<Maybe<Gp_Payment_History_Mutation_Response>>>;
  /** update data of the table: "mail_verification" */
  update_mail_verification?: Maybe<Mail_Verification_Mutation_Response>;
  /** update single row of the table: "mail_verification" */
  update_mail_verification_by_pk?: Maybe<Mail_Verification>;
  /** update multiples rows of table: "mail_verification" */
  update_mail_verification_many?: Maybe<Array<Maybe<Mail_Verification_Mutation_Response>>>;
  /** update data of the table: "penalty_info" */
  update_penalty_info?: Maybe<Penalty_Info_Mutation_Response>;
  /** update single row of the table: "penalty_info" */
  update_penalty_info_by_pk?: Maybe<Penalty_Info>;
  /** update multiples rows of table: "penalty_info" */
  update_penalty_info_many?: Maybe<Array<Maybe<Penalty_Info_Mutation_Response>>>;
  /** update data of the table: "rc_car" */
  update_rc_car?: Maybe<Rc_Car_Mutation_Response>;
  /** update data of the table: "rc_car_attachments" */
  update_rc_car_attachments?: Maybe<Rc_Car_Attachments_Mutation_Response>;
  /** update single row of the table: "rc_car_attachments" */
  update_rc_car_attachments_by_pk?: Maybe<Rc_Car_Attachments>;
  /** update multiples rows of table: "rc_car_attachments" */
  update_rc_car_attachments_many?: Maybe<Array<Maybe<Rc_Car_Attachments_Mutation_Response>>>;
  /** update single row of the table: "rc_car" */
  update_rc_car_by_pk?: Maybe<Rc_Car>;
  /** update multiples rows of table: "rc_car" */
  update_rc_car_many?: Maybe<Array<Maybe<Rc_Car_Mutation_Response>>>;
  /** update data of the table: "rc_client" */
  update_rc_client?: Maybe<Rc_Client_Mutation_Response>;
  /** update data of the table: "rc_client_attachments" */
  update_rc_client_attachments?: Maybe<Rc_Client_Attachments_Mutation_Response>;
  /** update single row of the table: "rc_client_attachments" */
  update_rc_client_attachments_by_pk?: Maybe<Rc_Client_Attachments>;
  /** update multiples rows of table: "rc_client_attachments" */
  update_rc_client_attachments_many?: Maybe<Array<Maybe<Rc_Client_Attachments_Mutation_Response>>>;
  /** update single row of the table: "rc_client" */
  update_rc_client_by_pk?: Maybe<Rc_Client>;
  /** update multiples rows of table: "rc_client" */
  update_rc_client_many?: Maybe<Array<Maybe<Rc_Client_Mutation_Response>>>;
  /** update data of the table: "rc_company" */
  update_rc_company?: Maybe<Rc_Company_Mutation_Response>;
  /** update data of the table: "rc_company_attachments" */
  update_rc_company_attachments?: Maybe<Rc_Company_Attachments_Mutation_Response>;
  /** update single row of the table: "rc_company_attachments" */
  update_rc_company_attachments_by_pk?: Maybe<Rc_Company_Attachments>;
  /** update multiples rows of table: "rc_company_attachments" */
  update_rc_company_attachments_many?: Maybe<Array<Maybe<Rc_Company_Attachments_Mutation_Response>>>;
  /** update single row of the table: "rc_company" */
  update_rc_company_by_pk?: Maybe<Rc_Company>;
  /** update multiples rows of table: "rc_company" */
  update_rc_company_many?: Maybe<Array<Maybe<Rc_Company_Mutation_Response>>>;
  /** update data of the table: "rc_consignment" */
  update_rc_consignment?: Maybe<Rc_Consignment_Mutation_Response>;
  /** update single row of the table: "rc_consignment" */
  update_rc_consignment_by_pk?: Maybe<Rc_Consignment>;
  /** update multiples rows of table: "rc_consignment" */
  update_rc_consignment_many?: Maybe<Array<Maybe<Rc_Consignment_Mutation_Response>>>;
  /** update data of the table: "rc_inquiry" */
  update_rc_inquiry?: Maybe<Rc_Inquiry_Mutation_Response>;
  /** update single row of the table: "rc_inquiry" */
  update_rc_inquiry_by_pk?: Maybe<Rc_Inquiry>;
  /** update multiples rows of table: "rc_inquiry" */
  update_rc_inquiry_many?: Maybe<Array<Maybe<Rc_Inquiry_Mutation_Response>>>;
  /** update data of the table: "rc_notice" */
  update_rc_notice?: Maybe<Rc_Notice_Mutation_Response>;
  /** update single row of the table: "rc_notice" */
  update_rc_notice_by_pk?: Maybe<Rc_Notice>;
  /** update multiples rows of table: "rc_notice" */
  update_rc_notice_many?: Maybe<Array<Maybe<Rc_Notice_Mutation_Response>>>;
  /** update data of the table: "rc_notification" */
  update_rc_notification?: Maybe<Rc_Notification_Mutation_Response>;
  /** update single row of the table: "rc_notification" */
  update_rc_notification_by_pk?: Maybe<Rc_Notification>;
  /** update multiples rows of table: "rc_notification" */
  update_rc_notification_many?: Maybe<Array<Maybe<Rc_Notification_Mutation_Response>>>;
  /** update data of the table: "rc_partner" */
  update_rc_partner?: Maybe<Rc_Partner_Mutation_Response>;
  /** update single row of the table: "rc_partner" */
  update_rc_partner_by_pk?: Maybe<Rc_Partner>;
  /** update multiples rows of table: "rc_partner" */
  update_rc_partner_many?: Maybe<Array<Maybe<Rc_Partner_Mutation_Response>>>;
  /** update data of the table: "rc_quotation" */
  update_rc_quotation?: Maybe<Rc_Quotation_Mutation_Response>;
  /** update single row of the table: "rc_quotation" */
  update_rc_quotation_by_pk?: Maybe<Rc_Quotation>;
  /** update multiples rows of table: "rc_quotation" */
  update_rc_quotation_many?: Maybe<Array<Maybe<Rc_Quotation_Mutation_Response>>>;
  /** update data of the table: "rc_rental" */
  update_rc_rental?: Maybe<Rc_Rental_Mutation_Response>;
  /** update data of the table: "rc_rental_attachments" */
  update_rc_rental_attachments?: Maybe<Rc_Rental_Attachments_Mutation_Response>;
  /** update single row of the table: "rc_rental_attachments" */
  update_rc_rental_attachments_by_pk?: Maybe<Rc_Rental_Attachments>;
  /** update multiples rows of table: "rc_rental_attachments" */
  update_rc_rental_attachments_many?: Maybe<Array<Maybe<Rc_Rental_Attachments_Mutation_Response>>>;
  /** update single row of the table: "rc_rental" */
  update_rc_rental_by_pk?: Maybe<Rc_Rental>;
  /** update multiples rows of table: "rc_rental" */
  update_rc_rental_many?: Maybe<Array<Maybe<Rc_Rental_Mutation_Response>>>;
  /** update data of the table: "rc_settlement" */
  update_rc_settlement?: Maybe<Rc_Settlement_Mutation_Response>;
  /** update single row of the table: "rc_settlement" */
  update_rc_settlement_by_pk?: Maybe<Rc_Settlement>;
  /** update multiples rows of table: "rc_settlement" */
  update_rc_settlement_many?: Maybe<Array<Maybe<Rc_Settlement_Mutation_Response>>>;
  /** update data of the table: "rc_staff" */
  update_rc_staff?: Maybe<Rc_Staff_Mutation_Response>;
  /** update single row of the table: "rc_staff" */
  update_rc_staff_by_pk?: Maybe<Rc_Staff>;
  /** update multiples rows of table: "rc_staff" */
  update_rc_staff_many?: Maybe<Array<Maybe<Rc_Staff_Mutation_Response>>>;
  /** update data of the table: "self_certification" */
  update_self_certification?: Maybe<Self_Certification_Mutation_Response>;
  /** update single row of the table: "self_certification" */
  update_self_certification_by_pk?: Maybe<Self_Certification>;
  /** update multiples rows of table: "self_certification" */
  update_self_certification_many?: Maybe<Array<Maybe<Self_Certification_Mutation_Response>>>;
  /** CRMA 직원수정 */
  update_staff?: Maybe<AddStaffOutput>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** 인증코드 검증 */
  verify_code?: Maybe<VerifyCodeOutput>;
};


/** mutation root */
export type Mutation_RootAdd_StaffArgs = {
  addStaffInput: AddStaffInput;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Car_InfoArgs = {
  where: Car_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Car_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Car_Info_DetailArgs = {
  where: Car_Info_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Car_Info_Detail_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Fax_InfoArgs = {
  where: Fax_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fax_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_FileArgs = {
  key: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Gp_Payment_HistoryArgs = {
  where: Gp_Payment_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gp_Payment_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Mail_VerificationArgs = {
  where: Mail_Verification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mail_Verification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Penalty_InfoArgs = {
  where: Penalty_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Penalty_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_CarArgs = {
  where: Rc_Car_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Car_AttachmentsArgs = {
  where: Rc_Car_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Car_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_Car_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_ClientArgs = {
  where: Rc_Client_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Client_AttachmentsArgs = {
  where: Rc_Client_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Client_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_Client_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_CompanyArgs = {
  where: Rc_Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Company_AttachmentsArgs = {
  where: Rc_Company_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Company_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_Company_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_ConsignmentArgs = {
  where: Rc_Consignment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Consignment_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_InquiryArgs = {
  where: Rc_Inquiry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Inquiry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_NoticeArgs = {
  where: Rc_Notice_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Notice_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_NotificationArgs = {
  where: Rc_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Notification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_PartnerArgs = {
  where: Rc_Partner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Partner_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_QuotationArgs = {
  where: Rc_Quotation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Quotation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_RentalArgs = {
  where: Rc_Rental_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Rental_AttachmentsArgs = {
  where: Rc_Rental_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Rental_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_Rental_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_SettlementArgs = {
  where: Rc_Settlement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Settlement_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rc_StaffArgs = {
  where: Rc_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rc_Staff_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Self_CertificationArgs = {
  where: Self_Certification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Self_Certification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootFile_Put_UrlArgs = {
  filePutInput: FilePutInput;
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Car_InfoArgs = {
  objects: Array<Car_Info_Insert_Input>;
  on_conflict?: InputMaybe<Car_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Car_Info_DetailArgs = {
  objects: Array<Car_Info_Detail_Insert_Input>;
  on_conflict?: InputMaybe<Car_Info_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Car_Info_Detail_OneArgs = {
  object: Car_Info_Detail_Insert_Input;
  on_conflict?: InputMaybe<Car_Info_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Car_Info_OneArgs = {
  object: Car_Info_Insert_Input;
  on_conflict?: InputMaybe<Car_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fax_InfoArgs = {
  objects: Array<Fax_Info_Insert_Input>;
  on_conflict?: InputMaybe<Fax_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fax_Info_OneArgs = {
  object: Fax_Info_Insert_Input;
  on_conflict?: InputMaybe<Fax_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gp_Payment_HistoryArgs = {
  objects: Array<Gp_Payment_History_Insert_Input>;
  on_conflict?: InputMaybe<Gp_Payment_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gp_Payment_History_OneArgs = {
  object: Gp_Payment_History_Insert_Input;
  on_conflict?: InputMaybe<Gp_Payment_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mail_VerificationArgs = {
  objects: Array<Mail_Verification_Insert_Input>;
  on_conflict?: InputMaybe<Mail_Verification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mail_Verification_OneArgs = {
  object: Mail_Verification_Insert_Input;
  on_conflict?: InputMaybe<Mail_Verification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Penalty_InfoArgs = {
  objects: Array<Penalty_Info_Insert_Input>;
  on_conflict?: InputMaybe<Penalty_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Penalty_Info_OneArgs = {
  object: Penalty_Info_Insert_Input;
  on_conflict?: InputMaybe<Penalty_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_CarArgs = {
  objects: Array<Rc_Car_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Car_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Car_AttachmentsArgs = {
  objects: Array<Rc_Car_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Car_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Car_Attachments_OneArgs = {
  object: Rc_Car_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Rc_Car_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Car_OneArgs = {
  object: Rc_Car_Insert_Input;
  on_conflict?: InputMaybe<Rc_Car_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_ClientArgs = {
  objects: Array<Rc_Client_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Client_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Client_AttachmentsArgs = {
  objects: Array<Rc_Client_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Client_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Client_Attachments_OneArgs = {
  object: Rc_Client_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Rc_Client_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Client_OneArgs = {
  object: Rc_Client_Insert_Input;
  on_conflict?: InputMaybe<Rc_Client_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_CompanyArgs = {
  objects: Array<Rc_Company_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Company_AttachmentsArgs = {
  objects: Array<Rc_Company_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Company_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Company_Attachments_OneArgs = {
  object: Rc_Company_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Rc_Company_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Company_OneArgs = {
  object: Rc_Company_Insert_Input;
  on_conflict?: InputMaybe<Rc_Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_ConsignmentArgs = {
  objects: Array<Rc_Consignment_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Consignment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Consignment_OneArgs = {
  object: Rc_Consignment_Insert_Input;
  on_conflict?: InputMaybe<Rc_Consignment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_InquiryArgs = {
  objects: Array<Rc_Inquiry_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Inquiry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Inquiry_OneArgs = {
  object: Rc_Inquiry_Insert_Input;
  on_conflict?: InputMaybe<Rc_Inquiry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_NoticeArgs = {
  objects: Array<Rc_Notice_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Notice_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Notice_OneArgs = {
  object: Rc_Notice_Insert_Input;
  on_conflict?: InputMaybe<Rc_Notice_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_NotificationArgs = {
  objects: Array<Rc_Notification_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Notification_OneArgs = {
  object: Rc_Notification_Insert_Input;
  on_conflict?: InputMaybe<Rc_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_PartnerArgs = {
  objects: Array<Rc_Partner_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Partner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Partner_OneArgs = {
  object: Rc_Partner_Insert_Input;
  on_conflict?: InputMaybe<Rc_Partner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_QuotationArgs = {
  objects: Array<Rc_Quotation_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Quotation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Quotation_OneArgs = {
  object: Rc_Quotation_Insert_Input;
  on_conflict?: InputMaybe<Rc_Quotation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_RentalArgs = {
  objects: Array<Rc_Rental_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Rental_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Rental_AttachmentsArgs = {
  objects: Array<Rc_Rental_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Rental_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Rental_Attachments_OneArgs = {
  object: Rc_Rental_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Rc_Rental_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Rental_OneArgs = {
  object: Rc_Rental_Insert_Input;
  on_conflict?: InputMaybe<Rc_Rental_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_SettlementArgs = {
  objects: Array<Rc_Settlement_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Settlement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Settlement_OneArgs = {
  object: Rc_Settlement_Insert_Input;
  on_conflict?: InputMaybe<Rc_Settlement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_StaffArgs = {
  objects: Array<Rc_Staff_Insert_Input>;
  on_conflict?: InputMaybe<Rc_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rc_Staff_OneArgs = {
  object: Rc_Staff_Insert_Input;
  on_conflict?: InputMaybe<Rc_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Self_CertificationArgs = {
  objects: Array<Self_Certification_Insert_Input>;
  on_conflict?: InputMaybe<Self_Certification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Self_Certification_OneArgs = {
  object: Self_Certification_Insert_Input;
  on_conflict?: InputMaybe<Self_Certification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootPublic_File_Put_UrlArgs = {
  filePutInput: FilePutInput;
};


/** mutation root */
export type Mutation_RootSend_AlimtalkArgs = {
  alimtalkInput: AlimtalkInput;
};


/** mutation root */
export type Mutation_RootSend_FaxArgs = {
  faxInput: FaxInput;
};


/** mutation root */
export type Mutation_RootSend_MailArgs = {
  mailInput: MailInput;
};


/** mutation root */
export type Mutation_RootSend_Verification_MailArgs = {
  input: VerificationMail;
};


/** mutation root */
export type Mutation_RootSign_Up_For_CrmaArgs = {
  company: CompanyForSignUpInput;
  signUpInput: SignUpInput;
  staff: StaffForSignUpInput;
  user: UserForSignUpInput;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Car_InfoArgs = {
  _append?: InputMaybe<Car_Info_Append_Input>;
  _delete_at_path?: InputMaybe<Car_Info_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Car_Info_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Car_Info_Delete_Key_Input>;
  _prepend?: InputMaybe<Car_Info_Prepend_Input>;
  _set?: InputMaybe<Car_Info_Set_Input>;
  where: Car_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Car_Info_By_PkArgs = {
  _append?: InputMaybe<Car_Info_Append_Input>;
  _delete_at_path?: InputMaybe<Car_Info_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Car_Info_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Car_Info_Delete_Key_Input>;
  _prepend?: InputMaybe<Car_Info_Prepend_Input>;
  _set?: InputMaybe<Car_Info_Set_Input>;
  pk_columns: Car_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Car_Info_DetailArgs = {
  _append?: InputMaybe<Car_Info_Detail_Append_Input>;
  _delete_at_path?: InputMaybe<Car_Info_Detail_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Car_Info_Detail_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Car_Info_Detail_Delete_Key_Input>;
  _prepend?: InputMaybe<Car_Info_Detail_Prepend_Input>;
  _set?: InputMaybe<Car_Info_Detail_Set_Input>;
  where: Car_Info_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Car_Info_Detail_By_PkArgs = {
  _append?: InputMaybe<Car_Info_Detail_Append_Input>;
  _delete_at_path?: InputMaybe<Car_Info_Detail_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Car_Info_Detail_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Car_Info_Detail_Delete_Key_Input>;
  _prepend?: InputMaybe<Car_Info_Detail_Prepend_Input>;
  _set?: InputMaybe<Car_Info_Detail_Set_Input>;
  pk_columns: Car_Info_Detail_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Car_Info_Detail_ManyArgs = {
  updates: Array<Car_Info_Detail_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Car_Info_ManyArgs = {
  updates: Array<Car_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fax_InfoArgs = {
  _append?: InputMaybe<Fax_Info_Append_Input>;
  _delete_at_path?: InputMaybe<Fax_Info_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Fax_Info_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Fax_Info_Delete_Key_Input>;
  _prepend?: InputMaybe<Fax_Info_Prepend_Input>;
  _set?: InputMaybe<Fax_Info_Set_Input>;
  where: Fax_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fax_Info_By_PkArgs = {
  _append?: InputMaybe<Fax_Info_Append_Input>;
  _delete_at_path?: InputMaybe<Fax_Info_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Fax_Info_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Fax_Info_Delete_Key_Input>;
  _prepend?: InputMaybe<Fax_Info_Prepend_Input>;
  _set?: InputMaybe<Fax_Info_Set_Input>;
  pk_columns: Fax_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fax_Info_ManyArgs = {
  updates: Array<Fax_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gp_Payment_HistoryArgs = {
  _append?: InputMaybe<Gp_Payment_History_Append_Input>;
  _delete_at_path?: InputMaybe<Gp_Payment_History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gp_Payment_History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gp_Payment_History_Delete_Key_Input>;
  _prepend?: InputMaybe<Gp_Payment_History_Prepend_Input>;
  _set?: InputMaybe<Gp_Payment_History_Set_Input>;
  where: Gp_Payment_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gp_Payment_History_By_PkArgs = {
  _append?: InputMaybe<Gp_Payment_History_Append_Input>;
  _delete_at_path?: InputMaybe<Gp_Payment_History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gp_Payment_History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gp_Payment_History_Delete_Key_Input>;
  _prepend?: InputMaybe<Gp_Payment_History_Prepend_Input>;
  _set?: InputMaybe<Gp_Payment_History_Set_Input>;
  pk_columns: Gp_Payment_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gp_Payment_History_ManyArgs = {
  updates: Array<Gp_Payment_History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Mail_VerificationArgs = {
  _set?: InputMaybe<Mail_Verification_Set_Input>;
  where: Mail_Verification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mail_Verification_By_PkArgs = {
  _set?: InputMaybe<Mail_Verification_Set_Input>;
  pk_columns: Mail_Verification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Mail_Verification_ManyArgs = {
  updates: Array<Mail_Verification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Penalty_InfoArgs = {
  _append?: InputMaybe<Penalty_Info_Append_Input>;
  _delete_at_path?: InputMaybe<Penalty_Info_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Penalty_Info_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Penalty_Info_Delete_Key_Input>;
  _inc?: InputMaybe<Penalty_Info_Inc_Input>;
  _prepend?: InputMaybe<Penalty_Info_Prepend_Input>;
  _set?: InputMaybe<Penalty_Info_Set_Input>;
  where: Penalty_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Penalty_Info_By_PkArgs = {
  _append?: InputMaybe<Penalty_Info_Append_Input>;
  _delete_at_path?: InputMaybe<Penalty_Info_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Penalty_Info_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Penalty_Info_Delete_Key_Input>;
  _inc?: InputMaybe<Penalty_Info_Inc_Input>;
  _prepend?: InputMaybe<Penalty_Info_Prepend_Input>;
  _set?: InputMaybe<Penalty_Info_Set_Input>;
  pk_columns: Penalty_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Penalty_Info_ManyArgs = {
  updates: Array<Penalty_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_CarArgs = {
  _append?: InputMaybe<Rc_Car_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Car_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Car_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Car_Delete_Key_Input>;
  _inc?: InputMaybe<Rc_Car_Inc_Input>;
  _prepend?: InputMaybe<Rc_Car_Prepend_Input>;
  _set?: InputMaybe<Rc_Car_Set_Input>;
  where: Rc_Car_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Car_AttachmentsArgs = {
  _inc?: InputMaybe<Rc_Car_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Car_Attachments_Set_Input>;
  where: Rc_Car_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Car_Attachments_By_PkArgs = {
  _inc?: InputMaybe<Rc_Car_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Car_Attachments_Set_Input>;
  pk_columns: Rc_Car_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Car_Attachments_ManyArgs = {
  updates: Array<Rc_Car_Attachments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Car_By_PkArgs = {
  _append?: InputMaybe<Rc_Car_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Car_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Car_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Car_Delete_Key_Input>;
  _inc?: InputMaybe<Rc_Car_Inc_Input>;
  _prepend?: InputMaybe<Rc_Car_Prepend_Input>;
  _set?: InputMaybe<Rc_Car_Set_Input>;
  pk_columns: Rc_Car_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Car_ManyArgs = {
  updates: Array<Rc_Car_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_ClientArgs = {
  _append?: InputMaybe<Rc_Client_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Client_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Client_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Client_Delete_Key_Input>;
  _inc?: InputMaybe<Rc_Client_Inc_Input>;
  _prepend?: InputMaybe<Rc_Client_Prepend_Input>;
  _set?: InputMaybe<Rc_Client_Set_Input>;
  where: Rc_Client_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Client_AttachmentsArgs = {
  _inc?: InputMaybe<Rc_Client_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Client_Attachments_Set_Input>;
  where: Rc_Client_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Client_Attachments_By_PkArgs = {
  _inc?: InputMaybe<Rc_Client_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Client_Attachments_Set_Input>;
  pk_columns: Rc_Client_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Client_Attachments_ManyArgs = {
  updates: Array<Rc_Client_Attachments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Client_By_PkArgs = {
  _append?: InputMaybe<Rc_Client_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Client_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Client_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Client_Delete_Key_Input>;
  _inc?: InputMaybe<Rc_Client_Inc_Input>;
  _prepend?: InputMaybe<Rc_Client_Prepend_Input>;
  _set?: InputMaybe<Rc_Client_Set_Input>;
  pk_columns: Rc_Client_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Client_ManyArgs = {
  updates: Array<Rc_Client_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_CompanyArgs = {
  _append?: InputMaybe<Rc_Company_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Company_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Company_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Company_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Company_Prepend_Input>;
  _set?: InputMaybe<Rc_Company_Set_Input>;
  where: Rc_Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Company_AttachmentsArgs = {
  _inc?: InputMaybe<Rc_Company_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Company_Attachments_Set_Input>;
  where: Rc_Company_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Company_Attachments_By_PkArgs = {
  _inc?: InputMaybe<Rc_Company_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Company_Attachments_Set_Input>;
  pk_columns: Rc_Company_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Company_Attachments_ManyArgs = {
  updates: Array<Rc_Company_Attachments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Company_By_PkArgs = {
  _append?: InputMaybe<Rc_Company_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Company_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Company_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Company_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Company_Prepend_Input>;
  _set?: InputMaybe<Rc_Company_Set_Input>;
  pk_columns: Rc_Company_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Company_ManyArgs = {
  updates: Array<Rc_Company_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_ConsignmentArgs = {
  _append?: InputMaybe<Rc_Consignment_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Consignment_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Consignment_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Consignment_Delete_Key_Input>;
  _inc?: InputMaybe<Rc_Consignment_Inc_Input>;
  _prepend?: InputMaybe<Rc_Consignment_Prepend_Input>;
  _set?: InputMaybe<Rc_Consignment_Set_Input>;
  where: Rc_Consignment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Consignment_By_PkArgs = {
  _append?: InputMaybe<Rc_Consignment_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Consignment_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Consignment_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Consignment_Delete_Key_Input>;
  _inc?: InputMaybe<Rc_Consignment_Inc_Input>;
  _prepend?: InputMaybe<Rc_Consignment_Prepend_Input>;
  _set?: InputMaybe<Rc_Consignment_Set_Input>;
  pk_columns: Rc_Consignment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Consignment_ManyArgs = {
  updates: Array<Rc_Consignment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_InquiryArgs = {
  _append?: InputMaybe<Rc_Inquiry_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Inquiry_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Inquiry_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Inquiry_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Inquiry_Prepend_Input>;
  _set?: InputMaybe<Rc_Inquiry_Set_Input>;
  where: Rc_Inquiry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Inquiry_By_PkArgs = {
  _append?: InputMaybe<Rc_Inquiry_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Inquiry_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Inquiry_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Inquiry_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Inquiry_Prepend_Input>;
  _set?: InputMaybe<Rc_Inquiry_Set_Input>;
  pk_columns: Rc_Inquiry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Inquiry_ManyArgs = {
  updates: Array<Rc_Inquiry_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_NoticeArgs = {
  _append?: InputMaybe<Rc_Notice_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Notice_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Notice_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Notice_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Notice_Prepend_Input>;
  _set?: InputMaybe<Rc_Notice_Set_Input>;
  where: Rc_Notice_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Notice_By_PkArgs = {
  _append?: InputMaybe<Rc_Notice_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Notice_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Notice_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Notice_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Notice_Prepend_Input>;
  _set?: InputMaybe<Rc_Notice_Set_Input>;
  pk_columns: Rc_Notice_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Notice_ManyArgs = {
  updates: Array<Rc_Notice_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_NotificationArgs = {
  _append?: InputMaybe<Rc_Notification_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Notification_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Notification_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Notification_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Notification_Prepend_Input>;
  _set?: InputMaybe<Rc_Notification_Set_Input>;
  where: Rc_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Notification_By_PkArgs = {
  _append?: InputMaybe<Rc_Notification_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Notification_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Notification_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Notification_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Notification_Prepend_Input>;
  _set?: InputMaybe<Rc_Notification_Set_Input>;
  pk_columns: Rc_Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Notification_ManyArgs = {
  updates: Array<Rc_Notification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_PartnerArgs = {
  _append?: InputMaybe<Rc_Partner_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Partner_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Partner_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Partner_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Partner_Prepend_Input>;
  _set?: InputMaybe<Rc_Partner_Set_Input>;
  where: Rc_Partner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Partner_By_PkArgs = {
  _append?: InputMaybe<Rc_Partner_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Partner_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Partner_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Partner_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Partner_Prepend_Input>;
  _set?: InputMaybe<Rc_Partner_Set_Input>;
  pk_columns: Rc_Partner_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Partner_ManyArgs = {
  updates: Array<Rc_Partner_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_QuotationArgs = {
  _append?: InputMaybe<Rc_Quotation_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Quotation_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Quotation_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Quotation_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Quotation_Prepend_Input>;
  _set?: InputMaybe<Rc_Quotation_Set_Input>;
  where: Rc_Quotation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Quotation_By_PkArgs = {
  _append?: InputMaybe<Rc_Quotation_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Quotation_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Quotation_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Quotation_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Quotation_Prepend_Input>;
  _set?: InputMaybe<Rc_Quotation_Set_Input>;
  pk_columns: Rc_Quotation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Quotation_ManyArgs = {
  updates: Array<Rc_Quotation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_RentalArgs = {
  _append?: InputMaybe<Rc_Rental_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Rental_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Rental_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Rental_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Rental_Prepend_Input>;
  _set?: InputMaybe<Rc_Rental_Set_Input>;
  where: Rc_Rental_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Rental_AttachmentsArgs = {
  _inc?: InputMaybe<Rc_Rental_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Rental_Attachments_Set_Input>;
  where: Rc_Rental_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Rental_Attachments_By_PkArgs = {
  _inc?: InputMaybe<Rc_Rental_Attachments_Inc_Input>;
  _set?: InputMaybe<Rc_Rental_Attachments_Set_Input>;
  pk_columns: Rc_Rental_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Rental_Attachments_ManyArgs = {
  updates: Array<Rc_Rental_Attachments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Rental_By_PkArgs = {
  _append?: InputMaybe<Rc_Rental_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Rental_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Rental_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Rental_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Rental_Prepend_Input>;
  _set?: InputMaybe<Rc_Rental_Set_Input>;
  pk_columns: Rc_Rental_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Rental_ManyArgs = {
  updates: Array<Rc_Rental_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_SettlementArgs = {
  _append?: InputMaybe<Rc_Settlement_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Settlement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Settlement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Settlement_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Settlement_Prepend_Input>;
  _set?: InputMaybe<Rc_Settlement_Set_Input>;
  where: Rc_Settlement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Settlement_By_PkArgs = {
  _append?: InputMaybe<Rc_Settlement_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Settlement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Settlement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Settlement_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Settlement_Prepend_Input>;
  _set?: InputMaybe<Rc_Settlement_Set_Input>;
  pk_columns: Rc_Settlement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Settlement_ManyArgs = {
  updates: Array<Rc_Settlement_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_StaffArgs = {
  _append?: InputMaybe<Rc_Staff_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Staff_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Staff_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Staff_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Staff_Prepend_Input>;
  _set?: InputMaybe<Rc_Staff_Set_Input>;
  where: Rc_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Staff_By_PkArgs = {
  _append?: InputMaybe<Rc_Staff_Append_Input>;
  _delete_at_path?: InputMaybe<Rc_Staff_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rc_Staff_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rc_Staff_Delete_Key_Input>;
  _prepend?: InputMaybe<Rc_Staff_Prepend_Input>;
  _set?: InputMaybe<Rc_Staff_Set_Input>;
  pk_columns: Rc_Staff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rc_Staff_ManyArgs = {
  updates: Array<Rc_Staff_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Self_CertificationArgs = {
  _append?: InputMaybe<Self_Certification_Append_Input>;
  _delete_at_path?: InputMaybe<Self_Certification_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Self_Certification_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Self_Certification_Delete_Key_Input>;
  _prepend?: InputMaybe<Self_Certification_Prepend_Input>;
  _set?: InputMaybe<Self_Certification_Set_Input>;
  where: Self_Certification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Self_Certification_By_PkArgs = {
  _append?: InputMaybe<Self_Certification_Append_Input>;
  _delete_at_path?: InputMaybe<Self_Certification_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Self_Certification_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Self_Certification_Delete_Key_Input>;
  _prepend?: InputMaybe<Self_Certification_Prepend_Input>;
  _set?: InputMaybe<Self_Certification_Set_Input>;
  pk_columns: Self_Certification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Self_Certification_ManyArgs = {
  updates: Array<Self_Certification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StaffArgs = {
  updateStaffInput: UpdateStaffInput;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootVerify_CodeArgs = {
  arg: VerifyCodeInput;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** 과태료, 범칙금 정보 */
export type Penalty_Info = {
  __typename?: 'penalty_info';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data: Scalars['jsonb']['output'];
  /** 납기일 */
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  inputs: Scalars['jsonb']['output'];
  /** 전자납부번호, 과태료번호 */
  key: Scalars['String']['output'];
  /** 부과일 */
  occurrence?: Maybe<Scalars['timestamptz']['output']>;
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  rc_company: Rc_Company;
  search_data?: Maybe<Scalars['jsonb']['output']>;
  /** 처리상태 */
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** 위반일 */
  violation_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** 과태료, 범칙금 정보 */
export type Penalty_InfoDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 과태료, 범칙금 정보 */
export type Penalty_InfoInputsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 과태료, 범칙금 정보 */
export type Penalty_InfoSearch_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "penalty_info" */
export type Penalty_Info_Aggregate = {
  __typename?: 'penalty_info_aggregate';
  aggregate?: Maybe<Penalty_Info_Aggregate_Fields>;
  nodes: Array<Penalty_Info>;
};

export type Penalty_Info_Aggregate_Bool_Exp = {
  count?: InputMaybe<Penalty_Info_Aggregate_Bool_Exp_Count>;
};

export type Penalty_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Penalty_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "penalty_info" */
export type Penalty_Info_Aggregate_Fields = {
  __typename?: 'penalty_info_aggregate_fields';
  avg?: Maybe<Penalty_Info_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Penalty_Info_Max_Fields>;
  min?: Maybe<Penalty_Info_Min_Fields>;
  stddev?: Maybe<Penalty_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Penalty_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Penalty_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Penalty_Info_Sum_Fields>;
  var_pop?: Maybe<Penalty_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Penalty_Info_Var_Samp_Fields>;
  variance?: Maybe<Penalty_Info_Variance_Fields>;
};


/** aggregate fields of "penalty_info" */
export type Penalty_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "penalty_info" */
export type Penalty_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Penalty_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Penalty_Info_Max_Order_By>;
  min?: InputMaybe<Penalty_Info_Min_Order_By>;
  stddev?: InputMaybe<Penalty_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Penalty_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Penalty_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Penalty_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Penalty_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Penalty_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Penalty_Info_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Penalty_Info_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
  inputs?: InputMaybe<Scalars['jsonb']['input']>;
  search_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "penalty_info" */
export type Penalty_Info_Arr_Rel_Insert_Input = {
  data: Array<Penalty_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Penalty_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Penalty_Info_Avg_Fields = {
  __typename?: 'penalty_info_avg_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "penalty_info" */
export type Penalty_Info_Avg_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "penalty_info". All fields are combined with a logical 'AND'. */
export type Penalty_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Penalty_Info_Bool_Exp>>;
  _not?: InputMaybe<Penalty_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Penalty_Info_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  deadline?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inputs?: InputMaybe<Jsonb_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  occurrence?: InputMaybe<Timestamptz_Comparison_Exp>;
  payment_amount?: InputMaybe<Int_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  search_data?: InputMaybe<Jsonb_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  violation_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "penalty_info" */
export enum Penalty_Info_Constraint {
  /** unique or primary key constraint on columns "key", "company_id" */
  PenaltyInfoKeyCompanyIdKey = 'penalty_info_key_company_id_key',
  /** unique or primary key constraint on columns "id" */
  PenaltyInfoPkey = 'penalty_info_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Penalty_Info_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
  inputs?: InputMaybe<Array<Scalars['String']['input']>>;
  search_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Penalty_Info_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
  inputs?: InputMaybe<Scalars['Int']['input']>;
  search_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Penalty_Info_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
  inputs?: InputMaybe<Scalars['String']['input']>;
  search_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "penalty_info" */
export type Penalty_Info_Inc_Input = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "penalty_info" */
export type Penalty_Info_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 납기일 */
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inputs?: InputMaybe<Scalars['jsonb']['input']>;
  /** 전자납부번호, 과태료번호 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 부과일 */
  occurrence?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 납부금액 */
  payment_amount?: InputMaybe<Scalars['Int']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  search_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 처리상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 위반일 */
  violation_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Penalty_Info_Max_Fields = {
  __typename?: 'penalty_info_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 납기일 */
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 전자납부번호, 과태료번호 */
  key?: Maybe<Scalars['String']['output']>;
  /** 부과일 */
  occurrence?: Maybe<Scalars['timestamptz']['output']>;
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Int']['output']>;
  /** 처리상태 */
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 위반일 */
  violation_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "penalty_info" */
export type Penalty_Info_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 납기일 */
  deadline?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 전자납부번호, 과태료번호 */
  key?: InputMaybe<Order_By>;
  /** 부과일 */
  occurrence?: InputMaybe<Order_By>;
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
  /** 처리상태 */
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 위반일 */
  violation_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Penalty_Info_Min_Fields = {
  __typename?: 'penalty_info_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 납기일 */
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 전자납부번호, 과태료번호 */
  key?: Maybe<Scalars['String']['output']>;
  /** 부과일 */
  occurrence?: Maybe<Scalars['timestamptz']['output']>;
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Int']['output']>;
  /** 처리상태 */
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 위반일 */
  violation_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "penalty_info" */
export type Penalty_Info_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 납기일 */
  deadline?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 전자납부번호, 과태료번호 */
  key?: InputMaybe<Order_By>;
  /** 부과일 */
  occurrence?: InputMaybe<Order_By>;
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
  /** 처리상태 */
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 위반일 */
  violation_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "penalty_info" */
export type Penalty_Info_Mutation_Response = {
  __typename?: 'penalty_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Penalty_Info>;
};

/** on_conflict condition type for table "penalty_info" */
export type Penalty_Info_On_Conflict = {
  constraint: Penalty_Info_Constraint;
  update_columns?: Array<Penalty_Info_Update_Column>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "penalty_info". */
export type Penalty_Info_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deadline?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inputs?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  occurrence?: InputMaybe<Order_By>;
  payment_amount?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  search_data?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  violation_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: penalty_info */
export type Penalty_Info_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Penalty_Info_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
  inputs?: InputMaybe<Scalars['jsonb']['input']>;
  search_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "penalty_info" */
export enum Penalty_Info_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Inputs = 'inputs',
  /** column name */
  Key = 'key',
  /** column name */
  Occurrence = 'occurrence',
  /** column name */
  PaymentAmount = 'payment_amount',
  /** column name */
  SearchData = 'search_data',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViolationAt = 'violation_at'
}

/** input type for updating data in table "penalty_info" */
export type Penalty_Info_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 납기일 */
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inputs?: InputMaybe<Scalars['jsonb']['input']>;
  /** 전자납부번호, 과태료번호 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 부과일 */
  occurrence?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 납부금액 */
  payment_amount?: InputMaybe<Scalars['Int']['input']>;
  search_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 처리상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 위반일 */
  violation_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Penalty_Info_Stddev_Fields = {
  __typename?: 'penalty_info_stddev_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "penalty_info" */
export type Penalty_Info_Stddev_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Penalty_Info_Stddev_Pop_Fields = {
  __typename?: 'penalty_info_stddev_pop_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "penalty_info" */
export type Penalty_Info_Stddev_Pop_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Penalty_Info_Stddev_Samp_Fields = {
  __typename?: 'penalty_info_stddev_samp_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "penalty_info" */
export type Penalty_Info_Stddev_Samp_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "penalty_info" */
export type Penalty_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Penalty_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Penalty_Info_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 납기일 */
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inputs?: InputMaybe<Scalars['jsonb']['input']>;
  /** 전자납부번호, 과태료번호 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 부과일 */
  occurrence?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 납부금액 */
  payment_amount?: InputMaybe<Scalars['Int']['input']>;
  search_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 처리상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 위반일 */
  violation_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Penalty_Info_Sum_Fields = {
  __typename?: 'penalty_info_sum_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "penalty_info" */
export type Penalty_Info_Sum_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

/** update columns of table "penalty_info" */
export enum Penalty_Info_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Inputs = 'inputs',
  /** column name */
  Key = 'key',
  /** column name */
  Occurrence = 'occurrence',
  /** column name */
  PaymentAmount = 'payment_amount',
  /** column name */
  SearchData = 'search_data',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViolationAt = 'violation_at'
}

export type Penalty_Info_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Penalty_Info_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Penalty_Info_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Penalty_Info_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Penalty_Info_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Penalty_Info_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Penalty_Info_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Penalty_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Penalty_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Penalty_Info_Var_Pop_Fields = {
  __typename?: 'penalty_info_var_pop_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "penalty_info" */
export type Penalty_Info_Var_Pop_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Penalty_Info_Var_Samp_Fields = {
  __typename?: 'penalty_info_var_samp_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "penalty_info" */
export type Penalty_Info_Var_Samp_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Penalty_Info_Variance_Fields = {
  __typename?: 'penalty_info_variance_fields';
  /** 납부금액 */
  payment_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "penalty_info" */
export type Penalty_Info_Variance_Order_By = {
  /** 납부금액 */
  payment_amount?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** 사업자등록증 상태조회 */
  business_status?: Maybe<CommonOutput>;
  /** fetch data from the table: "car_info" */
  car_info: Array<Car_Info>;
  /** fetch aggregated fields from the table: "car_info" */
  car_info_aggregate: Car_Info_Aggregate;
  /** fetch data from the table: "car_info" using primary key columns */
  car_info_by_pk?: Maybe<Car_Info>;
  /** fetch data from the table: "car_info_detail" */
  car_info_detail: Array<Car_Info_Detail>;
  /** fetch aggregated fields from the table: "car_info_detail" */
  car_info_detail_aggregate: Car_Info_Detail_Aggregate;
  /** fetch data from the table: "car_info_detail" using primary key columns */
  car_info_detail_by_pk?: Maybe<Car_Info_Detail>;
  /** 본인인증 팝업 url 생성 */
  certificate_person?: Maybe<CommonOutput>;
  /** 아이디 중복검사 */
  check_duplicate_uid: Scalars['Boolean']['output'];
  /** fetch data from the table: "fax_info" */
  fax_info: Array<Fax_Info>;
  /** fetch aggregated fields from the table: "fax_info" */
  fax_info_aggregate: Fax_Info_Aggregate;
  /** fetch data from the table: "fax_info" using primary key columns */
  fax_info_by_pk?: Maybe<Fax_Info>;
  /** 파일보기 미리 서명된 URL 생성 */
  file_get_url?: Maybe<FileGetOutput>;
  /** fetch data from the table: "gp_payment_history" */
  gp_payment_history: Array<Gp_Payment_History>;
  /** fetch aggregated fields from the table: "gp_payment_history" */
  gp_payment_history_aggregate: Gp_Payment_History_Aggregate;
  /** fetch data from the table: "gp_payment_history" using primary key columns */
  gp_payment_history_by_pk?: Maybe<Gp_Payment_History>;
  /** fetch data from the table: "mail_verification" */
  mail_verification: Array<Mail_Verification>;
  /** fetch aggregated fields from the table: "mail_verification" */
  mail_verification_aggregate: Mail_Verification_Aggregate;
  /** fetch data from the table: "mail_verification" using primary key columns */
  mail_verification_by_pk?: Maybe<Mail_Verification>;
  /** fetch data from the table: "penalty_info" */
  penalty_info: Array<Penalty_Info>;
  /** fetch aggregated fields from the table: "penalty_info" */
  penalty_info_aggregate: Penalty_Info_Aggregate;
  /** fetch data from the table: "penalty_info" using primary key columns */
  penalty_info_by_pk?: Maybe<Penalty_Info>;
  /** fetch data from the table: "rc_car" */
  rc_car: Array<Rc_Car>;
  /** fetch aggregated fields from the table: "rc_car" */
  rc_car_aggregate: Rc_Car_Aggregate;
  /** An array relationship */
  rc_car_attachments: Array<Rc_Car_Attachments>;
  /** An aggregate relationship */
  rc_car_attachments_aggregate: Rc_Car_Attachments_Aggregate;
  /** fetch data from the table: "rc_car_attachments" using primary key columns */
  rc_car_attachments_by_pk?: Maybe<Rc_Car_Attachments>;
  /** fetch data from the table: "rc_car" using primary key columns */
  rc_car_by_pk?: Maybe<Rc_Car>;
  /** fetch data from the table: "rc_car_status_counting" */
  rc_car_status_counting: Array<Rc_Car_Status_Counting>;
  /** fetch aggregated fields from the table: "rc_car_status_counting" */
  rc_car_status_counting_aggregate: Rc_Car_Status_Counting_Aggregate;
  /** fetch data from the table: "rc_client" */
  rc_client: Array<Rc_Client>;
  /** fetch aggregated fields from the table: "rc_client" */
  rc_client_aggregate: Rc_Client_Aggregate;
  /** An array relationship */
  rc_client_attachments: Array<Rc_Client_Attachments>;
  /** An aggregate relationship */
  rc_client_attachments_aggregate: Rc_Client_Attachments_Aggregate;
  /** fetch data from the table: "rc_client_attachments" using primary key columns */
  rc_client_attachments_by_pk?: Maybe<Rc_Client_Attachments>;
  /** fetch data from the table: "rc_client" using primary key columns */
  rc_client_by_pk?: Maybe<Rc_Client>;
  /** fetch data from the table: "rc_client_type_counting" */
  rc_client_type_counting: Array<Rc_Client_Type_Counting>;
  /** fetch aggregated fields from the table: "rc_client_type_counting" */
  rc_client_type_counting_aggregate: Rc_Client_Type_Counting_Aggregate;
  /** fetch data from the table: "rc_company" */
  rc_company: Array<Rc_Company>;
  /** fetch aggregated fields from the table: "rc_company" */
  rc_company_aggregate: Rc_Company_Aggregate;
  /** An array relationship */
  rc_company_attachments: Array<Rc_Company_Attachments>;
  /** An aggregate relationship */
  rc_company_attachments_aggregate: Rc_Company_Attachments_Aggregate;
  /** fetch data from the table: "rc_company_attachments" using primary key columns */
  rc_company_attachments_by_pk?: Maybe<Rc_Company_Attachments>;
  /** fetch data from the table: "rc_company" using primary key columns */
  rc_company_by_pk?: Maybe<Rc_Company>;
  /** fetch data from the table: "rc_consignment" */
  rc_consignment: Array<Rc_Consignment>;
  /** fetch aggregated fields from the table: "rc_consignment" */
  rc_consignment_aggregate: Rc_Consignment_Aggregate;
  /** fetch data from the table: "rc_consignment" using primary key columns */
  rc_consignment_by_pk?: Maybe<Rc_Consignment>;
  /** fetch data from the table: "rc_inquiry" */
  rc_inquiry: Array<Rc_Inquiry>;
  /** fetch aggregated fields from the table: "rc_inquiry" */
  rc_inquiry_aggregate: Rc_Inquiry_Aggregate;
  /** fetch data from the table: "rc_inquiry" using primary key columns */
  rc_inquiry_by_pk?: Maybe<Rc_Inquiry>;
  /** fetch data from the table: "rc_notice" */
  rc_notice: Array<Rc_Notice>;
  /** fetch aggregated fields from the table: "rc_notice" */
  rc_notice_aggregate: Rc_Notice_Aggregate;
  /** fetch data from the table: "rc_notice" using primary key columns */
  rc_notice_by_pk?: Maybe<Rc_Notice>;
  /** fetch data from the table: "rc_notification" */
  rc_notification: Array<Rc_Notification>;
  /** fetch aggregated fields from the table: "rc_notification" */
  rc_notification_aggregate: Rc_Notification_Aggregate;
  /** fetch data from the table: "rc_notification" using primary key columns */
  rc_notification_by_pk?: Maybe<Rc_Notification>;
  /** fetch data from the table: "rc_partner" */
  rc_partner: Array<Rc_Partner>;
  /** fetch aggregated fields from the table: "rc_partner" */
  rc_partner_aggregate: Rc_Partner_Aggregate;
  /** fetch data from the table: "rc_partner" using primary key columns */
  rc_partner_by_pk?: Maybe<Rc_Partner>;
  /** fetch data from the table: "rc_quotation" */
  rc_quotation: Array<Rc_Quotation>;
  /** fetch aggregated fields from the table: "rc_quotation" */
  rc_quotation_aggregate: Rc_Quotation_Aggregate;
  /** fetch data from the table: "rc_quotation" using primary key columns */
  rc_quotation_by_pk?: Maybe<Rc_Quotation>;
  /** fetch data from the table: "rc_rental" */
  rc_rental: Array<Rc_Rental>;
  /** fetch aggregated fields from the table: "rc_rental" */
  rc_rental_aggregate: Rc_Rental_Aggregate;
  /** An array relationship */
  rc_rental_attachments: Array<Rc_Rental_Attachments>;
  /** An aggregate relationship */
  rc_rental_attachments_aggregate: Rc_Rental_Attachments_Aggregate;
  /** fetch data from the table: "rc_rental_attachments" using primary key columns */
  rc_rental_attachments_by_pk?: Maybe<Rc_Rental_Attachments>;
  /** fetch data from the table: "rc_rental" using primary key columns */
  rc_rental_by_pk?: Maybe<Rc_Rental>;
  /** fetch data from the table: "rc_rental_status_counting" */
  rc_rental_status_counting: Array<Rc_Rental_Status_Counting>;
  /** fetch aggregated fields from the table: "rc_rental_status_counting" */
  rc_rental_status_counting_aggregate: Rc_Rental_Status_Counting_Aggregate;
  /** fetch data from the table: "rc_settlement" */
  rc_settlement: Array<Rc_Settlement>;
  /** fetch aggregated fields from the table: "rc_settlement" */
  rc_settlement_aggregate: Rc_Settlement_Aggregate;
  /** fetch data from the table: "rc_settlement" using primary key columns */
  rc_settlement_by_pk?: Maybe<Rc_Settlement>;
  /** fetch data from the table: "rc_staff" */
  rc_staff: Array<Rc_Staff>;
  /** fetch aggregated fields from the table: "rc_staff" */
  rc_staff_aggregate: Rc_Staff_Aggregate;
  /** fetch data from the table: "rc_staff" using primary key columns */
  rc_staff_by_pk?: Maybe<Rc_Staff>;
  /** refresh token */
  refresh_token?: Maybe<Token>;
  /** 주소검색 */
  search_address?: Maybe<SearchAddressOutput>;
  /** 소유자 차량 검색 */
  search_car?: Maybe<SearchCarOutput>;
  /** 좌표검색 */
  search_coord?: Maybe<CommonOutput>;
  /** execute function "search_rental" which returns "rc_rental" */
  search_rental: Array<Rc_Rental>;
  /** execute function "search_rental" and query aggregates on result of table type "rc_rental" */
  search_rental_aggregate: Rc_Rental_Aggregate;
  /** fetch data from the table: "self_certification" */
  self_certification: Array<Self_Certification>;
  /** fetch aggregated fields from the table: "self_certification" */
  self_certification_aggregate: Self_Certification_Aggregate;
  /** fetch data from the table: "self_certification" using primary key columns */
  self_certification_by_pk?: Maybe<Self_Certification>;
  /** 로그인 */
  sign_in?: Maybe<SignInOutput>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** 운전면허 검증 */
  verification_driver_license?: Maybe<LicenseOutput>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBusiness_StatusArgs = {
  statusInput: BusinessStatusInput;
};


export type Query_RootCar_InfoArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Order_By>>;
  where?: InputMaybe<Car_Info_Bool_Exp>;
};


export type Query_RootCar_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Order_By>>;
  where?: InputMaybe<Car_Info_Bool_Exp>;
};


export type Query_RootCar_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCar_Info_DetailArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Detail_Order_By>>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};


export type Query_RootCar_Info_Detail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Detail_Order_By>>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};


export type Query_RootCar_Info_Detail_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCertificate_PersonArgs = {
  input: CertificatePersonInput;
};


export type Query_RootCheck_Duplicate_UidArgs = {
  uid: Scalars['String']['input'];
};


export type Query_RootFax_InfoArgs = {
  distinct_on?: InputMaybe<Array<Fax_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fax_Info_Order_By>>;
  where?: InputMaybe<Fax_Info_Bool_Exp>;
};


export type Query_RootFax_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fax_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fax_Info_Order_By>>;
  where?: InputMaybe<Fax_Info_Bool_Exp>;
};


export type Query_RootFax_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFile_Get_UrlArgs = {
  fileGetInput: FileGetInput;
};


export type Query_RootGp_Payment_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gp_Payment_History_Order_By>>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};


export type Query_RootGp_Payment_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gp_Payment_History_Order_By>>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};


export type Query_RootGp_Payment_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMail_VerificationArgs = {
  distinct_on?: InputMaybe<Array<Mail_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mail_Verification_Order_By>>;
  where?: InputMaybe<Mail_Verification_Bool_Exp>;
};


export type Query_RootMail_Verification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mail_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mail_Verification_Order_By>>;
  where?: InputMaybe<Mail_Verification_Bool_Exp>;
};


export type Query_RootMail_Verification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPenalty_InfoArgs = {
  distinct_on?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Penalty_Info_Order_By>>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};


export type Query_RootPenalty_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Penalty_Info_Order_By>>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};


export type Query_RootPenalty_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_CarArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Order_By>>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};


export type Query_RootRc_Car_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Order_By>>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};


export type Query_RootRc_Car_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};


export type Query_RootRc_Car_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};


export type Query_RootRc_Car_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_Car_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_Car_Status_CountingArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Car_Status_Counting_Bool_Exp>;
};


export type Query_RootRc_Car_Status_Counting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Car_Status_Counting_Bool_Exp>;
};


export type Query_RootRc_ClientArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Order_By>>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};


export type Query_RootRc_Client_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Order_By>>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};


export type Query_RootRc_Client_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};


export type Query_RootRc_Client_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};


export type Query_RootRc_Client_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_Client_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_Client_Type_CountingArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Type_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Type_Counting_Order_By>>;
  where?: InputMaybe<Rc_Client_Type_Counting_Bool_Exp>;
};


export type Query_RootRc_Client_Type_Counting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Type_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Type_Counting_Order_By>>;
  where?: InputMaybe<Rc_Client_Type_Counting_Bool_Exp>;
};


export type Query_RootRc_CompanyArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Order_By>>;
  where?: InputMaybe<Rc_Company_Bool_Exp>;
};


export type Query_RootRc_Company_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Order_By>>;
  where?: InputMaybe<Rc_Company_Bool_Exp>;
};


export type Query_RootRc_Company_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};


export type Query_RootRc_Company_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};


export type Query_RootRc_Company_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_Company_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_ConsignmentArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


export type Query_RootRc_Consignment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


export type Query_RootRc_Consignment_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_InquiryArgs = {
  distinct_on?: InputMaybe<Array<Rc_Inquiry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Inquiry_Order_By>>;
  where?: InputMaybe<Rc_Inquiry_Bool_Exp>;
};


export type Query_RootRc_Inquiry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Inquiry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Inquiry_Order_By>>;
  where?: InputMaybe<Rc_Inquiry_Bool_Exp>;
};


export type Query_RootRc_Inquiry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_NoticeArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notice_Order_By>>;
  where?: InputMaybe<Rc_Notice_Bool_Exp>;
};


export type Query_RootRc_Notice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notice_Order_By>>;
  where?: InputMaybe<Rc_Notice_Bool_Exp>;
};


export type Query_RootRc_Notice_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_NotificationArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


export type Query_RootRc_Notification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


export type Query_RootRc_Notification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_PartnerArgs = {
  distinct_on?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Partner_Order_By>>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};


export type Query_RootRc_Partner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Partner_Order_By>>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};


export type Query_RootRc_Partner_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_QuotationArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


export type Query_RootRc_Quotation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


export type Query_RootRc_Quotation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_RentalArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Query_RootRc_Rental_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Query_RootRc_Rental_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};


export type Query_RootRc_Rental_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};


export type Query_RootRc_Rental_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_Rental_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_Rental_Status_CountingArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Rental_Status_Counting_Bool_Exp>;
};


export type Query_RootRc_Rental_Status_Counting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Rental_Status_Counting_Bool_Exp>;
};


export type Query_RootRc_SettlementArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


export type Query_RootRc_Settlement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


export type Query_RootRc_Settlement_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRc_StaffArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


export type Query_RootRc_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


export type Query_RootRc_Staff_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSearch_AddressArgs = {
  searchAddressInput: SearchAddressInput;
};


export type Query_RootSearch_CarArgs = {
  input: SearchCarInput;
};


export type Query_RootSearch_CoordArgs = {
  searchCoordInput: SearchCoordInput;
};


export type Query_RootSearch_RentalArgs = {
  args: Search_Rental_Args;
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Query_RootSearch_Rental_AggregateArgs = {
  args: Search_Rental_Args;
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Query_RootSelf_CertificationArgs = {
  distinct_on?: InputMaybe<Array<Self_Certification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Self_Certification_Order_By>>;
  where?: InputMaybe<Self_Certification_Bool_Exp>;
};


export type Query_RootSelf_Certification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Self_Certification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Self_Certification_Order_By>>;
  where?: InputMaybe<Self_Certification_Bool_Exp>;
};


export type Query_RootSelf_Certification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSign_InArgs = {
  signInInput: SignInInput;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVerification_Driver_LicenseArgs = {
  licenseInput: LicenseInput;
};

/** 렌터카 차량 */
export type Rc_Car = {
  __typename?: 'rc_car';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 배기량 */
  displacement?: Maybe<Scalars['String']['output']>;
  /** 최초등록일 */
  first_registration_at?: Maybe<Scalars['date']['output']>;
  /** 형식연도 */
  format_year?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  /** 보험정보 데이터 */
  insurance_data?: Maybe<Scalars['jsonb']['output']>;
  /** 제조사명 */
  maker: Scalars['String']['output'];
  /** 차종 */
  model_type: Scalars['String']['output'];
  /** 연식 */
  model_year: Scalars['Int']['output'];
  /** 자동차명 */
  name: Scalars['String']['output'];
  /** 차량번호 */
  number: Scalars['String']['output'];
  /** An array relationship */
  rc_car_attachments: Array<Rc_Car_Attachments>;
  /** An aggregate relationship */
  rc_car_attachments_aggregate: Rc_Car_Attachments_Aggregate;
  /** An object relationship */
  rc_company: Rc_Company;
  /** An array relationship */
  rc_rentals: Array<Rc_Rental>;
  /** An aggregate relationship */
  rc_rentals_aggregate: Rc_Rental_Aggregate;
  /** An array relationship */
  rc_settlements: Array<Rc_Settlement>;
  /** An aggregate relationship */
  rc_settlements_aggregate: Rc_Settlement_Aggregate;
  /** 차량상태 */
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** 사용여부 */
  using_state?: Maybe<Scalars['String']['output']>;
  /** 차대번호 */
  vin_number: Scalars['String']['output'];
};


/** 렌터카 차량 */
export type Rc_CarDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 차량 */
export type Rc_CarInsurance_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 차량 */
export type Rc_CarRc_Car_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};


/** 렌터카 차량 */
export type Rc_CarRc_Car_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};


/** 렌터카 차량 */
export type Rc_CarRc_RentalsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 차량 */
export type Rc_CarRc_Rentals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 차량 */
export type Rc_CarRc_SettlementsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


/** 렌터카 차량 */
export type Rc_CarRc_Settlements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};

/** aggregated selection of "rc_car" */
export type Rc_Car_Aggregate = {
  __typename?: 'rc_car_aggregate';
  aggregate?: Maybe<Rc_Car_Aggregate_Fields>;
  nodes: Array<Rc_Car>;
};

export type Rc_Car_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Car_Aggregate_Bool_Exp_Count>;
};

export type Rc_Car_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Car_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Car_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_car" */
export type Rc_Car_Aggregate_Fields = {
  __typename?: 'rc_car_aggregate_fields';
  avg?: Maybe<Rc_Car_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Car_Max_Fields>;
  min?: Maybe<Rc_Car_Min_Fields>;
  stddev?: Maybe<Rc_Car_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Car_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Car_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Car_Sum_Fields>;
  var_pop?: Maybe<Rc_Car_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Car_Var_Samp_Fields>;
  variance?: Maybe<Rc_Car_Variance_Fields>;
};


/** aggregate fields of "rc_car" */
export type Rc_Car_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Car_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_car" */
export type Rc_Car_Aggregate_Order_By = {
  avg?: InputMaybe<Rc_Car_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Car_Max_Order_By>;
  min?: InputMaybe<Rc_Car_Min_Order_By>;
  stddev?: InputMaybe<Rc_Car_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rc_Car_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rc_Car_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rc_Car_Sum_Order_By>;
  var_pop?: InputMaybe<Rc_Car_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rc_Car_Var_Samp_Order_By>;
  variance?: InputMaybe<Rc_Car_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Car_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_car" */
export type Rc_Car_Arr_Rel_Insert_Input = {
  data: Array<Rc_Car_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Car_On_Conflict>;
};

/** 렌터카 차량 첨부파일 */
export type Rc_Car_Attachments = {
  __typename?: 'rc_car_attachments';
  car_id: Scalars['uuid']['output'];
  /** 파일타입 */
  content_type: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** 파일키 */
  key: Scalars['String']['output'];
  /** 파일라벨 */
  label: Scalars['String']['output'];
  /** 원본파일명 */
  origin_name: Scalars['String']['output'];
  /** An object relationship */
  rc_car: Rc_Car;
  /** 파일영역 */
  realm: Scalars['String']['output'];
  /** 파일크기 */
  size: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "rc_car_attachments" */
export type Rc_Car_Attachments_Aggregate = {
  __typename?: 'rc_car_attachments_aggregate';
  aggregate?: Maybe<Rc_Car_Attachments_Aggregate_Fields>;
  nodes: Array<Rc_Car_Attachments>;
};

export type Rc_Car_Attachments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Car_Attachments_Aggregate_Bool_Exp_Count>;
};

export type Rc_Car_Attachments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_car_attachments" */
export type Rc_Car_Attachments_Aggregate_Fields = {
  __typename?: 'rc_car_attachments_aggregate_fields';
  avg?: Maybe<Rc_Car_Attachments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Car_Attachments_Max_Fields>;
  min?: Maybe<Rc_Car_Attachments_Min_Fields>;
  stddev?: Maybe<Rc_Car_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Car_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Car_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Car_Attachments_Sum_Fields>;
  var_pop?: Maybe<Rc_Car_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Car_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Rc_Car_Attachments_Variance_Fields>;
};


/** aggregate fields of "rc_car_attachments" */
export type Rc_Car_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_car_attachments" */
export type Rc_Car_Attachments_Aggregate_Order_By = {
  avg?: InputMaybe<Rc_Car_Attachments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Car_Attachments_Max_Order_By>;
  min?: InputMaybe<Rc_Car_Attachments_Min_Order_By>;
  stddev?: InputMaybe<Rc_Car_Attachments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rc_Car_Attachments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rc_Car_Attachments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rc_Car_Attachments_Sum_Order_By>;
  var_pop?: InputMaybe<Rc_Car_Attachments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rc_Car_Attachments_Var_Samp_Order_By>;
  variance?: InputMaybe<Rc_Car_Attachments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rc_car_attachments" */
export type Rc_Car_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Rc_Car_Attachments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Car_Attachments_On_Conflict>;
};

/** aggregate avg on columns */
export type Rc_Car_Attachments_Avg_Fields = {
  __typename?: 'rc_car_attachments_avg_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Avg_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_car_attachments". All fields are combined with a logical 'AND'. */
export type Rc_Car_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Car_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Car_Attachments_Bool_Exp>>;
  car_id?: InputMaybe<Uuid_Comparison_Exp>;
  content_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  origin_name?: InputMaybe<String_Comparison_Exp>;
  rc_car?: InputMaybe<Rc_Car_Bool_Exp>;
  realm?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_car_attachments" */
export enum Rc_Car_Attachments_Constraint {
  /** unique or primary key constraint on columns "key" */
  RcCarAttachmentsKeyKey = 'rc_car_attachments_key_key',
  /** unique or primary key constraint on columns "id" */
  RcCarAttachmentsPkey = 'rc_car_attachments_pkey'
}

/** input type for incrementing numeric columns in table "rc_car_attachments" */
export type Rc_Car_Attachments_Inc_Input = {
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "rc_car_attachments" */
export type Rc_Car_Attachments_Insert_Input = {
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  rc_car?: InputMaybe<Rc_Car_Obj_Rel_Insert_Input>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Car_Attachments_Max_Fields = {
  __typename?: 'rc_car_attachments_max_fields';
  car_id?: Maybe<Scalars['uuid']['output']>;
  /** 파일타입 */
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 파일키 */
  key?: Maybe<Scalars['String']['output']>;
  /** 파일라벨 */
  label?: Maybe<Scalars['String']['output']>;
  /** 원본파일명 */
  origin_name?: Maybe<Scalars['String']['output']>;
  /** 파일영역 */
  realm?: Maybe<Scalars['String']['output']>;
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Max_Order_By = {
  car_id?: InputMaybe<Order_By>;
  /** 파일타입 */
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 파일키 */
  key?: InputMaybe<Order_By>;
  /** 파일라벨 */
  label?: InputMaybe<Order_By>;
  /** 원본파일명 */
  origin_name?: InputMaybe<Order_By>;
  /** 파일영역 */
  realm?: InputMaybe<Order_By>;
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Car_Attachments_Min_Fields = {
  __typename?: 'rc_car_attachments_min_fields';
  car_id?: Maybe<Scalars['uuid']['output']>;
  /** 파일타입 */
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 파일키 */
  key?: Maybe<Scalars['String']['output']>;
  /** 파일라벨 */
  label?: Maybe<Scalars['String']['output']>;
  /** 원본파일명 */
  origin_name?: Maybe<Scalars['String']['output']>;
  /** 파일영역 */
  realm?: Maybe<Scalars['String']['output']>;
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Min_Order_By = {
  car_id?: InputMaybe<Order_By>;
  /** 파일타입 */
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 파일키 */
  key?: InputMaybe<Order_By>;
  /** 파일라벨 */
  label?: InputMaybe<Order_By>;
  /** 원본파일명 */
  origin_name?: InputMaybe<Order_By>;
  /** 파일영역 */
  realm?: InputMaybe<Order_By>;
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_car_attachments" */
export type Rc_Car_Attachments_Mutation_Response = {
  __typename?: 'rc_car_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Car_Attachments>;
};

/** on_conflict condition type for table "rc_car_attachments" */
export type Rc_Car_Attachments_On_Conflict = {
  constraint: Rc_Car_Attachments_Constraint;
  update_columns?: Array<Rc_Car_Attachments_Update_Column>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_car_attachments". */
export type Rc_Car_Attachments_Order_By = {
  car_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  origin_name?: InputMaybe<Order_By>;
  rc_car?: InputMaybe<Rc_Car_Order_By>;
  realm?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_car_attachments */
export type Rc_Car_Attachments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rc_car_attachments" */
export enum Rc_Car_Attachments_Select_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_car_attachments" */
export type Rc_Car_Attachments_Set_Input = {
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Rc_Car_Attachments_Stddev_Fields = {
  __typename?: 'rc_car_attachments_stddev_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Stddev_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rc_Car_Attachments_Stddev_Pop_Fields = {
  __typename?: 'rc_car_attachments_stddev_pop_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Stddev_Pop_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rc_Car_Attachments_Stddev_Samp_Fields = {
  __typename?: 'rc_car_attachments_stddev_samp_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Stddev_Samp_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rc_car_attachments" */
export type Rc_Car_Attachments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Car_Attachments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Car_Attachments_Stream_Cursor_Value_Input = {
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Rc_Car_Attachments_Sum_Fields = {
  __typename?: 'rc_car_attachments_sum_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Sum_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** update columns of table "rc_car_attachments" */
export enum Rc_Car_Attachments_Update_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Car_Attachments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rc_Car_Attachments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Car_Attachments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Car_Attachments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rc_Car_Attachments_Var_Pop_Fields = {
  __typename?: 'rc_car_attachments_var_pop_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Var_Pop_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rc_Car_Attachments_Var_Samp_Fields = {
  __typename?: 'rc_car_attachments_var_samp_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Var_Samp_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rc_Car_Attachments_Variance_Fields = {
  __typename?: 'rc_car_attachments_variance_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rc_car_attachments" */
export type Rc_Car_Attachments_Variance_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate avg on columns */
export type Rc_Car_Avg_Fields = {
  __typename?: 'rc_car_avg_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Float']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rc_car" */
export type Rc_Car_Avg_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_car". All fields are combined with a logical 'AND'. */
export type Rc_Car_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Car_Bool_Exp>>;
  _not?: InputMaybe<Rc_Car_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Car_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  displacement?: InputMaybe<String_Comparison_Exp>;
  first_registration_at?: InputMaybe<Date_Comparison_Exp>;
  format_year?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  insurance_data?: InputMaybe<Jsonb_Comparison_Exp>;
  maker?: InputMaybe<String_Comparison_Exp>;
  model_type?: InputMaybe<String_Comparison_Exp>;
  model_year?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
  rc_car_attachments?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
  rc_car_attachments_aggregate?: InputMaybe<Rc_Car_Attachments_Aggregate_Bool_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_rentals?: InputMaybe<Rc_Rental_Bool_Exp>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Bool_Exp>;
  rc_settlements?: InputMaybe<Rc_Settlement_Bool_Exp>;
  rc_settlements_aggregate?: InputMaybe<Rc_Settlement_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  using_state?: InputMaybe<String_Comparison_Exp>;
  vin_number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_car" */
export enum Rc_Car_Constraint {
  /** unique or primary key constraint on columns "number", "company_id" */
  RcCarNumberCompanyIdKey = 'rc_car_number_company_id_key',
  /** unique or primary key constraint on columns "id" */
  RcCarPkey = 'rc_car_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Car_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Car_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Car_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "rc_car" */
export type Rc_Car_Inc_Input = {
  /** 형식연도 */
  format_year?: InputMaybe<Scalars['Int']['input']>;
  /** 연식 */
  model_year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "rc_car" */
export type Rc_Car_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 배기량 */
  displacement?: InputMaybe<Scalars['String']['input']>;
  /** 최초등록일 */
  first_registration_at?: InputMaybe<Scalars['date']['input']>;
  /** 형식연도 */
  format_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 제조사명 */
  maker?: InputMaybe<Scalars['String']['input']>;
  /** 차종 */
  model_type?: InputMaybe<Scalars['String']['input']>;
  /** 연식 */
  model_year?: InputMaybe<Scalars['Int']['input']>;
  /** 자동차명 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 차량번호 */
  number?: InputMaybe<Scalars['String']['input']>;
  rc_car_attachments?: InputMaybe<Rc_Car_Attachments_Arr_Rel_Insert_Input>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_rentals?: InputMaybe<Rc_Rental_Arr_Rel_Insert_Input>;
  rc_settlements?: InputMaybe<Rc_Settlement_Arr_Rel_Insert_Input>;
  /** 차량상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 사용여부 */
  using_state?: InputMaybe<Scalars['String']['input']>;
  /** 차대번호 */
  vin_number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Rc_Car_Max_Fields = {
  __typename?: 'rc_car_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 배기량 */
  displacement?: Maybe<Scalars['String']['output']>;
  /** 최초등록일 */
  first_registration_at?: Maybe<Scalars['date']['output']>;
  /** 형식연도 */
  format_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 제조사명 */
  maker?: Maybe<Scalars['String']['output']>;
  /** 차종 */
  model_type?: Maybe<Scalars['String']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Int']['output']>;
  /** 자동차명 */
  name?: Maybe<Scalars['String']['output']>;
  /** 차량번호 */
  number?: Maybe<Scalars['String']['output']>;
  /** 차량상태 */
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 사용여부 */
  using_state?: Maybe<Scalars['String']['output']>;
  /** 차대번호 */
  vin_number?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "rc_car" */
export type Rc_Car_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 배기량 */
  displacement?: InputMaybe<Order_By>;
  /** 최초등록일 */
  first_registration_at?: InputMaybe<Order_By>;
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 제조사명 */
  maker?: InputMaybe<Order_By>;
  /** 차종 */
  model_type?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
  /** 자동차명 */
  name?: InputMaybe<Order_By>;
  /** 차량번호 */
  number?: InputMaybe<Order_By>;
  /** 차량상태 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 사용여부 */
  using_state?: InputMaybe<Order_By>;
  /** 차대번호 */
  vin_number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Car_Min_Fields = {
  __typename?: 'rc_car_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 배기량 */
  displacement?: Maybe<Scalars['String']['output']>;
  /** 최초등록일 */
  first_registration_at?: Maybe<Scalars['date']['output']>;
  /** 형식연도 */
  format_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 제조사명 */
  maker?: Maybe<Scalars['String']['output']>;
  /** 차종 */
  model_type?: Maybe<Scalars['String']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Int']['output']>;
  /** 자동차명 */
  name?: Maybe<Scalars['String']['output']>;
  /** 차량번호 */
  number?: Maybe<Scalars['String']['output']>;
  /** 차량상태 */
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 사용여부 */
  using_state?: Maybe<Scalars['String']['output']>;
  /** 차대번호 */
  vin_number?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "rc_car" */
export type Rc_Car_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 배기량 */
  displacement?: InputMaybe<Order_By>;
  /** 최초등록일 */
  first_registration_at?: InputMaybe<Order_By>;
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 제조사명 */
  maker?: InputMaybe<Order_By>;
  /** 차종 */
  model_type?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
  /** 자동차명 */
  name?: InputMaybe<Order_By>;
  /** 차량번호 */
  number?: InputMaybe<Order_By>;
  /** 차량상태 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 사용여부 */
  using_state?: InputMaybe<Order_By>;
  /** 차대번호 */
  vin_number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_car" */
export type Rc_Car_Mutation_Response = {
  __typename?: 'rc_car_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Car>;
};

/** input type for inserting object relation for remote table "rc_car" */
export type Rc_Car_Obj_Rel_Insert_Input = {
  data: Rc_Car_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Car_On_Conflict>;
};

/** on_conflict condition type for table "rc_car" */
export type Rc_Car_On_Conflict = {
  constraint: Rc_Car_Constraint;
  update_columns?: Array<Rc_Car_Update_Column>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_car". */
export type Rc_Car_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  displacement?: InputMaybe<Order_By>;
  first_registration_at?: InputMaybe<Order_By>;
  format_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  insurance_data?: InputMaybe<Order_By>;
  maker?: InputMaybe<Order_By>;
  model_type?: InputMaybe<Order_By>;
  model_year?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  rc_car_attachments_aggregate?: InputMaybe<Rc_Car_Attachments_Aggregate_Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Order_By>;
  rc_settlements_aggregate?: InputMaybe<Rc_Settlement_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  using_state?: InputMaybe<Order_By>;
  vin_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_car */
export type Rc_Car_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Car_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_car" */
export enum Rc_Car_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Displacement = 'displacement',
  /** column name */
  FirstRegistrationAt = 'first_registration_at',
  /** column name */
  FormatYear = 'format_year',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceData = 'insurance_data',
  /** column name */
  Maker = 'maker',
  /** column name */
  ModelType = 'model_type',
  /** column name */
  ModelYear = 'model_year',
  /** column name */
  Name = 'name',
  /** column name */
  Number = 'number',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsingState = 'using_state',
  /** column name */
  VinNumber = 'vin_number'
}

/** input type for updating data in table "rc_car" */
export type Rc_Car_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 배기량 */
  displacement?: InputMaybe<Scalars['String']['input']>;
  /** 최초등록일 */
  first_registration_at?: InputMaybe<Scalars['date']['input']>;
  /** 형식연도 */
  format_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 제조사명 */
  maker?: InputMaybe<Scalars['String']['input']>;
  /** 차종 */
  model_type?: InputMaybe<Scalars['String']['input']>;
  /** 연식 */
  model_year?: InputMaybe<Scalars['Int']['input']>;
  /** 자동차명 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 차량번호 */
  number?: InputMaybe<Scalars['String']['input']>;
  /** 차량상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 사용여부 */
  using_state?: InputMaybe<Scalars['String']['input']>;
  /** 차대번호 */
  vin_number?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "rc_car_status_counting" */
export type Rc_Car_Status_Counting = {
  __typename?: 'rc_car_status_counting';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "rc_car_status_counting" */
export type Rc_Car_Status_Counting_Aggregate = {
  __typename?: 'rc_car_status_counting_aggregate';
  aggregate?: Maybe<Rc_Car_Status_Counting_Aggregate_Fields>;
  nodes: Array<Rc_Car_Status_Counting>;
};

/** aggregate fields of "rc_car_status_counting" */
export type Rc_Car_Status_Counting_Aggregate_Fields = {
  __typename?: 'rc_car_status_counting_aggregate_fields';
  avg?: Maybe<Rc_Car_Status_Counting_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Car_Status_Counting_Max_Fields>;
  min?: Maybe<Rc_Car_Status_Counting_Min_Fields>;
  stddev?: Maybe<Rc_Car_Status_Counting_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Car_Status_Counting_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Car_Status_Counting_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Car_Status_Counting_Sum_Fields>;
  var_pop?: Maybe<Rc_Car_Status_Counting_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Car_Status_Counting_Var_Samp_Fields>;
  variance?: Maybe<Rc_Car_Status_Counting_Variance_Fields>;
};


/** aggregate fields of "rc_car_status_counting" */
export type Rc_Car_Status_Counting_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Car_Status_Counting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Rc_Car_Status_Counting_Avg_Fields = {
  __typename?: 'rc_car_status_counting_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "rc_car_status_counting". All fields are combined with a logical 'AND'. */
export type Rc_Car_Status_Counting_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Car_Status_Counting_Bool_Exp>>;
  _not?: InputMaybe<Rc_Car_Status_Counting_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Car_Status_Counting_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Rc_Car_Status_Counting_Max_Fields = {
  __typename?: 'rc_car_status_counting_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Rc_Car_Status_Counting_Min_Fields = {
  __typename?: 'rc_car_status_counting_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "rc_car_status_counting". */
export type Rc_Car_Status_Counting_Order_By = {
  company_id?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "rc_car_status_counting" */
export enum Rc_Car_Status_Counting_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Count = 'count',
  /** column name */
  Status = 'status'
}

/** aggregate stddev on columns */
export type Rc_Car_Status_Counting_Stddev_Fields = {
  __typename?: 'rc_car_status_counting_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Rc_Car_Status_Counting_Stddev_Pop_Fields = {
  __typename?: 'rc_car_status_counting_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Rc_Car_Status_Counting_Stddev_Samp_Fields = {
  __typename?: 'rc_car_status_counting_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "rc_car_status_counting" */
export type Rc_Car_Status_Counting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Car_Status_Counting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Car_Status_Counting_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  count?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Rc_Car_Status_Counting_Sum_Fields = {
  __typename?: 'rc_car_status_counting_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Rc_Car_Status_Counting_Var_Pop_Fields = {
  __typename?: 'rc_car_status_counting_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Rc_Car_Status_Counting_Var_Samp_Fields = {
  __typename?: 'rc_car_status_counting_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Rc_Car_Status_Counting_Variance_Fields = {
  __typename?: 'rc_car_status_counting_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev on columns */
export type Rc_Car_Stddev_Fields = {
  __typename?: 'rc_car_stddev_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Float']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rc_car" */
export type Rc_Car_Stddev_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rc_Car_Stddev_Pop_Fields = {
  __typename?: 'rc_car_stddev_pop_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Float']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rc_car" */
export type Rc_Car_Stddev_Pop_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rc_Car_Stddev_Samp_Fields = {
  __typename?: 'rc_car_stddev_samp_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Float']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rc_car" */
export type Rc_Car_Stddev_Samp_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rc_car" */
export type Rc_Car_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Car_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Car_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 배기량 */
  displacement?: InputMaybe<Scalars['String']['input']>;
  /** 최초등록일 */
  first_registration_at?: InputMaybe<Scalars['date']['input']>;
  /** 형식연도 */
  format_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 제조사명 */
  maker?: InputMaybe<Scalars['String']['input']>;
  /** 차종 */
  model_type?: InputMaybe<Scalars['String']['input']>;
  /** 연식 */
  model_year?: InputMaybe<Scalars['Int']['input']>;
  /** 자동차명 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 차량번호 */
  number?: InputMaybe<Scalars['String']['input']>;
  /** 차량상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 사용여부 */
  using_state?: InputMaybe<Scalars['String']['input']>;
  /** 차대번호 */
  vin_number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Rc_Car_Sum_Fields = {
  __typename?: 'rc_car_sum_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Int']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "rc_car" */
export type Rc_Car_Sum_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** update columns of table "rc_car" */
export enum Rc_Car_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Displacement = 'displacement',
  /** column name */
  FirstRegistrationAt = 'first_registration_at',
  /** column name */
  FormatYear = 'format_year',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceData = 'insurance_data',
  /** column name */
  Maker = 'maker',
  /** column name */
  ModelType = 'model_type',
  /** column name */
  ModelYear = 'model_year',
  /** column name */
  Name = 'name',
  /** column name */
  Number = 'number',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsingState = 'using_state',
  /** column name */
  VinNumber = 'vin_number'
}

export type Rc_Car_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Car_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Car_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Car_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Car_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rc_Car_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Car_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Car_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Car_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rc_Car_Var_Pop_Fields = {
  __typename?: 'rc_car_var_pop_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Float']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rc_car" */
export type Rc_Car_Var_Pop_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rc_Car_Var_Samp_Fields = {
  __typename?: 'rc_car_var_samp_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Float']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rc_car" */
export type Rc_Car_Var_Samp_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rc_Car_Variance_Fields = {
  __typename?: 'rc_car_variance_fields';
  /** 형식연도 */
  format_year?: Maybe<Scalars['Float']['output']>;
  /** 연식 */
  model_year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rc_car" */
export type Rc_Car_Variance_Order_By = {
  /** 형식연도 */
  format_year?: InputMaybe<Order_By>;
  /** 연식 */
  model_year?: InputMaybe<Order_By>;
};

/** 렌터카 고객 */
export type Rc_Client = {
  __typename?: 'rc_client';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
  id: Scalars['uuid']['output'];
  /** 고객명, 회사명 */
  name: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  rc_client_attachments: Array<Rc_Client_Attachments>;
  /** An aggregate relationship */
  rc_client_attachments_aggregate: Rc_Client_Attachments_Aggregate;
  /** An object relationship */
  rc_company: Rc_Company;
  /** An array relationship */
  rc_rentals: Array<Rc_Rental>;
  /** An aggregate relationship */
  rc_rentals_aggregate: Rc_Rental_Aggregate;
  /** An array relationship */
  rc_rentals_by_second_client: Array<Rc_Rental>;
  /** An aggregate relationship */
  rc_rentals_by_second_client_aggregate: Rc_Rental_Aggregate;
  /** 고객구분 */
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 렌터카 고객 */
export type Rc_ClientDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 고객 */
export type Rc_ClientRc_Client_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};


/** 렌터카 고객 */
export type Rc_ClientRc_Client_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};


/** 렌터카 고객 */
export type Rc_ClientRc_RentalsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 고객 */
export type Rc_ClientRc_Rentals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 고객 */
export type Rc_ClientRc_Rentals_By_Second_ClientArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 고객 */
export type Rc_ClientRc_Rentals_By_Second_Client_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};

/** aggregated selection of "rc_client" */
export type Rc_Client_Aggregate = {
  __typename?: 'rc_client_aggregate';
  aggregate?: Maybe<Rc_Client_Aggregate_Fields>;
  nodes: Array<Rc_Client>;
};

export type Rc_Client_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Client_Aggregate_Bool_Exp_Count>;
};

export type Rc_Client_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Client_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Client_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_client" */
export type Rc_Client_Aggregate_Fields = {
  __typename?: 'rc_client_aggregate_fields';
  avg?: Maybe<Rc_Client_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Client_Max_Fields>;
  min?: Maybe<Rc_Client_Min_Fields>;
  stddev?: Maybe<Rc_Client_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Client_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Client_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Client_Sum_Fields>;
  var_pop?: Maybe<Rc_Client_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Client_Var_Samp_Fields>;
  variance?: Maybe<Rc_Client_Variance_Fields>;
};


/** aggregate fields of "rc_client" */
export type Rc_Client_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Client_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_client" */
export type Rc_Client_Aggregate_Order_By = {
  avg?: InputMaybe<Rc_Client_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Client_Max_Order_By>;
  min?: InputMaybe<Rc_Client_Min_Order_By>;
  stddev?: InputMaybe<Rc_Client_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rc_Client_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rc_Client_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rc_Client_Sum_Order_By>;
  var_pop?: InputMaybe<Rc_Client_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rc_Client_Var_Samp_Order_By>;
  variance?: InputMaybe<Rc_Client_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Client_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_client" */
export type Rc_Client_Arr_Rel_Insert_Input = {
  data: Array<Rc_Client_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Client_On_Conflict>;
};

/** 렌터카 고객 첨부파일 */
export type Rc_Client_Attachments = {
  __typename?: 'rc_client_attachments';
  client_id: Scalars['uuid']['output'];
  content_type: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  origin_name: Scalars['String']['output'];
  /** An object relationship */
  rc_client: Rc_Client;
  realm: Scalars['String']['output'];
  size: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "rc_client_attachments" */
export type Rc_Client_Attachments_Aggregate = {
  __typename?: 'rc_client_attachments_aggregate';
  aggregate?: Maybe<Rc_Client_Attachments_Aggregate_Fields>;
  nodes: Array<Rc_Client_Attachments>;
};

export type Rc_Client_Attachments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Client_Attachments_Aggregate_Bool_Exp_Count>;
};

export type Rc_Client_Attachments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_client_attachments" */
export type Rc_Client_Attachments_Aggregate_Fields = {
  __typename?: 'rc_client_attachments_aggregate_fields';
  avg?: Maybe<Rc_Client_Attachments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Client_Attachments_Max_Fields>;
  min?: Maybe<Rc_Client_Attachments_Min_Fields>;
  stddev?: Maybe<Rc_Client_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Client_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Client_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Client_Attachments_Sum_Fields>;
  var_pop?: Maybe<Rc_Client_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Client_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Rc_Client_Attachments_Variance_Fields>;
};


/** aggregate fields of "rc_client_attachments" */
export type Rc_Client_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_client_attachments" */
export type Rc_Client_Attachments_Aggregate_Order_By = {
  avg?: InputMaybe<Rc_Client_Attachments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Client_Attachments_Max_Order_By>;
  min?: InputMaybe<Rc_Client_Attachments_Min_Order_By>;
  stddev?: InputMaybe<Rc_Client_Attachments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rc_Client_Attachments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rc_Client_Attachments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rc_Client_Attachments_Sum_Order_By>;
  var_pop?: InputMaybe<Rc_Client_Attachments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rc_Client_Attachments_Var_Samp_Order_By>;
  variance?: InputMaybe<Rc_Client_Attachments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rc_client_attachments" */
export type Rc_Client_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Rc_Client_Attachments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Client_Attachments_On_Conflict>;
};

/** aggregate avg on columns */
export type Rc_Client_Attachments_Avg_Fields = {
  __typename?: 'rc_client_attachments_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_client_attachments". All fields are combined with a logical 'AND'. */
export type Rc_Client_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Client_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Client_Attachments_Bool_Exp>>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  content_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  origin_name?: InputMaybe<String_Comparison_Exp>;
  rc_client?: InputMaybe<Rc_Client_Bool_Exp>;
  realm?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_client_attachments" */
export enum Rc_Client_Attachments_Constraint {
  /** unique or primary key constraint on columns "key" */
  RcClientAttachmentsKeyKey = 'rc_client_attachments_key_key',
  /** unique or primary key constraint on columns "id" */
  RcClientAttachmentsPkey = 'rc_client_attachments_pkey'
}

/** input type for incrementing numeric columns in table "rc_client_attachments" */
export type Rc_Client_Attachments_Inc_Input = {
  size?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "rc_client_attachments" */
export type Rc_Client_Attachments_Insert_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  origin_name?: InputMaybe<Scalars['String']['input']>;
  rc_client?: InputMaybe<Rc_Client_Obj_Rel_Insert_Input>;
  realm?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Client_Attachments_Max_Fields = {
  __typename?: 'rc_client_attachments_max_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  origin_name?: Maybe<Scalars['String']['output']>;
  realm?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Max_Order_By = {
  client_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  origin_name?: InputMaybe<Order_By>;
  realm?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Client_Attachments_Min_Fields = {
  __typename?: 'rc_client_attachments_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  origin_name?: Maybe<Scalars['String']['output']>;
  realm?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Min_Order_By = {
  client_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  origin_name?: InputMaybe<Order_By>;
  realm?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_client_attachments" */
export type Rc_Client_Attachments_Mutation_Response = {
  __typename?: 'rc_client_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Client_Attachments>;
};

/** on_conflict condition type for table "rc_client_attachments" */
export type Rc_Client_Attachments_On_Conflict = {
  constraint: Rc_Client_Attachments_Constraint;
  update_columns?: Array<Rc_Client_Attachments_Update_Column>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_client_attachments". */
export type Rc_Client_Attachments_Order_By = {
  client_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  origin_name?: InputMaybe<Order_By>;
  rc_client?: InputMaybe<Rc_Client_Order_By>;
  realm?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_client_attachments */
export type Rc_Client_Attachments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rc_client_attachments" */
export enum Rc_Client_Attachments_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_client_attachments" */
export type Rc_Client_Attachments_Set_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  origin_name?: InputMaybe<Scalars['String']['input']>;
  realm?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Rc_Client_Attachments_Stddev_Fields = {
  __typename?: 'rc_client_attachments_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rc_Client_Attachments_Stddev_Pop_Fields = {
  __typename?: 'rc_client_attachments_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rc_Client_Attachments_Stddev_Samp_Fields = {
  __typename?: 'rc_client_attachments_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rc_client_attachments" */
export type Rc_Client_Attachments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Client_Attachments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Client_Attachments_Stream_Cursor_Value_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  origin_name?: InputMaybe<Scalars['String']['input']>;
  realm?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Rc_Client_Attachments_Sum_Fields = {
  __typename?: 'rc_client_attachments_sum_fields';
  size?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "rc_client_attachments" */
export enum Rc_Client_Attachments_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Client_Attachments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rc_Client_Attachments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Client_Attachments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Client_Attachments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rc_Client_Attachments_Var_Pop_Fields = {
  __typename?: 'rc_client_attachments_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rc_Client_Attachments_Var_Samp_Fields = {
  __typename?: 'rc_client_attachments_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rc_Client_Attachments_Variance_Fields = {
  __typename?: 'rc_client_attachments_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rc_client_attachments" */
export type Rc_Client_Attachments_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate avg on columns */
export type Rc_Client_Avg_Fields = {
  __typename?: 'rc_client_avg_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rc_client" */
export type Rc_Client_Avg_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_client". All fields are combined with a logical 'AND'. */
export type Rc_Client_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Client_Bool_Exp>>;
  _not?: InputMaybe<Rc_Client_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Client_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  grade?: InputMaybe<Float_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  rc_client_attachments?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
  rc_client_attachments_aggregate?: InputMaybe<Rc_Client_Attachments_Aggregate_Bool_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_rentals?: InputMaybe<Rc_Rental_Bool_Exp>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Bool_Exp>;
  rc_rentals_by_second_client?: InputMaybe<Rc_Rental_Bool_Exp>;
  rc_rentals_by_second_client_aggregate?: InputMaybe<Rc_Rental_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_client" */
export enum Rc_Client_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcClientPkey = 'rc_client_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Client_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Client_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Client_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "rc_client" */
export type Rc_Client_Inc_Input = {
  /** 고객 점수 */
  grade?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "rc_client" */
export type Rc_Client_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 고객 점수 */
  grade?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 고객명, 회사명 */
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  rc_client_attachments?: InputMaybe<Rc_Client_Attachments_Arr_Rel_Insert_Input>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_rentals?: InputMaybe<Rc_Rental_Arr_Rel_Insert_Input>;
  rc_rentals_by_second_client?: InputMaybe<Rc_Rental_Arr_Rel_Insert_Input>;
  /** 고객구분 */
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Client_Max_Fields = {
  __typename?: 'rc_client_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 고객명, 회사명 */
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  /** 고객구분 */
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_client" */
export type Rc_Client_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 고객명, 회사명 */
  name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  /** 고객구분 */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Client_Min_Fields = {
  __typename?: 'rc_client_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 고객명, 회사명 */
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  /** 고객구분 */
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_client" */
export type Rc_Client_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 고객명, 회사명 */
  name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  /** 고객구분 */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_client" */
export type Rc_Client_Mutation_Response = {
  __typename?: 'rc_client_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Client>;
};

/** input type for inserting object relation for remote table "rc_client" */
export type Rc_Client_Obj_Rel_Insert_Input = {
  data: Rc_Client_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Client_On_Conflict>;
};

/** on_conflict condition type for table "rc_client" */
export type Rc_Client_On_Conflict = {
  constraint: Rc_Client_Constraint;
  update_columns?: Array<Rc_Client_Update_Column>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_client". */
export type Rc_Client_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  rc_client_attachments_aggregate?: InputMaybe<Rc_Client_Attachments_Aggregate_Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Order_By>;
  rc_rentals_by_second_client_aggregate?: InputMaybe<Rc_Rental_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_client */
export type Rc_Client_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Client_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_client" */
export enum Rc_Client_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_client" */
export type Rc_Client_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 고객 점수 */
  grade?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 고객명, 회사명 */
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  /** 고객구분 */
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Rc_Client_Stddev_Fields = {
  __typename?: 'rc_client_stddev_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rc_client" */
export type Rc_Client_Stddev_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rc_Client_Stddev_Pop_Fields = {
  __typename?: 'rc_client_stddev_pop_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rc_client" */
export type Rc_Client_Stddev_Pop_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rc_Client_Stddev_Samp_Fields = {
  __typename?: 'rc_client_stddev_samp_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rc_client" */
export type Rc_Client_Stddev_Samp_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rc_client" */
export type Rc_Client_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Client_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Client_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 고객 점수 */
  grade?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 고객명, 회사명 */
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  /** 고객구분 */
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Rc_Client_Sum_Fields = {
  __typename?: 'rc_client_sum_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "rc_client" */
export type Rc_Client_Sum_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** columns and relationships of "rc_client_type_counting" */
export type Rc_Client_Type_Counting = {
  __typename?: 'rc_client_type_counting';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "rc_client_type_counting" */
export type Rc_Client_Type_Counting_Aggregate = {
  __typename?: 'rc_client_type_counting_aggregate';
  aggregate?: Maybe<Rc_Client_Type_Counting_Aggregate_Fields>;
  nodes: Array<Rc_Client_Type_Counting>;
};

/** aggregate fields of "rc_client_type_counting" */
export type Rc_Client_Type_Counting_Aggregate_Fields = {
  __typename?: 'rc_client_type_counting_aggregate_fields';
  avg?: Maybe<Rc_Client_Type_Counting_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Client_Type_Counting_Max_Fields>;
  min?: Maybe<Rc_Client_Type_Counting_Min_Fields>;
  stddev?: Maybe<Rc_Client_Type_Counting_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Client_Type_Counting_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Client_Type_Counting_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Client_Type_Counting_Sum_Fields>;
  var_pop?: Maybe<Rc_Client_Type_Counting_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Client_Type_Counting_Var_Samp_Fields>;
  variance?: Maybe<Rc_Client_Type_Counting_Variance_Fields>;
};


/** aggregate fields of "rc_client_type_counting" */
export type Rc_Client_Type_Counting_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Client_Type_Counting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Rc_Client_Type_Counting_Avg_Fields = {
  __typename?: 'rc_client_type_counting_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "rc_client_type_counting". All fields are combined with a logical 'AND'. */
export type Rc_Client_Type_Counting_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Client_Type_Counting_Bool_Exp>>;
  _not?: InputMaybe<Rc_Client_Type_Counting_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Client_Type_Counting_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Rc_Client_Type_Counting_Max_Fields = {
  __typename?: 'rc_client_type_counting_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Rc_Client_Type_Counting_Min_Fields = {
  __typename?: 'rc_client_type_counting_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "rc_client_type_counting". */
export type Rc_Client_Type_Counting_Order_By = {
  company_id?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "rc_client_type_counting" */
export enum Rc_Client_Type_Counting_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Count = 'count',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Rc_Client_Type_Counting_Stddev_Fields = {
  __typename?: 'rc_client_type_counting_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Rc_Client_Type_Counting_Stddev_Pop_Fields = {
  __typename?: 'rc_client_type_counting_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Rc_Client_Type_Counting_Stddev_Samp_Fields = {
  __typename?: 'rc_client_type_counting_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "rc_client_type_counting" */
export type Rc_Client_Type_Counting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Client_Type_Counting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Client_Type_Counting_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  count?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Rc_Client_Type_Counting_Sum_Fields = {
  __typename?: 'rc_client_type_counting_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Rc_Client_Type_Counting_Var_Pop_Fields = {
  __typename?: 'rc_client_type_counting_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Rc_Client_Type_Counting_Var_Samp_Fields = {
  __typename?: 'rc_client_type_counting_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Rc_Client_Type_Counting_Variance_Fields = {
  __typename?: 'rc_client_type_counting_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "rc_client" */
export enum Rc_Client_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Client_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Client_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Client_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Client_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Client_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rc_Client_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Client_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Client_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Client_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rc_Client_Var_Pop_Fields = {
  __typename?: 'rc_client_var_pop_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rc_client" */
export type Rc_Client_Var_Pop_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rc_Client_Var_Samp_Fields = {
  __typename?: 'rc_client_var_samp_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rc_client" */
export type Rc_Client_Var_Samp_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rc_Client_Variance_Fields = {
  __typename?: 'rc_client_variance_fields';
  /** 고객 점수 */
  grade?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rc_client" */
export type Rc_Client_Variance_Order_By = {
  /** 고객 점수 */
  grade?: InputMaybe<Order_By>;
};

/** 렌터카 회사 */
export type Rc_Company = {
  __typename?: 'rc_company';
  /** 상호명 */
  business_name: Scalars['String']['output'];
  /** 사업자번호 */
  business_number: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  gp_payment_histories: Array<Gp_Payment_History>;
  /** An aggregate relationship */
  gp_payment_histories_aggregate: Gp_Payment_History_Aggregate;
  id: Scalars['uuid']['output'];
  /** 승인여부 */
  is_allow: Scalars['Boolean']['output'];
  /** An array relationship */
  penalty_infos: Array<Penalty_Info>;
  /** An aggregate relationship */
  penalty_infos_aggregate: Penalty_Info_Aggregate;
  /** An array relationship */
  rc_cars: Array<Rc_Car>;
  /** An aggregate relationship */
  rc_cars_aggregate: Rc_Car_Aggregate;
  /** An array relationship */
  rc_clients: Array<Rc_Client>;
  /** An aggregate relationship */
  rc_clients_aggregate: Rc_Client_Aggregate;
  /** An array relationship */
  rc_company_attachments: Array<Rc_Company_Attachments>;
  /** An aggregate relationship */
  rc_company_attachments_aggregate: Rc_Company_Attachments_Aggregate;
  /** An array relationship */
  rc_consignments: Array<Rc_Consignment>;
  /** An aggregate relationship */
  rc_consignments_aggregate: Rc_Consignment_Aggregate;
  /** An array relationship */
  rc_notifications: Array<Rc_Notification>;
  /** An aggregate relationship */
  rc_notifications_aggregate: Rc_Notification_Aggregate;
  /** An array relationship */
  rc_partners: Array<Rc_Partner>;
  /** An aggregate relationship */
  rc_partners_aggregate: Rc_Partner_Aggregate;
  /** An array relationship */
  rc_quotations: Array<Rc_Quotation>;
  /** An aggregate relationship */
  rc_quotations_aggregate: Rc_Quotation_Aggregate;
  /** An array relationship */
  rc_rentals: Array<Rc_Rental>;
  /** An aggregate relationship */
  rc_rentals_aggregate: Rc_Rental_Aggregate;
  /** An array relationship */
  rc_settlements: Array<Rc_Settlement>;
  /** An aggregate relationship */
  rc_settlements_aggregate: Rc_Settlement_Aggregate;
  /** An array relationship */
  rc_staffs: Array<Rc_Staff>;
  /** An aggregate relationship */
  rc_staffs_aggregate: Rc_Staff_Aggregate;
  /** 설정정보 */
  setting_data?: Maybe<Scalars['jsonb']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 렌터카 회사 */
export type Rc_CompanyDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 회사 */
export type Rc_CompanyGp_Payment_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gp_Payment_History_Order_By>>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyGp_Payment_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gp_Payment_History_Order_By>>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyPenalty_InfosArgs = {
  distinct_on?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Penalty_Info_Order_By>>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyPenalty_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Penalty_Info_Order_By>>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_CarsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Order_By>>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Cars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Order_By>>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_ClientsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Order_By>>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Clients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Order_By>>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Company_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Company_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_ConsignmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Consignments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_PartnersArgs = {
  distinct_on?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Partner_Order_By>>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Partners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Partner_Order_By>>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_QuotationsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Quotations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_RentalsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Rentals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_SettlementsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Settlements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_StaffsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanyRc_Staffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


/** 렌터카 회사 */
export type Rc_CompanySetting_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rc_company" */
export type Rc_Company_Aggregate = {
  __typename?: 'rc_company_aggregate';
  aggregate?: Maybe<Rc_Company_Aggregate_Fields>;
  nodes: Array<Rc_Company>;
};

/** aggregate fields of "rc_company" */
export type Rc_Company_Aggregate_Fields = {
  __typename?: 'rc_company_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Company_Max_Fields>;
  min?: Maybe<Rc_Company_Min_Fields>;
};


/** aggregate fields of "rc_company" */
export type Rc_Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Company_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 설정정보 */
  setting_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** 렌터카 업체 첨부파일 */
export type Rc_Company_Attachments = {
  __typename?: 'rc_company_attachments';
  company_id: Scalars['uuid']['output'];
  /** 파일타입 */
  content_type: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** 파일키 */
  key: Scalars['String']['output'];
  /** 파일라벨 */
  label: Scalars['String']['output'];
  /** 원본 파일명 */
  origin_name: Scalars['String']['output'];
  /** An object relationship */
  rc_company: Rc_Company;
  /** 파일영역 */
  realm: Scalars['String']['output'];
  /** 파일크기 */
  size: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "rc_company_attachments" */
export type Rc_Company_Attachments_Aggregate = {
  __typename?: 'rc_company_attachments_aggregate';
  aggregate?: Maybe<Rc_Company_Attachments_Aggregate_Fields>;
  nodes: Array<Rc_Company_Attachments>;
};

export type Rc_Company_Attachments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Company_Attachments_Aggregate_Bool_Exp_Count>;
};

export type Rc_Company_Attachments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_company_attachments" */
export type Rc_Company_Attachments_Aggregate_Fields = {
  __typename?: 'rc_company_attachments_aggregate_fields';
  avg?: Maybe<Rc_Company_Attachments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Company_Attachments_Max_Fields>;
  min?: Maybe<Rc_Company_Attachments_Min_Fields>;
  stddev?: Maybe<Rc_Company_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Company_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Company_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Company_Attachments_Sum_Fields>;
  var_pop?: Maybe<Rc_Company_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Company_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Rc_Company_Attachments_Variance_Fields>;
};


/** aggregate fields of "rc_company_attachments" */
export type Rc_Company_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_company_attachments" */
export type Rc_Company_Attachments_Aggregate_Order_By = {
  avg?: InputMaybe<Rc_Company_Attachments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Company_Attachments_Max_Order_By>;
  min?: InputMaybe<Rc_Company_Attachments_Min_Order_By>;
  stddev?: InputMaybe<Rc_Company_Attachments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rc_Company_Attachments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rc_Company_Attachments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rc_Company_Attachments_Sum_Order_By>;
  var_pop?: InputMaybe<Rc_Company_Attachments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rc_Company_Attachments_Var_Samp_Order_By>;
  variance?: InputMaybe<Rc_Company_Attachments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rc_company_attachments" */
export type Rc_Company_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Rc_Company_Attachments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Company_Attachments_On_Conflict>;
};

/** aggregate avg on columns */
export type Rc_Company_Attachments_Avg_Fields = {
  __typename?: 'rc_company_attachments_avg_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Avg_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_company_attachments". All fields are combined with a logical 'AND'. */
export type Rc_Company_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Company_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Company_Attachments_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  content_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  origin_name?: InputMaybe<String_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  realm?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_company_attachments" */
export enum Rc_Company_Attachments_Constraint {
  /** unique or primary key constraint on columns "key" */
  RcCompanyAttachmentsKeyKey = 'rc_company_attachments_key_key',
  /** unique or primary key constraint on columns "id" */
  RcCompanyAttachmentsPkey = 'rc_company_attachments_pkey'
}

/** input type for incrementing numeric columns in table "rc_company_attachments" */
export type Rc_Company_Attachments_Inc_Input = {
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "rc_company_attachments" */
export type Rc_Company_Attachments_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Company_Attachments_Max_Fields = {
  __typename?: 'rc_company_attachments_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  /** 파일타입 */
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 파일키 */
  key?: Maybe<Scalars['String']['output']>;
  /** 파일라벨 */
  label?: Maybe<Scalars['String']['output']>;
  /** 원본 파일명 */
  origin_name?: Maybe<Scalars['String']['output']>;
  /** 파일영역 */
  realm?: Maybe<Scalars['String']['output']>;
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  /** 파일타입 */
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 파일키 */
  key?: InputMaybe<Order_By>;
  /** 파일라벨 */
  label?: InputMaybe<Order_By>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Order_By>;
  /** 파일영역 */
  realm?: InputMaybe<Order_By>;
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Company_Attachments_Min_Fields = {
  __typename?: 'rc_company_attachments_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  /** 파일타입 */
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 파일키 */
  key?: Maybe<Scalars['String']['output']>;
  /** 파일라벨 */
  label?: Maybe<Scalars['String']['output']>;
  /** 원본 파일명 */
  origin_name?: Maybe<Scalars['String']['output']>;
  /** 파일영역 */
  realm?: Maybe<Scalars['String']['output']>;
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  /** 파일타입 */
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 파일키 */
  key?: InputMaybe<Order_By>;
  /** 파일라벨 */
  label?: InputMaybe<Order_By>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Order_By>;
  /** 파일영역 */
  realm?: InputMaybe<Order_By>;
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_company_attachments" */
export type Rc_Company_Attachments_Mutation_Response = {
  __typename?: 'rc_company_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Company_Attachments>;
};

/** on_conflict condition type for table "rc_company_attachments" */
export type Rc_Company_Attachments_On_Conflict = {
  constraint: Rc_Company_Attachments_Constraint;
  update_columns?: Array<Rc_Company_Attachments_Update_Column>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_company_attachments". */
export type Rc_Company_Attachments_Order_By = {
  company_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  origin_name?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  realm?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_company_attachments */
export type Rc_Company_Attachments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rc_company_attachments" */
export enum Rc_Company_Attachments_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_company_attachments" */
export type Rc_Company_Attachments_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Rc_Company_Attachments_Stddev_Fields = {
  __typename?: 'rc_company_attachments_stddev_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Stddev_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rc_Company_Attachments_Stddev_Pop_Fields = {
  __typename?: 'rc_company_attachments_stddev_pop_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Stddev_Pop_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rc_Company_Attachments_Stddev_Samp_Fields = {
  __typename?: 'rc_company_attachments_stddev_samp_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Stddev_Samp_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rc_company_attachments" */
export type Rc_Company_Attachments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Company_Attachments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Company_Attachments_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Rc_Company_Attachments_Sum_Fields = {
  __typename?: 'rc_company_attachments_sum_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Sum_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** update columns of table "rc_company_attachments" */
export enum Rc_Company_Attachments_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Company_Attachments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rc_Company_Attachments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Company_Attachments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Company_Attachments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rc_Company_Attachments_Var_Pop_Fields = {
  __typename?: 'rc_company_attachments_var_pop_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Var_Pop_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rc_Company_Attachments_Var_Samp_Fields = {
  __typename?: 'rc_company_attachments_var_samp_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Var_Samp_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rc_Company_Attachments_Variance_Fields = {
  __typename?: 'rc_company_attachments_variance_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rc_company_attachments" */
export type Rc_Company_Attachments_Variance_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_company". All fields are combined with a logical 'AND'. */
export type Rc_Company_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Company_Bool_Exp>>;
  _not?: InputMaybe<Rc_Company_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Company_Bool_Exp>>;
  business_name?: InputMaybe<String_Comparison_Exp>;
  business_number?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  gp_payment_histories?: InputMaybe<Gp_Payment_History_Bool_Exp>;
  gp_payment_histories_aggregate?: InputMaybe<Gp_Payment_History_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_allow?: InputMaybe<Boolean_Comparison_Exp>;
  penalty_infos?: InputMaybe<Penalty_Info_Bool_Exp>;
  penalty_infos_aggregate?: InputMaybe<Penalty_Info_Aggregate_Bool_Exp>;
  rc_cars?: InputMaybe<Rc_Car_Bool_Exp>;
  rc_cars_aggregate?: InputMaybe<Rc_Car_Aggregate_Bool_Exp>;
  rc_clients?: InputMaybe<Rc_Client_Bool_Exp>;
  rc_clients_aggregate?: InputMaybe<Rc_Client_Aggregate_Bool_Exp>;
  rc_company_attachments?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
  rc_company_attachments_aggregate?: InputMaybe<Rc_Company_Attachments_Aggregate_Bool_Exp>;
  rc_consignments?: InputMaybe<Rc_Consignment_Bool_Exp>;
  rc_consignments_aggregate?: InputMaybe<Rc_Consignment_Aggregate_Bool_Exp>;
  rc_notifications?: InputMaybe<Rc_Notification_Bool_Exp>;
  rc_notifications_aggregate?: InputMaybe<Rc_Notification_Aggregate_Bool_Exp>;
  rc_partners?: InputMaybe<Rc_Partner_Bool_Exp>;
  rc_partners_aggregate?: InputMaybe<Rc_Partner_Aggregate_Bool_Exp>;
  rc_quotations?: InputMaybe<Rc_Quotation_Bool_Exp>;
  rc_quotations_aggregate?: InputMaybe<Rc_Quotation_Aggregate_Bool_Exp>;
  rc_rentals?: InputMaybe<Rc_Rental_Bool_Exp>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Bool_Exp>;
  rc_settlements?: InputMaybe<Rc_Settlement_Bool_Exp>;
  rc_settlements_aggregate?: InputMaybe<Rc_Settlement_Aggregate_Bool_Exp>;
  rc_staffs?: InputMaybe<Rc_Staff_Bool_Exp>;
  rc_staffs_aggregate?: InputMaybe<Rc_Staff_Aggregate_Bool_Exp>;
  setting_data?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_company" */
export enum Rc_Company_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcCompanyPkey = 'rc_company_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Company_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 설정정보 */
  setting_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Company_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
  /** 설정정보 */
  setting_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Company_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
  /** 설정정보 */
  setting_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_company" */
export type Rc_Company_Insert_Input = {
  /** 상호명 */
  business_name?: InputMaybe<Scalars['String']['input']>;
  /** 사업자번호 */
  business_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  gp_payment_histories?: InputMaybe<Gp_Payment_History_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 승인여부 */
  is_allow?: InputMaybe<Scalars['Boolean']['input']>;
  penalty_infos?: InputMaybe<Penalty_Info_Arr_Rel_Insert_Input>;
  rc_cars?: InputMaybe<Rc_Car_Arr_Rel_Insert_Input>;
  rc_clients?: InputMaybe<Rc_Client_Arr_Rel_Insert_Input>;
  rc_company_attachments?: InputMaybe<Rc_Company_Attachments_Arr_Rel_Insert_Input>;
  rc_consignments?: InputMaybe<Rc_Consignment_Arr_Rel_Insert_Input>;
  rc_notifications?: InputMaybe<Rc_Notification_Arr_Rel_Insert_Input>;
  rc_partners?: InputMaybe<Rc_Partner_Arr_Rel_Insert_Input>;
  rc_quotations?: InputMaybe<Rc_Quotation_Arr_Rel_Insert_Input>;
  rc_rentals?: InputMaybe<Rc_Rental_Arr_Rel_Insert_Input>;
  rc_settlements?: InputMaybe<Rc_Settlement_Arr_Rel_Insert_Input>;
  rc_staffs?: InputMaybe<Rc_Staff_Arr_Rel_Insert_Input>;
  /** 설정정보 */
  setting_data?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Company_Max_Fields = {
  __typename?: 'rc_company_max_fields';
  /** 상호명 */
  business_name?: Maybe<Scalars['String']['output']>;
  /** 사업자번호 */
  business_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Rc_Company_Min_Fields = {
  __typename?: 'rc_company_min_fields';
  /** 상호명 */
  business_name?: Maybe<Scalars['String']['output']>;
  /** 사업자번호 */
  business_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "rc_company" */
export type Rc_Company_Mutation_Response = {
  __typename?: 'rc_company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Company>;
};

/** input type for inserting object relation for remote table "rc_company" */
export type Rc_Company_Obj_Rel_Insert_Input = {
  data: Rc_Company_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Company_On_Conflict>;
};

/** on_conflict condition type for table "rc_company" */
export type Rc_Company_On_Conflict = {
  constraint: Rc_Company_Constraint;
  update_columns?: Array<Rc_Company_Update_Column>;
  where?: InputMaybe<Rc_Company_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_company". */
export type Rc_Company_Order_By = {
  business_name?: InputMaybe<Order_By>;
  business_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  gp_payment_histories_aggregate?: InputMaybe<Gp_Payment_History_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_allow?: InputMaybe<Order_By>;
  penalty_infos_aggregate?: InputMaybe<Penalty_Info_Aggregate_Order_By>;
  rc_cars_aggregate?: InputMaybe<Rc_Car_Aggregate_Order_By>;
  rc_clients_aggregate?: InputMaybe<Rc_Client_Aggregate_Order_By>;
  rc_company_attachments_aggregate?: InputMaybe<Rc_Company_Attachments_Aggregate_Order_By>;
  rc_consignments_aggregate?: InputMaybe<Rc_Consignment_Aggregate_Order_By>;
  rc_notifications_aggregate?: InputMaybe<Rc_Notification_Aggregate_Order_By>;
  rc_partners_aggregate?: InputMaybe<Rc_Partner_Aggregate_Order_By>;
  rc_quotations_aggregate?: InputMaybe<Rc_Quotation_Aggregate_Order_By>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Order_By>;
  rc_settlements_aggregate?: InputMaybe<Rc_Settlement_Aggregate_Order_By>;
  rc_staffs_aggregate?: InputMaybe<Rc_Staff_Aggregate_Order_By>;
  setting_data?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_company */
export type Rc_Company_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Company_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 설정정보 */
  setting_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_company" */
export enum Rc_Company_Select_Column {
  /** column name */
  BusinessName = 'business_name',
  /** column name */
  BusinessNumber = 'business_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsAllow = 'is_allow',
  /** column name */
  SettingData = 'setting_data',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_company" */
export type Rc_Company_Set_Input = {
  /** 상호명 */
  business_name?: InputMaybe<Scalars['String']['input']>;
  /** 사업자번호 */
  business_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 승인여부 */
  is_allow?: InputMaybe<Scalars['Boolean']['input']>;
  /** 설정정보 */
  setting_data?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rc_company" */
export type Rc_Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Company_Stream_Cursor_Value_Input = {
  /** 상호명 */
  business_name?: InputMaybe<Scalars['String']['input']>;
  /** 사업자번호 */
  business_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 승인여부 */
  is_allow?: InputMaybe<Scalars['Boolean']['input']>;
  /** 설정정보 */
  setting_data?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_company" */
export enum Rc_Company_Update_Column {
  /** column name */
  BusinessName = 'business_name',
  /** column name */
  BusinessNumber = 'business_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsAllow = 'is_allow',
  /** column name */
  SettingData = 'setting_data',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Company_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Company_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Company_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Company_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Company_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Company_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Company_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Company_Bool_Exp;
};

/** 탁송관리 */
export type Rc_Consignment = {
  __typename?: 'rc_consignment';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  order_no: Scalars['Int']['output'];
  /** An object relationship */
  rc_company: Rc_Company;
  /** An object relationship */
  rc_rental?: Maybe<Rc_Rental>;
  /** An object relationship */
  rc_staff: Rc_Staff;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  staff_id: Scalars['uuid']['output'];
  state: Scalars['Int']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 탁송관리 */
export type Rc_ConsignmentDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rc_consignment" */
export type Rc_Consignment_Aggregate = {
  __typename?: 'rc_consignment_aggregate';
  aggregate?: Maybe<Rc_Consignment_Aggregate_Fields>;
  nodes: Array<Rc_Consignment>;
};

export type Rc_Consignment_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Consignment_Aggregate_Bool_Exp_Count>;
};

export type Rc_Consignment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Consignment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_consignment" */
export type Rc_Consignment_Aggregate_Fields = {
  __typename?: 'rc_consignment_aggregate_fields';
  avg?: Maybe<Rc_Consignment_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Consignment_Max_Fields>;
  min?: Maybe<Rc_Consignment_Min_Fields>;
  stddev?: Maybe<Rc_Consignment_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Consignment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Consignment_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Consignment_Sum_Fields>;
  var_pop?: Maybe<Rc_Consignment_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Consignment_Var_Samp_Fields>;
  variance?: Maybe<Rc_Consignment_Variance_Fields>;
};


/** aggregate fields of "rc_consignment" */
export type Rc_Consignment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_consignment" */
export type Rc_Consignment_Aggregate_Order_By = {
  avg?: InputMaybe<Rc_Consignment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Consignment_Max_Order_By>;
  min?: InputMaybe<Rc_Consignment_Min_Order_By>;
  stddev?: InputMaybe<Rc_Consignment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rc_Consignment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rc_Consignment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rc_Consignment_Sum_Order_By>;
  var_pop?: InputMaybe<Rc_Consignment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rc_Consignment_Var_Samp_Order_By>;
  variance?: InputMaybe<Rc_Consignment_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Consignment_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_consignment" */
export type Rc_Consignment_Arr_Rel_Insert_Input = {
  data: Array<Rc_Consignment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Consignment_On_Conflict>;
};

/** aggregate avg on columns */
export type Rc_Consignment_Avg_Fields = {
  __typename?: 'rc_consignment_avg_fields';
  order_no?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rc_consignment" */
export type Rc_Consignment_Avg_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_consignment". All fields are combined with a logical 'AND'. */
export type Rc_Consignment_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Consignment_Bool_Exp>>;
  _not?: InputMaybe<Rc_Consignment_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Consignment_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_no?: InputMaybe<Int_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_rental?: InputMaybe<Rc_Rental_Bool_Exp>;
  rc_staff?: InputMaybe<Rc_Staff_Bool_Exp>;
  rental_id?: InputMaybe<Uuid_Comparison_Exp>;
  staff_id?: InputMaybe<Uuid_Comparison_Exp>;
  state?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_consignment" */
export enum Rc_Consignment_Constraint {
  /** unique or primary key constraint on columns "order_no" */
  RcConsignmentOrderNoKey = 'rc_consignment_order_no_key',
  /** unique or primary key constraint on columns "id" */
  RcConsignmentPkey = 'rc_consignment_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Consignment_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Consignment_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Consignment_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "rc_consignment" */
export type Rc_Consignment_Inc_Input = {
  order_no?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "rc_consignment" */
export type Rc_Consignment_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_no?: InputMaybe<Scalars['Int']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_rental?: InputMaybe<Rc_Rental_Obj_Rel_Insert_Input>;
  rc_staff?: InputMaybe<Rc_Staff_Obj_Rel_Insert_Input>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Consignment_Max_Fields = {
  __typename?: 'rc_consignment_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_no?: Maybe<Scalars['Int']['output']>;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_consignment" */
export type Rc_Consignment_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  rental_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Consignment_Min_Fields = {
  __typename?: 'rc_consignment_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_no?: Maybe<Scalars['Int']['output']>;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_consignment" */
export type Rc_Consignment_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  rental_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_consignment" */
export type Rc_Consignment_Mutation_Response = {
  __typename?: 'rc_consignment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Consignment>;
};

/** on_conflict condition type for table "rc_consignment" */
export type Rc_Consignment_On_Conflict = {
  constraint: Rc_Consignment_Constraint;
  update_columns?: Array<Rc_Consignment_Update_Column>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_consignment". */
export type Rc_Consignment_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_rental?: InputMaybe<Rc_Rental_Order_By>;
  rc_staff?: InputMaybe<Rc_Staff_Order_By>;
  rental_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_consignment */
export type Rc_Consignment_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Consignment_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_consignment" */
export enum Rc_Consignment_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNo = 'order_no',
  /** column name */
  RentalId = 'rental_id',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  State = 'state',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_consignment" */
export type Rc_Consignment_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_no?: InputMaybe<Scalars['Int']['input']>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Rc_Consignment_Stddev_Fields = {
  __typename?: 'rc_consignment_stddev_fields';
  order_no?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rc_consignment" */
export type Rc_Consignment_Stddev_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rc_Consignment_Stddev_Pop_Fields = {
  __typename?: 'rc_consignment_stddev_pop_fields';
  order_no?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rc_consignment" */
export type Rc_Consignment_Stddev_Pop_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rc_Consignment_Stddev_Samp_Fields = {
  __typename?: 'rc_consignment_stddev_samp_fields';
  order_no?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rc_consignment" */
export type Rc_Consignment_Stddev_Samp_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rc_consignment" */
export type Rc_Consignment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Consignment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Consignment_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_no?: InputMaybe<Scalars['Int']['input']>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Rc_Consignment_Sum_Fields = {
  __typename?: 'rc_consignment_sum_fields';
  order_no?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "rc_consignment" */
export type Rc_Consignment_Sum_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** update columns of table "rc_consignment" */
export enum Rc_Consignment_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNo = 'order_no',
  /** column name */
  RentalId = 'rental_id',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  State = 'state',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Consignment_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Consignment_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Consignment_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Consignment_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Consignment_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rc_Consignment_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Consignment_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Consignment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Consignment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rc_Consignment_Var_Pop_Fields = {
  __typename?: 'rc_consignment_var_pop_fields';
  order_no?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rc_consignment" */
export type Rc_Consignment_Var_Pop_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rc_Consignment_Var_Samp_Fields = {
  __typename?: 'rc_consignment_var_samp_fields';
  order_no?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rc_consignment" */
export type Rc_Consignment_Var_Samp_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rc_Consignment_Variance_Fields = {
  __typename?: 'rc_consignment_variance_fields';
  order_no?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rc_consignment" */
export type Rc_Consignment_Variance_Order_By = {
  order_no?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** 1:1 문의 */
export type Rc_Inquiry = {
  __typename?: 'rc_inquiry';
  answer?: Maybe<Scalars['String']['output']>;
  answer_at?: Maybe<Scalars['timestamptz']['output']>;
  category: Scalars['String']['output'];
  contents: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 1:1 문의 */
export type Rc_InquiryDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rc_inquiry" */
export type Rc_Inquiry_Aggregate = {
  __typename?: 'rc_inquiry_aggregate';
  aggregate?: Maybe<Rc_Inquiry_Aggregate_Fields>;
  nodes: Array<Rc_Inquiry>;
};

/** aggregate fields of "rc_inquiry" */
export type Rc_Inquiry_Aggregate_Fields = {
  __typename?: 'rc_inquiry_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Inquiry_Max_Fields>;
  min?: Maybe<Rc_Inquiry_Min_Fields>;
};


/** aggregate fields of "rc_inquiry" */
export type Rc_Inquiry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Inquiry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Inquiry_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "rc_inquiry". All fields are combined with a logical 'AND'. */
export type Rc_Inquiry_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Inquiry_Bool_Exp>>;
  _not?: InputMaybe<Rc_Inquiry_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Inquiry_Bool_Exp>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  answer_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  contents?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_inquiry" */
export enum Rc_Inquiry_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcInquiryPkey = 'rc_inquiry_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Inquiry_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Inquiry_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Inquiry_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_inquiry" */
export type Rc_Inquiry_Insert_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  answer_at?: InputMaybe<Scalars['timestamptz']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Inquiry_Max_Fields = {
  __typename?: 'rc_inquiry_max_fields';
  answer?: Maybe<Scalars['String']['output']>;
  answer_at?: Maybe<Scalars['timestamptz']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Rc_Inquiry_Min_Fields = {
  __typename?: 'rc_inquiry_min_fields';
  answer?: Maybe<Scalars['String']['output']>;
  answer_at?: Maybe<Scalars['timestamptz']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "rc_inquiry" */
export type Rc_Inquiry_Mutation_Response = {
  __typename?: 'rc_inquiry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Inquiry>;
};

/** on_conflict condition type for table "rc_inquiry" */
export type Rc_Inquiry_On_Conflict = {
  constraint: Rc_Inquiry_Constraint;
  update_columns?: Array<Rc_Inquiry_Update_Column>;
  where?: InputMaybe<Rc_Inquiry_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_inquiry". */
export type Rc_Inquiry_Order_By = {
  answer?: InputMaybe<Order_By>;
  answer_at?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  contents?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_inquiry */
export type Rc_Inquiry_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Inquiry_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_inquiry" */
export enum Rc_Inquiry_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  AnswerAt = 'answer_at',
  /** column name */
  Category = 'category',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_inquiry" */
export type Rc_Inquiry_Set_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  answer_at?: InputMaybe<Scalars['timestamptz']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rc_inquiry" */
export type Rc_Inquiry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Inquiry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Inquiry_Stream_Cursor_Value_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  answer_at?: InputMaybe<Scalars['timestamptz']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_inquiry" */
export enum Rc_Inquiry_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  AnswerAt = 'answer_at',
  /** column name */
  Category = 'category',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Inquiry_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Inquiry_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Inquiry_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Inquiry_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Inquiry_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Inquiry_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Inquiry_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Inquiry_Bool_Exp;
};

/** 공지사항 */
export type Rc_Notice = {
  __typename?: 'rc_notice';
  category: Scalars['String']['output'];
  contents: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 공지사항 */
export type Rc_NoticeDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rc_notice" */
export type Rc_Notice_Aggregate = {
  __typename?: 'rc_notice_aggregate';
  aggregate?: Maybe<Rc_Notice_Aggregate_Fields>;
  nodes: Array<Rc_Notice>;
};

/** aggregate fields of "rc_notice" */
export type Rc_Notice_Aggregate_Fields = {
  __typename?: 'rc_notice_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Notice_Max_Fields>;
  min?: Maybe<Rc_Notice_Min_Fields>;
};


/** aggregate fields of "rc_notice" */
export type Rc_Notice_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Notice_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Notice_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "rc_notice". All fields are combined with a logical 'AND'. */
export type Rc_Notice_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Notice_Bool_Exp>>;
  _not?: InputMaybe<Rc_Notice_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Notice_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  contents?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_notice" */
export enum Rc_Notice_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcNoticePkey = 'rc_notice_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Notice_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Notice_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Notice_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_notice" */
export type Rc_Notice_Insert_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Notice_Max_Fields = {
  __typename?: 'rc_notice_max_fields';
  category?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Rc_Notice_Min_Fields = {
  __typename?: 'rc_notice_min_fields';
  category?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "rc_notice" */
export type Rc_Notice_Mutation_Response = {
  __typename?: 'rc_notice_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Notice>;
};

/** on_conflict condition type for table "rc_notice" */
export type Rc_Notice_On_Conflict = {
  constraint: Rc_Notice_Constraint;
  update_columns?: Array<Rc_Notice_Update_Column>;
  where?: InputMaybe<Rc_Notice_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_notice". */
export type Rc_Notice_Order_By = {
  category?: InputMaybe<Order_By>;
  contents?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_notice */
export type Rc_Notice_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Notice_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_notice" */
export enum Rc_Notice_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_notice" */
export type Rc_Notice_Set_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rc_notice" */
export type Rc_Notice_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Notice_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Notice_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_notice" */
export enum Rc_Notice_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Notice_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Notice_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Notice_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Notice_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Notice_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Notice_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Notice_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Notice_Bool_Exp;
};

/** 알림내역 */
export type Rc_Notification = {
  __typename?: 'rc_notification';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 알림 지운 날짜 */
  erased_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  rc_company: Rc_Company;
  /** An object relationship */
  rc_staff: Rc_Staff;
  read_at?: Maybe<Scalars['timestamptz']['output']>;
  staff_id: Scalars['uuid']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 알림내역 */
export type Rc_NotificationDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rc_notification" */
export type Rc_Notification_Aggregate = {
  __typename?: 'rc_notification_aggregate';
  aggregate?: Maybe<Rc_Notification_Aggregate_Fields>;
  nodes: Array<Rc_Notification>;
};

export type Rc_Notification_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Notification_Aggregate_Bool_Exp_Count>;
};

export type Rc_Notification_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Notification_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_notification" */
export type Rc_Notification_Aggregate_Fields = {
  __typename?: 'rc_notification_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Notification_Max_Fields>;
  min?: Maybe<Rc_Notification_Min_Fields>;
};


/** aggregate fields of "rc_notification" */
export type Rc_Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_notification" */
export type Rc_Notification_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Notification_Max_Order_By>;
  min?: InputMaybe<Rc_Notification_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Notification_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_notification" */
export type Rc_Notification_Arr_Rel_Insert_Input = {
  data: Array<Rc_Notification_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Notification_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rc_notification". All fields are combined with a logical 'AND'. */
export type Rc_Notification_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Notification_Bool_Exp>>;
  _not?: InputMaybe<Rc_Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Notification_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  erased_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_staff?: InputMaybe<Rc_Staff_Bool_Exp>;
  read_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  staff_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_notification" */
export enum Rc_Notification_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcNotificationPkey = 'rc_notification_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Notification_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Notification_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Notification_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_notification" */
export type Rc_Notification_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 알림 지운 날짜 */
  erased_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_staff?: InputMaybe<Rc_Staff_Obj_Rel_Insert_Input>;
  read_at?: InputMaybe<Scalars['timestamptz']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Notification_Max_Fields = {
  __typename?: 'rc_notification_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 알림 지운 날짜 */
  erased_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  read_at?: Maybe<Scalars['timestamptz']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_notification" */
export type Rc_Notification_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 알림 지운 날짜 */
  erased_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Notification_Min_Fields = {
  __typename?: 'rc_notification_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 알림 지운 날짜 */
  erased_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  read_at?: Maybe<Scalars['timestamptz']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_notification" */
export type Rc_Notification_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 알림 지운 날짜 */
  erased_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_notification" */
export type Rc_Notification_Mutation_Response = {
  __typename?: 'rc_notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Notification>;
};

/** on_conflict condition type for table "rc_notification" */
export type Rc_Notification_On_Conflict = {
  constraint: Rc_Notification_Constraint;
  update_columns?: Array<Rc_Notification_Update_Column>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_notification". */
export type Rc_Notification_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  erased_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_staff?: InputMaybe<Rc_Staff_Order_By>;
  read_at?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_notification */
export type Rc_Notification_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Notification_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_notification" */
export enum Rc_Notification_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ErasedAt = 'erased_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReadAt = 'read_at',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_notification" */
export type Rc_Notification_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 알림 지운 날짜 */
  erased_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  read_at?: InputMaybe<Scalars['timestamptz']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rc_notification" */
export type Rc_Notification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Notification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Notification_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 알림 지운 날짜 */
  erased_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  read_at?: InputMaybe<Scalars['timestamptz']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_notification" */
export enum Rc_Notification_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ErasedAt = 'erased_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReadAt = 'read_at',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Notification_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Notification_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Notification_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Notification_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Notification_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Notification_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Notification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Notification_Bool_Exp;
};

/** 렌터카 협력업체 */
export type Rc_Partner = {
  __typename?: 'rc_partner';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['uuid']['output'];
  /** 업체명 */
  name: Scalars['String']['output'];
  /** An object relationship */
  rc_company: Rc_Company;
  /** An array relationship */
  rc_rentals: Array<Rc_Rental>;
  /** An aggregate relationship */
  rc_rentals_aggregate: Rc_Rental_Aggregate;
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 렌터카 협력업체 */
export type Rc_PartnerDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 협력업체 */
export type Rc_PartnerRc_RentalsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 협력업체 */
export type Rc_PartnerRc_Rentals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};

/** aggregated selection of "rc_partner" */
export type Rc_Partner_Aggregate = {
  __typename?: 'rc_partner_aggregate';
  aggregate?: Maybe<Rc_Partner_Aggregate_Fields>;
  nodes: Array<Rc_Partner>;
};

export type Rc_Partner_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Partner_Aggregate_Bool_Exp_Count>;
};

export type Rc_Partner_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Partner_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_partner" */
export type Rc_Partner_Aggregate_Fields = {
  __typename?: 'rc_partner_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Partner_Max_Fields>;
  min?: Maybe<Rc_Partner_Min_Fields>;
};


/** aggregate fields of "rc_partner" */
export type Rc_Partner_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_partner" */
export type Rc_Partner_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Partner_Max_Order_By>;
  min?: InputMaybe<Rc_Partner_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Partner_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_partner" */
export type Rc_Partner_Arr_Rel_Insert_Input = {
  data: Array<Rc_Partner_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Partner_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rc_partner". All fields are combined with a logical 'AND'. */
export type Rc_Partner_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Partner_Bool_Exp>>;
  _not?: InputMaybe<Rc_Partner_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Partner_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_rentals?: InputMaybe<Rc_Rental_Bool_Exp>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_partner" */
export enum Rc_Partner_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcPartnerPkey = 'rc_partner_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Partner_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Partner_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Partner_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_partner" */
export type Rc_Partner_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 업체명 */
  name?: InputMaybe<Scalars['String']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_rentals?: InputMaybe<Rc_Rental_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Partner_Max_Fields = {
  __typename?: 'rc_partner_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 업체명 */
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_partner" */
export type Rc_Partner_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 업체명 */
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Partner_Min_Fields = {
  __typename?: 'rc_partner_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 업체명 */
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_partner" */
export type Rc_Partner_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 업체명 */
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_partner" */
export type Rc_Partner_Mutation_Response = {
  __typename?: 'rc_partner_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Partner>;
};

/** input type for inserting object relation for remote table "rc_partner" */
export type Rc_Partner_Obj_Rel_Insert_Input = {
  data: Rc_Partner_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Partner_On_Conflict>;
};

/** on_conflict condition type for table "rc_partner" */
export type Rc_Partner_On_Conflict = {
  constraint: Rc_Partner_Constraint;
  update_columns?: Array<Rc_Partner_Update_Column>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_partner". */
export type Rc_Partner_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_partner */
export type Rc_Partner_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Partner_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_partner" */
export enum Rc_Partner_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_partner" */
export type Rc_Partner_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 업체명 */
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rc_partner" */
export type Rc_Partner_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Partner_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Partner_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 업체명 */
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_partner" */
export enum Rc_Partner_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Partner_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Partner_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Partner_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Partner_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Partner_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Partner_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Partner_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Partner_Bool_Exp;
};

/** 렌터카 견적서 */
export type Rc_Quotation = {
  __typename?: 'rc_quotation';
  /** 고객명 */
  client_name: Scalars['String']['output'];
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['uuid']['output'];
  /** 견적일 */
  issued_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  rc_company: Rc_Company;
  /** An object relationship */
  rc_staff: Rc_Staff;
  staff_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 렌터카 견적서 */
export type Rc_QuotationDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rc_quotation" */
export type Rc_Quotation_Aggregate = {
  __typename?: 'rc_quotation_aggregate';
  aggregate?: Maybe<Rc_Quotation_Aggregate_Fields>;
  nodes: Array<Rc_Quotation>;
};

export type Rc_Quotation_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Quotation_Aggregate_Bool_Exp_Count>;
};

export type Rc_Quotation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Quotation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_quotation" */
export type Rc_Quotation_Aggregate_Fields = {
  __typename?: 'rc_quotation_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Quotation_Max_Fields>;
  min?: Maybe<Rc_Quotation_Min_Fields>;
};


/** aggregate fields of "rc_quotation" */
export type Rc_Quotation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_quotation" */
export type Rc_Quotation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Quotation_Max_Order_By>;
  min?: InputMaybe<Rc_Quotation_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Quotation_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_quotation" */
export type Rc_Quotation_Arr_Rel_Insert_Input = {
  data: Array<Rc_Quotation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Quotation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rc_quotation". All fields are combined with a logical 'AND'. */
export type Rc_Quotation_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Quotation_Bool_Exp>>;
  _not?: InputMaybe<Rc_Quotation_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Quotation_Bool_Exp>>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issued_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_staff?: InputMaybe<Rc_Staff_Bool_Exp>;
  staff_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_quotation" */
export enum Rc_Quotation_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcQuotationPkey = 'rc_quotation_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Quotation_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Quotation_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Quotation_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_quotation" */
export type Rc_Quotation_Insert_Input = {
  /** 고객명 */
  client_name?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 견적일 */
  issued_at?: InputMaybe<Scalars['timestamptz']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_staff?: InputMaybe<Rc_Staff_Obj_Rel_Insert_Input>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Quotation_Max_Fields = {
  __typename?: 'rc_quotation_max_fields';
  /** 고객명 */
  client_name?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 견적일 */
  issued_at?: Maybe<Scalars['timestamptz']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_quotation" */
export type Rc_Quotation_Max_Order_By = {
  /** 고객명 */
  client_name?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 견적일 */
  issued_at?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Quotation_Min_Fields = {
  __typename?: 'rc_quotation_min_fields';
  /** 고객명 */
  client_name?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 견적일 */
  issued_at?: Maybe<Scalars['timestamptz']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_quotation" */
export type Rc_Quotation_Min_Order_By = {
  /** 고객명 */
  client_name?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 견적일 */
  issued_at?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_quotation" */
export type Rc_Quotation_Mutation_Response = {
  __typename?: 'rc_quotation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Quotation>;
};

/** on_conflict condition type for table "rc_quotation" */
export type Rc_Quotation_On_Conflict = {
  constraint: Rc_Quotation_Constraint;
  update_columns?: Array<Rc_Quotation_Update_Column>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_quotation". */
export type Rc_Quotation_Order_By = {
  client_name?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issued_at?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_staff?: InputMaybe<Rc_Staff_Order_By>;
  staff_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_quotation */
export type Rc_Quotation_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Quotation_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_quotation" */
export enum Rc_Quotation_Select_Column {
  /** column name */
  ClientName = 'client_name',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IssuedAt = 'issued_at',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_quotation" */
export type Rc_Quotation_Set_Input = {
  /** 고객명 */
  client_name?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 견적일 */
  issued_at?: InputMaybe<Scalars['timestamptz']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rc_quotation" */
export type Rc_Quotation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Quotation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Quotation_Stream_Cursor_Value_Input = {
  /** 고객명 */
  client_name?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 견적일 */
  issued_at?: InputMaybe<Scalars['timestamptz']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_quotation" */
export enum Rc_Quotation_Update_Column {
  /** column name */
  ClientName = 'client_name',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IssuedAt = 'issued_at',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Quotation_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Quotation_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Quotation_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Quotation_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Quotation_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Quotation_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Quotation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Quotation_Bool_Exp;
};

/** 렌터카 대여정보 */
export type Rc_Rental = {
  __typename?: 'rc_rental';
  /** 보험대차 데이터 */
  accident_data?: Maybe<Scalars['jsonb']['output']>;
  /** 대여 시작일 */
  begin_date?: Maybe<Scalars['timestamptz']['output']>;
  car_id?: Maybe<Scalars['uuid']['output']>;
  /** 운전자 ID */
  client_id?: Maybe<Scalars['uuid']['output']>;
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 대여 종료일 */
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** 보험정보 데이터 */
  insurance_data?: Maybe<Scalars['jsonb']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  /** 결제정보 데이터 */
  payment_data?: Maybe<Scalars['jsonb']['output']>;
  public_contract_data?: Maybe<Scalars['jsonb']['output']>;
  public_data?: Maybe<Scalars['jsonb']['output']>;
  public_partner_data?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  rc_car?: Maybe<Rc_Car>;
  /** An object relationship */
  rc_client?: Maybe<Rc_Client>;
  /** An object relationship */
  rc_company: Rc_Company;
  /** An array relationship */
  rc_consignments: Array<Rc_Consignment>;
  /** An aggregate relationship */
  rc_consignments_aggregate: Rc_Consignment_Aggregate;
  /** An object relationship */
  rc_partner?: Maybe<Rc_Partner>;
  /** An array relationship */
  rc_rental_attachments: Array<Rc_Rental_Attachments>;
  /** An aggregate relationship */
  rc_rental_attachments_aggregate: Rc_Rental_Attachments_Aggregate;
  /** An object relationship */
  rc_second_client?: Maybe<Rc_Client>;
  /** An array relationship */
  rc_settlements: Array<Rc_Settlement>;
  /** An aggregate relationship */
  rc_settlements_aggregate: Rc_Settlement_Aggregate;
  /** An object relationship */
  rc_staff?: Maybe<Rc_Staff>;
  /** 제2운전자 ID */
  second_client_id?: Maybe<Scalars['uuid']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  /** 대여 상태 */
  status?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 렌터카 대여정보 */
export type Rc_RentalAccident_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 대여정보 */
export type Rc_RentalDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 대여정보 */
export type Rc_RentalInsurance_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 대여정보 */
export type Rc_RentalPayment_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 대여정보 */
export type Rc_RentalPublic_Contract_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 대여정보 */
export type Rc_RentalPublic_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 대여정보 */
export type Rc_RentalPublic_Partner_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 대여정보 */
export type Rc_RentalRc_ConsignmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


/** 렌터카 대여정보 */
export type Rc_RentalRc_Consignments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


/** 렌터카 대여정보 */
export type Rc_RentalRc_Rental_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};


/** 렌터카 대여정보 */
export type Rc_RentalRc_Rental_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};


/** 렌터카 대여정보 */
export type Rc_RentalRc_SettlementsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


/** 렌터카 대여정보 */
export type Rc_RentalRc_Settlements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};

/** aggregated selection of "rc_rental" */
export type Rc_Rental_Aggregate = {
  __typename?: 'rc_rental_aggregate';
  aggregate?: Maybe<Rc_Rental_Aggregate_Fields>;
  nodes: Array<Rc_Rental>;
};

export type Rc_Rental_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Rental_Aggregate_Bool_Exp_Count>;
};

export type Rc_Rental_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Rental_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_rental" */
export type Rc_Rental_Aggregate_Fields = {
  __typename?: 'rc_rental_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Rental_Max_Fields>;
  min?: Maybe<Rc_Rental_Min_Fields>;
};


/** aggregate fields of "rc_rental" */
export type Rc_Rental_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_rental" */
export type Rc_Rental_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Rental_Max_Order_By>;
  min?: InputMaybe<Rc_Rental_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Rental_Append_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Scalars['jsonb']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_contract_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_partner_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_rental" */
export type Rc_Rental_Arr_Rel_Insert_Input = {
  data: Array<Rc_Rental_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Rental_On_Conflict>;
};

/** 렌터카 대여 첨부파일 */
export type Rc_Rental_Attachments = {
  __typename?: 'rc_rental_attachments';
  /** 파일타입 */
  content_type: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** 파일키 */
  key: Scalars['String']['output'];
  /** 파일라벨 */
  label: Scalars['String']['output'];
  /** 원본 파일명 */
  origin_name: Scalars['String']['output'];
  /** An object relationship */
  rc_rental: Rc_Rental;
  /** 파일영역 */
  realm: Scalars['String']['output'];
  rental_id: Scalars['uuid']['output'];
  /** 파일크기 */
  size: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "rc_rental_attachments" */
export type Rc_Rental_Attachments_Aggregate = {
  __typename?: 'rc_rental_attachments_aggregate';
  aggregate?: Maybe<Rc_Rental_Attachments_Aggregate_Fields>;
  nodes: Array<Rc_Rental_Attachments>;
};

export type Rc_Rental_Attachments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Rental_Attachments_Aggregate_Bool_Exp_Count>;
};

export type Rc_Rental_Attachments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_rental_attachments" */
export type Rc_Rental_Attachments_Aggregate_Fields = {
  __typename?: 'rc_rental_attachments_aggregate_fields';
  avg?: Maybe<Rc_Rental_Attachments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Rental_Attachments_Max_Fields>;
  min?: Maybe<Rc_Rental_Attachments_Min_Fields>;
  stddev?: Maybe<Rc_Rental_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Rental_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Rental_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Rental_Attachments_Sum_Fields>;
  var_pop?: Maybe<Rc_Rental_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Rental_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Rc_Rental_Attachments_Variance_Fields>;
};


/** aggregate fields of "rc_rental_attachments" */
export type Rc_Rental_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Aggregate_Order_By = {
  avg?: InputMaybe<Rc_Rental_Attachments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Rental_Attachments_Max_Order_By>;
  min?: InputMaybe<Rc_Rental_Attachments_Min_Order_By>;
  stddev?: InputMaybe<Rc_Rental_Attachments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rc_Rental_Attachments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rc_Rental_Attachments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rc_Rental_Attachments_Sum_Order_By>;
  var_pop?: InputMaybe<Rc_Rental_Attachments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rc_Rental_Attachments_Var_Samp_Order_By>;
  variance?: InputMaybe<Rc_Rental_Attachments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Rc_Rental_Attachments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Rental_Attachments_On_Conflict>;
};

/** aggregate avg on columns */
export type Rc_Rental_Attachments_Avg_Fields = {
  __typename?: 'rc_rental_attachments_avg_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Avg_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_rental_attachments". All fields are combined with a logical 'AND'. */
export type Rc_Rental_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Rental_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Rental_Attachments_Bool_Exp>>;
  content_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  origin_name?: InputMaybe<String_Comparison_Exp>;
  rc_rental?: InputMaybe<Rc_Rental_Bool_Exp>;
  realm?: InputMaybe<String_Comparison_Exp>;
  rental_id?: InputMaybe<Uuid_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_rental_attachments" */
export enum Rc_Rental_Attachments_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcRentalAttachmentsPkey = 'rc_rental_attachments_pkey'
}

/** input type for incrementing numeric columns in table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Inc_Input = {
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Insert_Input = {
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  rc_rental?: InputMaybe<Rc_Rental_Obj_Rel_Insert_Input>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Rental_Attachments_Max_Fields = {
  __typename?: 'rc_rental_attachments_max_fields';
  /** 파일타입 */
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 파일키 */
  key?: Maybe<Scalars['String']['output']>;
  /** 파일라벨 */
  label?: Maybe<Scalars['String']['output']>;
  /** 원본 파일명 */
  origin_name?: Maybe<Scalars['String']['output']>;
  /** 파일영역 */
  realm?: Maybe<Scalars['String']['output']>;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Max_Order_By = {
  /** 파일타입 */
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 파일키 */
  key?: InputMaybe<Order_By>;
  /** 파일라벨 */
  label?: InputMaybe<Order_By>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Order_By>;
  /** 파일영역 */
  realm?: InputMaybe<Order_By>;
  rental_id?: InputMaybe<Order_By>;
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Rental_Attachments_Min_Fields = {
  __typename?: 'rc_rental_attachments_min_fields';
  /** 파일타입 */
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 파일키 */
  key?: Maybe<Scalars['String']['output']>;
  /** 파일라벨 */
  label?: Maybe<Scalars['String']['output']>;
  /** 원본 파일명 */
  origin_name?: Maybe<Scalars['String']['output']>;
  /** 파일영역 */
  realm?: Maybe<Scalars['String']['output']>;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Min_Order_By = {
  /** 파일타입 */
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 파일키 */
  key?: InputMaybe<Order_By>;
  /** 파일라벨 */
  label?: InputMaybe<Order_By>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Order_By>;
  /** 파일영역 */
  realm?: InputMaybe<Order_By>;
  rental_id?: InputMaybe<Order_By>;
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Mutation_Response = {
  __typename?: 'rc_rental_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Rental_Attachments>;
};

/** on_conflict condition type for table "rc_rental_attachments" */
export type Rc_Rental_Attachments_On_Conflict = {
  constraint: Rc_Rental_Attachments_Constraint;
  update_columns?: Array<Rc_Rental_Attachments_Update_Column>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_rental_attachments". */
export type Rc_Rental_Attachments_Order_By = {
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  origin_name?: InputMaybe<Order_By>;
  rc_rental?: InputMaybe<Rc_Rental_Order_By>;
  realm?: InputMaybe<Order_By>;
  rental_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_rental_attachments */
export type Rc_Rental_Attachments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rc_rental_attachments" */
export enum Rc_Rental_Attachments_Select_Column {
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  RentalId = 'rental_id',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Set_Input = {
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Rc_Rental_Attachments_Stddev_Fields = {
  __typename?: 'rc_rental_attachments_stddev_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Stddev_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rc_Rental_Attachments_Stddev_Pop_Fields = {
  __typename?: 'rc_rental_attachments_stddev_pop_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Stddev_Pop_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rc_Rental_Attachments_Stddev_Samp_Fields = {
  __typename?: 'rc_rental_attachments_stddev_samp_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Stddev_Samp_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Rental_Attachments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Rental_Attachments_Stream_Cursor_Value_Input = {
  /** 파일타입 */
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일키 */
  key?: InputMaybe<Scalars['String']['input']>;
  /** 파일라벨 */
  label?: InputMaybe<Scalars['String']['input']>;
  /** 원본 파일명 */
  origin_name?: InputMaybe<Scalars['String']['input']>;
  /** 파일영역 */
  realm?: InputMaybe<Scalars['String']['input']>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 파일크기 */
  size?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Rc_Rental_Attachments_Sum_Fields = {
  __typename?: 'rc_rental_attachments_sum_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Sum_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** update columns of table "rc_rental_attachments" */
export enum Rc_Rental_Attachments_Update_Column {
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  OriginName = 'origin_name',
  /** column name */
  Realm = 'realm',
  /** column name */
  RentalId = 'rental_id',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Rental_Attachments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rc_Rental_Attachments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Rental_Attachments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Rental_Attachments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rc_Rental_Attachments_Var_Pop_Fields = {
  __typename?: 'rc_rental_attachments_var_pop_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Var_Pop_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rc_Rental_Attachments_Var_Samp_Fields = {
  __typename?: 'rc_rental_attachments_var_samp_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Var_Samp_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rc_Rental_Attachments_Variance_Fields = {
  __typename?: 'rc_rental_attachments_variance_fields';
  /** 파일크기 */
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rc_rental_attachments" */
export type Rc_Rental_Attachments_Variance_Order_By = {
  /** 파일크기 */
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rc_rental". All fields are combined with a logical 'AND'. */
export type Rc_Rental_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Rental_Bool_Exp>>;
  _not?: InputMaybe<Rc_Rental_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Rental_Bool_Exp>>;
  accident_data?: InputMaybe<Jsonb_Comparison_Exp>;
  begin_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  car_id?: InputMaybe<Uuid_Comparison_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  insurance_data?: InputMaybe<Jsonb_Comparison_Exp>;
  partner_id?: InputMaybe<Uuid_Comparison_Exp>;
  payment_data?: InputMaybe<Jsonb_Comparison_Exp>;
  public_contract_data?: InputMaybe<Jsonb_Comparison_Exp>;
  public_data?: InputMaybe<Jsonb_Comparison_Exp>;
  public_partner_data?: InputMaybe<Jsonb_Comparison_Exp>;
  rc_car?: InputMaybe<Rc_Car_Bool_Exp>;
  rc_client?: InputMaybe<Rc_Client_Bool_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_consignments?: InputMaybe<Rc_Consignment_Bool_Exp>;
  rc_consignments_aggregate?: InputMaybe<Rc_Consignment_Aggregate_Bool_Exp>;
  rc_partner?: InputMaybe<Rc_Partner_Bool_Exp>;
  rc_rental_attachments?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
  rc_rental_attachments_aggregate?: InputMaybe<Rc_Rental_Attachments_Aggregate_Bool_Exp>;
  rc_second_client?: InputMaybe<Rc_Client_Bool_Exp>;
  rc_settlements?: InputMaybe<Rc_Settlement_Bool_Exp>;
  rc_settlements_aggregate?: InputMaybe<Rc_Settlement_Aggregate_Bool_Exp>;
  rc_staff?: InputMaybe<Rc_Staff_Bool_Exp>;
  second_client_id?: InputMaybe<Uuid_Comparison_Exp>;
  staff_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_rental" */
export enum Rc_Rental_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcRentalPkey = 'rc_rental_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Rental_Delete_At_Path_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Array<Scalars['String']['input']>>;
  public_contract_data?: InputMaybe<Array<Scalars['String']['input']>>;
  public_data?: InputMaybe<Array<Scalars['String']['input']>>;
  public_partner_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Rental_Delete_Elem_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Scalars['Int']['input']>;
  data?: InputMaybe<Scalars['Int']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['Int']['input']>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Scalars['Int']['input']>;
  public_contract_data?: InputMaybe<Scalars['Int']['input']>;
  public_data?: InputMaybe<Scalars['Int']['input']>;
  public_partner_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Rental_Delete_Key_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['String']['input']>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Scalars['String']['input']>;
  public_contract_data?: InputMaybe<Scalars['String']['input']>;
  public_data?: InputMaybe<Scalars['String']['input']>;
  public_partner_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_rental" */
export type Rc_Rental_Insert_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 대여 시작일 */
  begin_date?: InputMaybe<Scalars['timestamptz']['input']>;
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 운전자 ID */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 대여 종료일 */
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_contract_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_partner_data?: InputMaybe<Scalars['jsonb']['input']>;
  rc_car?: InputMaybe<Rc_Car_Obj_Rel_Insert_Input>;
  rc_client?: InputMaybe<Rc_Client_Obj_Rel_Insert_Input>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_consignments?: InputMaybe<Rc_Consignment_Arr_Rel_Insert_Input>;
  rc_partner?: InputMaybe<Rc_Partner_Obj_Rel_Insert_Input>;
  rc_rental_attachments?: InputMaybe<Rc_Rental_Attachments_Arr_Rel_Insert_Input>;
  rc_second_client?: InputMaybe<Rc_Client_Obj_Rel_Insert_Input>;
  rc_settlements?: InputMaybe<Rc_Settlement_Arr_Rel_Insert_Input>;
  rc_staff?: InputMaybe<Rc_Staff_Obj_Rel_Insert_Input>;
  /** 제2운전자 ID */
  second_client_id?: InputMaybe<Scalars['uuid']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 대여 상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Rental_Max_Fields = {
  __typename?: 'rc_rental_max_fields';
  /** 대여 시작일 */
  begin_date?: Maybe<Scalars['timestamptz']['output']>;
  car_id?: Maybe<Scalars['uuid']['output']>;
  /** 운전자 ID */
  client_id?: Maybe<Scalars['uuid']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 대여 종료일 */
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  /** 제2운전자 ID */
  second_client_id?: Maybe<Scalars['uuid']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  /** 대여 상태 */
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_rental" */
export type Rc_Rental_Max_Order_By = {
  /** 대여 시작일 */
  begin_date?: InputMaybe<Order_By>;
  car_id?: InputMaybe<Order_By>;
  /** 운전자 ID */
  client_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 대여 종료일 */
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  /** 제2운전자 ID */
  second_client_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  /** 대여 상태 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Rental_Min_Fields = {
  __typename?: 'rc_rental_min_fields';
  /** 대여 시작일 */
  begin_date?: Maybe<Scalars['timestamptz']['output']>;
  car_id?: Maybe<Scalars['uuid']['output']>;
  /** 운전자 ID */
  client_id?: Maybe<Scalars['uuid']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 대여 종료일 */
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  /** 제2운전자 ID */
  second_client_id?: Maybe<Scalars['uuid']['output']>;
  staff_id?: Maybe<Scalars['uuid']['output']>;
  /** 대여 상태 */
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_rental" */
export type Rc_Rental_Min_Order_By = {
  /** 대여 시작일 */
  begin_date?: InputMaybe<Order_By>;
  car_id?: InputMaybe<Order_By>;
  /** 운전자 ID */
  client_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  /** 대여 종료일 */
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  /** 제2운전자 ID */
  second_client_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  /** 대여 상태 */
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_rental" */
export type Rc_Rental_Mutation_Response = {
  __typename?: 'rc_rental_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Rental>;
};

/** input type for inserting object relation for remote table "rc_rental" */
export type Rc_Rental_Obj_Rel_Insert_Input = {
  data: Rc_Rental_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Rental_On_Conflict>;
};

/** on_conflict condition type for table "rc_rental" */
export type Rc_Rental_On_Conflict = {
  constraint: Rc_Rental_Constraint;
  update_columns?: Array<Rc_Rental_Update_Column>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_rental". */
export type Rc_Rental_Order_By = {
  accident_data?: InputMaybe<Order_By>;
  begin_date?: InputMaybe<Order_By>;
  car_id?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  insurance_data?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  payment_data?: InputMaybe<Order_By>;
  public_contract_data?: InputMaybe<Order_By>;
  public_data?: InputMaybe<Order_By>;
  public_partner_data?: InputMaybe<Order_By>;
  rc_car?: InputMaybe<Rc_Car_Order_By>;
  rc_client?: InputMaybe<Rc_Client_Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_consignments_aggregate?: InputMaybe<Rc_Consignment_Aggregate_Order_By>;
  rc_partner?: InputMaybe<Rc_Partner_Order_By>;
  rc_rental_attachments_aggregate?: InputMaybe<Rc_Rental_Attachments_Aggregate_Order_By>;
  rc_second_client?: InputMaybe<Rc_Client_Order_By>;
  rc_settlements_aggregate?: InputMaybe<Rc_Settlement_Aggregate_Order_By>;
  rc_staff?: InputMaybe<Rc_Staff_Order_By>;
  second_client_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_rental */
export type Rc_Rental_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Rental_Prepend_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Scalars['jsonb']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_contract_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_partner_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_rental" */
export enum Rc_Rental_Select_Column {
  /** column name */
  AccidentData = 'accident_data',
  /** column name */
  BeginDate = 'begin_date',
  /** column name */
  CarId = 'car_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceData = 'insurance_data',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  PaymentData = 'payment_data',
  /** column name */
  PublicContractData = 'public_contract_data',
  /** column name */
  PublicData = 'public_data',
  /** column name */
  PublicPartnerData = 'public_partner_data',
  /** column name */
  SecondClientId = 'second_client_id',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_rental" */
export type Rc_Rental_Set_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 대여 시작일 */
  begin_date?: InputMaybe<Scalars['timestamptz']['input']>;
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 운전자 ID */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 대여 종료일 */
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_contract_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_partner_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 제2운전자 ID */
  second_client_id?: InputMaybe<Scalars['uuid']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 대여 상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "rc_rental_status_counting" */
export type Rc_Rental_Status_Counting = {
  __typename?: 'rc_rental_status_counting';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "rc_rental_status_counting" */
export type Rc_Rental_Status_Counting_Aggregate = {
  __typename?: 'rc_rental_status_counting_aggregate';
  aggregate?: Maybe<Rc_Rental_Status_Counting_Aggregate_Fields>;
  nodes: Array<Rc_Rental_Status_Counting>;
};

/** aggregate fields of "rc_rental_status_counting" */
export type Rc_Rental_Status_Counting_Aggregate_Fields = {
  __typename?: 'rc_rental_status_counting_aggregate_fields';
  avg?: Maybe<Rc_Rental_Status_Counting_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Rental_Status_Counting_Max_Fields>;
  min?: Maybe<Rc_Rental_Status_Counting_Min_Fields>;
  stddev?: Maybe<Rc_Rental_Status_Counting_Stddev_Fields>;
  stddev_pop?: Maybe<Rc_Rental_Status_Counting_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rc_Rental_Status_Counting_Stddev_Samp_Fields>;
  sum?: Maybe<Rc_Rental_Status_Counting_Sum_Fields>;
  var_pop?: Maybe<Rc_Rental_Status_Counting_Var_Pop_Fields>;
  var_samp?: Maybe<Rc_Rental_Status_Counting_Var_Samp_Fields>;
  variance?: Maybe<Rc_Rental_Status_Counting_Variance_Fields>;
};


/** aggregate fields of "rc_rental_status_counting" */
export type Rc_Rental_Status_Counting_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Rental_Status_Counting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Rc_Rental_Status_Counting_Avg_Fields = {
  __typename?: 'rc_rental_status_counting_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "rc_rental_status_counting". All fields are combined with a logical 'AND'. */
export type Rc_Rental_Status_Counting_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Rental_Status_Counting_Bool_Exp>>;
  _not?: InputMaybe<Rc_Rental_Status_Counting_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Rental_Status_Counting_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Rc_Rental_Status_Counting_Max_Fields = {
  __typename?: 'rc_rental_status_counting_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Rc_Rental_Status_Counting_Min_Fields = {
  __typename?: 'rc_rental_status_counting_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "rc_rental_status_counting". */
export type Rc_Rental_Status_Counting_Order_By = {
  company_id?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "rc_rental_status_counting" */
export enum Rc_Rental_Status_Counting_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Count = 'count',
  /** column name */
  Status = 'status'
}

/** aggregate stddev on columns */
export type Rc_Rental_Status_Counting_Stddev_Fields = {
  __typename?: 'rc_rental_status_counting_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Rc_Rental_Status_Counting_Stddev_Pop_Fields = {
  __typename?: 'rc_rental_status_counting_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Rc_Rental_Status_Counting_Stddev_Samp_Fields = {
  __typename?: 'rc_rental_status_counting_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "rc_rental_status_counting" */
export type Rc_Rental_Status_Counting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Rental_Status_Counting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Rental_Status_Counting_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  count?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Rc_Rental_Status_Counting_Sum_Fields = {
  __typename?: 'rc_rental_status_counting_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Rc_Rental_Status_Counting_Var_Pop_Fields = {
  __typename?: 'rc_rental_status_counting_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Rc_Rental_Status_Counting_Var_Samp_Fields = {
  __typename?: 'rc_rental_status_counting_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Rc_Rental_Status_Counting_Variance_Fields = {
  __typename?: 'rc_rental_status_counting_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "rc_rental" */
export type Rc_Rental_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Rental_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Rental_Stream_Cursor_Value_Input = {
  /** 보험대차 데이터 */
  accident_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 대여 시작일 */
  begin_date?: InputMaybe<Scalars['timestamptz']['input']>;
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 운전자 ID */
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 대여 종료일 */
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 보험정보 데이터 */
  insurance_data?: InputMaybe<Scalars['jsonb']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 결제정보 데이터 */
  payment_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_contract_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_data?: InputMaybe<Scalars['jsonb']['input']>;
  public_partner_data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 제2운전자 ID */
  second_client_id?: InputMaybe<Scalars['uuid']['input']>;
  staff_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 대여 상태 */
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_rental" */
export enum Rc_Rental_Update_Column {
  /** column name */
  AccidentData = 'accident_data',
  /** column name */
  BeginDate = 'begin_date',
  /** column name */
  CarId = 'car_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceData = 'insurance_data',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  PaymentData = 'payment_data',
  /** column name */
  PublicContractData = 'public_contract_data',
  /** column name */
  PublicData = 'public_data',
  /** column name */
  PublicPartnerData = 'public_partner_data',
  /** column name */
  SecondClientId = 'second_client_id',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Rental_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Rental_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Rental_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Rental_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Rental_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Rental_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Rental_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Rental_Bool_Exp;
};

/** 정산 */
export type Rc_Settlement = {
  __typename?: 'rc_settlement';
  car_id?: Maybe<Scalars['uuid']['output']>;
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data: Scalars['jsonb']['output'];
  date?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  rc_car?: Maybe<Rc_Car>;
  /** An object relationship */
  rc_company: Rc_Company;
  /** An object relationship */
  rc_rental?: Maybe<Rc_Rental>;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 정산 */
export type Rc_SettlementDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rc_settlement" */
export type Rc_Settlement_Aggregate = {
  __typename?: 'rc_settlement_aggregate';
  aggregate?: Maybe<Rc_Settlement_Aggregate_Fields>;
  nodes: Array<Rc_Settlement>;
};

export type Rc_Settlement_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Settlement_Aggregate_Bool_Exp_Count>;
};

export type Rc_Settlement_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Settlement_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_settlement" */
export type Rc_Settlement_Aggregate_Fields = {
  __typename?: 'rc_settlement_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Settlement_Max_Fields>;
  min?: Maybe<Rc_Settlement_Min_Fields>;
};


/** aggregate fields of "rc_settlement" */
export type Rc_Settlement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_settlement" */
export type Rc_Settlement_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Settlement_Max_Order_By>;
  min?: InputMaybe<Rc_Settlement_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Settlement_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_settlement" */
export type Rc_Settlement_Arr_Rel_Insert_Input = {
  data: Array<Rc_Settlement_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Settlement_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rc_settlement". All fields are combined with a logical 'AND'. */
export type Rc_Settlement_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Settlement_Bool_Exp>>;
  _not?: InputMaybe<Rc_Settlement_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Settlement_Bool_Exp>>;
  car_id?: InputMaybe<Uuid_Comparison_Exp>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rc_car?: InputMaybe<Rc_Car_Bool_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_rental?: InputMaybe<Rc_Rental_Bool_Exp>;
  rental_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_settlement" */
export enum Rc_Settlement_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcSettlementPkey = 'rc_settlement_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Settlement_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Settlement_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Settlement_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_settlement" */
export type Rc_Settlement_Insert_Input = {
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rc_car?: InputMaybe<Rc_Car_Obj_Rel_Insert_Input>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_rental?: InputMaybe<Rc_Rental_Obj_Rel_Insert_Input>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rc_Settlement_Max_Fields = {
  __typename?: 'rc_settlement_max_fields';
  car_id?: Maybe<Scalars['uuid']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "rc_settlement" */
export type Rc_Settlement_Max_Order_By = {
  car_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Settlement_Min_Fields = {
  __typename?: 'rc_settlement_min_fields';
  car_id?: Maybe<Scalars['uuid']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rental_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "rc_settlement" */
export type Rc_Settlement_Min_Order_By = {
  car_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rental_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_settlement" */
export type Rc_Settlement_Mutation_Response = {
  __typename?: 'rc_settlement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Settlement>;
};

/** on_conflict condition type for table "rc_settlement" */
export type Rc_Settlement_On_Conflict = {
  constraint: Rc_Settlement_Constraint;
  update_columns?: Array<Rc_Settlement_Update_Column>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_settlement". */
export type Rc_Settlement_Order_By = {
  car_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rc_car?: InputMaybe<Rc_Car_Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_rental?: InputMaybe<Rc_Rental_Order_By>;
  rental_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_settlement */
export type Rc_Settlement_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Settlement_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_settlement" */
export enum Rc_Settlement_Select_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  RentalId = 'rental_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rc_settlement" */
export type Rc_Settlement_Set_Input = {
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rc_settlement" */
export type Rc_Settlement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Settlement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Settlement_Stream_Cursor_Value_Input = {
  car_id?: InputMaybe<Scalars['uuid']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rental_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rc_settlement" */
export enum Rc_Settlement_Update_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  RentalId = 'rental_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rc_Settlement_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Settlement_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Settlement_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Settlement_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Settlement_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Settlement_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Settlement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Settlement_Bool_Exp;
};

/** 렌터카 직원 */
export type Rc_Staff = {
  __typename?: 'rc_staff';
  company_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  rc_company: Rc_Company;
  /** An array relationship */
  rc_consignments: Array<Rc_Consignment>;
  /** An aggregate relationship */
  rc_consignments_aggregate: Rc_Consignment_Aggregate;
  /** An array relationship */
  rc_notifications: Array<Rc_Notification>;
  /** An aggregate relationship */
  rc_notifications_aggregate: Rc_Notification_Aggregate;
  /** An array relationship */
  rc_quotations: Array<Rc_Quotation>;
  /** An aggregate relationship */
  rc_quotations_aggregate: Rc_Quotation_Aggregate;
  /** An array relationship */
  rc_rentals: Array<Rc_Rental>;
  /** An aggregate relationship */
  rc_rentals_aggregate: Rc_Rental_Aggregate;
  /** 권한 */
  role: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid']['output'];
};


/** 렌터카 직원 */
export type Rc_StaffDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_ConsignmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_Consignments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_QuotationsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_Quotations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_RentalsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


/** 렌터카 직원 */
export type Rc_StaffRc_Rentals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};

/** aggregated selection of "rc_staff" */
export type Rc_Staff_Aggregate = {
  __typename?: 'rc_staff_aggregate';
  aggregate?: Maybe<Rc_Staff_Aggregate_Fields>;
  nodes: Array<Rc_Staff>;
};

export type Rc_Staff_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rc_Staff_Aggregate_Bool_Exp_Count>;
};

export type Rc_Staff_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rc_Staff_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rc_staff" */
export type Rc_Staff_Aggregate_Fields = {
  __typename?: 'rc_staff_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rc_Staff_Max_Fields>;
  min?: Maybe<Rc_Staff_Min_Fields>;
};


/** aggregate fields of "rc_staff" */
export type Rc_Staff_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rc_staff" */
export type Rc_Staff_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rc_Staff_Max_Order_By>;
  min?: InputMaybe<Rc_Staff_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rc_Staff_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rc_staff" */
export type Rc_Staff_Arr_Rel_Insert_Input = {
  data: Array<Rc_Staff_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Staff_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rc_staff". All fields are combined with a logical 'AND'. */
export type Rc_Staff_Bool_Exp = {
  _and?: InputMaybe<Array<Rc_Staff_Bool_Exp>>;
  _not?: InputMaybe<Rc_Staff_Bool_Exp>;
  _or?: InputMaybe<Array<Rc_Staff_Bool_Exp>>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rc_company?: InputMaybe<Rc_Company_Bool_Exp>;
  rc_consignments?: InputMaybe<Rc_Consignment_Bool_Exp>;
  rc_consignments_aggregate?: InputMaybe<Rc_Consignment_Aggregate_Bool_Exp>;
  rc_notifications?: InputMaybe<Rc_Notification_Bool_Exp>;
  rc_notifications_aggregate?: InputMaybe<Rc_Notification_Aggregate_Bool_Exp>;
  rc_quotations?: InputMaybe<Rc_Quotation_Bool_Exp>;
  rc_quotations_aggregate?: InputMaybe<Rc_Quotation_Aggregate_Bool_Exp>;
  rc_rentals?: InputMaybe<Rc_Rental_Bool_Exp>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "rc_staff" */
export enum Rc_Staff_Constraint {
  /** unique or primary key constraint on columns "id" */
  RcStaffPkey = 'rc_staff_pkey',
  /** unique or primary key constraint on columns "user_id", "company_id" */
  RcStaffUserIdCompanyIdKey = 'rc_staff_user_id_company_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rc_Staff_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rc_Staff_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rc_Staff_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "rc_staff" */
export type Rc_Staff_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rc_company?: InputMaybe<Rc_Company_Obj_Rel_Insert_Input>;
  rc_consignments?: InputMaybe<Rc_Consignment_Arr_Rel_Insert_Input>;
  rc_notifications?: InputMaybe<Rc_Notification_Arr_Rel_Insert_Input>;
  rc_quotations?: InputMaybe<Rc_Quotation_Arr_Rel_Insert_Input>;
  rc_rentals?: InputMaybe<Rc_Rental_Arr_Rel_Insert_Input>;
  /** 권한 */
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Rc_Staff_Max_Fields = {
  __typename?: 'rc_staff_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 권한 */
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "rc_staff" */
export type Rc_Staff_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 권한 */
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rc_Staff_Min_Fields = {
  __typename?: 'rc_staff_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 권한 */
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "rc_staff" */
export type Rc_Staff_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 권한 */
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rc_staff" */
export type Rc_Staff_Mutation_Response = {
  __typename?: 'rc_staff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rc_Staff>;
};

/** input type for inserting object relation for remote table "rc_staff" */
export type Rc_Staff_Obj_Rel_Insert_Input = {
  data: Rc_Staff_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rc_Staff_On_Conflict>;
};

/** on_conflict condition type for table "rc_staff" */
export type Rc_Staff_On_Conflict = {
  constraint: Rc_Staff_Constraint;
  update_columns?: Array<Rc_Staff_Update_Column>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};

/** Ordering options when selecting data from "rc_staff". */
export type Rc_Staff_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rc_company?: InputMaybe<Rc_Company_Order_By>;
  rc_consignments_aggregate?: InputMaybe<Rc_Consignment_Aggregate_Order_By>;
  rc_notifications_aggregate?: InputMaybe<Rc_Notification_Aggregate_Order_By>;
  rc_quotations_aggregate?: InputMaybe<Rc_Quotation_Aggregate_Order_By>;
  rc_rentals_aggregate?: InputMaybe<Rc_Rental_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rc_staff */
export type Rc_Staff_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rc_Staff_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "rc_staff" */
export enum Rc_Staff_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "rc_staff" */
export type Rc_Staff_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 권한 */
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "rc_staff" */
export type Rc_Staff_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rc_Staff_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rc_Staff_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 권한 */
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "rc_staff" */
export enum Rc_Staff_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Rc_Staff_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rc_Staff_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rc_Staff_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rc_Staff_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rc_Staff_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rc_Staff_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rc_Staff_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rc_Staff_Bool_Exp;
};

export type Search_Rental_Args = {
  search_pattern?: InputMaybe<Scalars['String']['input']>;
};

/** 본인인증 로그 */
export type Self_Certification = {
  __typename?: 'self_certification';
  created_at: Scalars['timestamptz']['output'];
  data: Scalars['jsonb']['output'];
  id: Scalars['uuid']['output'];
  mdl_tkn: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 본인인증 로그 */
export type Self_CertificationDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "self_certification" */
export type Self_Certification_Aggregate = {
  __typename?: 'self_certification_aggregate';
  aggregate?: Maybe<Self_Certification_Aggregate_Fields>;
  nodes: Array<Self_Certification>;
};

/** aggregate fields of "self_certification" */
export type Self_Certification_Aggregate_Fields = {
  __typename?: 'self_certification_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Self_Certification_Max_Fields>;
  min?: Maybe<Self_Certification_Min_Fields>;
};


/** aggregate fields of "self_certification" */
export type Self_Certification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Self_Certification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Self_Certification_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "self_certification". All fields are combined with a logical 'AND'. */
export type Self_Certification_Bool_Exp = {
  _and?: InputMaybe<Array<Self_Certification_Bool_Exp>>;
  _not?: InputMaybe<Self_Certification_Bool_Exp>;
  _or?: InputMaybe<Array<Self_Certification_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mdl_tkn?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "self_certification" */
export enum Self_Certification_Constraint {
  /** unique or primary key constraint on columns "id" */
  SelfCertificationPkey = 'self_certification_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Self_Certification_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Self_Certification_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Self_Certification_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "self_certification" */
export type Self_Certification_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mdl_tkn?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Self_Certification_Max_Fields = {
  __typename?: 'self_certification_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mdl_tkn?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Self_Certification_Min_Fields = {
  __typename?: 'self_certification_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mdl_tkn?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "self_certification" */
export type Self_Certification_Mutation_Response = {
  __typename?: 'self_certification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Self_Certification>;
};

/** on_conflict condition type for table "self_certification" */
export type Self_Certification_On_Conflict = {
  constraint: Self_Certification_Constraint;
  update_columns?: Array<Self_Certification_Update_Column>;
  where?: InputMaybe<Self_Certification_Bool_Exp>;
};

/** Ordering options when selecting data from "self_certification". */
export type Self_Certification_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mdl_tkn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: self_certification */
export type Self_Certification_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Self_Certification_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "self_certification" */
export enum Self_Certification_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MdlTkn = 'mdl_tkn',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "self_certification" */
export type Self_Certification_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mdl_tkn?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "self_certification" */
export type Self_Certification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Self_Certification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Self_Certification_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mdl_tkn?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "self_certification" */
export enum Self_Certification_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MdlTkn = 'mdl_tkn',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Self_Certification_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Self_Certification_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Self_Certification_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Self_Certification_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Self_Certification_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Self_Certification_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Self_Certification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Self_Certification_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "car_info" */
  car_info: Array<Car_Info>;
  /** fetch aggregated fields from the table: "car_info" */
  car_info_aggregate: Car_Info_Aggregate;
  /** fetch data from the table: "car_info" using primary key columns */
  car_info_by_pk?: Maybe<Car_Info>;
  /** fetch data from the table: "car_info_detail" */
  car_info_detail: Array<Car_Info_Detail>;
  /** fetch aggregated fields from the table: "car_info_detail" */
  car_info_detail_aggregate: Car_Info_Detail_Aggregate;
  /** fetch data from the table: "car_info_detail" using primary key columns */
  car_info_detail_by_pk?: Maybe<Car_Info_Detail>;
  /** fetch data from the table in a streaming manner: "car_info_detail" */
  car_info_detail_stream: Array<Car_Info_Detail>;
  /** fetch data from the table in a streaming manner: "car_info" */
  car_info_stream: Array<Car_Info>;
  /** fetch data from the table: "fax_info" */
  fax_info: Array<Fax_Info>;
  /** fetch aggregated fields from the table: "fax_info" */
  fax_info_aggregate: Fax_Info_Aggregate;
  /** fetch data from the table: "fax_info" using primary key columns */
  fax_info_by_pk?: Maybe<Fax_Info>;
  /** fetch data from the table in a streaming manner: "fax_info" */
  fax_info_stream: Array<Fax_Info>;
  /** fetch data from the table: "gp_payment_history" */
  gp_payment_history: Array<Gp_Payment_History>;
  /** fetch aggregated fields from the table: "gp_payment_history" */
  gp_payment_history_aggregate: Gp_Payment_History_Aggregate;
  /** fetch data from the table: "gp_payment_history" using primary key columns */
  gp_payment_history_by_pk?: Maybe<Gp_Payment_History>;
  /** fetch data from the table in a streaming manner: "gp_payment_history" */
  gp_payment_history_stream: Array<Gp_Payment_History>;
  /** fetch data from the table: "mail_verification" */
  mail_verification: Array<Mail_Verification>;
  /** fetch aggregated fields from the table: "mail_verification" */
  mail_verification_aggregate: Mail_Verification_Aggregate;
  /** fetch data from the table: "mail_verification" using primary key columns */
  mail_verification_by_pk?: Maybe<Mail_Verification>;
  /** fetch data from the table in a streaming manner: "mail_verification" */
  mail_verification_stream: Array<Mail_Verification>;
  /** fetch data from the table: "penalty_info" */
  penalty_info: Array<Penalty_Info>;
  /** fetch aggregated fields from the table: "penalty_info" */
  penalty_info_aggregate: Penalty_Info_Aggregate;
  /** fetch data from the table: "penalty_info" using primary key columns */
  penalty_info_by_pk?: Maybe<Penalty_Info>;
  /** fetch data from the table in a streaming manner: "penalty_info" */
  penalty_info_stream: Array<Penalty_Info>;
  /** fetch data from the table: "rc_car" */
  rc_car: Array<Rc_Car>;
  /** fetch aggregated fields from the table: "rc_car" */
  rc_car_aggregate: Rc_Car_Aggregate;
  /** An array relationship */
  rc_car_attachments: Array<Rc_Car_Attachments>;
  /** An aggregate relationship */
  rc_car_attachments_aggregate: Rc_Car_Attachments_Aggregate;
  /** fetch data from the table: "rc_car_attachments" using primary key columns */
  rc_car_attachments_by_pk?: Maybe<Rc_Car_Attachments>;
  /** fetch data from the table in a streaming manner: "rc_car_attachments" */
  rc_car_attachments_stream: Array<Rc_Car_Attachments>;
  /** fetch data from the table: "rc_car" using primary key columns */
  rc_car_by_pk?: Maybe<Rc_Car>;
  /** fetch data from the table: "rc_car_status_counting" */
  rc_car_status_counting: Array<Rc_Car_Status_Counting>;
  /** fetch aggregated fields from the table: "rc_car_status_counting" */
  rc_car_status_counting_aggregate: Rc_Car_Status_Counting_Aggregate;
  /** fetch data from the table in a streaming manner: "rc_car_status_counting" */
  rc_car_status_counting_stream: Array<Rc_Car_Status_Counting>;
  /** fetch data from the table in a streaming manner: "rc_car" */
  rc_car_stream: Array<Rc_Car>;
  /** fetch data from the table: "rc_client" */
  rc_client: Array<Rc_Client>;
  /** fetch aggregated fields from the table: "rc_client" */
  rc_client_aggregate: Rc_Client_Aggregate;
  /** An array relationship */
  rc_client_attachments: Array<Rc_Client_Attachments>;
  /** An aggregate relationship */
  rc_client_attachments_aggregate: Rc_Client_Attachments_Aggregate;
  /** fetch data from the table: "rc_client_attachments" using primary key columns */
  rc_client_attachments_by_pk?: Maybe<Rc_Client_Attachments>;
  /** fetch data from the table in a streaming manner: "rc_client_attachments" */
  rc_client_attachments_stream: Array<Rc_Client_Attachments>;
  /** fetch data from the table: "rc_client" using primary key columns */
  rc_client_by_pk?: Maybe<Rc_Client>;
  /** fetch data from the table in a streaming manner: "rc_client" */
  rc_client_stream: Array<Rc_Client>;
  /** fetch data from the table: "rc_client_type_counting" */
  rc_client_type_counting: Array<Rc_Client_Type_Counting>;
  /** fetch aggregated fields from the table: "rc_client_type_counting" */
  rc_client_type_counting_aggregate: Rc_Client_Type_Counting_Aggregate;
  /** fetch data from the table in a streaming manner: "rc_client_type_counting" */
  rc_client_type_counting_stream: Array<Rc_Client_Type_Counting>;
  /** fetch data from the table: "rc_company" */
  rc_company: Array<Rc_Company>;
  /** fetch aggregated fields from the table: "rc_company" */
  rc_company_aggregate: Rc_Company_Aggregate;
  /** An array relationship */
  rc_company_attachments: Array<Rc_Company_Attachments>;
  /** An aggregate relationship */
  rc_company_attachments_aggregate: Rc_Company_Attachments_Aggregate;
  /** fetch data from the table: "rc_company_attachments" using primary key columns */
  rc_company_attachments_by_pk?: Maybe<Rc_Company_Attachments>;
  /** fetch data from the table in a streaming manner: "rc_company_attachments" */
  rc_company_attachments_stream: Array<Rc_Company_Attachments>;
  /** fetch data from the table: "rc_company" using primary key columns */
  rc_company_by_pk?: Maybe<Rc_Company>;
  /** fetch data from the table in a streaming manner: "rc_company" */
  rc_company_stream: Array<Rc_Company>;
  /** fetch data from the table: "rc_consignment" */
  rc_consignment: Array<Rc_Consignment>;
  /** fetch aggregated fields from the table: "rc_consignment" */
  rc_consignment_aggregate: Rc_Consignment_Aggregate;
  /** fetch data from the table: "rc_consignment" using primary key columns */
  rc_consignment_by_pk?: Maybe<Rc_Consignment>;
  /** fetch data from the table in a streaming manner: "rc_consignment" */
  rc_consignment_stream: Array<Rc_Consignment>;
  /** fetch data from the table: "rc_inquiry" */
  rc_inquiry: Array<Rc_Inquiry>;
  /** fetch aggregated fields from the table: "rc_inquiry" */
  rc_inquiry_aggregate: Rc_Inquiry_Aggregate;
  /** fetch data from the table: "rc_inquiry" using primary key columns */
  rc_inquiry_by_pk?: Maybe<Rc_Inquiry>;
  /** fetch data from the table in a streaming manner: "rc_inquiry" */
  rc_inquiry_stream: Array<Rc_Inquiry>;
  /** fetch data from the table: "rc_notice" */
  rc_notice: Array<Rc_Notice>;
  /** fetch aggregated fields from the table: "rc_notice" */
  rc_notice_aggregate: Rc_Notice_Aggregate;
  /** fetch data from the table: "rc_notice" using primary key columns */
  rc_notice_by_pk?: Maybe<Rc_Notice>;
  /** fetch data from the table in a streaming manner: "rc_notice" */
  rc_notice_stream: Array<Rc_Notice>;
  /** fetch data from the table: "rc_notification" */
  rc_notification: Array<Rc_Notification>;
  /** fetch aggregated fields from the table: "rc_notification" */
  rc_notification_aggregate: Rc_Notification_Aggregate;
  /** fetch data from the table: "rc_notification" using primary key columns */
  rc_notification_by_pk?: Maybe<Rc_Notification>;
  /** fetch data from the table in a streaming manner: "rc_notification" */
  rc_notification_stream: Array<Rc_Notification>;
  /** fetch data from the table: "rc_partner" */
  rc_partner: Array<Rc_Partner>;
  /** fetch aggregated fields from the table: "rc_partner" */
  rc_partner_aggregate: Rc_Partner_Aggregate;
  /** fetch data from the table: "rc_partner" using primary key columns */
  rc_partner_by_pk?: Maybe<Rc_Partner>;
  /** fetch data from the table in a streaming manner: "rc_partner" */
  rc_partner_stream: Array<Rc_Partner>;
  /** fetch data from the table: "rc_quotation" */
  rc_quotation: Array<Rc_Quotation>;
  /** fetch aggregated fields from the table: "rc_quotation" */
  rc_quotation_aggregate: Rc_Quotation_Aggregate;
  /** fetch data from the table: "rc_quotation" using primary key columns */
  rc_quotation_by_pk?: Maybe<Rc_Quotation>;
  /** fetch data from the table in a streaming manner: "rc_quotation" */
  rc_quotation_stream: Array<Rc_Quotation>;
  /** fetch data from the table: "rc_rental" */
  rc_rental: Array<Rc_Rental>;
  /** fetch aggregated fields from the table: "rc_rental" */
  rc_rental_aggregate: Rc_Rental_Aggregate;
  /** An array relationship */
  rc_rental_attachments: Array<Rc_Rental_Attachments>;
  /** An aggregate relationship */
  rc_rental_attachments_aggregate: Rc_Rental_Attachments_Aggregate;
  /** fetch data from the table: "rc_rental_attachments" using primary key columns */
  rc_rental_attachments_by_pk?: Maybe<Rc_Rental_Attachments>;
  /** fetch data from the table in a streaming manner: "rc_rental_attachments" */
  rc_rental_attachments_stream: Array<Rc_Rental_Attachments>;
  /** fetch data from the table: "rc_rental" using primary key columns */
  rc_rental_by_pk?: Maybe<Rc_Rental>;
  /** fetch data from the table: "rc_rental_status_counting" */
  rc_rental_status_counting: Array<Rc_Rental_Status_Counting>;
  /** fetch aggregated fields from the table: "rc_rental_status_counting" */
  rc_rental_status_counting_aggregate: Rc_Rental_Status_Counting_Aggregate;
  /** fetch data from the table in a streaming manner: "rc_rental_status_counting" */
  rc_rental_status_counting_stream: Array<Rc_Rental_Status_Counting>;
  /** fetch data from the table in a streaming manner: "rc_rental" */
  rc_rental_stream: Array<Rc_Rental>;
  /** fetch data from the table: "rc_settlement" */
  rc_settlement: Array<Rc_Settlement>;
  /** fetch aggregated fields from the table: "rc_settlement" */
  rc_settlement_aggregate: Rc_Settlement_Aggregate;
  /** fetch data from the table: "rc_settlement" using primary key columns */
  rc_settlement_by_pk?: Maybe<Rc_Settlement>;
  /** fetch data from the table in a streaming manner: "rc_settlement" */
  rc_settlement_stream: Array<Rc_Settlement>;
  /** fetch data from the table: "rc_staff" */
  rc_staff: Array<Rc_Staff>;
  /** fetch aggregated fields from the table: "rc_staff" */
  rc_staff_aggregate: Rc_Staff_Aggregate;
  /** fetch data from the table: "rc_staff" using primary key columns */
  rc_staff_by_pk?: Maybe<Rc_Staff>;
  /** fetch data from the table in a streaming manner: "rc_staff" */
  rc_staff_stream: Array<Rc_Staff>;
  /** execute function "search_rental" which returns "rc_rental" */
  search_rental: Array<Rc_Rental>;
  /** execute function "search_rental" and query aggregates on result of table type "rc_rental" */
  search_rental_aggregate: Rc_Rental_Aggregate;
  /** fetch data from the table: "self_certification" */
  self_certification: Array<Self_Certification>;
  /** fetch aggregated fields from the table: "self_certification" */
  self_certification_aggregate: Self_Certification_Aggregate;
  /** fetch data from the table: "self_certification" using primary key columns */
  self_certification_by_pk?: Maybe<Self_Certification>;
  /** fetch data from the table in a streaming manner: "self_certification" */
  self_certification_stream: Array<Self_Certification>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootCar_InfoArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Order_By>>;
  where?: InputMaybe<Car_Info_Bool_Exp>;
};


export type Subscription_RootCar_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Order_By>>;
  where?: InputMaybe<Car_Info_Bool_Exp>;
};


export type Subscription_RootCar_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCar_Info_DetailArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Detail_Order_By>>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};


export type Subscription_RootCar_Info_Detail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Car_Info_Detail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Car_Info_Detail_Order_By>>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};


export type Subscription_RootCar_Info_Detail_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCar_Info_Detail_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Car_Info_Detail_Stream_Cursor_Input>>;
  where?: InputMaybe<Car_Info_Detail_Bool_Exp>;
};


export type Subscription_RootCar_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Car_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Car_Info_Bool_Exp>;
};


export type Subscription_RootFax_InfoArgs = {
  distinct_on?: InputMaybe<Array<Fax_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fax_Info_Order_By>>;
  where?: InputMaybe<Fax_Info_Bool_Exp>;
};


export type Subscription_RootFax_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fax_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fax_Info_Order_By>>;
  where?: InputMaybe<Fax_Info_Bool_Exp>;
};


export type Subscription_RootFax_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFax_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fax_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Fax_Info_Bool_Exp>;
};


export type Subscription_RootGp_Payment_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gp_Payment_History_Order_By>>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};


export type Subscription_RootGp_Payment_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gp_Payment_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gp_Payment_History_Order_By>>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};


export type Subscription_RootGp_Payment_History_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGp_Payment_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Gp_Payment_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Gp_Payment_History_Bool_Exp>;
};


export type Subscription_RootMail_VerificationArgs = {
  distinct_on?: InputMaybe<Array<Mail_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mail_Verification_Order_By>>;
  where?: InputMaybe<Mail_Verification_Bool_Exp>;
};


export type Subscription_RootMail_Verification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mail_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mail_Verification_Order_By>>;
  where?: InputMaybe<Mail_Verification_Bool_Exp>;
};


export type Subscription_RootMail_Verification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMail_Verification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mail_Verification_Stream_Cursor_Input>>;
  where?: InputMaybe<Mail_Verification_Bool_Exp>;
};


export type Subscription_RootPenalty_InfoArgs = {
  distinct_on?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Penalty_Info_Order_By>>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};


export type Subscription_RootPenalty_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Penalty_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Penalty_Info_Order_By>>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};


export type Subscription_RootPenalty_Info_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPenalty_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Penalty_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Penalty_Info_Bool_Exp>;
};


export type Subscription_RootRc_CarArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Order_By>>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};


export type Subscription_RootRc_Car_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Order_By>>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};


export type Subscription_RootRc_Car_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Car_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Car_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Car_Attachments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Car_Attachments_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Car_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Car_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Car_Status_CountingArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Car_Status_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Car_Status_Counting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Car_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Car_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Car_Status_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Car_Status_Counting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Car_Status_Counting_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Car_Status_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Car_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Car_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Car_Bool_Exp>;
};


export type Subscription_RootRc_ClientArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Order_By>>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};


export type Subscription_RootRc_Client_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Order_By>>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};


export type Subscription_RootRc_Client_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Client_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Client_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Client_Attachments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Client_Attachments_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Client_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Client_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Client_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Client_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Client_Bool_Exp>;
};


export type Subscription_RootRc_Client_Type_CountingArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Type_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Type_Counting_Order_By>>;
  where?: InputMaybe<Rc_Client_Type_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Client_Type_Counting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Client_Type_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Client_Type_Counting_Order_By>>;
  where?: InputMaybe<Rc_Client_Type_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Client_Type_Counting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Client_Type_Counting_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Client_Type_Counting_Bool_Exp>;
};


export type Subscription_RootRc_CompanyArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Order_By>>;
  where?: InputMaybe<Rc_Company_Bool_Exp>;
};


export type Subscription_RootRc_Company_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Order_By>>;
  where?: InputMaybe<Rc_Company_Bool_Exp>;
};


export type Subscription_RootRc_Company_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Company_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Company_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Company_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Company_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Company_Attachments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Company_Attachments_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Company_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Company_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Company_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Company_Bool_Exp>;
};


export type Subscription_RootRc_ConsignmentArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


export type Subscription_RootRc_Consignment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Consignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Consignment_Order_By>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


export type Subscription_RootRc_Consignment_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Consignment_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Consignment_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Consignment_Bool_Exp>;
};


export type Subscription_RootRc_InquiryArgs = {
  distinct_on?: InputMaybe<Array<Rc_Inquiry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Inquiry_Order_By>>;
  where?: InputMaybe<Rc_Inquiry_Bool_Exp>;
};


export type Subscription_RootRc_Inquiry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Inquiry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Inquiry_Order_By>>;
  where?: InputMaybe<Rc_Inquiry_Bool_Exp>;
};


export type Subscription_RootRc_Inquiry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Inquiry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Inquiry_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Inquiry_Bool_Exp>;
};


export type Subscription_RootRc_NoticeArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notice_Order_By>>;
  where?: InputMaybe<Rc_Notice_Bool_Exp>;
};


export type Subscription_RootRc_Notice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notice_Order_By>>;
  where?: InputMaybe<Rc_Notice_Bool_Exp>;
};


export type Subscription_RootRc_Notice_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Notice_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Notice_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Notice_Bool_Exp>;
};


export type Subscription_RootRc_NotificationArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


export type Subscription_RootRc_Notification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Notification_Order_By>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


export type Subscription_RootRc_Notification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Notification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Notification_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Notification_Bool_Exp>;
};


export type Subscription_RootRc_PartnerArgs = {
  distinct_on?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Partner_Order_By>>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};


export type Subscription_RootRc_Partner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Partner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Partner_Order_By>>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};


export type Subscription_RootRc_Partner_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Partner_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Partner_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Partner_Bool_Exp>;
};


export type Subscription_RootRc_QuotationArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


export type Subscription_RootRc_Quotation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Quotation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Quotation_Order_By>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


export type Subscription_RootRc_Quotation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Quotation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Quotation_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Quotation_Bool_Exp>;
};


export type Subscription_RootRc_RentalArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Subscription_RootRc_Rental_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Subscription_RootRc_Rental_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Rental_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Attachments_Order_By>>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Rental_Attachments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Rental_Attachments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Rental_Attachments_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Rental_Attachments_Bool_Exp>;
};


export type Subscription_RootRc_Rental_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Rental_Status_CountingArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Rental_Status_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Rental_Status_Counting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Rental_Status_Counting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Status_Counting_Order_By>>;
  where?: InputMaybe<Rc_Rental_Status_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Rental_Status_Counting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Rental_Status_Counting_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Rental_Status_Counting_Bool_Exp>;
};


export type Subscription_RootRc_Rental_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Rental_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Subscription_RootRc_SettlementArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


export type Subscription_RootRc_Settlement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Settlement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Settlement_Order_By>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


export type Subscription_RootRc_Settlement_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Settlement_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Settlement_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Settlement_Bool_Exp>;
};


export type Subscription_RootRc_StaffArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


export type Subscription_RootRc_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


export type Subscription_RootRc_Staff_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRc_Staff_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rc_Staff_Stream_Cursor_Input>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


export type Subscription_RootSearch_RentalArgs = {
  args: Search_Rental_Args;
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Subscription_RootSearch_Rental_AggregateArgs = {
  args: Search_Rental_Args;
  distinct_on?: InputMaybe<Array<Rc_Rental_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Rental_Order_By>>;
  where?: InputMaybe<Rc_Rental_Bool_Exp>;
};


export type Subscription_RootSelf_CertificationArgs = {
  distinct_on?: InputMaybe<Array<Self_Certification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Self_Certification_Order_By>>;
  where?: InputMaybe<Self_Certification_Bool_Exp>;
};


export type Subscription_RootSelf_Certification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Self_Certification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Self_Certification_Order_By>>;
  where?: InputMaybe<Self_Certification_Bool_Exp>;
};


export type Subscription_RootSelf_Certification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSelf_Certification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Self_Certification_Stream_Cursor_Input>>;
  where?: InputMaybe<Self_Certification_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** 서비스 유저 정보 */
export type User = {
  __typename?: 'user';
  /** An object relationship */
  account: Account;
  account_id: Scalars['uuid']['output'];
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  /** 서비스 유저 이메일 */
  email: Scalars['String']['output'];
  /** 이메일 인증일 */
  email_verified_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** 서비스 유저 이름 */
  name: Scalars['String']['output'];
  /** 플랫폼 서비스 */
  platform: Scalars['String']['output'];
  /** An array relationship */
  rc_staffs: Array<Rc_Staff>;
  /** An aggregate relationship */
  rc_staffs_aggregate: Rc_Staff_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** 서비스 유저 정보 */
export type UserDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 서비스 유저 정보 */
export type UserRc_StaffsArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};


/** 서비스 유저 정보 */
export type UserRc_Staffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rc_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rc_Staff_Order_By>>;
  where?: InputMaybe<Rc_Staff_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  cell_phone_number?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  platform?: InputMaybe<String_Comparison_Exp>;
  rc_staffs?: InputMaybe<Rc_Staff_Bool_Exp>;
  rc_staffs_aggregate?: InputMaybe<Rc_Staff_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint on columns "platform", "account_id" */
  UserPlatformAccountIdKey = 'user_platform_account_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 서비스 유저 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 이메일 인증일 */
  email_verified_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 서비스 유저 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 플랫폼 서비스 */
  platform?: InputMaybe<Scalars['String']['input']>;
  rc_staffs?: InputMaybe<Rc_Staff_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 서비스 유저 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** 이메일 인증일 */
  email_verified_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 서비스 유저 이름 */
  name?: Maybe<Scalars['String']['output']>;
  /** 플랫폼 서비스 */
  platform?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 서비스 유저 이메일 */
  email?: InputMaybe<Order_By>;
  /** 이메일 인증일 */
  email_verified_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 서비스 유저 이름 */
  name?: InputMaybe<Order_By>;
  /** 플랫폼 서비스 */
  platform?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 서비스 유저 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** 이메일 인증일 */
  email_verified_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** 서비스 유저 이름 */
  name?: Maybe<Scalars['String']['output']>;
  /** 플랫폼 서비스 */
  platform?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 서비스 유저 이메일 */
  email?: InputMaybe<Order_By>;
  /** 이메일 인증일 */
  email_verified_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 서비스 유저 이름 */
  name?: InputMaybe<Order_By>;
  /** 플랫폼 서비스 */
  platform?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  cell_phone_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  rc_staffs_aggregate?: InputMaybe<Rc_Staff_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CellPhoneNumber = 'cell_phone_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerifiedAt = 'email_verified_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platform = 'platform',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 서비스 유저 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 이메일 인증일 */
  email_verified_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 서비스 유저 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 플랫폼 서비스 */
  platform?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 서비스 유저 휴대폰 번호 */
  cell_phone_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  /** 서비스 유저 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 이메일 인증일 */
  email_verified_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 서비스 유저 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 플랫폼 서비스 */
  platform?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CellPhoneNumber = 'cell_phone_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerifiedAt = 'email_verified_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platform = 'platform',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetRcNoticeQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetRcNoticeQuery = { __typename?: 'query_root', rc_notice: Array<{ __typename?: 'rc_notice', id: any, title: string, category: string, contents: string, created_at: any }> };

export type DeleteNoticeMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteNoticeMutation = { __typename?: 'mutation_root', delete_rc_notice_by_pk?: { __typename?: 'rc_notice', title: string } | null };

export type GetCurrentRcNoticeQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetCurrentRcNoticeQuery = { __typename?: 'query_root', rc_notice_by_pk?: { __typename?: 'rc_notice', id: any, title: string, category: string, contents: string } | null };

export type UpdateNoticeMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  category?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateNoticeMutation = { __typename?: 'mutation_root', update_rc_notice_by_pk?: { __typename?: 'rc_notice', id: any, title: string, contents: string, category: string } | null };


export const GetRcNoticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRcNotice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rc_notice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<GetRcNoticeQuery, GetRcNoticeQueryVariables>;
export const DeleteNoticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteNotice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_rc_notice_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DeleteNoticeMutation, DeleteNoticeMutationVariables>;
export const GetCurrentRcNoticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentRcNotice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rc_notice_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}}]}}]} as unknown as DocumentNode<GetCurrentRcNoticeQuery, GetCurrentRcNoticeQueryVariables>;
export const UpdateNoticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateNotice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contents"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_rc_notice_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contents"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contents"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]} as unknown as DocumentNode<UpdateNoticeMutation, UpdateNoticeMutationVariables>;