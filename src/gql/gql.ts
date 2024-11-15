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
    "query AllVotes($proposalId: Int!, $limit: Int!, $offset: Int!) {\n  proposal_vote(\n    limit: $limit\n    offset: $offset\n    where: {_and: {proposal_id: {_eq: $proposalId}, is_valid: {_eq: true}}}\n    order_by: {height: desc, voter_address: desc}\n  ) {\n    height\n    is_valid\n    option\n    proposal_id\n    timestamp\n    voter_address\n    weight\n    block {\n      transactions(where: {messages: {_contains: [{proposalId: $proposalId}]}}) {\n        height\n        hash\n        memo\n        success\n        messages\n      }\n    }\n  }\n  proposal_vote_aggregate(\n    where: {_and: {proposal_id: {_eq: $proposalId}, is_valid: {_eq: true}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}": types.AllVotesDocument,
    "query Balance($address: String!) {\n  action_account_balance: balances(\n    where: {address: {_eq: $address}}\n    order_by: {height: desc_nulls_last}\n    limit: 1\n  ) {\n    coins\n  }\n}": types.BalanceDocument,
    "query BlockHeight($timestamp: timestamp!) {\n  block(where: {timestamp: {_gte: $timestamp}}, order_by: {height: asc}, limit: 1) {\n    timestamp\n    height\n  }\n}": types.BlockHeightDocument,
    "query BlockTime($height: bigint) {\n  block(where: {height: {_lte: $height}}, order_by: {height: desc}, limit: 1) {\n    timestamp\n    height\n  }\n}": types.BlockTimeDocument,
    "query Delegated($where: staked_balances_bool_exp = {}) {\n  staked_balances(\n    distinct_on: validator\n    order_by: {validator: desc, height: desc_nulls_last}\n    where: $where\n  ) {\n    amount\n    height\n  }\n}": types.DelegatedDocument,
    "query Params {\n  gov_params {\n    tally_params\n    deposit_params\n    voting_params\n  }\n}": types.ParamsDocument,
    "query Proposal($id: Int!) {\n  proposal(where: {id: {_eq: $id}}) {\n    content\n    deposit_end_time\n    description\n    proposal_route\n    proposal_type\n    proposal_votes {\n      voter_address\n      option\n      weight\n      height\n    }\n    id\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n    proposal_tally_results(order_by: {height: desc}, limit: 1) {\n      abstain\n      height\n      no\n      no_with_veto\n      yes\n    }\n    proposal_deposits {\n      amount\n      depositor_address\n      proposal_id\n      timestamp\n    }\n  }\n}": types.ProposalDocument,
    "query ProposalTallies($id: Int!) {\n  proposal_tally_result(\n    where: {proposal_id: {_eq: $id}}\n    order_by: {height: desc}\n    limit: 1\n  ) {\n    abstain\n    no\n    height\n    no_with_veto\n    yes\n    proposal_id\n  }\n}": types.ProposalTalliesDocument,
    "query ProposalsActive($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{active_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProposalsActiveDocument,
    "query ProposalsFailed($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{failed_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProposalsFailedDocument,
    "query ProposalsPassed($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{passed_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProposalsPassedDocument,
    "query ProposalsRejected($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{rejected_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProposalsRejectedDocument,
    "query ProposalsSearch($limit: Int!, $offset: Int!, $searchString: String!) {\n  all_proposals: proposal(\n    order_by: [{active_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: {_or: [{title: {_ilike: $searchString}}, {description: {_ilike: $searchString}}]}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(\n    where: {_or: [{title: {_ilike: $searchString}}, {description: {_ilike: $searchString}}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProposalsSearchDocument,
    "query Staking {\n  staking_pool(order_by: {height: desc_nulls_last}) {\n    bonded_tokens\n    height\n    not_bonded_tokens\n  }\n}": types.StakingDocument,
    "query ValSet($height: bigint!) {\n  proposal_validator_status_snapshot: validator_status(\n    distinct_on: validator_address\n    order_by: {validator_address: asc, height: desc_nulls_last}\n    where: {height: {_eq: $height}}\n  ) {\n    height\n    jailed\n    status\n    validator_address\n    validator_info {\n      self_delegate_address\n      validator_descriptions {\n        identity\n        avatar_url\n        details\n        moniker\n        website\n      }\n    }\n  }\n}": types.ValSetDocument,
    "query Validators {\n  block(limit: 1, order_by: {height: desc_nulls_last}) {\n    height\n    validator_statuses(order_by: {validator_address: asc}) {\n      height\n      jailed\n      status\n      validator_address\n      validator_info {\n        self_delegate_address\n        validator_descriptions {\n          identity\n          avatar_url\n          details\n          moniker\n          website\n        }\n      }\n    }\n  }\n}": types.ValidatorsDocument,
    "query VoteHistory($address: String!) {\n  proposal_vote(\n    where: {voter_address: {_eq: $address}, _and: {is_valid: {_eq: true}}}\n  ) {\n    option\n    weight\n    height\n    voter_address\n    proposal_id\n    is_valid\n  }\n}": types.VoteHistoryDocument,
    "query VoteOption($proposalId: Int!, $option: String!) {\n  proposal_vote_aggregate(\n    where: {_and: {is_valid: {_eq: true}, proposal_id: {_eq: $proposalId}, option: {_eq: $option}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}": types.VoteOptionDocument,
    "query Votes($address: String!, $proposalId: Int!, $propId: String!) {\n  proposal_vote(\n    where: {proposal_id: {_eq: $proposalId}, voter_address: {_eq: $address}}\n    order_by: {height: desc}\n  ) {\n    voter_address\n    option\n    height\n    proposal_id\n    timestamp\n    weight\n    block {\n      transactions(\n        where: {messages: {_contains: [{proposal_id: $propId, voter: $address}]}}\n      ) {\n        height\n        hash\n        memo\n        success\n        messages\n      }\n    }\n  }\n}": types.VotesDocument,
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
export function graphql(source: "query AllVotes($proposalId: Int!, $limit: Int!, $offset: Int!) {\n  proposal_vote(\n    limit: $limit\n    offset: $offset\n    where: {_and: {proposal_id: {_eq: $proposalId}, is_valid: {_eq: true}}}\n    order_by: {height: desc, voter_address: desc}\n  ) {\n    height\n    is_valid\n    option\n    proposal_id\n    timestamp\n    voter_address\n    weight\n    block {\n      transactions(where: {messages: {_contains: [{proposalId: $proposalId}]}}) {\n        height\n        hash\n        memo\n        success\n        messages\n      }\n    }\n  }\n  proposal_vote_aggregate(\n    where: {_and: {proposal_id: {_eq: $proposalId}, is_valid: {_eq: true}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query AllVotes($proposalId: Int!, $limit: Int!, $offset: Int!) {\n  proposal_vote(\n    limit: $limit\n    offset: $offset\n    where: {_and: {proposal_id: {_eq: $proposalId}, is_valid: {_eq: true}}}\n    order_by: {height: desc, voter_address: desc}\n  ) {\n    height\n    is_valid\n    option\n    proposal_id\n    timestamp\n    voter_address\n    weight\n    block {\n      transactions(where: {messages: {_contains: [{proposalId: $proposalId}]}}) {\n        height\n        hash\n        memo\n        success\n        messages\n      }\n    }\n  }\n  proposal_vote_aggregate(\n    where: {_and: {proposal_id: {_eq: $proposalId}, is_valid: {_eq: true}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Balance($address: String!) {\n  action_account_balance: balances(\n    where: {address: {_eq: $address}}\n    order_by: {height: desc_nulls_last}\n    limit: 1\n  ) {\n    coins\n  }\n}"): (typeof documents)["query Balance($address: String!) {\n  action_account_balance: balances(\n    where: {address: {_eq: $address}}\n    order_by: {height: desc_nulls_last}\n    limit: 1\n  ) {\n    coins\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query BlockHeight($timestamp: timestamp!) {\n  block(where: {timestamp: {_gte: $timestamp}}, order_by: {height: asc}, limit: 1) {\n    timestamp\n    height\n  }\n}"): (typeof documents)["query BlockHeight($timestamp: timestamp!) {\n  block(where: {timestamp: {_gte: $timestamp}}, order_by: {height: asc}, limit: 1) {\n    timestamp\n    height\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query BlockTime($height: bigint) {\n  block(where: {height: {_lte: $height}}, order_by: {height: desc}, limit: 1) {\n    timestamp\n    height\n  }\n}"): (typeof documents)["query BlockTime($height: bigint) {\n  block(where: {height: {_lte: $height}}, order_by: {height: desc}, limit: 1) {\n    timestamp\n    height\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Delegated($where: staked_balances_bool_exp = {}) {\n  staked_balances(\n    distinct_on: validator\n    order_by: {validator: desc, height: desc_nulls_last}\n    where: $where\n  ) {\n    amount\n    height\n  }\n}"): (typeof documents)["query Delegated($where: staked_balances_bool_exp = {}) {\n  staked_balances(\n    distinct_on: validator\n    order_by: {validator: desc, height: desc_nulls_last}\n    where: $where\n  ) {\n    amount\n    height\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Params {\n  gov_params {\n    tally_params\n    deposit_params\n    voting_params\n  }\n}"): (typeof documents)["query Params {\n  gov_params {\n    tally_params\n    deposit_params\n    voting_params\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Proposal($id: Int!) {\n  proposal(where: {id: {_eq: $id}}) {\n    content\n    deposit_end_time\n    description\n    proposal_route\n    proposal_type\n    proposal_votes {\n      voter_address\n      option\n      weight\n      height\n    }\n    id\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n    proposal_tally_results(order_by: {height: desc}, limit: 1) {\n      abstain\n      height\n      no\n      no_with_veto\n      yes\n    }\n    proposal_deposits {\n      amount\n      depositor_address\n      proposal_id\n      timestamp\n    }\n  }\n}"): (typeof documents)["query Proposal($id: Int!) {\n  proposal(where: {id: {_eq: $id}}) {\n    content\n    deposit_end_time\n    description\n    proposal_route\n    proposal_type\n    proposal_votes {\n      voter_address\n      option\n      weight\n      height\n    }\n    id\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n    proposal_tally_results(order_by: {height: desc}, limit: 1) {\n      abstain\n      height\n      no\n      no_with_veto\n      yes\n    }\n    proposal_deposits {\n      amount\n      depositor_address\n      proposal_id\n      timestamp\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProposalTallies($id: Int!) {\n  proposal_tally_result(\n    where: {proposal_id: {_eq: $id}}\n    order_by: {height: desc}\n    limit: 1\n  ) {\n    abstain\n    no\n    height\n    no_with_veto\n    yes\n    proposal_id\n  }\n}"): (typeof documents)["query ProposalTallies($id: Int!) {\n  proposal_tally_result(\n    where: {proposal_id: {_eq: $id}}\n    order_by: {height: desc}\n    limit: 1\n  ) {\n    abstain\n    no\n    height\n    no_with_veto\n    yes\n    proposal_id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProposalsActive($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{active_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query ProposalsActive($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{active_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProposalsFailed($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{failed_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query ProposalsFailed($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{failed_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProposalsPassed($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{passed_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query ProposalsPassed($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{passed_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProposalsRejected($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{rejected_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query ProposalsRejected($limit: Int!, $offset: Int!, $where: proposal_bool_exp = {}) {\n  all_proposals: proposal(\n    order_by: [{rejected_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: $where\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProposalsSearch($limit: Int!, $offset: Int!, $searchString: String!) {\n  all_proposals: proposal(\n    order_by: [{active_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: {_or: [{title: {_ilike: $searchString}}, {description: {_ilike: $searchString}}]}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(\n    where: {_or: [{title: {_ilike: $searchString}}, {description: {_ilike: $searchString}}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query ProposalsSearch($limit: Int!, $offset: Int!, $searchString: String!) {\n  all_proposals: proposal(\n    order_by: [{active_first_order: asc}, {id: desc}]\n    limit: $limit\n    offset: $offset\n    where: {_or: [{title: {_ilike: $searchString}}, {description: {_ilike: $searchString}}]}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposal_votes_aggregate(where: {is_valid: {_eq: true}}) {\n      aggregate {\n        count\n      }\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n  }\n  proposal_aggregate(\n    where: {_or: [{title: {_ilike: $searchString}}, {description: {_ilike: $searchString}}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Staking {\n  staking_pool(order_by: {height: desc_nulls_last}) {\n    bonded_tokens\n    height\n    not_bonded_tokens\n  }\n}"): (typeof documents)["query Staking {\n  staking_pool(order_by: {height: desc_nulls_last}) {\n    bonded_tokens\n    height\n    not_bonded_tokens\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ValSet($height: bigint!) {\n  proposal_validator_status_snapshot: validator_status(\n    distinct_on: validator_address\n    order_by: {validator_address: asc, height: desc_nulls_last}\n    where: {height: {_eq: $height}}\n  ) {\n    height\n    jailed\n    status\n    validator_address\n    validator_info {\n      self_delegate_address\n      validator_descriptions {\n        identity\n        avatar_url\n        details\n        moniker\n        website\n      }\n    }\n  }\n}"): (typeof documents)["query ValSet($height: bigint!) {\n  proposal_validator_status_snapshot: validator_status(\n    distinct_on: validator_address\n    order_by: {validator_address: asc, height: desc_nulls_last}\n    where: {height: {_eq: $height}}\n  ) {\n    height\n    jailed\n    status\n    validator_address\n    validator_info {\n      self_delegate_address\n      validator_descriptions {\n        identity\n        avatar_url\n        details\n        moniker\n        website\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Validators {\n  block(limit: 1, order_by: {height: desc_nulls_last}) {\n    height\n    validator_statuses(order_by: {validator_address: asc}) {\n      height\n      jailed\n      status\n      validator_address\n      validator_info {\n        self_delegate_address\n        validator_descriptions {\n          identity\n          avatar_url\n          details\n          moniker\n          website\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Validators {\n  block(limit: 1, order_by: {height: desc_nulls_last}) {\n    height\n    validator_statuses(order_by: {validator_address: asc}) {\n      height\n      jailed\n      status\n      validator_address\n      validator_info {\n        self_delegate_address\n        validator_descriptions {\n          identity\n          avatar_url\n          details\n          moniker\n          website\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query VoteHistory($address: String!) {\n  proposal_vote(\n    where: {voter_address: {_eq: $address}, _and: {is_valid: {_eq: true}}}\n  ) {\n    option\n    weight\n    height\n    voter_address\n    proposal_id\n    is_valid\n  }\n}"): (typeof documents)["query VoteHistory($address: String!) {\n  proposal_vote(\n    where: {voter_address: {_eq: $address}, _and: {is_valid: {_eq: true}}}\n  ) {\n    option\n    weight\n    height\n    voter_address\n    proposal_id\n    is_valid\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query VoteOption($proposalId: Int!, $option: String!) {\n  proposal_vote_aggregate(\n    where: {_and: {is_valid: {_eq: true}, proposal_id: {_eq: $proposalId}, option: {_eq: $option}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query VoteOption($proposalId: Int!, $option: String!) {\n  proposal_vote_aggregate(\n    where: {_and: {is_valid: {_eq: true}, proposal_id: {_eq: $proposalId}, option: {_eq: $option}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Votes($address: String!, $proposalId: Int!, $propId: String!) {\n  proposal_vote(\n    where: {proposal_id: {_eq: $proposalId}, voter_address: {_eq: $address}}\n    order_by: {height: desc}\n  ) {\n    voter_address\n    option\n    height\n    proposal_id\n    timestamp\n    weight\n    block {\n      transactions(\n        where: {messages: {_contains: [{proposal_id: $propId, voter: $address}]}}\n      ) {\n        height\n        hash\n        memo\n        success\n        messages\n      }\n    }\n  }\n}"): (typeof documents)["query Votes($address: String!, $proposalId: Int!, $propId: String!) {\n  proposal_vote(\n    where: {proposal_id: {_eq: $proposalId}, voter_address: {_eq: $address}}\n    order_by: {height: desc}\n  ) {\n    voter_address\n    option\n    height\n    proposal_id\n    timestamp\n    weight\n    block {\n      transactions(\n        where: {messages: {_contains: [{proposal_id: $propId, voter: $address}]}}\n      ) {\n        height\n        hash\n        memo\n        success\n        messages\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;