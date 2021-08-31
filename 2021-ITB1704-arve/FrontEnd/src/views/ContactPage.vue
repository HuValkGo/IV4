<template>
    <div>
      <ContactPageView title="Kontaktileht" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ContactPageView from '@/components/ContactPageView.vue';
  
  export default defineComponent({
    components: {
        ContactPageView,
    },
    setup() {
      return {};
    },
  });
  </script>