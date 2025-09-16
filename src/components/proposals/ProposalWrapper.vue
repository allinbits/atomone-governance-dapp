<script setup lang="ts">
import { Deposit } from "@atomone/atomone-types/atomone/gov/v1beta1/gov";
import { useTitle } from "@vueuse/core";
import { VCodeBlock } from "@wdns/vue-code-block";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import { computed, reactive, ref, watch } from "vue";
import { onMounted } from "vue";

import { bus } from "@/bus";
import chainConfig from "@/chain-config.json";
import MarkdownParser from "@/components/common/MarkdownParser.vue";
import ModalWrap from "@/components/common/ModalWrap.vue";
import PopupBox from "@/components/popups/PopupBox.vue";
import ProposalDeposit from "@/components/popups/ProposalDeposit.vue";
import ProposalVote from "@/components/popups/ProposalVote.vue";
import Breakdown from "@/components/proposals/Breakdown.vue";
import Treemap from "@/components/proposals/Treemap.vue";
import VotePanel from "@/components/proposals/VotePanel.vue";
import SimpleBadge from "@/components/ui/SimpleBadge.vue";
import SimpleCard from "@/components/ui/SimpleCard.vue";
import UiTabs from "@/components/ui/UiTabs.vue";
import { useChainData } from "@/composables/useChainData";
import { useTelemetry } from "@/composables/useTelemetry";
import { useValidators } from "@/composables/useValidators";
import { useWallet } from "@/composables/useWallet";
import { ValidatorsQuery, ValSetQuery, VotesQuery } from "@/gql/graphql";
import { ContextTypes, UiTabOption } from "@/types/ui";
import { decToPerc, formatAmount } from "@/utility";
import * as Utility from "@/utility/index";

import CommonButton from "../ui/CommonButton.vue";
import ValidatorBreakdown from "./ValidatorBreakdown.vue";

const voteTypes = [
  "yes",
  "no",
  "abstain"
] as const;
type BreakdownType = "voters" | "validators" | null;
type TabNames = "Description" | "Info" | "Voters" | "Discussions" | "Links";
type VoteTypes = (typeof voteTypes)[number];

dayjs.extend(duration);
dayjs.extend(utc);

const props = defineProps<{
  proposalId: number;
  height: number;
}>();
const { getProposal, getParams, getProposalTallies, getStakingStatus, getVotesAsync, getVoteOption } = useChainData();
const { validators, getVotingPower } = useValidators(props.height != 0
  ? props.height.toString()
  : undefined);
const validatorsWithStakeAndVotes = ref<
  Array<
    (ValidatorsQuery["proposal_validator_status_snapshot"][0] | ValSetQuery["proposal_validator_status_snapshot"][0]) & {
      voting_power: number;
      votes: VotesQuery["proposal_votes"];
    }
  >
>([]);

watch(
  validators,
  async (valSet, _old) => {
    try {
      validatorsWithStakeAndVotes.value = await Promise.all(valSet.map(async (val) => {
        if (val.validator_info && val.validator_info.self_delegate_address) {
          const vp = await getVotingPower(val.validator_info.self_delegate_address);
          const votes = await getVotesAsync(
            val.validator_info.self_delegate_address,
            props.proposalId
          );
          if (votes && votes.proposal_votes.length > 0) {
            return {
              ...val,
              voting_power: vp,
              votes: votes.proposal_votes.filter((x) => x.height == votes.proposal_votes[0].height)
            };
          } else {
            return { ...val,
              voting_power: vp,
              votes: [] };
          }
        } else {
          return { ...val,
            voting_power: 0,
            votes: [] };
        }
      }));
    } catch (_e) {
      bus.emit("error");
    }
  }
);

const maxValidators = computed(() => {
  return validatorsWithStakeAndVotes.value.length;
});
const votedValidators = computed(() => {
  return validatorsWithStakeAndVotes.value.filter((x) => x.votes.length > 0).length;
});
const validatorTallies = computed<{ [key in VoteTypes]: number }>(() => {
  const tally = {
    yes: 0,
    no: 0,
    abstain: 0
  };

  for (let i = 0; i < validatorsWithStakeAndVotes.value.length; i++) {
    const vp = validatorsWithStakeAndVotes.value[i].voting_power;
    const votes = validatorsWithStakeAndVotes.value[i].votes;
    for (let j = 0; j < votes.length; j++) {
      const optionTally = vp * parseFloat(votes[j].weight);
      switch (votes[j].option) {
        case "VOTE_OPTION_YES":
          tally.yes = tally.yes + optionTally;
          break;
        case "VOTE_OPTION_NO":
          tally.no = tally.no + optionTally;
          break;
        case "VOTE_OPTION_ABSTAIN":
          tally.abstain = tally.abstain + optionTally;
          break;
      }
    }
  }

  return tally;
});

const validatorVoteCounts = computed(() => {
  const tally = {
    yes: 0,
    no: 0,
    abstain: 0
  };

  for (let i = 0; i < validatorsWithStakeAndVotes.value.length; i++) {
    const votes = validatorsWithStakeAndVotes.value[i].votes;
    for (let j = 0; j < votes.length; j++) {
      switch (votes[j].option) {
        case "VOTE_OPTION_YES":
          tally.yes = tally.yes + 1;
          break;
        case "VOTE_OPTION_NO":
          tally.no = tally.no + 1;
          break;
        case "VOTE_OPTION_ABSTAIN":
          tally.abstain = tally.abstain + 1;
          break;
      }
    }
  }
  return tally;
});

const validatorVoteSum = computed(() => {
  return Object.values(validatorVoteCounts.value).reduce((att, val) => att + val);
});

function getValidatorVotes (voteType: VoteTypes) {
  const data: { name: string;
    value: number; }[] = [];

  for (let i = 0; i < validatorsWithStakeAndVotes.value.length; i++) {
    const votes = validatorsWithStakeAndVotes.value[i].votes;
    const tally = {
      yes: 0,
      no: 0,
      abstain: 0
    };

    for (let j = 0; j < votes.length; j++) {
      switch (votes[j].option) {
        case "VOTE_OPTION_YES":
          tally.yes = tally.yes + 1;
          break;
        case "VOTE_OPTION_NO":
          tally.no = tally.no + 1;
          break;
        case "VOTE_OPTION_ABSTAIN":
          tally.abstain = tally.abstain + 1;
          break;
      }
    }

    data.push({
      name:
        validatorsWithStakeAndVotes.value[i].validator_info.validator_descriptions[0].moniker ??
        validatorsWithStakeAndVotes.value[i].validator_address,
      value: tally[voteType]
    });
  }

  return data;
}

const { loggedIn } = useWallet();
const proposal = getProposal(props.proposalId);
const proposalTallies = getProposalTallies(props.proposalId);
const params = getParams();
const staking = getStakingStatus();

/*
 * const termLink = computed(() => `Link #${props.proposalId}`);
 * const termDiscussion = computed(() => `Proposal #${props.proposalId}`);
 */

const tabSelected = ref<TabNames>("Info");
const tabOptions = reactive<UiTabOption[]>([
  { title: "Description" },
  { title: "Info" },
  { title: "Voters" }

  /*
   * { title: "Discussions", link: "https://commonwealth.im/atomone/proposal/" + props.proposalId },
   * { title: "Links", link: "https://commonwealth.im/atomone/proposal/" + props.proposalId },
   */
]);

const breakdownType = ref<"validators" | "voters" | null>(null);
const breakdownOffset = ref(0);

const showJsonModal = ref(false);

const inDeposit = computed(() => proposal.value?.proposals[0].status === "PROPOSAL_STATUS_DEPOSIT_PERIOD");
const inVoting = computed(() => proposal.value?.proposals[0].status === "PROPOSAL_STATUS_VOTING_PERIOD");
const failed = computed(() => proposal.value?.proposals[0].status === "PROPOSAL_STATUS_FAILED");
const rejected = computed(() => proposal.value?.proposals[0].status === "PROPOSAL_STATUS_REJECTED");
const passed = computed(() => proposal.value?.proposals[0].status === "PROPOSAL_STATUS_PASSED");

const depositReducer = (sum: number, deposit: Partial<{ amount: Deposit["amount"] | null }>) => {
  return sum + (deposit.amount?.reduce(
    (sum: number, amount) => sum + parseInt(amount?.amount ?? ""),
    0
  ) ?? 0);
};

const initialDeposit = computed(() => {
  return proposal.value?.proposals[0].proposal_deposits.
    filter((x) => x.depositor_address == proposal.value?.proposals[0].proposer_address).
    reduce(
      depositReducer,
      0
    );
});
const distinctVoters = computed(() => {
  const votes = proposal.value?.proposals[0].proposal_votes ?? [];
  return new Set(votes.map((x) => x.voter_address)).size;
});
const totalDeposit = computed(() => {
  return proposal.value?.proposals[0].proposal_deposits.reduce(
    depositReducer,
    0
  ) ?? 0;
});
const minDeposit = computed(() => {
  return params.value?.gov_params[0].params.min_deposit[0].amount;
});
const depositDenom = computed(() => {
  return params.value?.gov_params[0].params.min_deposit[0].denom;
});

const tally_params = computed(() => {
  try {
    return params.value?.gov_params[0].params;
  } catch (_e) {
    return {};
  }
});

const quorum = computed(() => {
  return parseFloat(tally_params.value?.quorum ?? "0");
});

const threshold = computed(() => {
  return parseFloat(tally_params.value?.threshold ?? "0");
});

const yesCount = getVoteOption(
  props.proposalId,
  "VOTE_OPTION_YES"
);
const noCount = getVoteOption(
  props.proposalId,
  "VOTE_OPTION_NO"
);
const abstainCount = getVoteOption(
  props.proposalId,
  "VOTE_OPTION_ABSTAIN"
);
const allVoteCounts = computed(() => {
  return {
    yes: yesCount.value?.proposal_votes_aggregate.aggregate?.count ?? 0,
    no: noCount.value?.proposal_votes_aggregate.aggregate?.count ?? 0,
    abstain: abstainCount.value?.proposal_votes_aggregate.aggregate?.count ?? 0
  };
});
const yesVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_results[0]?.yes ?? "0");
});

const noVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_results[0]?.no ?? "0");
});

const abstainVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_results[0]?.abstain ?? "0");
});

const yesAbs = computed(() => {
  return yesVotes.value / parseFloat(staking.value?.staking_pool[0]?.bonded_tokens ?? "0");
});

const noAbs = computed(() => {
  return noVotes.value / parseFloat(staking.value?.staking_pool[0]?.bonded_tokens ?? "0");
});

const abstainAbs = computed(() => {
  return abstainVotes.value / parseFloat(staking.value?.staking_pool[0]?.bonded_tokens ?? "0");
});

const turnout = computed(() => {
  return noAbs.value + yesAbs.value + abstainAbs.value;
});
const yes = computed(() => {
  return yesAbs.value / turnout.value;
});
const no = computed(() => {
  return noAbs.value / turnout.value;
});
const abstain = computed(() => {
  return abstainAbs.value / turnout.value;
});

const tokenTallies = computed(() => {
  return {
    yes: yesVotes.value,
    no: noVotes.value,
    abstain: abstainVotes.value
  };
});

const expectedResult = computed(() => {
  if (turnout.value < quorum.value) {
    return false;
  } else {
    if (yes.value == 0) {
      return false;
    } else {
      if (yes.value / (yes.value + no.value) > threshold.value) {
        return true;
      } else {
        return false;
      }
    }
  }
});

const stakingDenomDisplay = computed(() => {
  const currencies = chainConfig.currencies.filter((x) => x.coinMinimalDenom == depositDenom.value);
  if (currencies.length <= 0) {
    return depositDenom.value;
  }

  return currencies[0].coinDenom ?? depositDenom.value;
});

const stakingDenomDecimals = computed(() => {
  const currencies = chainConfig.currencies.filter((x) => x.coinMinimalDenom == depositDenom.value);
  if (currencies.length <= 0) {
    return 0;
  }

  return currencies[0].coinDecimals ?? 0;
});

function calculateWidthForTree (key: VoteTypes) {
  const sum = Object.values(validatorTallies.value).reduce((acc, val) => acc + val);
  if (sum <= 0) {
    return 25;
  }

  return Math.floor(validatorTallies.value[key] / sum * 100);
}
const timeTo = (dateString: string) => {
  const now = dayjs.utc();
  const to = dayjs.utc(dateString);
  const diff = dayjs.duration(to.diff(now));
  const days = Math.floor(diff.asDays());
  return days + " d : " + diff.format("H [hr] : m [m] [left]");
};

function isTabSelected (tabName: TabNames) {
  return tabSelected.value.toLowerCase() == tabName.toLowerCase();
}
const typeToReadable = (content: { "@type": string }) => {
  const type =
    content["@type"]?.
      split(".")?.
      pop()?.
      split(/(?=[A-Z])/) ?? [];
  if (type[0] == "Msg") {
    type.shift();
  }
  return type.join(" ");
};
const proposalTypes = computed(() => {
  if (proposal.value?.proposals[0].content.length > 0) {
    return proposal.value?.proposals[0].content.map(typeToReadable);
  } else {
    return ["Text Proposal"];
  }
});
const displayBreakdown = ref(false);
const { logEvent } = useTelemetry();
function showBreakdown (type: BreakdownType) {
  breakdownType.value = type;
  breakdownOffset.value = 0;
  displayBreakdown.value = !displayBreakdown.value;

  if (type === null) return;
  logEvent(type === "voters"
    ? "Click Voters Breakdown"
    : "Click Validators Breakdown");
}

const title = useTitle();
onMounted(() => title.value = `AtomOne — #${proposal.value?.proposals[0].id} ${proposal.value?.proposals[0].title}`);
</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center">
      <div class="badges my-8 md:my-12">
        <template v-if="inVoting">
          <SimpleBadge :type="ContextTypes.INFO" icon="progress" class="mr-3"
            >{{ $t("proposalpage.badges.votingPeriod") }}
          </SimpleBadge>
          <SimpleBadge v-if="turnout < quorum" :type="ContextTypes.PLAIN" icon="warning">
            {{ $t("proposalpage.badges.quorumPending") }}</SimpleBadge
          >
        </template>
        <template v-if="inDeposit">
          <SimpleBadge :type="ContextTypes.INFO" icon="progress" class="mr-3">{{
            $t("proposalpage.badges.depositPeriod")
          }}</SimpleBadge>
          <SimpleBadge :type="ContextTypes.PLAIN" icon="warning">{{
            $t("proposalpage.badges.depositPending")
          }}</SimpleBadge>
        </template>
        <SimpleBadge v-if="failed" :type="ContextTypes.FAIL" class="mr-3">{{
          $t("proposalpage.badges.depositFailed")
        }}</SimpleBadge>
        <SimpleBadge v-if="rejected" icon="close" :type="ContextTypes.FAIL" class="mr-3"
          >{{ $t("proposalpage.badges.rejected") }}
        </SimpleBadge>
        <SimpleBadge v-if="passed" :type="ContextTypes.SUCCESS" class="mr-3">{{
          $t("proposalpage.badges.passed")
        }}</SimpleBadge>
      </div>
      <div
        class="flex items-center text-300 text-grey-100 start-7 hover:opacity-50 hover:cursor-pointer"
        @click="showJsonModal = true"
      >
        <Icon icon="Curlybrackets" />&nbsp; JSON
      </div>
    </div>

    <div class="flex mb-12 flex-col md:flex-row">
      <div class="basic-details flex-grow md:pr-10">
        <h1 class="font-termina text-500 md:text-800 text-light mb-8 md:mb-16 pb-2">
          #{{ proposal?.proposals[0].id }}: {{ proposal?.proposals[0].title }}
        </h1>
        <div class="basic-stats flex flex-col sm:flex-row gap-y-6">
          <div class="quorum mr-[72px]">
            <div class="text-100 text-grey-100 mb-2 sm:mb-4">
              {{ $t("proposalpage.labels.turnOut") }} | {{ $t("proposalpage.labels.quorum") }}
            </div>
            <div class="text-300 sm:text-400 md:text-500 text-light">
              {{ decToPerc(turnout, 1) }}% | {{ decToPerc(quorum, 1) }}%
            </div>
          </div>
          <div class="result">
            <template v-if="inDeposit">
              <div class="text-100 text-grey-100 mb-2 sm:mb-4">{{ $t("proposalpage.labels.expectedResult") }}</div>
              <div class="text-300 md:text-500 text-neg-200">{{ $t("proposalpage.results.willFail") }}</div>
            </template>
            <template v-if="inVoting">
              <div class="text-100 text-grey-100 mb-2 sm:mb-4">{{ $t("proposalpage.labels.expectedResult") }}</div>
              <div v-if="expectedResult" class="text-300 sm:text-400 md:text-500 text-accent-100">
                {{ $t("proposalpage.results.willPass") }}
              </div>
              <div v-else class="text-300 sm:text-400 md:text-500 text-neg-200">
                {{ $t("proposalpage.results.willReject") }}
              </div>
            </template>
            <template v-if="passed">
              <div class="text-100 text-grey-100 mb-2 sm:mb-4">{{ $t("proposalpage.labels.result") }}</div>
              <div class="text-300 sm:text-400 md:text-500 text-accent-100">
                {{ $t("proposalpage.results.passed") }}
              </div>
            </template>
            <template v-if="rejected">
              <div class="text-100 text-grey-100 mb-2 sm:mb-4">{{ $t("proposalpage.labels.result") }}</div>
              <div class="text-300 sm:text-400 md:text-500 text-neg-200">{{ $t("proposalpage.results.rejected") }}</div>
            </template>
            <template v-if="failed">
              <div class="text-100 text-grey-100 mb-2 sm:mb-4">{{ $t("proposalpage.labels.result") }}</div>
              <div class="text-300 sm:text-400 md:text-500 text-neg-200">{{ $t("proposalpage.results.failed") }}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="cta w-full md:w-96 pt-6 md:pt-0">
        <SimpleCard v-if="inVoting">
          <div class="text-center text-light text-300 md:text-500 mt-8 md:mt-0">
            {{ timeTo(proposal?.proposals[0].voting_end_time) }}
          </div>
          <div class="progress-bar w-full h-2 bg-grey-200 rounded my-6">
            <div class="link-gradient rounded h-2 w-2/12" />
          </div>
          <ProposalVote v-if="loggedIn" :proposal-id="proposal?.proposals[0].id" class="w-full" />
          <div
            v-else
            class="justify-center px-6 py-4 rounded link-gradient text-dark text-300 text-center cursor-pointer w-full"
            @click="
              () => {
                bus.emit('open');
              }
            "
          >
            {{ $t("components.ProposalVote.cta") }}
          </div>
        </SimpleCard>
        <SimpleCard v-if="inDeposit">
          <div class="text-center text-light text-300 md:text-500 mt-8 md:mt-0">
            {{ timeTo(proposal?.proposals[0].deposit_end_time) }}
          </div>
          <div class="progress-bar w-full h-2 bg-grey-200 rounded my-6">
            <div class="link-gradient rounded h-2 w-2/12" />
          </div>
          <ProposalDeposit
            v-if="loggedIn"
            :proposal-id="proposal?.proposals[0].id"
            :min-deposit="minDeposit"
            :total-deposit="totalDeposit"
            :deposit-denom="depositDenom"
          />
          <div
            v-else
            class="justify-center px-6 py-4 rounded link-gradient text-dark text-300 text-center cursor-pointer w-full"
            @click="
              () => {
                bus.emit('open');
              }
            "
          >
            {{ $t("components.ProposalDeposit.cta") }}
          </div>
        </SimpleCard>
      </div>
    </div>
    <SimpleCard v-if="!inDeposit" class="items-stretch my-6">
      <div class="flex flex-col sm:flex-row gap-y-8 lg:gap-10 flex-wrap text-center">
        <div class="w-full sm:w-1/2 lg:w-25 text-center lg:flex-1">
          <div class="text-300 md:text-500 text-accent-100 mb-1">
            {{ $t("voteOptions.yes") }}: {{ decToPerc(yes, 2) }}%
          </div>
          <div class="text-100 text-grey-100">
            {{ formatAmount(yesVotes, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-25 text-center lg:flex-1">
          <div class="text-300 md:text-500 text-neg-200 mb-1">{{ $t("voteOptions.no") }}: {{ decToPerc(no, 2) }}%</div>
          <div class="text-100 text-grey-100">
            {{ formatAmount(noVotes, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-25 text-center lg:flex-1">
          <div class="text-300 md:text-500 text-grey-100 mb-1">
            {{ $t("voteOptions.abstain") }}: {{ decToPerc(abstain, 2) }}%
          </div>
          <div class="text-100 text-grey-100">
            {{ formatAmount(abstainVotes, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
          </div>
        </div>
      </div>
    </SimpleCard>
    <UiTabs id="proposal-tab" v-model="tabSelected" :options="tabOptions" class="text-400 font-medium mt-14 md:mt-0" />
    <div class="flex flex-col pt-6 md:pt-[72px]">
      <Transition name="tab" mode="out-in">
        <div v-if="isTabSelected('Info')" class="w-full">
          <div class="flex flex-col gap-4 md:gap-6">
            <div class="flex flex-col md:flex-row gap-4 lg:gap-6">
              <SimpleCard class="w-full md:w-1/2 flex-grow">
                <div class="flex w-full flex-wrap">
                  <div class="grow w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposer") }}</div>
                    <div class="text-light text-200 md:text-300 break-words leading-normal">
                      {{ proposal?.proposals[0].proposer_address }}
                    </div>
                  </div>
                  <div class="w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposalType") }}</div>
                    <div class="text-light text-200 md:text-300 break-words leading-normal">
                      {{ proposalTypes.join(", ") }}
                    </div>
                  </div>
                  <div class="grow w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.votingStart") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{
                        inDeposit ? "-" : dayjs(proposal?.proposals[0].voting_start_time).format("MMMM D, YYYY h:mm A")
                      }}
                    </div>
                  </div>
                  <div class="grow w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.votingEnd") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ inDeposit ? "-" : dayjs(proposal?.proposals[0].voting_end_time).format("MMMM D, YYYY h:mm A") }}
                    </div>
                  </div>
                  <div class="grow w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.submitTime") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ dayjs(proposal?.proposals[0].submit_time).format("MMMM D, YYYY h:mm A") }}
                    </div>
                  </div>
                  <div class="grow w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.depositEnd") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{
                        inDeposit ? dayjs(proposal?.proposals[0].deposit_end_time).format("MMMM D, YYYY h:mm A") : "-"
                      }}
                    </div>
                  </div>
                  <div class="grow w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.initialDeposit") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ formatAmount(initialDeposit, stakingDenomDecimals) }} /
                      {{ formatAmount(minDeposit, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
                    </div>
                  </div>
                  <div class="grow w-full lg:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.totalDeposit") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ formatAmount(totalDeposit, stakingDenomDecimals) }} /
                      {{ formatAmount(minDeposit, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
                    </div>
                  </div>
                </div>
              </SimpleCard>
            </div>
            <div v-if="proposal?.proposals[0].content && proposal?.proposals[0].content.length > 0" class="flex">
              <SimpleCard class="w-full">
                <div class="text-light text-300 md:text-500 text-left mb-8 font-medium">
                  {{ $t("proposalpage.labels.messages") }}
                </div>
                <div
                  v-if="
                    proposal?.proposals[0].proposal_type == '/atomone.gov.v1beta1.TextProposal' ||
                    proposal?.proposals[0].proposal_type == ''
                  "
                  class="flex w-full flex-wrap2"
                >
                  <div class="grow w-full md:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposalType") }}</div>
                    <div class="text-light text-200 md:text-300">{{ $t("proposalpage.types.text") }}</div>
                  </div>
                  <div class="grow w-full md:w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.title") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ proposal?.proposals[0].content.title }}
                    </div>
                  </div>
                  <div class="w-full flex-2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.description") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ proposal?.proposals[0].content.description }}
                    </div>
                  </div>
                </div>
                <div
                  v-if="proposal?.proposals[0].proposal_type == '/cosmos.params.v1beta1.ParameterChangeProposal'"
                  class="flex w-full flex-wrap flex-col md:flex-row"
                >
                  <div class="grow w-full md:w-1/2 mb-10 md:pr-3 pr-0">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposalType") }}</div>
                    <div class="text-light text-200 md:text-300">{{ $t("proposalpage.types.paramChange") }}</div>
                  </div>
                  <div class="grow w-full md:w-1/2 mb-10 md:pl-3 pr-0">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.title") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ proposal?.proposals[0].content.title }}
                    </div>
                  </div>
                  <div class="grow w-full md:w-1/2 mb-10 md:pr-3 pr-0">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.description") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ proposal?.proposals[0].content.description }}
                    </div>
                  </div>
                  <div class="grow w-full md:w-1/2 mb-10 md:pl-3 pr-0">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.changes") }}</div>
                    <div class="text-light text-100">
                      <VCodeBlock
                        :code="JSON.stringify(proposal?.proposals[0].content.changes, null, '\t')"
                        prismjs
                        :theme="false"
                      />
                    </div>
                  </div>
                </div>
                <div
                  v-if="proposal?.proposals[0].proposal_type == '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal'"
                  class="flex w-full flex-wrap"
                >
                  <div class="grow w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposalType") }}</div>
                    <div class="text-light text-200 md:text-300">{{ $t("proposalpage.types.text") }}</div>
                  </div>
                  <div class="grow w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.title") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ proposal?.proposals[0].content.title }}
                    </div>
                  </div>
                  <div class="grow w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.description") }}</div>
                    <div class="text-light text-200 md:text-300">
                      {{ proposal?.proposals[0].content.description }}
                    </div>
                  </div>
                  <div class="grow w-1/2 mb-10">
                    <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.upgradePlan") }}</div>
                    <div class="text-light text-100">
                      <VCodeBlock
                        :code="JSON.stringify(proposal?.proposals[0].content.plan, null, '\t')"
                        prismjs
                        :theme="false"
                      />
                    </div>
                  </div>
                </div>
                <div v-else class="flex w-full flex-wrap">
                  <div class="grow w-full mb-10">
                    <div class="text-light text-100">
                      <VCodeBlock
                        :code="JSON.stringify(proposal?.proposals[0].content, null, '\t')"
                        prismjs
                        :theme="false"
                      />
                    </div>
                  </div>
                </div>
              </SimpleCard>
            </div>
          </div>
        </div>

        <div v-else-if="isTabSelected('Description')" class="w-full">
          <div class="flex flex-col gap-8 p-10 bg-grey-400 rounded-md">
            <span>{{ $t("proposalpage.labels.proposalDescription") }}</span>
            <div v-if="proposal" class="text-grey-50">
              <MarkdownParser v-model="proposal.proposals[0].description" />
            </div>
          </div>
        </div>

        <div v-else-if="isTabSelected('Voters')" class="flex flex-col w-full gap-6">
          <!-- Voters Panel -->
          <div v-if="proposal && proposal.proposals[0]" class="flex flex-col lg:flex-row w-full gap-6">
            <!-- All Account Votes -->
            <VotePanel
              :voters="distinctVoters"
              :denom="stakingDenomDisplay"
              :precision="stakingDenomDecimals"
              :vote-tallies="allVoteCounts"
              :token-tallies="tokenTallies"
              @on-breakdown="showBreakdown('voters')"
            >
              <template #header>{{ $t("proposalpage.labels.accountsAll") }}</template>
              <template #type>{{ $t("proposalpage.labels.accountsVoted") }}</template>
            </VotePanel>
            <!-- All Validator Votes -->
            <VotePanel
              :max="maxValidators"
              :voters="votedValidators"
              :denom="stakingDenomDisplay"
              :precision="stakingDenomDecimals"
              :vote-tallies="validatorVoteCounts"
              :token-tallies="validatorTallies"
              @on-breakdown="showBreakdown('validators')"
            >
              <template #header>{{ $t("proposalpage.labels.validators") }}</template>
              <template #type>{{ $t("proposalpage.labels.validatorsVoted") }}</template>
            </VotePanel>
          </div>

          <!-- Treemap Panel-->
          <div class="flex flex-col bg-grey-300 rounded-md w-full p-10">
            <div class="text-light text-300 md:text-500 text-left mb-8">
              {{ $t("proposalpage.labels.validatorQuota") }}
            </div>
            <div class="flex flex-row object-contain">
              <template v-if="validatorVoteSum >= 1">
                <div
                  v-for="voteType in voteTypes"
                  :key="voteType"
                  class="flex flex-row h-96 relative"
                  :style="[`width: ${calculateWidthForTree(voteType)}%`]"
                >
                  <Treemap :data="getValidatorVotes(voteType)" :type="voteType" />
                </div>
              </template>
              <div v-else class="text-grey-100 text-200 md:text-300">
                {{ $t("proposalpage.labels.noValidatorVotes") }}
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="isTabSelected('Discussions')" class="flex items-center justify-center w-full">
          <div class="w-full lg:w-2/3">
            <!--<GithubComments :term="termDiscussion" />//-->
          </div>
        </div>
        <div v-else-if="isTabSelected('Links')" class="w-full">
          <!--<GithubLinks :term="termLink" />//-->
        </div>
      </Transition>
    </div>

    <PopupBox :visible="showJsonModal" title="JSON" @close="showJsonModal = false">
      <div v-if="proposal" class="p-4">
        <VCodeBlock :code="JSON.stringify(proposal, null, '\t')" prismjs :theme="false" />
      </div>
    </PopupBox>

    <ModalWrap :visible="displayBreakdown">
      <div class="bg-dark px-20 py-12 w-[90vw] md:max-w-[90rem] rounded-md max-h-screen overflow-auto">
        <CommonButton class="flex justify-between items-center gap-6 w-36" @click="showBreakdown(null)">
          <Icon icon="arrowLeft" /><span>{{ $t("ui.buttons.back") }}</span>
        </CommonButton>
        <div class="font-termina text-800 font-semibold text-light pt-12">
          {{ Utility.capitalizeFirstLetter(breakdownType ?? "") }}
        </div>

        <Breakdown v-if="proposal && breakdownType == 'voters'" :proposal-id="proposal.proposals[0].id" />
        <ValidatorBreakdown v-if="breakdownType == 'validators'" :validator-data="validatorsWithStakeAndVotes" />
      </div>
    </ModalWrap>
  </div>
</template>

<style scoped>
.tab-enter-active,
.tab-leave-active {
  transition: all 0.4s;
}

.tab-enter-from,
.tab-leave-to {
  opacity: 0;
  filter: blur(0.6rem);
}
</style>
