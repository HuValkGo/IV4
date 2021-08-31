<template>
  <div>
    <InvoicePageView title="Arved" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InvoicePageView from '@/components/invoice/InvoicePageView.vue';

export default defineComponent({
  components: {
    InvoicePageView,
  },
  setup() {
    return {};
  },
});
</script>
