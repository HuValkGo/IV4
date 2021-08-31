<template>
  <div>
    <UserPageView title="Kasutajad" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserPageView from '@/components/user/UserPageView.vue';

export default defineComponent({
  components: {
    UserPageView,
  },
  setup() {
    return {};
  },
});
</script>
