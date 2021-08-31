<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ invoice.invoiceNumber }}
          <br />
          {{ invoice.customerName }}
        </div>
      </td>
      <td>
        <div class="btn-group mr-2">
          <router-link
            :to="`/invoices/${invoice.id}`"
            class="btn btn-sm btn-outline-secondary px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-white"
            >Vaata</router-link
          >
        </div>
      </td>
      <td>
        <div class="btn-group mr-2">
          <router-link
            :to="`/invoices/${invoice.id}/edit`"
            class="btn btn-sm btn-outline-secondary px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-600 text-white"
            >Muuda</router-link
          >
        </div>
      </td>
      <td>
        <div class="btn-group mr-2">
          <button
            class="btn btn-sm btn-outline-secondary px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-white"
            @click="removeInvoice"
          >
            Kustuta
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import outsideInvoices, { Invoice } from '@/modules/invoices';

export default defineComponent({
  name: 'Invoice',
  props: {
    invoice: {
      type: Object as PropType<Invoice>,
      required: true,
    },
  },

  setup(props) {
    const removeInvoice = () => {
      if (confirm('Kas sa oled kindel?')) {
        deleteInvoice(props.invoice);
      }
    };

    const { deleteInvoice } = outsideInvoices();

    return {
      removeInvoice,
    };
  },
});
</script>
