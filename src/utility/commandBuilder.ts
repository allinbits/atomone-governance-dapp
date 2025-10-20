import { Coin } from "@atomone/atomone-types/cosmos/base/v1beta1/coin";

export default class CommandBuilder {
  private command: string[];

  private address: string;

  private fees: Coin[];

  static Deposit () {
    const builder = new CommandBuilder("gov");
    return builder.withAction("deposit");
  }

  static Mint () {
    const builder = new CommandBuilder("photon");
    return builder.withAction("mint");
  }

  static Vote () {
    const builder = new CommandBuilder("gov");
    return builder.withAction("vote");
  }

  static WeightedVote () {
    const builder = new CommandBuilder("gov");
    return builder.withAction("weighted-vote");
  }

  constructor (module: string) {
    this.command = [];
    this.address = "";
    this.fees = [];
    this.chainId = "";
    this.sequence = 0;
    this.command.push("atomoned");
    this.command.push("tx");
    this.command.push(module);
  }

  withAction (action: string) {
    this.command.push(action);
    return this;
  }

  withChainId (chainId: string) {
    this.chainId = chainId;
    return this;
  }

  withSigner (address: string) {
    this.address = address;
    return this;
  }

  withFees (fees: Coin[]) {
    this.fees = fees;
    return this;
  }

  addParam (param: string) {
    this.command.push(param);
    return this;
  }

  addAmountParam (amount: Coin) {
    this.command.push(amount.amount + amount.denom);
    return this;
  }

  finish () {
    this.command.push("--fees");
    let feeString = "";
    for (let i = 0; i < this.fees.length; i++) {
      feeString = feeString + this.fees[i].amount + this.fees[i].denom;
      if (i + 1 != this.fees.length) {
        feeString = feeString + ",";
      }
    }
    this.command.push(feeString);
    this.command.push("--generate-only");
    this.command.push("--from");
    this.command.push(this.address);
    this.command.push(">");
    this.command.push("tx.unsigned.json");
    return this.command.join(" ");
  }
}
