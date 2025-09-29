import { MsgMintPhoton } from "@atomone/atomone-types/atomone/photon/v1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";

import { useWallet } from "@/composables/useWallet";
import CommandBuilder from "@/utility/commandBuilder.ts";


export const usePhoton = () => {
  const createMint = async (mint: Partial<MsgMintPhoton>, cli: boolean = false) => {
    const { sendTx, address } = useWallet();
    if (cli && mint.amount && mint.toAddress) {
      const command = CommandBuilder.Mint().
        withSigner(address.value).
        addAmountParam(mint.amount).
        finish();
      return command;
    } else {
      const Mint: EncodeObject = {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value: {
          toAddress: address.value,
          amount: mint.amount
        }
      };
      const result = await sendTx([Mint]);
      return result;
    }
  };
  return { createMint };
};
