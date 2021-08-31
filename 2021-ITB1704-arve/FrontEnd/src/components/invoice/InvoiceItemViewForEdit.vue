<template>
  <tbody class="bg-white divide-y divide-gray-200">
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
            :key="item.id"
            class="btn btn-sm btn-outline-secondary px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-white"
            :value="item.id"
          >
            Vali
          </button>
          <br />
        </div>
        <div class="btn-group mr-2 text-right">
          <button
            class="btn btn-sm btn-outline-secondary px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-white"
            :value="item.id"
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
import { InvoiceItem } from '@/modules/invoiceItems';

export default defineComponent({
  name: 'InvoiceItem',
  props: {
    item: {
      type: Object as PropType<InvoiceItem>,
      required: true,
    },
  },
});
</script>
