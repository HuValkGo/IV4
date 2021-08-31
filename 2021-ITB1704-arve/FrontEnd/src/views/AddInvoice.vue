<template>
  <AddInvoiceForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddInvoiceForm from '@/components/invoice/AddInvoiceForm.vue';

export default defineComponent({
  components: {
    AddInvoiceForm,
  },
  setup() {
    return {};
  },
});
</script>
