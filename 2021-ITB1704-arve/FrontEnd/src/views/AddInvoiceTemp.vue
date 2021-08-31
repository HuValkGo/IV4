<template>
  <AddInvoiceFormTemp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddInvoiceFormTemp from '@/components/invoice/AddInvoiceFormTemp.vue';

export default defineComponent({
  components: {
    AddInvoiceFormTemp,
  },
  setup() {
    return {};
  },
});
</script>
