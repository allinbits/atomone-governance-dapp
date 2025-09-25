<script lang="ts" setup>
import { onMounted, ref } from "vue";

import { bus } from "@/bus";
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";

const props = defineProps<{ proposal: number }>();
const count = ref(0);
const { getDiscussionCommentCount } = useGithubDiscussions();

onMounted(async () => {
  try {
    const response = await getDiscussionCommentCount({ term: `Proposal #${props.proposal}` });
    count.value = response.count;
  } catch (_e) {
    bus.emit("error");
  }
});
</script>

<template>
  <span>{{ count }}</span>
</template>
