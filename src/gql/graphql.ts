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
  bigint: { input: any; output: any; }
  coin: { input: any; output: any; }
  coin_scalar: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
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

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
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

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  address: Scalars['String']['output'];
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposits>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposits_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Votes>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Votes_Aggregate;
  /** An array relationship */
  proposals: Array<Proposals>;
  /** An aggregate relationship */
  proposals_aggregate: Proposals_Aggregate;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Infos>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Infos_Aggregate;
};


/** columns and relationships of "accounts" */
export type AccountsBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balances?: InputMaybe<Balances_Bool_Exp>;
  balances_aggregate?: InputMaybe<Balances_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposits_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposits_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Votes_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Votes_Aggregate_Bool_Exp>;
  proposals?: InputMaybe<Proposals_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposals_Aggregate_Bool_Exp>;
  staked_balances?: InputMaybe<Staked_Balances_Bool_Exp>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Infos_Bool_Exp>;
  validator_infos_aggregate?: InputMaybe<Validator_Infos_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "address" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  balances?: InputMaybe<Balances_Arr_Rel_Insert_Input>;
  proposal_deposits?: InputMaybe<Proposal_Deposits_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Votes_Arr_Rel_Insert_Input>;
  proposals?: InputMaybe<Proposals_Arr_Rel_Insert_Input>;
  staked_balances?: InputMaybe<Staked_Balances_Arr_Rel_Insert_Input>;
  validator_infos?: InputMaybe<Validator_Infos_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  address?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  address?: InputMaybe<Order_By>;
  balances_aggregate?: InputMaybe<Balances_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposits_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Votes_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposals_Aggregate_Order_By>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Infos_Aggregate_Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  address: Scalars['String']['input'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Address = 'address'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Address = 'address'
}

export type Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
  one_row_id: Scalars['Boolean']['output'];
};

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Day>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerDayPkey = 'average_block_time_per_day_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Mutation_Response = {
  __typename?: 'average_block_time_per_day_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Day>;
};

/** on_conflict condition type for table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_On_Conflict = {
  constraint: Average_Block_Time_Per_Day_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Day_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_day */
export type Average_Block_Time_Per_Day_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean']['input'];
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Day_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Day_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Day_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
  one_row_id: Scalars['Boolean']['output'];
};

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Hour>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerHourPkey = 'average_block_time_per_hour_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Mutation_Response = {
  __typename?: 'average_block_time_per_hour_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Hour>;
};

/** on_conflict condition type for table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_On_Conflict = {
  constraint: Average_Block_Time_Per_Hour_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Hour_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_hour */
export type Average_Block_Time_Per_Hour_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean']['input'];
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Hour_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
  one_row_id: Scalars['Boolean']['output'];
};

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Minute>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerMinutePkey = 'average_block_time_per_minute_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Mutation_Response = {
  __typename?: 'average_block_time_per_minute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Minute>;
};

/** on_conflict condition type for table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_On_Conflict = {
  constraint: Average_Block_Time_Per_Minute_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Minute_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_minute */
export type Average_Block_Time_Per_Minute_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean']['input'];
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Minute_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "balances" */
export type Balances = {
  __typename?: 'balances';
  /** An object relationship */
  account: Accounts;
  address: Scalars['String']['output'];
  /** An object relationship */
  block?: Maybe<Blocks>;
  coins: Array<Scalars['coin']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "balances" */
export type Balances_Aggregate = {
  __typename?: 'balances_aggregate';
  aggregate?: Maybe<Balances_Aggregate_Fields>;
  nodes: Array<Balances>;
};

export type Balances_Aggregate_Bool_Exp = {
  count?: InputMaybe<Balances_Aggregate_Bool_Exp_Count>;
};

export type Balances_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Balances_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "balances" */
export type Balances_Aggregate_Fields = {
  __typename?: 'balances_aggregate_fields';
  avg?: Maybe<Balances_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Balances_Max_Fields>;
  min?: Maybe<Balances_Min_Fields>;
  stddev?: Maybe<Balances_Stddev_Fields>;
  stddev_pop?: Maybe<Balances_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Balances_Stddev_Samp_Fields>;
  sum?: Maybe<Balances_Sum_Fields>;
  var_pop?: Maybe<Balances_Var_Pop_Fields>;
  var_samp?: Maybe<Balances_Var_Samp_Fields>;
  variance?: Maybe<Balances_Variance_Fields>;
};


/** aggregate fields of "balances" */
export type Balances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "balances" */
export type Balances_Aggregate_Order_By = {
  avg?: InputMaybe<Balances_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Balances_Max_Order_By>;
  min?: InputMaybe<Balances_Min_Order_By>;
  stddev?: InputMaybe<Balances_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Balances_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Balances_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Balances_Sum_Order_By>;
  var_pop?: InputMaybe<Balances_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Balances_Var_Samp_Order_By>;
  variance?: InputMaybe<Balances_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "balances" */
export type Balances_Arr_Rel_Insert_Input = {
  data: Array<Balances_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Balances_On_Conflict>;
};

/** aggregate avg on columns */
export type Balances_Avg_Fields = {
  __typename?: 'balances_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "balances" */
export type Balances_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "balances". All fields are combined with a logical 'AND'. */
export type Balances_Bool_Exp = {
  _and?: InputMaybe<Array<Balances_Bool_Exp>>;
  _not?: InputMaybe<Balances_Bool_Exp>;
  _or?: InputMaybe<Array<Balances_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  coins?: InputMaybe<Coin_Array_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "balances" */
export enum Balances_Constraint {
  /** unique or primary key constraint on columns "address", "height" */
  UniqueHeightBalance = 'unique_height_balance'
}

/** input type for incrementing numeric columns in table "balances" */
export type Balances_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "balances" */
export type Balances_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  address?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Balances_Max_Fields = {
  __typename?: 'balances_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "balances" */
export type Balances_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Balances_Min_Fields = {
  __typename?: 'balances_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "balances" */
export type Balances_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "balances" */
export type Balances_Mutation_Response = {
  __typename?: 'balances_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Balances>;
};

/** on_conflict condition type for table "balances" */
export type Balances_On_Conflict = {
  constraint: Balances_Constraint;
  update_columns?: Array<Balances_Update_Column>;
  where?: InputMaybe<Balances_Bool_Exp>;
};

/** Ordering options when selecting data from "balances". */
export type Balances_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  address?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "balances" */
export enum Balances_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** input type for updating data in table "balances" */
export type Balances_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Balances_Stddev_Fields = {
  __typename?: 'balances_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "balances" */
export type Balances_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Balances_Stddev_Pop_Fields = {
  __typename?: 'balances_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "balances" */
export type Balances_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Balances_Stddev_Samp_Fields = {
  __typename?: 'balances_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "balances" */
export type Balances_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "balances" */
export type Balances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Balances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balances_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Balances_Sum_Fields = {
  __typename?: 'balances_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "balances" */
export type Balances_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "balances" */
export enum Balances_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

export type Balances_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Balances_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Balances_Set_Input>;
  /** filter the rows which have to be updated */
  where: Balances_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Balances_Var_Pop_Fields = {
  __typename?: 'balances_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "balances" */
export type Balances_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Balances_Var_Samp_Fields = {
  __typename?: 'balances_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "balances" */
export type Balances_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Balances_Variance_Fields = {
  __typename?: 'balances_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "balances" */
export type Balances_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
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

/** columns and relationships of "blocks" */
export type Blocks = {
  __typename?: 'blocks';
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** An array relationship */
  gov_params: Array<Gov_Params>;
  /** An aggregate relationship */
  gov_params_aggregate: Gov_Params_Aggregate;
  hash: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  num_txs?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposits>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposits_Aggregate;
  /** An array relationship */
  proposal_staking_pool_snapshots: Array<Proposal_Staking_Pool_Snapshots>;
  /** An aggregate relationship */
  proposal_staking_pool_snapshots_aggregate: Proposal_Staking_Pool_Snapshots_Aggregate;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Results>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Results_Aggregate;
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshots>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshots_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Votes>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Votes_Aggregate;
  proposer_address?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** An array relationship */
  supplies: Array<Supply>;
  /** An aggregate relationship */
  supplies_aggregate: Supply_Aggregate;
  timestamp: Scalars['timestamp']['output'];
  total_gas?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** An object relationship */
  validator?: Maybe<Validators>;
  /** An array relationship */
  validator_commissions: Array<Validator_Commissions>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commissions_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Descriptions>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Descriptions_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Infos>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Infos_Aggregate;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Powers>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Powers_Aggregate;
};


/** columns and relationships of "blocks" */
export type BlocksBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Staking_Pool_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Staking_Pool_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksSuppliesArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksSupplies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};


/** columns and relationships of "blocks" */
export type BlocksValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};

/** aggregated selection of "blocks" */
export type Blocks_Aggregate = {
  __typename?: 'blocks_aggregate';
  aggregate?: Maybe<Blocks_Aggregate_Fields>;
  nodes: Array<Blocks>;
};

export type Blocks_Aggregate_Bool_Exp = {
  count?: InputMaybe<Blocks_Aggregate_Bool_Exp_Count>;
};

export type Blocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Blocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Blocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "blocks" */
export type Blocks_Aggregate_Fields = {
  __typename?: 'blocks_aggregate_fields';
  avg?: Maybe<Blocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Blocks_Max_Fields>;
  min?: Maybe<Blocks_Min_Fields>;
  stddev?: Maybe<Blocks_Stddev_Fields>;
  stddev_pop?: Maybe<Blocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blocks_Stddev_Samp_Fields>;
  sum?: Maybe<Blocks_Sum_Fields>;
  var_pop?: Maybe<Blocks_Var_Pop_Fields>;
  var_samp?: Maybe<Blocks_Var_Samp_Fields>;
  variance?: Maybe<Blocks_Variance_Fields>;
};


/** aggregate fields of "blocks" */
export type Blocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "blocks" */
export type Blocks_Aggregate_Order_By = {
  avg?: InputMaybe<Blocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blocks_Max_Order_By>;
  min?: InputMaybe<Blocks_Min_Order_By>;
  stddev?: InputMaybe<Blocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Blocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Blocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Blocks_Sum_Order_By>;
  var_pop?: InputMaybe<Blocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Blocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Blocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blocks" */
export type Blocks_Arr_Rel_Insert_Input = {
  data: Array<Blocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Blocks_Avg_Fields = {
  __typename?: 'blocks_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "blocks" */
export type Blocks_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blocks". All fields are combined with a logical 'AND'. */
export type Blocks_Bool_Exp = {
  _and?: InputMaybe<Array<Blocks_Bool_Exp>>;
  _not?: InputMaybe<Blocks_Bool_Exp>;
  _or?: InputMaybe<Array<Blocks_Bool_Exp>>;
  balances?: InputMaybe<Balances_Bool_Exp>;
  balances_aggregate?: InputMaybe<Balances_Aggregate_Bool_Exp>;
  gov_params?: InputMaybe<Gov_Params_Bool_Exp>;
  gov_params_aggregate?: InputMaybe<Gov_Params_Aggregate_Bool_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  num_txs?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposits_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposits_Aggregate_Bool_Exp>;
  proposal_staking_pool_snapshots?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
  proposal_staking_pool_snapshots_aggregate?: InputMaybe<Proposal_Staking_Pool_Snapshots_Aggregate_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Results_Aggregate_Bool_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Votes_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Votes_Aggregate_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  staked_balances?: InputMaybe<Staked_Balances_Bool_Exp>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp>;
  supplies?: InputMaybe<Supply_Bool_Exp>;
  supplies_aggregate?: InputMaybe<Supply_Aggregate_Bool_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bigint_Comparison_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  validator?: InputMaybe<Validators_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commissions_Bool_Exp>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commissions_Aggregate_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Descriptions_Bool_Exp>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Descriptions_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Infos_Bool_Exp>;
  validator_infos_aggregate?: InputMaybe<Validator_Infos_Aggregate_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Powers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "blocks" */
export enum Blocks_Constraint {
  /** unique or primary key constraint on columns "hash" */
  BlocksHashKey = 'blocks_hash_key',
  /** unique or primary key constraint on columns "height" */
  BlocksPkey = 'blocks_pkey'
}

/** input type for incrementing numeric columns in table "blocks" */
export type Blocks_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "blocks" */
export type Blocks_Insert_Input = {
  balances?: InputMaybe<Balances_Arr_Rel_Insert_Input>;
  gov_params?: InputMaybe<Gov_Params_Arr_Rel_Insert_Input>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  proposal_deposits?: InputMaybe<Proposal_Deposits_Arr_Rel_Insert_Input>;
  proposal_staking_pool_snapshots?: InputMaybe<Proposal_Staking_Pool_Snapshots_Arr_Rel_Insert_Input>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Results_Arr_Rel_Insert_Input>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshots_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Votes_Arr_Rel_Insert_Input>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  staked_balances?: InputMaybe<Staked_Balances_Arr_Rel_Insert_Input>;
  supplies?: InputMaybe<Supply_Arr_Rel_Insert_Input>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  validator?: InputMaybe<Validators_Obj_Rel_Insert_Input>;
  validator_commissions?: InputMaybe<Validator_Commissions_Arr_Rel_Insert_Input>;
  validator_descriptions?: InputMaybe<Validator_Descriptions_Arr_Rel_Insert_Input>;
  validator_infos?: InputMaybe<Validator_Infos_Arr_Rel_Insert_Input>;
  validator_statuses?: InputMaybe<Validator_Status_Arr_Rel_Insert_Input>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Powers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Blocks_Max_Fields = {
  __typename?: 'blocks_max_fields';
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  num_txs?: Maybe<Scalars['Int']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_gas?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "blocks" */
export type Blocks_Max_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blocks_Min_Fields = {
  __typename?: 'blocks_min_fields';
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  num_txs?: Maybe<Scalars['Int']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_gas?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "blocks" */
export type Blocks_Min_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blocks" */
export type Blocks_Mutation_Response = {
  __typename?: 'blocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Blocks>;
};

/** input type for inserting object relation for remote table "blocks" */
export type Blocks_Obj_Rel_Insert_Input = {
  data: Blocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** on_conflict condition type for table "blocks" */
export type Blocks_On_Conflict = {
  constraint: Blocks_Constraint;
  update_columns?: Array<Blocks_Update_Column>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

/** Ordering options when selecting data from "blocks". */
export type Blocks_Order_By = {
  balances_aggregate?: InputMaybe<Balances_Aggregate_Order_By>;
  gov_params_aggregate?: InputMaybe<Gov_Params_Aggregate_Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposits_Aggregate_Order_By>;
  proposal_staking_pool_snapshots_aggregate?: InputMaybe<Proposal_Staking_Pool_Snapshots_Aggregate_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Results_Aggregate_Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Votes_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Order_By>;
  supplies_aggregate?: InputMaybe<Supply_Aggregate_Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  validator?: InputMaybe<Validators_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commissions_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Descriptions_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Infos_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Powers_Aggregate_Order_By>;
};

/** primary key columns input for table: blocks */
export type Blocks_Pk_Columns_Input = {
  height: Scalars['bigint']['input'];
};

/** select columns of table "blocks" */
export enum Blocks_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** input type for updating data in table "blocks" */
export type Blocks_Set_Input = {
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Blocks_Stddev_Fields = {
  __typename?: 'blocks_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "blocks" */
export type Blocks_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blocks_Stddev_Pop_Fields = {
  __typename?: 'blocks_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "blocks" */
export type Blocks_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blocks_Stddev_Samp_Fields = {
  __typename?: 'blocks_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "blocks" */
export type Blocks_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "blocks" */
export type Blocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blocks_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Blocks_Sum_Fields = {
  __typename?: 'blocks_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  num_txs?: Maybe<Scalars['Int']['output']>;
  total_gas?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "blocks" */
export type Blocks_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** update columns of table "blocks" */
export enum Blocks_Update_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

export type Blocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Blocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Blocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Blocks_Var_Pop_Fields = {
  __typename?: 'blocks_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "blocks" */
export type Blocks_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blocks_Var_Samp_Fields = {
  __typename?: 'blocks_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "blocks" */
export type Blocks_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Blocks_Variance_Fields = {
  __typename?: 'blocks_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "blocks" */
export type Blocks_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "coin". All fields are combined with logical 'AND'. */
export type Coin_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['coin']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['coin']['input']>>;
  _eq?: InputMaybe<Array<Scalars['coin']['input']>>;
  _gt?: InputMaybe<Array<Scalars['coin']['input']>>;
  _gte?: InputMaybe<Array<Scalars['coin']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['coin']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['coin']['input']>>;
  _lte?: InputMaybe<Array<Scalars['coin']['input']>>;
  _neq?: InputMaybe<Array<Scalars['coin']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['coin']['input']>>>;
};

/** Boolean expression to compare columns of type "coin_scalar". All fields are combined with logical 'AND'. */
export type Coin_Scalar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['coin_scalar']['input']>;
  _gt?: InputMaybe<Scalars['coin_scalar']['input']>;
  _gte?: InputMaybe<Scalars['coin_scalar']['input']>;
  _in?: InputMaybe<Array<Scalars['coin_scalar']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['coin_scalar']['input']>;
  _lte?: InputMaybe<Scalars['coin_scalar']['input']>;
  _neq?: InputMaybe<Scalars['coin_scalar']['input']>;
  _nin?: InputMaybe<Array<Scalars['coin_scalar']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params';
  /** An object relationship */
  block?: Maybe<Blocks>;
  height?: Maybe<Scalars['bigint']['output']>;
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "gov_params" */
export type Gov_Params_Aggregate = {
  __typename?: 'gov_params_aggregate';
  aggregate?: Maybe<Gov_Params_Aggregate_Fields>;
  nodes: Array<Gov_Params>;
};

export type Gov_Params_Aggregate_Bool_Exp = {
  count?: InputMaybe<Gov_Params_Aggregate_Bool_Exp_Count>;
};

export type Gov_Params_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Gov_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Gov_Params_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_Fields = {
  __typename?: 'gov_params_aggregate_fields';
  avg?: Maybe<Gov_Params_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Gov_Params_Max_Fields>;
  min?: Maybe<Gov_Params_Min_Fields>;
  stddev?: Maybe<Gov_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Gov_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gov_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Gov_Params_Sum_Fields>;
  var_pop?: Maybe<Gov_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Gov_Params_Var_Samp_Fields>;
  variance?: Maybe<Gov_Params_Variance_Fields>;
};


/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gov_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "gov_params" */
export type Gov_Params_Aggregate_Order_By = {
  avg?: InputMaybe<Gov_Params_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gov_Params_Max_Order_By>;
  min?: InputMaybe<Gov_Params_Min_Order_By>;
  stddev?: InputMaybe<Gov_Params_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gov_Params_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gov_Params_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gov_Params_Sum_Order_By>;
  var_pop?: InputMaybe<Gov_Params_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gov_Params_Var_Samp_Order_By>;
  variance?: InputMaybe<Gov_Params_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "gov_params" */
export type Gov_Params_Arr_Rel_Insert_Input = {
  data: Array<Gov_Params_Insert_Input>;
};

/** aggregate avg on columns */
export type Gov_Params_Avg_Fields = {
  __typename?: 'gov_params_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "gov_params" */
export type Gov_Params_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  _not?: InputMaybe<Gov_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gov_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gov_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gov_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "gov_params" */
export type Gov_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "gov_params" */
export type Gov_Params_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Gov_Params_Max_Fields = {
  __typename?: 'gov_params_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "gov_params" */
export type Gov_Params_Max_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gov_Params_Min_Fields = {
  __typename?: 'gov_params_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "gov_params" */
export type Gov_Params_Min_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gov_params" */
export type Gov_Params_Mutation_Response = {
  __typename?: 'gov_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Gov_Params>;
};

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "gov_params" */
export type Gov_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate stddev on columns */
export type Gov_Params_Stddev_Fields = {
  __typename?: 'gov_params_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "gov_params" */
export type Gov_Params_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gov_Params_Stddev_Pop_Fields = {
  __typename?: 'gov_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "gov_params" */
export type Gov_Params_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gov_Params_Stddev_Samp_Fields = {
  __typename?: 'gov_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "gov_params" */
export type Gov_Params_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "gov_params" */
export type Gov_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gov_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gov_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type Gov_Params_Sum_Fields = {
  __typename?: 'gov_params_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "gov_params" */
export type Gov_Params_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Gov_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Gov_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Gov_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Gov_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Gov_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gov_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Gov_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gov_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gov_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gov_Params_Var_Pop_Fields = {
  __typename?: 'gov_params_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "gov_params" */
export type Gov_Params_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gov_Params_Var_Samp_Fields = {
  __typename?: 'gov_params_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "gov_params" */
export type Gov_Params_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gov_Params_Variance_Fields = {
  __typename?: 'gov_params_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "gov_params" */
export type Gov_Params_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** delete data from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** delete data from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** delete data from the table: "balances" */
  delete_balances?: Maybe<Balances_Mutation_Response>;
  /** delete data from the table: "blocks" */
  delete_blocks?: Maybe<Blocks_Mutation_Response>;
  /** delete single row from the table: "blocks" */
  delete_blocks_by_pk?: Maybe<Blocks>;
  /** delete data from the table: "gov_params" */
  delete_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** delete data from the table: "proposal_deposits" */
  delete_proposal_deposits?: Maybe<Proposal_Deposits_Mutation_Response>;
  /** delete data from the table: "proposal_staking_pool_snapshots" */
  delete_proposal_staking_pool_snapshots?: Maybe<Proposal_Staking_Pool_Snapshots_Mutation_Response>;
  /** delete data from the table: "proposal_tally_results" */
  delete_proposal_tally_results?: Maybe<Proposal_Tally_Results_Mutation_Response>;
  /** delete data from the table: "proposal_validator_status_snapshots" */
  delete_proposal_validator_status_snapshots?: Maybe<Proposal_Validator_Status_Snapshots_Mutation_Response>;
  /** delete single row from the table: "proposal_validator_status_snapshots" */
  delete_proposal_validator_status_snapshots_by_pk?: Maybe<Proposal_Validator_Status_Snapshots>;
  /** delete data from the table: "proposal_votes" */
  delete_proposal_votes?: Maybe<Proposal_Votes_Mutation_Response>;
  /** delete data from the table: "proposals" */
  delete_proposals?: Maybe<Proposals_Mutation_Response>;
  /** delete single row from the table: "proposals" */
  delete_proposals_by_pk?: Maybe<Proposals>;
  /** delete data from the table: "staked_balances" */
  delete_staked_balances?: Maybe<Staked_Balances_Mutation_Response>;
  /** delete data from the table: "staking_params" */
  delete_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** delete data from the table: "staking_pool" */
  delete_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** delete data from the table: "supply" */
  delete_supply?: Maybe<Supply_Mutation_Response>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete data from the table: "validator_commissions" */
  delete_validator_commissions?: Maybe<Validator_Commissions_Mutation_Response>;
  /** delete data from the table: "validator_descriptions" */
  delete_validator_descriptions?: Maybe<Validator_Descriptions_Mutation_Response>;
  /** delete data from the table: "validator_infos" */
  delete_validator_infos?: Maybe<Validator_Infos_Mutation_Response>;
  /** delete data from the table: "validator_status" */
  delete_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** delete single row from the table: "validator_status" */
  delete_validator_status_by_pk?: Maybe<Validator_Status>;
  /** delete data from the table: "validator_voting_powers" */
  delete_validator_voting_powers?: Maybe<Validator_Voting_Powers_Mutation_Response>;
  /** delete data from the table: "validators" */
  delete_validators?: Maybe<Validators_Mutation_Response>;
  /** delete single row from the table: "validators" */
  delete_validators_by_pk?: Maybe<Validators>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day_one?: Maybe<Average_Block_Time_Per_Day>;
  /** insert data into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour_one?: Maybe<Average_Block_Time_Per_Hour>;
  /** insert data into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute_one?: Maybe<Average_Block_Time_Per_Minute>;
  /** insert data into the table: "balances" */
  insert_balances?: Maybe<Balances_Mutation_Response>;
  /** insert a single row into the table: "balances" */
  insert_balances_one?: Maybe<Balances>;
  /** insert data into the table: "blocks" */
  insert_blocks?: Maybe<Blocks_Mutation_Response>;
  /** insert a single row into the table: "blocks" */
  insert_blocks_one?: Maybe<Blocks>;
  /** insert data into the table: "gov_params" */
  insert_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** insert a single row into the table: "gov_params" */
  insert_gov_params_one?: Maybe<Gov_Params>;
  /** insert data into the table: "proposal_deposits" */
  insert_proposal_deposits?: Maybe<Proposal_Deposits_Mutation_Response>;
  /** insert a single row into the table: "proposal_deposits" */
  insert_proposal_deposits_one?: Maybe<Proposal_Deposits>;
  /** insert data into the table: "proposal_staking_pool_snapshots" */
  insert_proposal_staking_pool_snapshots?: Maybe<Proposal_Staking_Pool_Snapshots_Mutation_Response>;
  /** insert a single row into the table: "proposal_staking_pool_snapshots" */
  insert_proposal_staking_pool_snapshots_one?: Maybe<Proposal_Staking_Pool_Snapshots>;
  /** insert data into the table: "proposal_tally_results" */
  insert_proposal_tally_results?: Maybe<Proposal_Tally_Results_Mutation_Response>;
  /** insert a single row into the table: "proposal_tally_results" */
  insert_proposal_tally_results_one?: Maybe<Proposal_Tally_Results>;
  /** insert data into the table: "proposal_validator_status_snapshots" */
  insert_proposal_validator_status_snapshots?: Maybe<Proposal_Validator_Status_Snapshots_Mutation_Response>;
  /** insert a single row into the table: "proposal_validator_status_snapshots" */
  insert_proposal_validator_status_snapshots_one?: Maybe<Proposal_Validator_Status_Snapshots>;
  /** insert data into the table: "proposal_votes" */
  insert_proposal_votes?: Maybe<Proposal_Votes_Mutation_Response>;
  /** insert a single row into the table: "proposal_votes" */
  insert_proposal_votes_one?: Maybe<Proposal_Votes>;
  /** insert data into the table: "proposals" */
  insert_proposals?: Maybe<Proposals_Mutation_Response>;
  /** insert a single row into the table: "proposals" */
  insert_proposals_one?: Maybe<Proposals>;
  /** insert data into the table: "staked_balances" */
  insert_staked_balances?: Maybe<Staked_Balances_Mutation_Response>;
  /** insert a single row into the table: "staked_balances" */
  insert_staked_balances_one?: Maybe<Staked_Balances>;
  /** insert data into the table: "staking_params" */
  insert_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** insert a single row into the table: "staking_params" */
  insert_staking_params_one?: Maybe<Staking_Params>;
  /** insert data into the table: "staking_pool" */
  insert_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** insert a single row into the table: "staking_pool" */
  insert_staking_pool_one?: Maybe<Staking_Pool>;
  /** insert data into the table: "supply" */
  insert_supply?: Maybe<Supply_Mutation_Response>;
  /** insert a single row into the table: "supply" */
  insert_supply_one?: Maybe<Supply>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "validator_commissions" */
  insert_validator_commissions?: Maybe<Validator_Commissions_Mutation_Response>;
  /** insert a single row into the table: "validator_commissions" */
  insert_validator_commissions_one?: Maybe<Validator_Commissions>;
  /** insert data into the table: "validator_descriptions" */
  insert_validator_descriptions?: Maybe<Validator_Descriptions_Mutation_Response>;
  /** insert a single row into the table: "validator_descriptions" */
  insert_validator_descriptions_one?: Maybe<Validator_Descriptions>;
  /** insert data into the table: "validator_infos" */
  insert_validator_infos?: Maybe<Validator_Infos_Mutation_Response>;
  /** insert a single row into the table: "validator_infos" */
  insert_validator_infos_one?: Maybe<Validator_Infos>;
  /** insert data into the table: "validator_status" */
  insert_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** insert a single row into the table: "validator_status" */
  insert_validator_status_one?: Maybe<Validator_Status>;
  /** insert data into the table: "validator_voting_powers" */
  insert_validator_voting_powers?: Maybe<Validator_Voting_Powers_Mutation_Response>;
  /** insert a single row into the table: "validator_voting_powers" */
  insert_validator_voting_powers_one?: Maybe<Validator_Voting_Powers>;
  /** insert data into the table: "validators" */
  insert_validators?: Maybe<Validators_Mutation_Response>;
  /** insert a single row into the table: "validators" */
  insert_validators_one?: Maybe<Validators>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_day" */
  update_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_day" */
  update_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** update multiples rows of table: "average_block_time_per_day" */
  update_average_block_time_per_day_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Day_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** update multiples rows of table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Hour_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** update multiples rows of table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Minute_Mutation_Response>>>;
  /** update data of the table: "balances" */
  update_balances?: Maybe<Balances_Mutation_Response>;
  /** update multiples rows of table: "balances" */
  update_balances_many?: Maybe<Array<Maybe<Balances_Mutation_Response>>>;
  /** update data of the table: "blocks" */
  update_blocks?: Maybe<Blocks_Mutation_Response>;
  /** update single row of the table: "blocks" */
  update_blocks_by_pk?: Maybe<Blocks>;
  /** update multiples rows of table: "blocks" */
  update_blocks_many?: Maybe<Array<Maybe<Blocks_Mutation_Response>>>;
  /** update data of the table: "gov_params" */
  update_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** update multiples rows of table: "gov_params" */
  update_gov_params_many?: Maybe<Array<Maybe<Gov_Params_Mutation_Response>>>;
  /** update data of the table: "proposal_deposits" */
  update_proposal_deposits?: Maybe<Proposal_Deposits_Mutation_Response>;
  /** update multiples rows of table: "proposal_deposits" */
  update_proposal_deposits_many?: Maybe<Array<Maybe<Proposal_Deposits_Mutation_Response>>>;
  /** update data of the table: "proposal_staking_pool_snapshots" */
  update_proposal_staking_pool_snapshots?: Maybe<Proposal_Staking_Pool_Snapshots_Mutation_Response>;
  /** update multiples rows of table: "proposal_staking_pool_snapshots" */
  update_proposal_staking_pool_snapshots_many?: Maybe<Array<Maybe<Proposal_Staking_Pool_Snapshots_Mutation_Response>>>;
  /** update data of the table: "proposal_tally_results" */
  update_proposal_tally_results?: Maybe<Proposal_Tally_Results_Mutation_Response>;
  /** update multiples rows of table: "proposal_tally_results" */
  update_proposal_tally_results_many?: Maybe<Array<Maybe<Proposal_Tally_Results_Mutation_Response>>>;
  /** update data of the table: "proposal_validator_status_snapshots" */
  update_proposal_validator_status_snapshots?: Maybe<Proposal_Validator_Status_Snapshots_Mutation_Response>;
  /** update single row of the table: "proposal_validator_status_snapshots" */
  update_proposal_validator_status_snapshots_by_pk?: Maybe<Proposal_Validator_Status_Snapshots>;
  /** update multiples rows of table: "proposal_validator_status_snapshots" */
  update_proposal_validator_status_snapshots_many?: Maybe<Array<Maybe<Proposal_Validator_Status_Snapshots_Mutation_Response>>>;
  /** update data of the table: "proposal_votes" */
  update_proposal_votes?: Maybe<Proposal_Votes_Mutation_Response>;
  /** update multiples rows of table: "proposal_votes" */
  update_proposal_votes_many?: Maybe<Array<Maybe<Proposal_Votes_Mutation_Response>>>;
  /** update data of the table: "proposals" */
  update_proposals?: Maybe<Proposals_Mutation_Response>;
  /** update single row of the table: "proposals" */
  update_proposals_by_pk?: Maybe<Proposals>;
  /** update multiples rows of table: "proposals" */
  update_proposals_many?: Maybe<Array<Maybe<Proposals_Mutation_Response>>>;
  /** update data of the table: "staked_balances" */
  update_staked_balances?: Maybe<Staked_Balances_Mutation_Response>;
  /** update multiples rows of table: "staked_balances" */
  update_staked_balances_many?: Maybe<Array<Maybe<Staked_Balances_Mutation_Response>>>;
  /** update data of the table: "staking_params" */
  update_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** update multiples rows of table: "staking_params" */
  update_staking_params_many?: Maybe<Array<Maybe<Staking_Params_Mutation_Response>>>;
  /** update data of the table: "staking_pool" */
  update_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** update multiples rows of table: "staking_pool" */
  update_staking_pool_many?: Maybe<Array<Maybe<Staking_Pool_Mutation_Response>>>;
  /** update data of the table: "supply" */
  update_supply?: Maybe<Supply_Mutation_Response>;
  /** update multiples rows of table: "supply" */
  update_supply_many?: Maybe<Array<Maybe<Supply_Mutation_Response>>>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many?: Maybe<Array<Maybe<Transactions_Mutation_Response>>>;
  /** update data of the table: "validator_commissions" */
  update_validator_commissions?: Maybe<Validator_Commissions_Mutation_Response>;
  /** update multiples rows of table: "validator_commissions" */
  update_validator_commissions_many?: Maybe<Array<Maybe<Validator_Commissions_Mutation_Response>>>;
  /** update data of the table: "validator_descriptions" */
  update_validator_descriptions?: Maybe<Validator_Descriptions_Mutation_Response>;
  /** update multiples rows of table: "validator_descriptions" */
  update_validator_descriptions_many?: Maybe<Array<Maybe<Validator_Descriptions_Mutation_Response>>>;
  /** update data of the table: "validator_infos" */
  update_validator_infos?: Maybe<Validator_Infos_Mutation_Response>;
  /** update multiples rows of table: "validator_infos" */
  update_validator_infos_many?: Maybe<Array<Maybe<Validator_Infos_Mutation_Response>>>;
  /** update data of the table: "validator_status" */
  update_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** update single row of the table: "validator_status" */
  update_validator_status_by_pk?: Maybe<Validator_Status>;
  /** update multiples rows of table: "validator_status" */
  update_validator_status_many?: Maybe<Array<Maybe<Validator_Status_Mutation_Response>>>;
  /** update data of the table: "validator_voting_powers" */
  update_validator_voting_powers?: Maybe<Validator_Voting_Powers_Mutation_Response>;
  /** update multiples rows of table: "validator_voting_powers" */
  update_validator_voting_powers_many?: Maybe<Array<Maybe<Validator_Voting_Powers_Mutation_Response>>>;
  /** update data of the table: "validators" */
  update_validators?: Maybe<Validators_Mutation_Response>;
  /** update single row of the table: "validators" */
  update_validators_by_pk?: Maybe<Validators>;
  /** update multiples rows of table: "validators" */
  update_validators_many?: Maybe<Array<Maybe<Validators_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  address: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_DayArgs = {
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_HourArgs = {
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_MinuteArgs = {
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


/** mutation root */
export type Mutation_RootDelete_BalancesArgs = {
  where: Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BlocksArgs = {
  where: Blocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blocks_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Gov_ParamsArgs = {
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_DepositsArgs = {
  where: Proposal_Deposits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Staking_Pool_SnapshotsArgs = {
  where: Proposal_Staking_Pool_Snapshots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Tally_ResultsArgs = {
  where: Proposal_Tally_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_SnapshotsArgs = {
  where: Proposal_Validator_Status_Snapshots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_Snapshots_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_VotesArgs = {
  where: Proposal_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProposalsArgs = {
  where: Proposals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposals_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Staked_BalancesArgs = {
  where: Staked_Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_ParamsArgs = {
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_PoolArgs = {
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SupplyArgs = {
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_CommissionsArgs = {
  where: Validator_Commissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_DescriptionsArgs = {
  where: Validator_Descriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_InfosArgs = {
  where: Validator_Infos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_StatusArgs = {
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Status_By_PkArgs = {
  height: Scalars['bigint']['input'];
  validator_address: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_Voting_PowersArgs = {
  where: Validator_Voting_Powers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ValidatorsArgs = {
  where: Validators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validators_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_DayArgs = {
  objects: Array<Average_Block_Time_Per_Day_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Day_OneArgs = {
  object: Average_Block_Time_Per_Day_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_HourArgs = {
  objects: Array<Average_Block_Time_Per_Hour_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Hour_OneArgs = {
  object: Average_Block_Time_Per_Hour_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_MinuteArgs = {
  objects: Array<Average_Block_Time_Per_Minute_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Minute_OneArgs = {
  object: Average_Block_Time_Per_Minute_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BalancesArgs = {
  objects: Array<Balances_Insert_Input>;
  on_conflict?: InputMaybe<Balances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Balances_OneArgs = {
  object: Balances_Insert_Input;
  on_conflict?: InputMaybe<Balances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlocksArgs = {
  objects: Array<Blocks_Insert_Input>;
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blocks_OneArgs = {
  object: Blocks_Insert_Input;
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_ParamsArgs = {
  objects: Array<Gov_Params_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_Params_OneArgs = {
  object: Gov_Params_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_DepositsArgs = {
  objects: Array<Proposal_Deposits_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Deposits_OneArgs = {
  object: Proposal_Deposits_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_SnapshotsArgs = {
  objects: Array<Proposal_Staking_Pool_Snapshots_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_Snapshots_OneArgs = {
  object: Proposal_Staking_Pool_Snapshots_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_ResultsArgs = {
  objects: Array<Proposal_Tally_Results_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Tally_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_Results_OneArgs = {
  object: Proposal_Tally_Results_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Tally_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_SnapshotsArgs = {
  objects: Array<Proposal_Validator_Status_Snapshots_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_Snapshots_OneArgs = {
  object: Proposal_Validator_Status_Snapshots_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_VotesArgs = {
  objects: Array<Proposal_Votes_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Votes_OneArgs = {
  object: Proposal_Votes_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ProposalsArgs = {
  objects: Array<Proposals_Insert_Input>;
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposals_OneArgs = {
  object: Proposals_Insert_Input;
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staked_BalancesArgs = {
  objects: Array<Staked_Balances_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Staked_Balances_OneArgs = {
  object: Staked_Balances_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Staking_ParamsArgs = {
  objects: Array<Staking_Params_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Params_OneArgs = {
  object: Staking_Params_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Staking_PoolArgs = {
  objects: Array<Staking_Pool_Insert_Input>;
  on_conflict?: InputMaybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Pool_OneArgs = {
  object: Staking_Pool_Insert_Input;
  on_conflict?: InputMaybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SupplyArgs = {
  objects: Array<Supply_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Supply_OneArgs = {
  object: Supply_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_CommissionsArgs = {
  objects: Array<Validator_Commissions_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Commissions_OneArgs = {
  object: Validator_Commissions_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Validator_DescriptionsArgs = {
  objects: Array<Validator_Descriptions_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Descriptions_OneArgs = {
  object: Validator_Descriptions_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Validator_InfosArgs = {
  objects: Array<Validator_Infos_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Infos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Infos_OneArgs = {
  object: Validator_Infos_Insert_Input;
  on_conflict?: InputMaybe<Validator_Infos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_StatusArgs = {
  objects: Array<Validator_Status_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Status_OneArgs = {
  object: Validator_Status_Insert_Input;
  on_conflict?: InputMaybe<Validator_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_PowersArgs = {
  objects: Array<Validator_Voting_Powers_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_Powers_OneArgs = {
  object: Validator_Voting_Powers_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ValidatorsArgs = {
  objects: Array<Validators_Insert_Input>;
  on_conflict?: InputMaybe<Validators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validators_OneArgs = {
  object: Validators_Insert_Input;
  on_conflict?: InputMaybe<Validators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_DayArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  pk_columns: Average_Block_Time_Per_Day_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Day_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_HourArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  pk_columns: Average_Block_Time_Per_Hour_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Hour_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_MinuteArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  pk_columns: Average_Block_Time_Per_Minute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Minute_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BalancesArgs = {
  _inc?: InputMaybe<Balances_Inc_Input>;
  _set?: InputMaybe<Balances_Set_Input>;
  where: Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Balances_ManyArgs = {
  updates: Array<Balances_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BlocksArgs = {
  _inc?: InputMaybe<Blocks_Inc_Input>;
  _set?: InputMaybe<Blocks_Set_Input>;
  where: Blocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blocks_By_PkArgs = {
  _inc?: InputMaybe<Blocks_Inc_Input>;
  _set?: InputMaybe<Blocks_Set_Input>;
  pk_columns: Blocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blocks_ManyArgs = {
  updates: Array<Blocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_ParamsArgs = {
  _append?: InputMaybe<Gov_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Gov_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gov_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gov_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Gov_Params_Inc_Input>;
  _prepend?: InputMaybe<Gov_Params_Prepend_Input>;
  _set?: InputMaybe<Gov_Params_Set_Input>;
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_Params_ManyArgs = {
  updates: Array<Gov_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_DepositsArgs = {
  _inc?: InputMaybe<Proposal_Deposits_Inc_Input>;
  _set?: InputMaybe<Proposal_Deposits_Set_Input>;
  where: Proposal_Deposits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Deposits_ManyArgs = {
  updates: Array<Proposal_Deposits_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_SnapshotsArgs = {
  _inc?: InputMaybe<Proposal_Staking_Pool_Snapshots_Inc_Input>;
  _set?: InputMaybe<Proposal_Staking_Pool_Snapshots_Set_Input>;
  where: Proposal_Staking_Pool_Snapshots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_Snapshots_ManyArgs = {
  updates: Array<Proposal_Staking_Pool_Snapshots_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_ResultsArgs = {
  _inc?: InputMaybe<Proposal_Tally_Results_Inc_Input>;
  _set?: InputMaybe<Proposal_Tally_Results_Set_Input>;
  where: Proposal_Tally_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_Results_ManyArgs = {
  updates: Array<Proposal_Tally_Results_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_SnapshotsArgs = {
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshots_Inc_Input>;
  _set?: InputMaybe<Proposal_Validator_Status_Snapshots_Set_Input>;
  where: Proposal_Validator_Status_Snapshots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshots_By_PkArgs = {
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshots_Inc_Input>;
  _set?: InputMaybe<Proposal_Validator_Status_Snapshots_Set_Input>;
  pk_columns: Proposal_Validator_Status_Snapshots_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshots_ManyArgs = {
  updates: Array<Proposal_Validator_Status_Snapshots_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_VotesArgs = {
  _inc?: InputMaybe<Proposal_Votes_Inc_Input>;
  _set?: InputMaybe<Proposal_Votes_Set_Input>;
  where: Proposal_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Votes_ManyArgs = {
  updates: Array<Proposal_Votes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProposalsArgs = {
  _append?: InputMaybe<Proposals_Append_Input>;
  _delete_at_path?: InputMaybe<Proposals_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Proposals_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Proposals_Delete_Key_Input>;
  _inc?: InputMaybe<Proposals_Inc_Input>;
  _prepend?: InputMaybe<Proposals_Prepend_Input>;
  _set?: InputMaybe<Proposals_Set_Input>;
  where: Proposals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposals_By_PkArgs = {
  _append?: InputMaybe<Proposals_Append_Input>;
  _delete_at_path?: InputMaybe<Proposals_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Proposals_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Proposals_Delete_Key_Input>;
  _inc?: InputMaybe<Proposals_Inc_Input>;
  _prepend?: InputMaybe<Proposals_Prepend_Input>;
  _set?: InputMaybe<Proposals_Set_Input>;
  pk_columns: Proposals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposals_ManyArgs = {
  updates: Array<Proposals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staked_BalancesArgs = {
  _inc?: InputMaybe<Staked_Balances_Inc_Input>;
  _set?: InputMaybe<Staked_Balances_Set_Input>;
  where: Staked_Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staked_Balances_ManyArgs = {
  updates: Array<Staked_Balances_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_ParamsArgs = {
  _append?: InputMaybe<Staking_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Staking_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Staking_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Staking_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Staking_Params_Inc_Input>;
  _prepend?: InputMaybe<Staking_Params_Prepend_Input>;
  _set?: InputMaybe<Staking_Params_Set_Input>;
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Params_ManyArgs = {
  updates: Array<Staking_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_PoolArgs = {
  _inc?: InputMaybe<Staking_Pool_Inc_Input>;
  _set?: InputMaybe<Staking_Pool_Set_Input>;
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Pool_ManyArgs = {
  updates: Array<Staking_Pool_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SupplyArgs = {
  _inc?: InputMaybe<Supply_Inc_Input>;
  _set?: InputMaybe<Supply_Set_Input>;
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supply_ManyArgs = {
  updates: Array<Supply_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _append?: InputMaybe<Transactions_Append_Input>;
  _delete_at_path?: InputMaybe<Transactions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transactions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transactions_Delete_Key_Input>;
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _prepend?: InputMaybe<Transactions_Prepend_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_ManyArgs = {
  updates: Array<Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_CommissionsArgs = {
  _inc?: InputMaybe<Validator_Commissions_Inc_Input>;
  _set?: InputMaybe<Validator_Commissions_Set_Input>;
  where: Validator_Commissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Commissions_ManyArgs = {
  updates: Array<Validator_Commissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_DescriptionsArgs = {
  _inc?: InputMaybe<Validator_Descriptions_Inc_Input>;
  _set?: InputMaybe<Validator_Descriptions_Set_Input>;
  where: Validator_Descriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Descriptions_ManyArgs = {
  updates: Array<Validator_Descriptions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_InfosArgs = {
  _inc?: InputMaybe<Validator_Infos_Inc_Input>;
  _set?: InputMaybe<Validator_Infos_Set_Input>;
  where: Validator_Infos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Infos_ManyArgs = {
  updates: Array<Validator_Infos_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_StatusArgs = {
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  _set?: InputMaybe<Validator_Status_Set_Input>;
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Status_By_PkArgs = {
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  _set?: InputMaybe<Validator_Status_Set_Input>;
  pk_columns: Validator_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Status_ManyArgs = {
  updates: Array<Validator_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_PowersArgs = {
  _inc?: InputMaybe<Validator_Voting_Powers_Inc_Input>;
  _set?: InputMaybe<Validator_Voting_Powers_Set_Input>;
  where: Validator_Voting_Powers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_Powers_ManyArgs = {
  updates: Array<Validator_Voting_Powers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ValidatorsArgs = {
  _set?: InputMaybe<Validators_Set_Input>;
  where: Validators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validators_By_PkArgs = {
  _set?: InputMaybe<Validators_Set_Input>;
  pk_columns: Validators_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validators_ManyArgs = {
  updates: Array<Validators_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
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

/** columns and relationships of "proposal_deposits" */
export type Proposal_Deposits = {
  __typename?: 'proposal_deposits';
  /** An object relationship */
  account?: Maybe<Accounts>;
  amount?: Maybe<Array<Scalars['coin']['output']>>;
  /** An object relationship */
  block?: Maybe<Blocks>;
  depositor_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  proposal: Proposals;
  proposal_id: Scalars['Int']['output'];
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "proposal_deposits" */
export type Proposal_Deposits_Aggregate = {
  __typename?: 'proposal_deposits_aggregate';
  aggregate?: Maybe<Proposal_Deposits_Aggregate_Fields>;
  nodes: Array<Proposal_Deposits>;
};

export type Proposal_Deposits_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Deposits_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Deposits_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Deposits_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_deposits" */
export type Proposal_Deposits_Aggregate_Fields = {
  __typename?: 'proposal_deposits_aggregate_fields';
  avg?: Maybe<Proposal_Deposits_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Deposits_Max_Fields>;
  min?: Maybe<Proposal_Deposits_Min_Fields>;
  stddev?: Maybe<Proposal_Deposits_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Deposits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Deposits_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Deposits_Sum_Fields>;
  var_pop?: Maybe<Proposal_Deposits_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Deposits_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Deposits_Variance_Fields>;
};


/** aggregate fields of "proposal_deposits" */
export type Proposal_Deposits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_deposits" */
export type Proposal_Deposits_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposits_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Deposits_Max_Order_By>;
  min?: InputMaybe<Proposal_Deposits_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Deposits_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Deposits_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Deposits_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Deposits_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Deposits_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Deposits_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Deposits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_deposits" */
export type Proposal_Deposits_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Deposits_Insert_Input>;
};

/** aggregate avg on columns */
export type Proposal_Deposits_Avg_Fields = {
  __typename?: 'proposal_deposits_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposits". All fields are combined with a logical 'AND'. */
export type Proposal_Deposits_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposits_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Deposits_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Deposits_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  amount?: InputMaybe<Coin_Array_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  depositor_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Proposals_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "proposal_deposits" */
export type Proposal_Deposits_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_deposits" */
export type Proposal_Deposits_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Array<Scalars['coin']['input']>>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  depositor_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal?: InputMaybe<Proposals_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Proposal_Deposits_Max_Fields = {
  __typename?: 'proposal_deposits_max_fields';
  amount?: Maybe<Array<Scalars['coin']['output']>>;
  depositor_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Deposits_Min_Fields = {
  __typename?: 'proposal_deposits_min_fields';
  amount?: Maybe<Array<Scalars['coin']['output']>>;
  depositor_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_deposits" */
export type Proposal_Deposits_Mutation_Response = {
  __typename?: 'proposal_deposits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Deposits>;
};

/** Ordering options when selecting data from "proposal_deposits". */
export type Proposal_Deposits_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposals_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_deposits" */
export enum Proposal_Deposits_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "proposal_deposits" */
export type Proposal_Deposits_Set_Input = {
  amount?: InputMaybe<Array<Scalars['coin']['input']>>;
  depositor_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Deposits_Stddev_Fields = {
  __typename?: 'proposal_deposits_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Deposits_Stddev_Pop_Fields = {
  __typename?: 'proposal_deposits_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Deposits_Stddev_Samp_Fields = {
  __typename?: 'proposal_deposits_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_deposits" */
export type Proposal_Deposits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Deposits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Deposits_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Array<Scalars['coin']['input']>>;
  depositor_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Deposits_Sum_Fields = {
  __typename?: 'proposal_deposits_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Proposal_Deposits_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Deposits_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Deposits_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Deposits_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Deposits_Var_Pop_Fields = {
  __typename?: 'proposal_deposits_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Deposits_Var_Samp_Fields = {
  __typename?: 'proposal_deposits_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Deposits_Variance_Fields = {
  __typename?: 'proposal_deposits_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_deposits" */
export type Proposal_Deposits_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots = {
  __typename?: 'proposal_staking_pool_snapshots';
  /** An object relationship */
  block?: Maybe<Blocks>;
  bonded_tokens: Scalars['String']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens: Scalars['String']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposals>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Aggregate = {
  __typename?: 'proposal_staking_pool_snapshots_aggregate';
  aggregate?: Maybe<Proposal_Staking_Pool_Snapshots_Aggregate_Fields>;
  nodes: Array<Proposal_Staking_Pool_Snapshots>;
};

export type Proposal_Staking_Pool_Snapshots_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Staking_Pool_Snapshots_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Staking_Pool_Snapshots_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Aggregate_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_aggregate_fields';
  avg?: Maybe<Proposal_Staking_Pool_Snapshots_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Staking_Pool_Snapshots_Max_Fields>;
  min?: Maybe<Proposal_Staking_Pool_Snapshots_Min_Fields>;
  stddev?: Maybe<Proposal_Staking_Pool_Snapshots_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Staking_Pool_Snapshots_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Staking_Pool_Snapshots_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Staking_Pool_Snapshots_Sum_Fields>;
  var_pop?: Maybe<Proposal_Staking_Pool_Snapshots_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Staking_Pool_Snapshots_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Staking_Pool_Snapshots_Variance_Fields>;
};


/** aggregate fields of "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Staking_Pool_Snapshots_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Staking_Pool_Snapshots_Max_Order_By>;
  min?: InputMaybe<Proposal_Staking_Pool_Snapshots_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Staking_Pool_Snapshots_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Staking_Pool_Snapshots_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Staking_Pool_Snapshots_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Staking_Pool_Snapshots_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Staking_Pool_Snapshots_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Staking_Pool_Snapshots_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Staking_Pool_Snapshots_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Staking_Pool_Snapshots_Insert_Input>;
};

/** aggregate avg on columns */
export type Proposal_Staking_Pool_Snapshots_Avg_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshots". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshots_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposals_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Proposals_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Proposal_Staking_Pool_Snapshots_Max_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_max_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Max_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Staking_Pool_Snapshots_Min_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_min_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Min_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Mutation_Response = {
  __typename?: 'proposal_staking_pool_snapshots_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Staking_Pool_Snapshots>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshots". */
export type Proposal_Staking_Pool_Snapshots_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposals_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_staking_pool_snapshots" */
export enum Proposal_Staking_Pool_Snapshots_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** input type for updating data in table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Set_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Staking_Pool_Snapshots_Stddev_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Staking_Pool_Snapshots_Stddev_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Staking_Pool_Snapshots_Stddev_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Staking_Pool_Snapshots_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Staking_Pool_Snapshots_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Staking_Pool_Snapshots_Sum_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Proposal_Staking_Pool_Snapshots_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Staking_Pool_Snapshots_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Staking_Pool_Snapshots_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Staking_Pool_Snapshots_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Staking_Pool_Snapshots_Var_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Staking_Pool_Snapshots_Var_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Staking_Pool_Snapshots_Variance_Fields = {
  __typename?: 'proposal_staking_pool_snapshots_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_staking_pool_snapshots" */
export type Proposal_Staking_Pool_Snapshots_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_tally_results" */
export type Proposal_Tally_Results = {
  __typename?: 'proposal_tally_results';
  abstain: Scalars['String']['output'];
  /** An object relationship */
  block?: Maybe<Blocks>;
  height?: Maybe<Scalars['bigint']['output']>;
  no: Scalars['String']['output'];
  no_with_veto: Scalars['String']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposals>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  yes: Scalars['String']['output'];
};

/** aggregated selection of "proposal_tally_results" */
export type Proposal_Tally_Results_Aggregate = {
  __typename?: 'proposal_tally_results_aggregate';
  aggregate?: Maybe<Proposal_Tally_Results_Aggregate_Fields>;
  nodes: Array<Proposal_Tally_Results>;
};

export type Proposal_Tally_Results_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Tally_Results_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Tally_Results_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_tally_results" */
export type Proposal_Tally_Results_Aggregate_Fields = {
  __typename?: 'proposal_tally_results_aggregate_fields';
  avg?: Maybe<Proposal_Tally_Results_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Tally_Results_Max_Fields>;
  min?: Maybe<Proposal_Tally_Results_Min_Fields>;
  stddev?: Maybe<Proposal_Tally_Results_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Tally_Results_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Tally_Results_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Tally_Results_Sum_Fields>;
  var_pop?: Maybe<Proposal_Tally_Results_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Tally_Results_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Tally_Results_Variance_Fields>;
};


/** aggregate fields of "proposal_tally_results" */
export type Proposal_Tally_Results_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_tally_results" */
export type Proposal_Tally_Results_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Results_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Tally_Results_Max_Order_By>;
  min?: InputMaybe<Proposal_Tally_Results_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Tally_Results_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Tally_Results_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Tally_Results_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Tally_Results_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Tally_Results_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Tally_Results_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Tally_Results_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_tally_results" */
export type Proposal_Tally_Results_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Tally_Results_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Tally_Results_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Tally_Results_Avg_Fields = {
  __typename?: 'proposal_tally_results_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_results". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Results_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Results_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Tally_Results_Bool_Exp>>;
  abstain?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  no?: InputMaybe<String_Comparison_Exp>;
  no_with_veto?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposals_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  yes?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_tally_results" */
export enum Proposal_Tally_Results_Constraint {
  /** unique or primary key constraint on columns "no", "yes", "no_with_veto", "proposal_id", "abstain" */
  UniqueTally = 'unique_tally'
}

/** input type for incrementing numeric columns in table "proposal_tally_results" */
export type Proposal_Tally_Results_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_tally_results" */
export type Proposal_Tally_Results_Insert_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  no_with_veto?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Proposals_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Proposal_Tally_Results_Max_Fields = {
  __typename?: 'proposal_tally_results_max_fields';
  abstain?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  no?: Maybe<Scalars['String']['output']>;
  no_with_veto?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  yes?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Max_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Tally_Results_Min_Fields = {
  __typename?: 'proposal_tally_results_min_fields';
  abstain?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  no?: Maybe<Scalars['String']['output']>;
  no_with_veto?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  yes?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Min_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_tally_results" */
export type Proposal_Tally_Results_Mutation_Response = {
  __typename?: 'proposal_tally_results_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Tally_Results>;
};

/** on_conflict condition type for table "proposal_tally_results" */
export type Proposal_Tally_Results_On_Conflict = {
  constraint: Proposal_Tally_Results_Constraint;
  update_columns?: Array<Proposal_Tally_Results_Update_Column>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_tally_results". */
export type Proposal_Tally_Results_Order_By = {
  abstain?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposals_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_tally_results" */
export enum Proposal_Tally_Results_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** input type for updating data in table "proposal_tally_results" */
export type Proposal_Tally_Results_Set_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  no_with_veto?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Tally_Results_Stddev_Fields = {
  __typename?: 'proposal_tally_results_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Tally_Results_Stddev_Pop_Fields = {
  __typename?: 'proposal_tally_results_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Tally_Results_Stddev_Samp_Fields = {
  __typename?: 'proposal_tally_results_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_tally_results" */
export type Proposal_Tally_Results_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Tally_Results_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Tally_Results_Stream_Cursor_Value_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  no_with_veto?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Tally_Results_Sum_Fields = {
  __typename?: 'proposal_tally_results_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_tally_results" */
export enum Proposal_Tally_Results_Update_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

export type Proposal_Tally_Results_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Tally_Results_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Tally_Results_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Tally_Results_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Tally_Results_Var_Pop_Fields = {
  __typename?: 'proposal_tally_results_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Tally_Results_Var_Samp_Fields = {
  __typename?: 'proposal_tally_results_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Tally_Results_Variance_Fields = {
  __typename?: 'proposal_tally_results_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_tally_results" */
export type Proposal_Tally_Results_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots = {
  __typename?: 'proposal_validator_status_snapshots';
  /** An object relationship */
  block?: Maybe<Blocks>;
  height?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['Int']['output'];
  jailed: Scalars['Boolean']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposals>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
  /** An object relationship */
  validator: Validators;
  validator_address: Scalars['String']['output'];
  voting_power: Scalars['bigint']['output'];
};

/** aggregated selection of "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Aggregate = {
  __typename?: 'proposal_validator_status_snapshots_aggregate';
  aggregate?: Maybe<Proposal_Validator_Status_Snapshots_Aggregate_Fields>;
  nodes: Array<Proposal_Validator_Status_Snapshots>;
};

export type Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_And = {
  arguments: Proposal_Validator_Status_Snapshots_Select_Column_Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Proposal_Validator_Status_Snapshots_Select_Column_Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Aggregate_Fields = {
  __typename?: 'proposal_validator_status_snapshots_aggregate_fields';
  avg?: Maybe<Proposal_Validator_Status_Snapshots_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Validator_Status_Snapshots_Max_Fields>;
  min?: Maybe<Proposal_Validator_Status_Snapshots_Min_Fields>;
  stddev?: Maybe<Proposal_Validator_Status_Snapshots_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Validator_Status_Snapshots_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Validator_Status_Snapshots_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Validator_Status_Snapshots_Sum_Fields>;
  var_pop?: Maybe<Proposal_Validator_Status_Snapshots_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Validator_Status_Snapshots_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Validator_Status_Snapshots_Variance_Fields>;
};


/** aggregate fields of "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshots_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Validator_Status_Snapshots_Max_Order_By>;
  min?: InputMaybe<Proposal_Validator_Status_Snapshots_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshots_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshots_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshots_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Validator_Status_Snapshots_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshots_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshots_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Validator_Status_Snapshots_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Validator_Status_Snapshots_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshots_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Validator_Status_Snapshots_Avg_Fields = {
  __typename?: 'proposal_validator_status_snapshots_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshots". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshots_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Proposals_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validators_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_validator_status_snapshots" */
export enum Proposal_Validator_Status_Snapshots_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalValidatorStatusSnapshotsPkey = 'proposal_validator_status_snapshots_pkey'
}

/** input type for incrementing numeric columns in table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  proposal?: InputMaybe<Proposals_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator?: InputMaybe<Validators_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Proposal_Validator_Status_Snapshots_Max_Fields = {
  __typename?: 'proposal_validator_status_snapshots_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Validator_Status_Snapshots_Min_Fields = {
  __typename?: 'proposal_validator_status_snapshots_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Mutation_Response = {
  __typename?: 'proposal_validator_status_snapshots_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Validator_Status_Snapshots>;
};

/** on_conflict condition type for table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_On_Conflict = {
  constraint: Proposal_Validator_Status_Snapshots_Constraint;
  update_columns?: Array<Proposal_Validator_Status_Snapshots_Update_Column>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshots". */
export type Proposal_Validator_Status_Snapshots_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposals_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validators_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposal_validator_status_snapshots */
export type Proposal_Validator_Status_Snapshots_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "proposal_validator_status_snapshots" */
export enum Proposal_Validator_Status_Snapshots_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** select "proposal_validator_status_snapshots_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposal_validator_status_snapshots" */
export enum Proposal_Validator_Status_Snapshots_Select_Column_Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "proposal_validator_status_snapshots_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposal_validator_status_snapshots" */
export enum Proposal_Validator_Status_Snapshots_Select_Column_Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** input type for updating data in table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Validator_Status_Snapshots_Stddev_Fields = {
  __typename?: 'proposal_validator_status_snapshots_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Validator_Status_Snapshots_Stddev_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshots_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Validator_Status_Snapshots_Stddev_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshots_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Validator_Status_Snapshots_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Validator_Status_Snapshots_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Validator_Status_Snapshots_Sum_Fields = {
  __typename?: 'proposal_validator_status_snapshots_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_validator_status_snapshots" */
export enum Proposal_Validator_Status_Snapshots_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Proposal_Validator_Status_Snapshots_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshots_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Validator_Status_Snapshots_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Validator_Status_Snapshots_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Validator_Status_Snapshots_Var_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshots_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Validator_Status_Snapshots_Var_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshots_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Validator_Status_Snapshots_Variance_Fields = {
  __typename?: 'proposal_validator_status_snapshots_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshots" */
export type Proposal_Validator_Status_Snapshots_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_votes" */
export type Proposal_Votes = {
  __typename?: 'proposal_votes';
  /** An object relationship */
  account: Accounts;
  /** An object relationship */
  block?: Maybe<Blocks>;
  height?: Maybe<Scalars['bigint']['output']>;
  is_valid: Scalars['Boolean']['output'];
  option: Scalars['String']['output'];
  /** An object relationship */
  proposal: Proposals;
  proposal_id: Scalars['Int']['output'];
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  voter_address: Scalars['String']['output'];
  weight: Scalars['String']['output'];
};

/** aggregated selection of "proposal_votes" */
export type Proposal_Votes_Aggregate = {
  __typename?: 'proposal_votes_aggregate';
  aggregate?: Maybe<Proposal_Votes_Aggregate_Fields>;
  nodes: Array<Proposal_Votes>;
};

export type Proposal_Votes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Proposal_Votes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Proposal_Votes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Proposal_Votes_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Votes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Proposal_Votes_Select_Column_Proposal_Votes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Votes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Votes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Proposal_Votes_Select_Column_Proposal_Votes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Votes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Votes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Votes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_votes" */
export type Proposal_Votes_Aggregate_Fields = {
  __typename?: 'proposal_votes_aggregate_fields';
  avg?: Maybe<Proposal_Votes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Votes_Max_Fields>;
  min?: Maybe<Proposal_Votes_Min_Fields>;
  stddev?: Maybe<Proposal_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Votes_Sum_Fields>;
  var_pop?: Maybe<Proposal_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Votes_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Votes_Variance_Fields>;
};


/** aggregate fields of "proposal_votes" */
export type Proposal_Votes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_votes" */
export type Proposal_Votes_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Votes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Votes_Max_Order_By>;
  min?: InputMaybe<Proposal_Votes_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Votes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Votes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Votes_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Votes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Votes_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_votes" */
export type Proposal_Votes_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Votes_Insert_Input>;
};

/** aggregate avg on columns */
export type Proposal_Votes_Avg_Fields = {
  __typename?: 'proposal_votes_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_votes" */
export type Proposal_Votes_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_votes". All fields are combined with a logical 'AND'. */
export type Proposal_Votes_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Votes_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Votes_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Votes_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposals_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "proposal_votes" */
export type Proposal_Votes_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_votes" */
export type Proposal_Votes_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Proposals_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Proposal_Votes_Max_Fields = {
  __typename?: 'proposal_votes_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  option?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  voter_address?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "proposal_votes" */
export type Proposal_Votes_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Votes_Min_Fields = {
  __typename?: 'proposal_votes_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  option?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  voter_address?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "proposal_votes" */
export type Proposal_Votes_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_votes" */
export type Proposal_Votes_Mutation_Response = {
  __typename?: 'proposal_votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Votes>;
};

/** Ordering options when selecting data from "proposal_votes". */
export type Proposal_Votes_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  height?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposals_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_votes" */
export enum Proposal_Votes_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address',
  /** column name */
  Weight = 'weight'
}

/** select "proposal_votes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposal_votes" */
export enum Proposal_Votes_Select_Column_Proposal_Votes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** select "proposal_votes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposal_votes" */
export enum Proposal_Votes_Select_Column_Proposal_Votes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** input type for updating data in table "proposal_votes" */
export type Proposal_Votes_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Votes_Stddev_Fields = {
  __typename?: 'proposal_votes_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_votes" */
export type Proposal_Votes_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Votes_Stddev_Pop_Fields = {
  __typename?: 'proposal_votes_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_votes" */
export type Proposal_Votes_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Votes_Stddev_Samp_Fields = {
  __typename?: 'proposal_votes_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_votes" */
export type Proposal_Votes_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_votes" */
export type Proposal_Votes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Votes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Votes_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Votes_Sum_Fields = {
  __typename?: 'proposal_votes_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_votes" */
export type Proposal_Votes_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Proposal_Votes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Votes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Votes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Votes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Votes_Var_Pop_Fields = {
  __typename?: 'proposal_votes_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_votes" */
export type Proposal_Votes_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Votes_Var_Samp_Fields = {
  __typename?: 'proposal_votes_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_votes" */
export type Proposal_Votes_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Votes_Variance_Fields = {
  __typename?: 'proposal_votes_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_votes" */
export type Proposal_Votes_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposals" */
export type Proposals = {
  __typename?: 'proposals';
  /** An object relationship */
  account: Accounts;
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  content: Scalars['jsonb']['output'];
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description: Scalars['String']['output'];
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposits>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposits_Aggregate;
  proposal_route: Scalars['String']['output'];
  /** An array relationship */
  proposal_staking_pool_snapshots: Array<Proposal_Staking_Pool_Snapshots>;
  /** An aggregate relationship */
  proposal_staking_pool_snapshots_aggregate: Proposal_Staking_Pool_Snapshots_Aggregate;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Results>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Results_Aggregate;
  proposal_type: Scalars['String']['output'];
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshots>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshots_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Votes>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Votes_Aggregate;
  proposer_address: Scalars['String']['output'];
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time: Scalars['timestamp']['output'];
  title: Scalars['String']['output'];
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "proposals" */
export type ProposalsContentArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Staking_Pool_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Staking_Pool_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


/** columns and relationships of "proposals" */
export type ProposalsProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};

/** aggregated selection of "proposals" */
export type Proposals_Aggregate = {
  __typename?: 'proposals_aggregate';
  aggregate?: Maybe<Proposals_Aggregate_Fields>;
  nodes: Array<Proposals>;
};

export type Proposals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposals_Aggregate_Bool_Exp_Count>;
};

export type Proposals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposals" */
export type Proposals_Aggregate_Fields = {
  __typename?: 'proposals_aggregate_fields';
  avg?: Maybe<Proposals_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposals_Max_Fields>;
  min?: Maybe<Proposals_Min_Fields>;
  stddev?: Maybe<Proposals_Stddev_Fields>;
  stddev_pop?: Maybe<Proposals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposals_Stddev_Samp_Fields>;
  sum?: Maybe<Proposals_Sum_Fields>;
  var_pop?: Maybe<Proposals_Var_Pop_Fields>;
  var_samp?: Maybe<Proposals_Var_Samp_Fields>;
  variance?: Maybe<Proposals_Variance_Fields>;
};


/** aggregate fields of "proposals" */
export type Proposals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposals" */
export type Proposals_Aggregate_Order_By = {
  avg?: InputMaybe<Proposals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposals_Max_Order_By>;
  min?: InputMaybe<Proposals_Min_Order_By>;
  stddev?: InputMaybe<Proposals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposals_Sum_Order_By>;
  var_pop?: InputMaybe<Proposals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposals_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposals_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Proposals_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "proposals" */
export type Proposals_Arr_Rel_Insert_Input = {
  data: Array<Proposals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposals_Avg_Fields = {
  __typename?: 'proposals_avg_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by avg() on columns of table "proposals" */
export type Proposals_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposals". All fields are combined with a logical 'AND'. */
export type Proposals_Bool_Exp = {
  _and?: InputMaybe<Array<Proposals_Bool_Exp>>;
  _not?: InputMaybe<Proposals_Bool_Exp>;
  _or?: InputMaybe<Array<Proposals_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  active_first_order?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  failed_first_order?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  passed_first_order?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposits_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposits_Aggregate_Bool_Exp>;
  proposal_route?: InputMaybe<String_Comparison_Exp>;
  proposal_staking_pool_snapshots?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
  proposal_staking_pool_snapshots_aggregate?: InputMaybe<Proposal_Staking_Pool_Snapshots_Aggregate_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Results_Aggregate_Bool_Exp>;
  proposal_type?: InputMaybe<String_Comparison_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Votes_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Votes_Aggregate_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  rejected_first_order?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposals" */
export enum Proposals_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalsPkey = 'proposals_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Proposals_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Proposals_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Proposals_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "proposals" */
export type Proposals_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposals" */
export type Proposals_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['jsonb']['input']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_deposits?: InputMaybe<Proposal_Deposits_Arr_Rel_Insert_Input>;
  proposal_route?: InputMaybe<Scalars['String']['input']>;
  proposal_staking_pool_snapshots?: InputMaybe<Proposal_Staking_Pool_Snapshots_Arr_Rel_Insert_Input>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Results_Arr_Rel_Insert_Input>;
  proposal_type?: InputMaybe<Scalars['String']['input']>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshots_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Votes_Arr_Rel_Insert_Input>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Proposals_Max_Fields = {
  __typename?: 'proposals_max_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  proposal_route?: Maybe<Scalars['String']['output']>;
  proposal_type?: Maybe<Scalars['String']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "proposals" */
export type Proposals_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposals_Min_Fields = {
  __typename?: 'proposals_min_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  proposal_route?: Maybe<Scalars['String']['output']>;
  proposal_type?: Maybe<Scalars['String']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "proposals" */
export type Proposals_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposals" */
export type Proposals_Mutation_Response = {
  __typename?: 'proposals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposals>;
};

/** input type for inserting object relation for remote table "proposals" */
export type Proposals_Obj_Rel_Insert_Input = {
  data: Proposals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposals_On_Conflict>;
};

/** on_conflict condition type for table "proposals" */
export type Proposals_On_Conflict = {
  constraint: Proposals_Constraint;
  update_columns?: Array<Proposals_Update_Column>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};

/** Ordering options when selecting data from "proposals". */
export type Proposals_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  active_first_order?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  failed_first_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  passed_first_order?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposits_Aggregate_Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_staking_pool_snapshots_aggregate?: InputMaybe<Proposal_Staking_Pool_Snapshots_Aggregate_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Results_Aggregate_Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Votes_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  rejected_first_order?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposals */
export type Proposals_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Proposals_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "proposals" */
export enum Proposals_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** input type for updating data in table "proposals" */
export type Proposals_Set_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_route?: InputMaybe<Scalars['String']['input']>;
  proposal_type?: InputMaybe<Scalars['String']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Proposals_Stddev_Fields = {
  __typename?: 'proposals_stddev_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by stddev() on columns of table "proposals" */
export type Proposals_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposals_Stddev_Pop_Fields = {
  __typename?: 'proposals_stddev_pop_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by stddev_pop() on columns of table "proposals" */
export type Proposals_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposals_Stddev_Samp_Fields = {
  __typename?: 'proposals_stddev_samp_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by stddev_samp() on columns of table "proposals" */
export type Proposals_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposals" */
export type Proposals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposals_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_route?: InputMaybe<Scalars['String']['input']>;
  proposal_type?: InputMaybe<Scalars['String']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Proposals_Sum_Fields = {
  __typename?: 'proposals_sum_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposals" */
export type Proposals_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "proposals" */
export enum Proposals_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

export type Proposals_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Proposals_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Proposals_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Proposals_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Proposals_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposals_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Proposals_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposals_Var_Pop_Fields = {
  __typename?: 'proposals_var_pop_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by var_pop() on columns of table "proposals" */
export type Proposals_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposals_Var_Samp_Fields = {
  __typename?: 'proposals_var_samp_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by var_samp() on columns of table "proposals" */
export type Proposals_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposals_Variance_Fields = {
  __typename?: 'proposals_variance_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by variance() on columns of table "proposals" */
export type Proposals_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  /** An array relationship */
  gov_params: Array<Gov_Params>;
  /** An aggregate relationship */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposits>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposits_Aggregate;
  /** An array relationship */
  proposal_staking_pool_snapshots: Array<Proposal_Staking_Pool_Snapshots>;
  /** An aggregate relationship */
  proposal_staking_pool_snapshots_aggregate: Proposal_Staking_Pool_Snapshots_Aggregate;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Results>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Results_Aggregate;
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshots>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshots_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshots" using primary key columns */
  proposal_validator_status_snapshots_by_pk?: Maybe<Proposal_Validator_Status_Snapshots>;
  /** An array relationship */
  proposal_votes: Array<Proposal_Votes>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Votes_Aggregate;
  /** An array relationship */
  proposals: Array<Proposals>;
  /** An aggregate relationship */
  proposals_aggregate: Proposals_Aggregate;
  /** fetch data from the table: "proposals" using primary key columns */
  proposals_by_pk?: Maybe<Proposals>;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** An array relationship */
  validator_commissions: Array<Validator_Commissions>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commissions_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Descriptions>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Descriptions_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Infos>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Infos_Aggregate;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Powers>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Powers_Aggregate;
  /** fetch data from the table: "validators" */
  validators: Array<Validators>;
  /** fetch aggregated fields from the table: "validators" */
  validators_aggregate: Validators_Aggregate;
  /** fetch data from the table: "validators" using primary key columns */
  validators_by_pk?: Maybe<Validators>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Query_RootBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Query_RootBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Query_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Query_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Query_RootBlocks_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


export type Query_RootProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


export type Query_RootProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


export type Query_RootProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshots_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


export type Query_RootProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


export type Query_RootProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};


export type Query_RootProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};


export type Query_RootProposals_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Query_RootStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


export type Query_RootValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


export type Query_RootValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


export type Query_RootValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


export type Query_RootValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


export type Query_RootValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  height: Scalars['bigint']['input'];
  validator_address: Scalars['String']['input'];
};


export type Query_RootValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};


export type Query_RootValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};


export type Query_RootValidatorsArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};


export type Query_RootValidators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};


export type Query_RootValidators_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};

/** columns and relationships of "staked_balances" */
export type Staked_Balances = {
  __typename?: 'staked_balances';
  /** An object relationship */
  account?: Maybe<Accounts>;
  amount: Scalars['coin_scalar']['output'];
  /** An object relationship */
  block?: Maybe<Blocks>;
  delegator?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  shares: Scalars['numeric']['output'];
  validator?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  validatorByValidator?: Maybe<Validators>;
};

/** aggregated selection of "staked_balances" */
export type Staked_Balances_Aggregate = {
  __typename?: 'staked_balances_aggregate';
  aggregate?: Maybe<Staked_Balances_Aggregate_Fields>;
  nodes: Array<Staked_Balances>;
};

export type Staked_Balances_Aggregate_Bool_Exp = {
  count?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp_Count>;
};

export type Staked_Balances_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Staked_Balances_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "staked_balances" */
export type Staked_Balances_Aggregate_Fields = {
  __typename?: 'staked_balances_aggregate_fields';
  avg?: Maybe<Staked_Balances_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staked_Balances_Max_Fields>;
  min?: Maybe<Staked_Balances_Min_Fields>;
  stddev?: Maybe<Staked_Balances_Stddev_Fields>;
  stddev_pop?: Maybe<Staked_Balances_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staked_Balances_Stddev_Samp_Fields>;
  sum?: Maybe<Staked_Balances_Sum_Fields>;
  var_pop?: Maybe<Staked_Balances_Var_Pop_Fields>;
  var_samp?: Maybe<Staked_Balances_Var_Samp_Fields>;
  variance?: Maybe<Staked_Balances_Variance_Fields>;
};


/** aggregate fields of "staked_balances" */
export type Staked_Balances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "staked_balances" */
export type Staked_Balances_Aggregate_Order_By = {
  avg?: InputMaybe<Staked_Balances_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Staked_Balances_Max_Order_By>;
  min?: InputMaybe<Staked_Balances_Min_Order_By>;
  stddev?: InputMaybe<Staked_Balances_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Staked_Balances_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Staked_Balances_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Staked_Balances_Sum_Order_By>;
  var_pop?: InputMaybe<Staked_Balances_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Staked_Balances_Var_Samp_Order_By>;
  variance?: InputMaybe<Staked_Balances_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "staked_balances" */
export type Staked_Balances_Arr_Rel_Insert_Input = {
  data: Array<Staked_Balances_Insert_Input>;
};

/** aggregate avg on columns */
export type Staked_Balances_Avg_Fields = {
  __typename?: 'staked_balances_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "staked_balances" */
export type Staked_Balances_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "staked_balances". All fields are combined with a logical 'AND'. */
export type Staked_Balances_Bool_Exp = {
  _and?: InputMaybe<Array<Staked_Balances_Bool_Exp>>;
  _not?: InputMaybe<Staked_Balances_Bool_Exp>;
  _or?: InputMaybe<Array<Staked_Balances_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  amount?: InputMaybe<Coin_Scalar_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  delegator?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  shares?: InputMaybe<Numeric_Comparison_Exp>;
  validator?: InputMaybe<String_Comparison_Exp>;
  validatorByValidator?: InputMaybe<Validators_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "staked_balances" */
export type Staked_Balances_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "staked_balances" */
export type Staked_Balances_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['coin_scalar']['input']>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
  validatorByValidator?: InputMaybe<Validators_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Staked_Balances_Max_Fields = {
  __typename?: 'staked_balances_max_fields';
  amount?: Maybe<Scalars['coin_scalar']['output']>;
  delegator?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  validator?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "staked_balances" */
export type Staked_Balances_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  delegator?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  validator?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Staked_Balances_Min_Fields = {
  __typename?: 'staked_balances_min_fields';
  amount?: Maybe<Scalars['coin_scalar']['output']>;
  delegator?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  validator?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "staked_balances" */
export type Staked_Balances_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  delegator?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  validator?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "staked_balances" */
export type Staked_Balances_Mutation_Response = {
  __typename?: 'staked_balances_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staked_Balances>;
};

/** Ordering options when selecting data from "staked_balances". */
export type Staked_Balances_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  delegator?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  validator?: InputMaybe<Order_By>;
  validatorByValidator?: InputMaybe<Validators_Order_By>;
};

/** select columns of table "staked_balances" */
export enum Staked_Balances_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Delegator = 'delegator',
  /** column name */
  Height = 'height',
  /** column name */
  Shares = 'shares',
  /** column name */
  Validator = 'validator'
}

/** input type for updating data in table "staked_balances" */
export type Staked_Balances_Set_Input = {
  amount?: InputMaybe<Scalars['coin_scalar']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staked_Balances_Stddev_Fields = {
  __typename?: 'staked_balances_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "staked_balances" */
export type Staked_Balances_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Staked_Balances_Stddev_Pop_Fields = {
  __typename?: 'staked_balances_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "staked_balances" */
export type Staked_Balances_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Staked_Balances_Stddev_Samp_Fields = {
  __typename?: 'staked_balances_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "staked_balances" */
export type Staked_Balances_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "staked_balances" */
export type Staked_Balances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staked_Balances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staked_Balances_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['coin_scalar']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staked_Balances_Sum_Fields = {
  __typename?: 'staked_balances_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "staked_balances" */
export type Staked_Balances_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

export type Staked_Balances_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staked_Balances_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staked_Balances_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staked_Balances_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staked_Balances_Var_Pop_Fields = {
  __typename?: 'staked_balances_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "staked_balances" */
export type Staked_Balances_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Staked_Balances_Var_Samp_Fields = {
  __typename?: 'staked_balances_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "staked_balances" */
export type Staked_Balances_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Staked_Balances_Variance_Fields = {
  __typename?: 'staked_balances_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "staked_balances" */
export type Staked_Balances_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params';
  height?: Maybe<Scalars['bigint']['output']>;
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "staking_params" */
export type Staking_Params_Aggregate = {
  __typename?: 'staking_params_aggregate';
  aggregate?: Maybe<Staking_Params_Aggregate_Fields>;
  nodes: Array<Staking_Params>;
};

/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_Fields = {
  __typename?: 'staking_params_aggregate_fields';
  avg?: Maybe<Staking_Params_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staking_Params_Max_Fields>;
  min?: Maybe<Staking_Params_Min_Fields>;
  stddev?: Maybe<Staking_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Params_Sum_Fields>;
  var_pop?: Maybe<Staking_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Params_Var_Samp_Fields>;
  variance?: Maybe<Staking_Params_Variance_Fields>;
};


/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Staking_Params_Avg_Fields = {
  __typename?: 'staking_params_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  _not?: InputMaybe<Staking_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Staking_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Staking_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Staking_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "staking_params" */
export type Staking_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "staking_params" */
export type Staking_Params_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Staking_Params_Max_Fields = {
  __typename?: 'staking_params_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Staking_Params_Min_Fields = {
  __typename?: 'staking_params_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "staking_params" */
export type Staking_Params_Mutation_Response = {
  __typename?: 'staking_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Params>;
};

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "staking_params" */
export type Staking_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate stddev on columns */
export type Staking_Params_Stddev_Fields = {
  __typename?: 'staking_params_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Params_Stddev_Pop_Fields = {
  __typename?: 'staking_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Params_Stddev_Samp_Fields = {
  __typename?: 'staking_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "staking_params" */
export type Staking_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type Staking_Params_Sum_Fields = {
  __typename?: 'staking_params_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

export type Staking_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Staking_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Staking_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Staking_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Staking_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staking_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Staking_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staking_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staking_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Params_Var_Pop_Fields = {
  __typename?: 'staking_params_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Staking_Params_Var_Samp_Fields = {
  __typename?: 'staking_params_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Staking_Params_Variance_Fields = {
  __typename?: 'staking_params_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['String']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens: Scalars['String']['output'];
};

/** aggregated selection of "staking_pool" */
export type Staking_Pool_Aggregate = {
  __typename?: 'staking_pool_aggregate';
  aggregate?: Maybe<Staking_Pool_Aggregate_Fields>;
  nodes: Array<Staking_Pool>;
};

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_Fields = {
  __typename?: 'staking_pool_aggregate_fields';
  avg?: Maybe<Staking_Pool_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staking_Pool_Max_Fields>;
  min?: Maybe<Staking_Pool_Min_Fields>;
  stddev?: Maybe<Staking_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Pool_Sum_Fields>;
  var_pop?: Maybe<Staking_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Pool_Var_Samp_Fields>;
  variance?: Maybe<Staking_Pool_Variance_Fields>;
};


/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Staking_Pool_Avg_Fields = {
  __typename?: 'staking_pool_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: InputMaybe<Staking_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staking_pool" */
export enum Staking_Pool_Constraint {
  /** unique or primary key constraint on columns "not_bonded_tokens", "bonded_tokens" */
  UniquePool = 'unique_pool'
}

/** input type for incrementing numeric columns in table "staking_pool" */
export type Staking_Pool_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "staking_pool" */
export type Staking_Pool_Insert_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Staking_Pool_Max_Fields = {
  __typename?: 'staking_pool_max_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Staking_Pool_Min_Fields = {
  __typename?: 'staking_pool_min_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "staking_pool" */
export type Staking_Pool_Mutation_Response = {
  __typename?: 'staking_pool_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Pool>;
};

/** on_conflict condition type for table "staking_pool" */
export type Staking_Pool_On_Conflict = {
  constraint: Staking_Pool_Constraint;
  update_columns?: Array<Staking_Pool_Update_Column>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens'
}

/** input type for updating data in table "staking_pool" */
export type Staking_Pool_Set_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staking_Pool_Stddev_Fields = {
  __typename?: 'staking_pool_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'staking_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'staking_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "staking_pool" */
export type Staking_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Pool_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staking_Pool_Sum_Fields = {
  __typename?: 'staking_pool_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "staking_pool" */
export enum Staking_Pool_Update_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens'
}

export type Staking_Pool_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staking_Pool_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staking_Pool_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staking_Pool_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Pool_Var_Pop_Fields = {
  __typename?: 'staking_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Staking_Pool_Var_Samp_Fields = {
  __typename?: 'staking_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Staking_Pool_Variance_Fields = {
  __typename?: 'staking_pool_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_day" */
  average_block_time_per_day_stream: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_hour" */
  average_block_time_per_hour_stream: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_minute" */
  average_block_time_per_minute_stream: Array<Average_Block_Time_Per_Minute>;
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** fetch data from the table in a streaming manner: "balances" */
  balances_stream: Array<Balances>;
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  /** fetch data from the table in a streaming manner: "blocks" */
  blocks_stream: Array<Blocks>;
  /** An array relationship */
  gov_params: Array<Gov_Params>;
  /** An aggregate relationship */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table in a streaming manner: "gov_params" */
  gov_params_stream: Array<Gov_Params>;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposits>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposits_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_deposits" */
  proposal_deposits_stream: Array<Proposal_Deposits>;
  /** An array relationship */
  proposal_staking_pool_snapshots: Array<Proposal_Staking_Pool_Snapshots>;
  /** An aggregate relationship */
  proposal_staking_pool_snapshots_aggregate: Proposal_Staking_Pool_Snapshots_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshots" */
  proposal_staking_pool_snapshots_stream: Array<Proposal_Staking_Pool_Snapshots>;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Results>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Results_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_tally_results" */
  proposal_tally_results_stream: Array<Proposal_Tally_Results>;
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshots>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshots_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshots" using primary key columns */
  proposal_validator_status_snapshots_by_pk?: Maybe<Proposal_Validator_Status_Snapshots>;
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshots" */
  proposal_validator_status_snapshots_stream: Array<Proposal_Validator_Status_Snapshots>;
  /** An array relationship */
  proposal_votes: Array<Proposal_Votes>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Votes_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_votes" */
  proposal_votes_stream: Array<Proposal_Votes>;
  /** An array relationship */
  proposals: Array<Proposals>;
  /** An aggregate relationship */
  proposals_aggregate: Proposals_Aggregate;
  /** fetch data from the table: "proposals" using primary key columns */
  proposals_by_pk?: Maybe<Proposals>;
  /** fetch data from the table in a streaming manner: "proposals" */
  proposals_stream: Array<Proposals>;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** fetch data from the table in a streaming manner: "staked_balances" */
  staked_balances_stream: Array<Staked_Balances>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table in a streaming manner: "staking_params" */
  staking_params_stream: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table in a streaming manner: "staking_pool" */
  staking_pool_stream: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table in a streaming manner: "supply" */
  supply_stream: Array<Supply>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream: Array<Transactions>;
  /** An array relationship */
  validator_commissions: Array<Validator_Commissions>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commissions_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_commissions" */
  validator_commissions_stream: Array<Validator_Commissions>;
  /** An array relationship */
  validator_descriptions: Array<Validator_Descriptions>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Descriptions_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_descriptions" */
  validator_descriptions_stream: Array<Validator_Descriptions>;
  /** An array relationship */
  validator_infos: Array<Validator_Infos>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Infos_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_infos" */
  validator_infos_stream: Array<Validator_Infos>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator_status" */
  validator_status_stream: Array<Validator_Status>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Powers>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Powers_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_voting_powers" */
  validator_voting_powers_stream: Array<Validator_Voting_Powers>;
  /** fetch data from the table: "validators" */
  validators: Array<Validators>;
  /** fetch aggregated fields from the table: "validators" */
  validators_aggregate: Validators_Aggregate;
  /** fetch data from the table: "validators" using primary key columns */
  validators_by_pk?: Maybe<Validators>;
  /** fetch data from the table in a streaming manner: "validators" */
  validators_stream: Array<Validators>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Subscription_RootAverage_Block_Time_Per_Day_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Day_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Subscription_RootAverage_Block_Time_Per_Hour_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Hour_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Subscription_RootAverage_Block_Time_Per_Minute_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Minute_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Subscription_RootBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Subscription_RootBalances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Balances_Stream_Cursor_Input>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Subscription_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Subscription_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Subscription_RootBlocks_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


export type Subscription_RootBlocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Blocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Gov_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


export type Subscription_RootProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposits_Order_By>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


export type Subscription_RootProposal_Deposits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Deposits_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Deposits_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshots_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Staking_Pool_Snapshots_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshots_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Results_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Results_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Tally_Results_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Tally_Results_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshots_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProposal_Validator_Status_Snapshots_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Validator_Status_Snapshots_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


export type Subscription_RootProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


export type Subscription_RootProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Votes_Order_By>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


export type Subscription_RootProposal_Votes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Votes_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Votes_Bool_Exp>;
};


export type Subscription_RootProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};


export type Subscription_RootProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposals_Order_By>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};


export type Subscription_RootProposals_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProposals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposals_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposals_Bool_Exp>;
};


export type Subscription_RootStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Subscription_RootStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Subscription_RootStaked_Balances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staked_Balances_Stream_Cursor_Input>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staking_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staking_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Supply_Stream_Cursor_Input>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


export type Subscription_RootValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


export type Subscription_RootValidator_Commissions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Commissions_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


export type Subscription_RootValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


export type Subscription_RootValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


export type Subscription_RootValidator_Descriptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Descriptions_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


export type Subscription_RootValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


export type Subscription_RootValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Infos_Order_By>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


export type Subscription_RootValidator_Infos_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Infos_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  height: Scalars['bigint']['input'];
  validator_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Powers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Voting_Powers_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};


export type Subscription_RootValidatorsArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};


export type Subscription_RootValidators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validators_Order_By>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};


export type Subscription_RootValidators_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


export type Subscription_RootValidators_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validators_Stream_Cursor_Input>>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  /** An object relationship */
  block?: Maybe<Blocks>;
  coins: Array<Scalars['coin']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate';
  aggregate?: Maybe<Supply_Aggregate_Fields>;
  nodes: Array<Supply>;
};

export type Supply_Aggregate_Bool_Exp = {
  count?: InputMaybe<Supply_Aggregate_Bool_Exp_Count>;
};

export type Supply_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Supply_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields';
  avg?: Maybe<Supply_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Supply_Max_Fields>;
  min?: Maybe<Supply_Min_Fields>;
  stddev?: Maybe<Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Sum_Fields>;
  var_pop?: Maybe<Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Var_Samp_Fields>;
  variance?: Maybe<Supply_Variance_Fields>;
};


/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "supply" */
export type Supply_Aggregate_Order_By = {
  avg?: InputMaybe<Supply_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Supply_Max_Order_By>;
  min?: InputMaybe<Supply_Min_Order_By>;
  stddev?: InputMaybe<Supply_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Supply_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Supply_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Supply_Sum_Order_By>;
  var_pop?: InputMaybe<Supply_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Supply_Var_Samp_Order_By>;
  variance?: InputMaybe<Supply_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "supply" */
export type Supply_Arr_Rel_Insert_Input = {
  data: Array<Supply_Insert_Input>;
};

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "supply" */
export type Supply_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>;
  _not?: InputMaybe<Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Supply_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  coins?: InputMaybe<Coin_Array_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "supply" */
export type Supply_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "supply" */
export type Supply_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields';
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "supply" */
export type Supply_Max_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields';
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "supply" */
export type Supply_Min_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "supply" */
export type Supply_Mutation_Response = {
  __typename?: 'supply_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Supply>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** input type for updating data in table "supply" */
export type Supply_Set_Input = {
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "supply" */
export type Supply_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "supply" */
export type Supply_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "supply" */
export type Supply_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "supply" */
export type Supply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supply_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supply_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "supply" */
export type Supply_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Supply_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Supply_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supply_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supply_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "supply" */
export type Supply_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "supply" */
export type Supply_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "supply" */
export type Supply_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions';
  /** An object relationship */
  block: Blocks;
  fee: Scalars['jsonb']['output'];
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  hash: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  logs?: Maybe<Scalars['jsonb']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  messages: Scalars['jsonb']['output'];
  raw_log?: Maybe<Scalars['String']['output']>;
  signatures: Array<Scalars['String']['output']>;
  signer_infos: Scalars['jsonb']['output'];
  success: Scalars['Boolean']['output'];
};


/** columns and relationships of "transactions" */
export type TransactionsFeeArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transactions" */
export type TransactionsLogsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transactions" */
export type TransactionsMessagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transactions" */
export type TransactionsSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

export type Transactions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transactions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Transactions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Transactions_Aggregate_Bool_Exp_Count>;
};

export type Transactions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transactions_Max_Order_By>;
  min?: InputMaybe<Transactions_Min_Order_By>;
  stddev?: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Transactions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transactions_Append_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<String_Array_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "height", "hash" */
  UniqueTx = 'unique_tx'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transactions_Delete_At_Path_Input = {
  fee?: InputMaybe<Array<Scalars['String']['input']>>;
  logs?: InputMaybe<Array<Scalars['String']['input']>>;
  messages?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transactions_Delete_Elem_Input = {
  fee?: InputMaybe<Scalars['Int']['input']>;
  logs?: InputMaybe<Scalars['Int']['input']>;
  messages?: InputMaybe<Scalars['Int']['input']>;
  signer_infos?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transactions_Delete_Key_Input = {
  fee?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['String']['input']>;
  signer_infos?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  raw_log?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  raw_log?: Maybe<Scalars['String']['output']>;
  signatures?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  raw_log?: Maybe<Scalars['String']['output']>;
  signatures?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** on_conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transactions_Prepend_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** select "transactions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** select "transactions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  raw_log?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  raw_log?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

export type Transactions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Transactions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Transactions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Transactions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Transactions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transactions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Transactions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_commissions" */
export type Validator_Commissions = {
  __typename?: 'validator_commissions';
  /** An object relationship */
  block?: Maybe<Blocks>;
  commission: Scalars['numeric']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation: Scalars['bigint']['output'];
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Infos;
};

/** aggregated selection of "validator_commissions" */
export type Validator_Commissions_Aggregate = {
  __typename?: 'validator_commissions_aggregate';
  aggregate?: Maybe<Validator_Commissions_Aggregate_Fields>;
  nodes: Array<Validator_Commissions>;
};

export type Validator_Commissions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Commissions_Aggregate_Bool_Exp_Count>;
};

export type Validator_Commissions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Commissions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_commissions" */
export type Validator_Commissions_Aggregate_Fields = {
  __typename?: 'validator_commissions_aggregate_fields';
  avg?: Maybe<Validator_Commissions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Commissions_Max_Fields>;
  min?: Maybe<Validator_Commissions_Min_Fields>;
  stddev?: Maybe<Validator_Commissions_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Commissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Commissions_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Commissions_Sum_Fields>;
  var_pop?: Maybe<Validator_Commissions_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Commissions_Var_Samp_Fields>;
  variance?: Maybe<Validator_Commissions_Variance_Fields>;
};


/** aggregate fields of "validator_commissions" */
export type Validator_Commissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_commissions" */
export type Validator_Commissions_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commissions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Commissions_Max_Order_By>;
  min?: InputMaybe<Validator_Commissions_Min_Order_By>;
  stddev?: InputMaybe<Validator_Commissions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Commissions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Commissions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Commissions_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Commissions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Commissions_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Commissions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_commissions" */
export type Validator_Commissions_Arr_Rel_Insert_Input = {
  data: Array<Validator_Commissions_Insert_Input>;
};

/** aggregate avg on columns */
export type Validator_Commissions_Avg_Fields = {
  __typename?: 'validator_commissions_avg_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_commissions" */
export type Validator_Commissions_Avg_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commissions". All fields are combined with a logical 'AND'. */
export type Validator_Commissions_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commissions_Bool_Exp>>;
  _not?: InputMaybe<Validator_Commissions_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Commissions_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Bigint_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Infos_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "validator_commissions" */
export type Validator_Commissions_Inc_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_commissions" */
export type Validator_Commissions_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Infos_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Commissions_Max_Fields = {
  __typename?: 'validator_commissions_max_fields';
  commission?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_commissions" */
export type Validator_Commissions_Max_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Commissions_Min_Fields = {
  __typename?: 'validator_commissions_min_fields';
  commission?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_commissions" */
export type Validator_Commissions_Min_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_commissions" */
export type Validator_Commissions_Mutation_Response = {
  __typename?: 'validator_commissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Commissions>;
};

/** Ordering options when selecting data from "validator_commissions". */
export type Validator_Commissions_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Infos_Order_By>;
};

/** select columns of table "validator_commissions" */
export enum Validator_Commissions_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** input type for updating data in table "validator_commissions" */
export type Validator_Commissions_Set_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Commissions_Stddev_Fields = {
  __typename?: 'validator_commissions_stddev_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_commissions" */
export type Validator_Commissions_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Commissions_Stddev_Pop_Fields = {
  __typename?: 'validator_commissions_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_commissions" */
export type Validator_Commissions_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Commissions_Stddev_Samp_Fields = {
  __typename?: 'validator_commissions_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_commissions" */
export type Validator_Commissions_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_commissions" */
export type Validator_Commissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Commissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Commissions_Stream_Cursor_Value_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Commissions_Sum_Fields = {
  __typename?: 'validator_commissions_sum_fields';
  commission?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_commissions" */
export type Validator_Commissions_Sum_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

export type Validator_Commissions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Commissions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Commissions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Commissions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Commissions_Var_Pop_Fields = {
  __typename?: 'validator_commissions_var_pop_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_commissions" */
export type Validator_Commissions_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Commissions_Var_Samp_Fields = {
  __typename?: 'validator_commissions_var_samp_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_commissions" */
export type Validator_Commissions_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Commissions_Variance_Fields = {
  __typename?: 'validator_commissions_variance_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_commissions" */
export type Validator_Commissions_Variance_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_descriptions" */
export type Validator_Descriptions = {
  __typename?: 'validator_descriptions';
  avatar_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  block?: Maybe<Blocks>;
  details?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  security_contact?: Maybe<Scalars['String']['output']>;
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Infos;
  website?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "validator_descriptions" */
export type Validator_Descriptions_Aggregate = {
  __typename?: 'validator_descriptions_aggregate';
  aggregate?: Maybe<Validator_Descriptions_Aggregate_Fields>;
  nodes: Array<Validator_Descriptions>;
};

export type Validator_Descriptions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Descriptions_Aggregate_Bool_Exp_Count>;
};

export type Validator_Descriptions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Descriptions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_descriptions" */
export type Validator_Descriptions_Aggregate_Fields = {
  __typename?: 'validator_descriptions_aggregate_fields';
  avg?: Maybe<Validator_Descriptions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Descriptions_Max_Fields>;
  min?: Maybe<Validator_Descriptions_Min_Fields>;
  stddev?: Maybe<Validator_Descriptions_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Descriptions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Descriptions_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Descriptions_Sum_Fields>;
  var_pop?: Maybe<Validator_Descriptions_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Descriptions_Var_Samp_Fields>;
  variance?: Maybe<Validator_Descriptions_Variance_Fields>;
};


/** aggregate fields of "validator_descriptions" */
export type Validator_Descriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_descriptions" */
export type Validator_Descriptions_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Descriptions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Descriptions_Max_Order_By>;
  min?: InputMaybe<Validator_Descriptions_Min_Order_By>;
  stddev?: InputMaybe<Validator_Descriptions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Descriptions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Descriptions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Descriptions_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Descriptions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Descriptions_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Descriptions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_descriptions" */
export type Validator_Descriptions_Arr_Rel_Insert_Input = {
  data: Array<Validator_Descriptions_Insert_Input>;
};

/** aggregate avg on columns */
export type Validator_Descriptions_Avg_Fields = {
  __typename?: 'validator_descriptions_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_descriptions". All fields are combined with a logical 'AND'. */
export type Validator_Descriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Descriptions_Bool_Exp>>;
  _not?: InputMaybe<Validator_Descriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Descriptions_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  security_contact?: InputMaybe<String_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Infos_Bool_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "validator_descriptions" */
export type Validator_Descriptions_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_descriptions" */
export type Validator_Descriptions_Insert_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  details?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  security_contact?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Infos_Obj_Rel_Insert_Input>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Validator_Descriptions_Max_Fields = {
  __typename?: 'validator_descriptions_max_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  security_contact?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Descriptions_Min_Fields = {
  __typename?: 'validator_descriptions_min_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  security_contact?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_descriptions" */
export type Validator_Descriptions_Mutation_Response = {
  __typename?: 'validator_descriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Descriptions>;
};

/** Ordering options when selecting data from "validator_descriptions". */
export type Validator_Descriptions_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Infos_Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "validator_descriptions" */
export enum Validator_Descriptions_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "validator_descriptions" */
export type Validator_Descriptions_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  security_contact?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Descriptions_Stddev_Fields = {
  __typename?: 'validator_descriptions_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Descriptions_Stddev_Pop_Fields = {
  __typename?: 'validator_descriptions_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Descriptions_Stddev_Samp_Fields = {
  __typename?: 'validator_descriptions_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_descriptions" */
export type Validator_Descriptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Descriptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Descriptions_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  security_contact?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Descriptions_Sum_Fields = {
  __typename?: 'validator_descriptions_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Validator_Descriptions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Descriptions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Descriptions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Descriptions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Descriptions_Var_Pop_Fields = {
  __typename?: 'validator_descriptions_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Descriptions_Var_Samp_Fields = {
  __typename?: 'validator_descriptions_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Descriptions_Variance_Fields = {
  __typename?: 'validator_descriptions_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_descriptions" */
export type Validator_Descriptions_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_infos" */
export type Validator_Infos = {
  __typename?: 'validator_infos';
  /** An object relationship */
  account?: Maybe<Accounts>;
  /** An object relationship */
  block?: Maybe<Blocks>;
  consensus_address: Scalars['String']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  max_change_rate: Scalars['String']['output'];
  max_rate: Scalars['String']['output'];
  operator_address: Scalars['String']['output'];
  self_delegate_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  validator: Validators;
  /** An array relationship */
  validator_commissions: Array<Validator_Commissions>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commissions_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Descriptions>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Descriptions_Aggregate;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Powers>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Powers_Aggregate;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commissions_Order_By>>;
  where?: InputMaybe<Validator_Commissions_Bool_Exp>;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Descriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Descriptions_Order_By>>;
  where?: InputMaybe<Validator_Descriptions_Bool_Exp>;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};


/** columns and relationships of "validator_infos" */
export type Validator_InfosValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Powers_Order_By>>;
  where?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
};

/** aggregated selection of "validator_infos" */
export type Validator_Infos_Aggregate = {
  __typename?: 'validator_infos_aggregate';
  aggregate?: Maybe<Validator_Infos_Aggregate_Fields>;
  nodes: Array<Validator_Infos>;
};

export type Validator_Infos_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Infos_Aggregate_Bool_Exp_Count>;
};

export type Validator_Infos_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Infos_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_infos" */
export type Validator_Infos_Aggregate_Fields = {
  __typename?: 'validator_infos_aggregate_fields';
  avg?: Maybe<Validator_Infos_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Infos_Max_Fields>;
  min?: Maybe<Validator_Infos_Min_Fields>;
  stddev?: Maybe<Validator_Infos_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Infos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Infos_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Infos_Sum_Fields>;
  var_pop?: Maybe<Validator_Infos_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Infos_Var_Samp_Fields>;
  variance?: Maybe<Validator_Infos_Variance_Fields>;
};


/** aggregate fields of "validator_infos" */
export type Validator_Infos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Infos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_infos" */
export type Validator_Infos_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Infos_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Infos_Max_Order_By>;
  min?: InputMaybe<Validator_Infos_Min_Order_By>;
  stddev?: InputMaybe<Validator_Infos_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Infos_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Infos_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Infos_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Infos_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Infos_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Infos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_infos" */
export type Validator_Infos_Arr_Rel_Insert_Input = {
  data: Array<Validator_Infos_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Infos_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Infos_Avg_Fields = {
  __typename?: 'validator_infos_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_infos" */
export type Validator_Infos_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_infos". All fields are combined with a logical 'AND'. */
export type Validator_Infos_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Infos_Bool_Exp>>;
  _not?: InputMaybe<Validator_Infos_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Infos_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  max_change_rate?: InputMaybe<String_Comparison_Exp>;
  max_rate?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validators_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commissions_Bool_Exp>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commissions_Aggregate_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Descriptions_Bool_Exp>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Descriptions_Aggregate_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Powers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "validator_infos" */
export enum Validator_Infos_Constraint {
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorInfosConsensusAddressKey = 'validator_infos_consensus_address_key',
  /** unique or primary key constraint on columns "operator_address" */
  ValidatorInfosOperatorAddressKey = 'validator_infos_operator_address_key'
}

/** input type for incrementing numeric columns in table "validator_infos" */
export type Validator_Infos_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_infos" */
export type Validator_Infos_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  max_change_rate?: InputMaybe<Scalars['String']['input']>;
  max_rate?: InputMaybe<Scalars['String']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  self_delegate_address?: InputMaybe<Scalars['String']['input']>;
  validator?: InputMaybe<Validators_Obj_Rel_Insert_Input>;
  validator_commissions?: InputMaybe<Validator_Commissions_Arr_Rel_Insert_Input>;
  validator_descriptions?: InputMaybe<Validator_Descriptions_Arr_Rel_Insert_Input>;
  validator_statuses?: InputMaybe<Validator_Status_Arr_Rel_Insert_Input>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Powers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Infos_Max_Fields = {
  __typename?: 'validator_infos_max_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  max_change_rate?: Maybe<Scalars['String']['output']>;
  max_rate?: Maybe<Scalars['String']['output']>;
  operator_address?: Maybe<Scalars['String']['output']>;
  self_delegate_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_infos" */
export type Validator_Infos_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Infos_Min_Fields = {
  __typename?: 'validator_infos_min_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  max_change_rate?: Maybe<Scalars['String']['output']>;
  max_rate?: Maybe<Scalars['String']['output']>;
  operator_address?: Maybe<Scalars['String']['output']>;
  self_delegate_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_infos" */
export type Validator_Infos_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_infos" */
export type Validator_Infos_Mutation_Response = {
  __typename?: 'validator_infos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Infos>;
};

/** input type for inserting object relation for remote table "validator_infos" */
export type Validator_Infos_Obj_Rel_Insert_Input = {
  data: Validator_Infos_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Infos_On_Conflict>;
};

/** on_conflict condition type for table "validator_infos" */
export type Validator_Infos_On_Conflict = {
  constraint: Validator_Infos_Constraint;
  update_columns?: Array<Validator_Infos_Update_Column>;
  where?: InputMaybe<Validator_Infos_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_infos". */
export type Validator_Infos_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  block?: InputMaybe<Blocks_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validators_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commissions_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Descriptions_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Powers_Aggregate_Order_By>;
};

/** select columns of table "validator_infos" */
export enum Validator_Infos_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** input type for updating data in table "validator_infos" */
export type Validator_Infos_Set_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  max_change_rate?: InputMaybe<Scalars['String']['input']>;
  max_rate?: InputMaybe<Scalars['String']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  self_delegate_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Infos_Stddev_Fields = {
  __typename?: 'validator_infos_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_infos" */
export type Validator_Infos_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Infos_Stddev_Pop_Fields = {
  __typename?: 'validator_infos_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_infos" */
export type Validator_Infos_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Infos_Stddev_Samp_Fields = {
  __typename?: 'validator_infos_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_infos" */
export type Validator_Infos_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_infos" */
export type Validator_Infos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Infos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Infos_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  max_change_rate?: InputMaybe<Scalars['String']['input']>;
  max_rate?: InputMaybe<Scalars['String']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  self_delegate_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Infos_Sum_Fields = {
  __typename?: 'validator_infos_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_infos" */
export type Validator_Infos_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "validator_infos" */
export enum Validator_Infos_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

export type Validator_Infos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Infos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Infos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Infos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Infos_Var_Pop_Fields = {
  __typename?: 'validator_infos_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_infos" */
export type Validator_Infos_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Infos_Var_Samp_Fields = {
  __typename?: 'validator_infos_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_infos" */
export type Validator_Infos_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Infos_Variance_Fields = {
  __typename?: 'validator_infos_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_infos" */
export type Validator_Infos_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  /** An object relationship */
  block: Blocks;
  height: Scalars['bigint']['output'];
  jailed: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Infos;
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

export type Validator_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Count>;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Status_Max_Order_By>;
  min?: InputMaybe<Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Status_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_status" */
export type Validator_Status_Arr_Rel_Insert_Input = {
  data: Array<Validator_Status_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Status_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Infos_Bool_Exp>;
};

/** unique or primary key constraints on table "validator_status" */
export enum Validator_Status_Constraint {
  /** unique or primary key constraint on columns "validator_address", "height" */
  ValidatorStatusPkey = 'validator_status_pkey'
}

/** input type for incrementing numeric columns in table "validator_status" */
export type Validator_Status_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_status" */
export type Validator_Status_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Infos_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_status" */
export type Validator_Status_Mutation_Response = {
  __typename?: 'validator_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Status>;
};

/** on_conflict condition type for table "validator_status" */
export type Validator_Status_On_Conflict = {
  constraint: Validator_Status_Constraint;
  update_columns?: Array<Validator_Status_Update_Column>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Infos_Order_By>;
};

/** primary key columns input for table: validator_status */
export type Validator_Status_Pk_Columns_Input = {
  height: Scalars['bigint']['input'];
  validator_address: Scalars['String']['input'];
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "validator_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** input type for updating data in table "validator_status" */
export type Validator_Status_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_status" */
export type Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Status_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "validator_status" */
export enum Validator_Status_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Validator_Status_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Status_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_voting_powers" */
export type Validator_Voting_Powers = {
  __typename?: 'validator_voting_powers';
  /** An object relationship */
  block?: Maybe<Blocks>;
  delegator_shares: Scalars['numeric']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Infos;
  voting_power: Scalars['bigint']['output'];
};

/** aggregated selection of "validator_voting_powers" */
export type Validator_Voting_Powers_Aggregate = {
  __typename?: 'validator_voting_powers_aggregate';
  aggregate?: Maybe<Validator_Voting_Powers_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Powers>;
};

export type Validator_Voting_Powers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Voting_Powers_Aggregate_Bool_Exp_Count>;
};

export type Validator_Voting_Powers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_voting_powers" */
export type Validator_Voting_Powers_Aggregate_Fields = {
  __typename?: 'validator_voting_powers_aggregate_fields';
  avg?: Maybe<Validator_Voting_Powers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Voting_Powers_Max_Fields>;
  min?: Maybe<Validator_Voting_Powers_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Powers_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Powers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Powers_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Powers_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Powers_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Powers_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Powers_Variance_Fields>;
};


/** aggregate fields of "validator_voting_powers" */
export type Validator_Voting_Powers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Powers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_voting_powers" */
export type Validator_Voting_Powers_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Powers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Voting_Powers_Max_Order_By>;
  min?: InputMaybe<Validator_Voting_Powers_Min_Order_By>;
  stddev?: InputMaybe<Validator_Voting_Powers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Voting_Powers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Voting_Powers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Voting_Powers_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Voting_Powers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Voting_Powers_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Voting_Powers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_voting_powers" */
export type Validator_Voting_Powers_Arr_Rel_Insert_Input = {
  data: Array<Validator_Voting_Powers_Insert_Input>;
};

/** aggregate avg on columns */
export type Validator_Voting_Powers_Avg_Fields = {
  __typename?: 'validator_voting_powers_avg_fields';
  delegator_shares?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Avg_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_powers". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Powers_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Powers_Bool_Exp>>;
  _not?: InputMaybe<Validator_Voting_Powers_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Voting_Powers_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  delegator_shares?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Infos_Bool_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "validator_voting_powers" */
export type Validator_Voting_Powers_Inc_Input = {
  delegator_shares?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_voting_powers" */
export type Validator_Voting_Powers_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  delegator_shares?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Infos_Obj_Rel_Insert_Input>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Validator_Voting_Powers_Max_Fields = {
  __typename?: 'validator_voting_powers_max_fields';
  delegator_shares?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Max_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Powers_Min_Fields = {
  __typename?: 'validator_voting_powers_min_fields';
  delegator_shares?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Min_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_voting_powers" */
export type Validator_Voting_Powers_Mutation_Response = {
  __typename?: 'validator_voting_powers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Voting_Powers>;
};

/** Ordering options when selecting data from "validator_voting_powers". */
export type Validator_Voting_Powers_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Infos_Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "validator_voting_powers" */
export enum Validator_Voting_Powers_Select_Column {
  /** column name */
  DelegatorShares = 'delegator_shares',
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** input type for updating data in table "validator_voting_powers" */
export type Validator_Voting_Powers_Set_Input = {
  delegator_shares?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Voting_Powers_Stddev_Fields = {
  __typename?: 'validator_voting_powers_stddev_fields';
  delegator_shares?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Stddev_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Powers_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_powers_stddev_pop_fields';
  delegator_shares?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Stddev_Pop_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Powers_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_powers_stddev_samp_fields';
  delegator_shares?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Stddev_Samp_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_voting_powers" */
export type Validator_Voting_Powers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Voting_Powers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Voting_Powers_Stream_Cursor_Value_Input = {
  delegator_shares?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Validator_Voting_Powers_Sum_Fields = {
  __typename?: 'validator_voting_powers_sum_fields';
  delegator_shares?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Sum_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

export type Validator_Voting_Powers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Voting_Powers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Voting_Powers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Voting_Powers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Powers_Var_Pop_Fields = {
  __typename?: 'validator_voting_powers_var_pop_fields';
  delegator_shares?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Var_Pop_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Powers_Var_Samp_Fields = {
  __typename?: 'validator_voting_powers_var_samp_fields';
  delegator_shares?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Var_Samp_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Powers_Variance_Fields = {
  __typename?: 'validator_voting_powers_variance_fields';
  delegator_shares?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_voting_powers" */
export type Validator_Voting_Powers_Variance_Order_By = {
  delegator_shares?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "validators" */
export type Validators = {
  __typename?: 'validators';
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  consensus_address: Scalars['String']['output'];
  consensus_pubkey: Scalars['String']['output'];
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshots>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshots_Aggregate;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** An object relationship */
  validator_info?: Maybe<Validator_Infos>;
};


/** columns and relationships of "validators" */
export type ValidatorsBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


/** columns and relationships of "validators" */
export type ValidatorsBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


/** columns and relationships of "validators" */
export type ValidatorsProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


/** columns and relationships of "validators" */
export type ValidatorsProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshots_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
};


/** columns and relationships of "validators" */
export type ValidatorsStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "validators" */
export type ValidatorsStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};

/** aggregated selection of "validators" */
export type Validators_Aggregate = {
  __typename?: 'validators_aggregate';
  aggregate?: Maybe<Validators_Aggregate_Fields>;
  nodes: Array<Validators>;
};

/** aggregate fields of "validators" */
export type Validators_Aggregate_Fields = {
  __typename?: 'validators_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Validators_Max_Fields>;
  min?: Maybe<Validators_Min_Fields>;
};


/** aggregate fields of "validators" */
export type Validators_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "validators". All fields are combined with a logical 'AND'. */
export type Validators_Bool_Exp = {
  _and?: InputMaybe<Array<Validators_Bool_Exp>>;
  _not?: InputMaybe<Validators_Bool_Exp>;
  _or?: InputMaybe<Array<Validators_Bool_Exp>>;
  blocks?: InputMaybe<Blocks_Bool_Exp>;
  blocks_aggregate?: InputMaybe<Blocks_Aggregate_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshots_Bool_Exp>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Bool_Exp>;
  staked_balances?: InputMaybe<Staked_Balances_Bool_Exp>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp>;
  validator_info?: InputMaybe<Validator_Infos_Bool_Exp>;
};

/** unique or primary key constraints on table "validators" */
export enum Validators_Constraint {
  /** unique or primary key constraint on columns "consensus_pubkey" */
  ValidatorsConsensusPubkeyKey = 'validators_consensus_pubkey_key',
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorsPkey = 'validators_pkey'
}

/** input type for inserting data into table "validators" */
export type Validators_Insert_Input = {
  blocks?: InputMaybe<Blocks_Arr_Rel_Insert_Input>;
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshots_Arr_Rel_Insert_Input>;
  staked_balances?: InputMaybe<Staked_Balances_Arr_Rel_Insert_Input>;
  validator_info?: InputMaybe<Validator_Infos_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validators_Max_Fields = {
  __typename?: 'validators_max_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  consensus_pubkey?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Validators_Min_Fields = {
  __typename?: 'validators_min_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  consensus_pubkey?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "validators" */
export type Validators_Mutation_Response = {
  __typename?: 'validators_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validators>;
};

/** input type for inserting object relation for remote table "validators" */
export type Validators_Obj_Rel_Insert_Input = {
  data: Validators_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Validators_On_Conflict>;
};

/** on_conflict condition type for table "validators" */
export type Validators_On_Conflict = {
  constraint: Validators_Constraint;
  update_columns?: Array<Validators_Update_Column>;
  where?: InputMaybe<Validators_Bool_Exp>;
};

/** Ordering options when selecting data from "validators". */
export type Validators_Order_By = {
  blocks_aggregate?: InputMaybe<Blocks_Aggregate_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  consensus_pubkey?: InputMaybe<Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshots_Aggregate_Order_By>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Order_By>;
  validator_info?: InputMaybe<Validator_Infos_Order_By>;
};

/** primary key columns input for table: validators */
export type Validators_Pk_Columns_Input = {
  consensus_address: Scalars['String']['input'];
};

/** select columns of table "validators" */
export enum Validators_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** input type for updating data in table "validators" */
export type Validators_Set_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "validators" */
export type Validators_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validators_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validators_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "validators" */
export enum Validators_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

export type Validators_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validators_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validators_Bool_Exp;
};

export type AllVotesQueryVariables = Exact<{
  proposalId: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type AllVotesQuery = { __typename?: 'query_root', proposal_votes: Array<{ __typename?: 'proposal_votes', height?: any | null, is_valid: boolean, option: string, proposal_id: number, timestamp?: any | null, voter_address: string, weight: string, block?: { __typename?: 'blocks', transactions: Array<{ __typename?: 'transactions', height: any, hash: string, memo?: string | null, success: boolean, messages: any }> } | null }>, proposal_votes_aggregate: { __typename?: 'proposal_votes_aggregate', aggregate?: { __typename?: 'proposal_votes_aggregate_fields', count: number } | null } };

export type BalanceQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type BalanceQuery = { __typename?: 'query_root', action_account_balance: Array<{ __typename?: 'balances', coins: Array<any> }> };

export type BlockHeightQueryVariables = Exact<{
  timestamp: Scalars['timestamp']['input'];
}>;


export type BlockHeightQuery = { __typename?: 'query_root', blocks: Array<{ __typename?: 'blocks', timestamp: any, height: any }> };

export type BlockTimeQueryVariables = Exact<{
  height?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type BlockTimeQuery = { __typename?: 'query_root', blocks: Array<{ __typename?: 'blocks', timestamp: any, height: any }> };

export type DelegatedQueryVariables = Exact<{
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
}>;


export type DelegatedQuery = { __typename?: 'query_root', staked_balances: Array<{ __typename?: 'staked_balances', amount: any, height?: any | null }> };

export type ParamsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParamsQuery = { __typename?: 'query_root', gov_params: Array<{ __typename?: 'gov_params', params: any }> };

export type ProposalQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProposalQuery = { __typename?: 'query_root', proposals: Array<{ __typename?: 'proposals', content: any, deposit_end_time?: any | null, description: string, proposal_route: string, proposal_type: string, id: number, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_votes: Array<{ __typename?: 'proposal_votes', voter_address: string, option: string, weight: string, height?: any | null }>, proposal_tally_results: Array<{ __typename?: 'proposal_tally_results', abstain: string, height?: any | null, no: string, no_with_veto: string, yes: string }>, proposal_deposits: Array<{ __typename?: 'proposal_deposits', amount?: Array<any> | null, depositor_address?: string | null, proposal_id: number, timestamp?: any | null }> }> };

export type ProposalTalliesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProposalTalliesQuery = { __typename?: 'query_root', proposal_tally_results: Array<{ __typename?: 'proposal_tally_results', abstain: string, no: string, height?: any | null, no_with_veto: string, yes: string, proposal_id?: number | null }> };

export type ProposalsActiveQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposals_Bool_Exp>;
}>;


export type ProposalsActiveQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposals', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposits', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_votes_aggregate', aggregate?: { __typename?: 'proposal_votes_aggregate_fields', count: number } | null } }>, proposals_aggregate: { __typename?: 'proposals_aggregate', aggregate?: { __typename?: 'proposals_aggregate_fields', count: number } | null } };

export type ProposalsFailedQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposals_Bool_Exp>;
}>;


export type ProposalsFailedQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposals', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposits', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_votes_aggregate', aggregate?: { __typename?: 'proposal_votes_aggregate_fields', count: number } | null } }>, proposals_aggregate: { __typename?: 'proposals_aggregate', aggregate?: { __typename?: 'proposals_aggregate_fields', count: number } | null } };

export type ProposalsPassedQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposals_Bool_Exp>;
}>;


export type ProposalsPassedQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposals', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposits', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_votes_aggregate', aggregate?: { __typename?: 'proposal_votes_aggregate_fields', count: number } | null } }>, proposals_aggregate: { __typename?: 'proposals_aggregate', aggregate?: { __typename?: 'proposals_aggregate_fields', count: number } | null } };

export type ProposalsRejectedQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposals_Bool_Exp>;
}>;


export type ProposalsRejectedQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposals', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposits', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_votes_aggregate', aggregate?: { __typename?: 'proposal_votes_aggregate_fields', count: number } | null } }>, proposals_aggregate: { __typename?: 'proposals_aggregate', aggregate?: { __typename?: 'proposals_aggregate_fields', count: number } | null } };

export type ProposalsSearchQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  searchString: Scalars['String']['input'];
}>;


export type ProposalsSearchQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposals', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposits', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_votes_aggregate', aggregate?: { __typename?: 'proposal_votes_aggregate_fields', count: number } | null } }>, proposals_aggregate: { __typename?: 'proposals_aggregate', aggregate?: { __typename?: 'proposals_aggregate_fields', count: number } | null } };

export type StakingQueryVariables = Exact<{ [key: string]: never; }>;


export type StakingQuery = { __typename?: 'query_root', staking_pool: Array<{ __typename?: 'staking_pool', bonded_tokens: string, height?: any | null, not_bonded_tokens: string }> };

export type ValSetQueryVariables = Exact<{
  height: Scalars['bigint']['input'];
}>;


export type ValSetQuery = { __typename?: 'query_root', proposal_validator_status_snapshot: Array<{ __typename?: 'validator_status', height: any, jailed: boolean, status: string, validator_address: string, validator_info: { __typename?: 'validator_infos', self_delegate_address?: string | null, validator_descriptions: Array<{ __typename?: 'validator_descriptions', identity?: string | null, avatar_url?: string | null, details?: string | null, moniker?: string | null, website?: string | null }> } }> };

export type ValidatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsQuery = { __typename?: 'query_root', proposal_validator_status_snapshot: Array<{ __typename?: 'validator_status', height: any, jailed: boolean, status: string, validator_address: string, validator_info: { __typename?: 'validator_infos', self_delegate_address?: string | null, validator_descriptions: Array<{ __typename?: 'validator_descriptions', identity?: string | null, avatar_url?: string | null, details?: string | null, moniker?: string | null, website?: string | null }> } }> };

export type VoteHistoryQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type VoteHistoryQuery = { __typename?: 'query_root', proposal_votes: Array<{ __typename?: 'proposal_votes', option: string, weight: string, height?: any | null, voter_address: string, proposal_id: number, is_valid: boolean }> };

export type VoteOptionQueryVariables = Exact<{
  proposalId: Scalars['Int']['input'];
  option: Scalars['String']['input'];
}>;


export type VoteOptionQuery = { __typename?: 'query_root', proposal_votes_aggregate: { __typename?: 'proposal_votes_aggregate', aggregate?: { __typename?: 'proposal_votes_aggregate_fields', count: number } | null } };

export type VotesQueryVariables = Exact<{
  address: Scalars['String']['input'];
  proposalId: Scalars['Int']['input'];
  propId: Scalars['String']['input'];
}>;


export type VotesQuery = { __typename?: 'query_root', proposal_votes: Array<{ __typename?: 'proposal_votes', voter_address: string, option: string, height?: any | null, proposal_id: number, timestamp?: any | null, weight: string, block?: { __typename?: 'blocks', transactions: Array<{ __typename?: 'transactions', height: any, hash: string, memo?: string | null, success: boolean, messages: any }> } | null }> };


export const AllVotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllVotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter_address"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"messages"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_contains"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<AllVotesQuery, AllVotesQueryVariables>;
export const BalanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Balance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"action_account_balance"},"name":{"kind":"Name","value":"balances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coins"}}]}}]}}]} as unknown as DocumentNode<BalanceQuery, BalanceQueryVariables>;
export const BlockHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlockHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<BlockHeightQuery, BlockHeightQueryVariables>;
export const BlockTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlockTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<BlockTimeQuery, BlockTimeQueryVariables>;
export const DelegatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Delegated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"staked_balances_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staked_balances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"validator"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"validator"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<DelegatedQuery, DelegatedQueryVariables>;
export const ParamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gov_params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"params"}}]}}]}}]} as unknown as DocumentNode<ParamsQuery, ParamsQueryVariables>;
export const ProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Proposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_route"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_tally_results"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abstain"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"no"}},{"kind":"Field","name":{"kind":"Name","value":"no_with_veto"}},{"kind":"Field","name":{"kind":"Name","value":"yes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalQuery, ProposalQueryVariables>;
export const ProposalTalliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalTallies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_tally_results"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abstain"}},{"kind":"Field","name":{"kind":"Name","value":"no"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"no_with_veto"}},{"kind":"Field","name":{"kind":"Name","value":"yes"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}}]}}]}}]} as unknown as DocumentNode<ProposalTalliesQuery, ProposalTalliesQueryVariables>;
export const ProposalsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposals_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposals_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsActiveQuery, ProposalsActiveQueryVariables>;
export const ProposalsFailedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsFailed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposals_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"failed_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposals_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsFailedQuery, ProposalsFailedQueryVariables>;
export const ProposalsPassedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsPassed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposals_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"passed_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposals_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsPassedQuery, ProposalsPassedQueryVariables>;
export const ProposalsRejectedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsRejected"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposals_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"rejected_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposals_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsRejectedQuery, ProposalsRejectedQueryVariables>;
export const ProposalsSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposals_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsSearchQuery, ProposalsSearchQueryVariables>;
export const StakingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Staking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staking_pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bonded_tokens"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"not_bonded_tokens"}}]}}]}}]} as unknown as DocumentNode<StakingQuery, StakingQueryVariables>;
export const ValSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ValSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal_validator_status_snapshot"},"name":{"kind":"Name","value":"validator_status"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"validator_address"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"validator_address"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"jailed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"validator_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"self_delegate_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_descriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identity"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"moniker"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ValSetQuery, ValSetQueryVariables>;
export const ValidatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal_validator_status_snapshot"},"name":{"kind":"Name","value":"validator_status"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"validator_address"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"validator_address"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"jailed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"validator_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"self_delegate_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_descriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identity"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"moniker"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ValidatorsQuery, ValidatorsQueryVariables>;
export const VoteHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VoteHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"voter_address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}}]}}]}}]} as unknown as DocumentNode<VoteHistoryQuery, VoteHistoryQueryVariables>;
export const VoteOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VoteOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"option"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"option"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"option"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<VoteOptionQuery, VoteOptionQueryVariables>;
export const VotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Votes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"propId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter_address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"messages"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_contains"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"propId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VotesQuery, VotesQueryVariables>;