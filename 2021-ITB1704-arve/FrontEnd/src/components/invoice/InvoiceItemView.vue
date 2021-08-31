<template>
  <tbody class="bg-white divide-y divide-gray-200 w-auto">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-left truncate">
          {{ item.itemDescription }}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-center truncate">
          {{ item.amount }}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-center truncate">
          {{ item.pricePerAmount }}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-center truncate">
          {{ Number((item.pricePerAmount * item.amount).toFixed(2)) }}
        </div>
      </td>
      <td>
        <div class="btn-group mr-2 text-center">
          <button
            class="btn btn-sm btn-outline-secondary px-2 border border-transparent inline-flex text-xs leading-5 font-semibold rounded-md bg-red-400 text-white"
            @click="removeItem"
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
import outsideInvoiceItems, { InvoiceItem } from '@/modules/invoiceItems';

export default defineComponent({
  name: 'InvoiceItem',
  props: {
    item: {
      type: Object as PropType<InvoiceItem>,
      required: true,
    },
  },
  setup(props) {
    const removeItem = () => {
      deleteInvoiceItem(props.item);
      load();
    };
    const { deleteInvoiceItem, load } = outsideInvoiceItems();

    return {
      removeItem,
    };
  },
});
</script>
