<template>
    <div>
      <HomepageView title="Avaleht" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HomepageView from '@/components/HomepageView.vue';
  
  export default defineComponent({
    components: {
        HomepageView,
    },
    setup() {
      return {};
    },
  });
  </script>