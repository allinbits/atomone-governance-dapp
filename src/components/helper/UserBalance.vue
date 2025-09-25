<script setup lang="ts">
import { computed } from "vue";

import { useChainData } from "@/composables/useChainData";
import { formatAmount } from "@/utility";

const { address, denom } = defineProps<{ address: string;
  denom: string; }>();
const { getBalance } = useChainData();

const balances = getBalance(address);

const balance = computed(() => {
  const bal = balances.value?.action_account_balance[0]?.coins?.filter((x) => x.denom == denom)[0];
  if (bal) {
    return bal;
  } else {
    return {
      amount: "0",
      denom
    };
  }
});
</script>
<template>
  <span>{{ formatAmount(balance.amount, 6) }}</span>
</template>
