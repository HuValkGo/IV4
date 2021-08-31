<template>
  <div>
    <InvoiceDetailsPageView title="Arved" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InvoiceDetailsPageView from '@/components/invoice/InvoiceDetailsPageView.vue';

export default defineComponent({
  components: {
    InvoiceDetailsPageView,
  },
  setup() {
    return {};
  },
});
</script>
