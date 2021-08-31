<template>
  <div
    class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="text-center">
      <h1
        class="px-6 py-3 text-center text-xl font-medium text-gray-700 uppercase tracking-wider"
      >
        {{ title }}
      </h1>
      <div class="absolute flex items-center">
        <div class="flex space-x-4">
          <router-link
            to="/invoices/create"
            class="text-white text-left bg-green-500 px-2 py-1 rounded-md text-sm font-medium"
          >
            Lisa arve
          </router-link>
        </div>
      </div>
      <br />
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto -mx-6 lg:-mx-8">
          <div class="py-6 align-middle inline-block min-w-full px-6 lg:px-8">
            <div
              class="shadow overflow-hidden border-b border-gray-200 rounded-lg"
            >
              <table
                class="min-w-full divide-y divide-gray-200 hidden xl:block"
              >
                <InvoiceTableHeaderForComputer></InvoiceTableHeaderForComputer>
                <InvoiceViewForComputer
                  v-for="item in invoices"
                  :key="item.id"
                  :invoice="item"
                ></InvoiceViewForComputer>
              </table>
              <table
                class="min-w-full divide-y divide-gray-200 xl:hidden hidden md:block"
              >
                <InvoiceTableHeaderForTablet></InvoiceTableHeaderForTablet>
                <InvoiceViewForTablet
                  v-for="item in invoices"
                  :key="item.id"
                  :invoice="item"
                ></InvoiceViewForTablet>
              </table>
              <table class="min-w-full divide-y divide-gray-200 md:hidden">
                <InvoiceTableHeaderForMobile></InvoiceTableHeaderForMobile>
                <InvoiceViewForMobile
                  v-for="item in invoices"
                  :key="item.id"
                  :invoice="item"
                ></InvoiceViewForMobile>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import outsideInvoices from '@/modules/invoices';
import InvoiceViewForComputer from '@/components/invoice/InvoiceViewForComputer.vue';
import InvoiceViewForMobile from '@/components/invoice/InvoiceViewForMobile.vue';
import InvoiceViewForTablet from '@/components/invoice/InvoiceViewForTablet.vue';
import InvoiceTableHeaderForComputer from '@/components/invoice/InvoiceTableHeaderForComputer.vue';
import InvoiceTableHeaderForTablet from '@/components/invoice/InvoiceTableHeaderForTablet.vue';
import InvoiceTableHeaderForMobile from '@/components/invoice/InvoiceTableHeaderForMobile.vue';
export default defineComponent({
  components: {
    InvoiceViewForComputer,
    InvoiceViewForMobile,
    InvoiceViewForTablet,
    InvoiceTableHeaderForComputer,
    InvoiceTableHeaderForTablet,
    InvoiceTableHeaderForMobile,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { invoices, loadInvoices } = outsideInvoices();
    onMounted(() => {
      loadInvoices();
    });

    return { invoices };
  },
});
</script>

<style scoped></style>
