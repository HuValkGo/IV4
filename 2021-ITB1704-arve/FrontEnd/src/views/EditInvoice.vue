<template>
  <EditInvoiceFormTemp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditInvoiceFormTemp from '@/components/invoice/EditInvoiceFormTemp.vue';

export default defineComponent({
  components: {
    EditInvoiceFormTemp,
  },
  setup() {
    return {};
  },
});
</script>
