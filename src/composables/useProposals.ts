import { TextProposal, VoteOption } from "@atomone/atomone-types/atomone/gov/v1beta1/gov";
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from "@atomone/atomone-types/atomone/gov/v1beta1/tx";
import { ParameterChangeProposal } from "@atomone/atomone-types/cosmos/params/v1beta1/params";
import { SoftwareUpgradeProposal } from "@atomone/atomone-types/cosmos/upgrade/v1beta1/upgrade";
import { EncodeObject } from "@cosmjs/proto-signing";

import chainInfo from "@/chain-config.json";
import { useWallet } from "@/composables/useWallet";
import CommandBuilder from "@/utility/commandBuilder";

export const useProposals = () => {
  const { sendTx, address } = useWallet();
  const createTextProposalContent = (proposal: TextProposal): EncodeObject => {
    return {
      typeUrl: "/atomone.gov.v1beta1.TextProposal",
      value: TextProposal.encode({
        description: proposal.description,
        title: proposal.title
      }).finish()
    };
  };

  const createParamChangeProposalContent = (proposal: ParameterChangeProposal): EncodeObject => {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
      value: ParameterChangeProposal.encode({
        description: proposal.description,
        title: proposal.title,
        changes: proposal.changes
      }).finish()
    };
  };

  const createUpgradePlanProposalContent = (proposal: SoftwareUpgradeProposal): EncodeObject => {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
      value: SoftwareUpgradeProposal.encode({
        description: proposal.description,
        title: proposal.title,
        plan: proposal.plan
      }).finish()
    };
  };

  const createProposal = async (
    proposalMeta: Partial<MsgSubmitProposal>,
    proposal: EncodeObject,
    cli: boolean = false
  ) => {
    if (cli) {
      // TODO : CommandBuilder + proposal JSON Generation
    } else {
      const SubmitProposal: EncodeObject = {
        typeUrl: "/atomone.gov.v1beta1.MsgSubmitProposal",
        value: {
          initialDeposit: proposalMeta.initialDeposit,
          proposer: address.value,
          content: proposal
        }
      };
      const result = await sendTx([SubmitProposal]);
      return result;
    }
  };
  const depositProposal = async (deposit: Partial<MsgDeposit>, cli: boolean = false) => {
    if (cli && deposit.amount && deposit.amount.length >= 1) {
      const command = CommandBuilder.Deposit().
        withFees([
          { amount: "5000",
            denom: chainInfo.feeCurrencies[1].coinMinimalDenom }
        ]).
        withSigner(address.value).
        addParam(deposit.proposalId?.toString() ?? "0").
        addParam(deposit.amount[0].amount + deposit.amount[0].denom).
        finish();
      return command;
    } else {
      const Deposit: EncodeObject = {
        typeUrl: "/atomone.gov.v1beta1.MsgDeposit",
        value: {
          proposalId: deposit.proposalId,
          depositor: address.value,
          amount: deposit.amount
        }
      };
      const result = await sendTx([Deposit]);
      return result;
    }
  };
  const voteProposal = async (vote: Partial<MsgVote>, cli: boolean = false) => {
    if (cli) {
      let voteOption: string = "";
      switch (vote.option) {
        case VoteOption.VOTE_OPTION_YES:
          voteOption = "yes";
          break;
        case VoteOption.VOTE_OPTION_NO:
          voteOption = "no";
          break;
        case VoteOption.VOTE_OPTION_ABSTAIN:
          voteOption = "abstain";
          break;
      }
      const command = CommandBuilder.Vote().
        withFees([
          { amount: "5000",
            denom: chainInfo.feeCurrencies[1].coinMinimalDenom }
        ]).
        withSigner(address.value).
        addParam(vote.proposalId?.toString() ?? "0").
        addParam(voteOption).
        finish();
      return command;
    } else {
      const Vote: EncodeObject = {
        typeUrl: "/atomone.gov.v1beta1.MsgVote",
        value: {
          proposalId: vote.proposalId,
          voter: address.value,
          option: vote.option
        }
      };
      const result = await sendTx([Vote]);
      return result;
    }
  };
  const voteWeightedProposal = async (voteWeighted: Partial<MsgVoteWeighted>, cli: boolean = false) => {
    if (cli && voteWeighted.options) {
      let voteOptions: string = "";
      for (let i = 0; i < voteWeighted.options?.length; i++) {
        switch (voteWeighted.options[i].option) {
          case VoteOption.VOTE_OPTION_YES:
            voteOptions =
              voteOptions + "yes=" + (parseInt(voteWeighted.options[i].weight) / Math.pow(
                10,
                18
              )).toString();
            break;
          case VoteOption.VOTE_OPTION_NO:
            voteOptions =
              voteOptions + "no=" + (parseInt(voteWeighted.options[i].weight) / Math.pow(
                10,
                18
              )).toString();
            break;
          case VoteOption.VOTE_OPTION_ABSTAIN:
            voteOptions =
              voteOptions + "abstain=" + (parseInt(voteWeighted.options[i].weight) / Math.pow(
                10,
                18
              )).toString();
            break;
        }
        if (i + 1 != voteWeighted.options?.length) {
          voteOptions = voteOptions + ",";
        }
      }
      const command = CommandBuilder.WeightedVote().
        withFees([
          { amount: "5000",
            denom: chainInfo.feeCurrencies[1].coinMinimalDenom }
        ]).
        withSigner(address.value).
        addParam(voteWeighted.proposalId?.toString() ?? "0").
        addParam(voteOptions).
        finish();
      return command;
    } else {
      const VoteWeighted: EncodeObject = {
        typeUrl: "/atomone.gov.v1beta1.MsgVoteWeighted",
        value: {
          proposalId: voteWeighted.proposalId,
          voter: address.value,
          options: voteWeighted.options
        }
      };
      const result = await sendTx([VoteWeighted]);
      return result;
    }
  };
  return {
    createProposal,
    depositProposal,
    createTextProposalContent,
    voteProposal,
    voteWeightedProposal,
    createParamChangeProposalContent,
    createUpgradePlanProposalContent
  };
};
