<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-6 sm:px-6">
        <div class="mb-2">
        <router-link
          to="/invoices"
          class="text-white text-left bg-red-500 px-4 py-1 rounded-md text-sm font-medium"
        >
          Tagasi
        </router-link>
    </div>
    <div>
        <button
        class="text-white text-left bg-green-600 px-4 py-1 rounded-md text-sm font-medium"
        @click="generatePdf"
      >
        Lae alla
      </button>
    </div>
      <div class="py-2">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Arve info</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Nr: {{ invoice.invoiceNumber }}
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Arve kuupäev</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ invoice.dateOfInvoice }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Tellimuse number</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ invoice.purchaseOrderNumber }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Tarne kuupäev</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ invoice.dateOfSupply }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Arve saaja</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Nimi: {{ invoice.customerName }}
            <br />
            Aadress: {{ invoice.customerCity }}
            {{ invoice.customerPostalCode }}
            {{ invoice.customerAddress }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Arve väljastaja</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Reg nr: {{ invoice.userRegCode }}
            <br />
            Nimi: {{ invoice.userName }}
            <br />
            Aadress: {{ invoice.userCity }}
            {{ invoice.userPostalCode }}
            {{ invoice.userAddress }}
            <br />
            Panga andmed: {{ invoice.userBankName }}
            <br />
            {{ invoice.userBankAccount }}
            <br />
            Telefoni nr: {{ invoice.userPhoneNumber }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Maksetingimused</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ invoice.paymentTerms }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Makse kirjeldus</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ invoice.howToPay }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Käibemaksu protsent</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ invoice.vatPercentage }}%
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">
            Allahindluse protsent
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ invoice.discount }}%
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Summa käibemaksuta</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ Number((invoice.totalWithoutVat).toFixed(2)) }}€
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Käibemaks</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ Number((invoice.totalVat).toFixed(2)) }}€
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Allahindlus</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ Number((invoice.discountSum).toFixed(2)) }}€
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Kogusumma</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ Number((invoice.totalPrice).toFixed(2)) }}€
          </dd>
          
        </div>
        <br />
      <br />
      <div class="px-4 py-2 sm:px-2">
          <h3 class="text-md leading-6 font-medium text-gray-900">Arve komponendid</h3>
          <br />
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            <table class="table-fixed w-full">
          <InvoiceItemViewHeader></InvoiceItemViewHeader>
          <InvoiceItemViewForDetails
            v-for="i in invoiceItems"
            :key="i.itemDescription"
            :item="i"
          ></InvoiceItemViewForDetails>
        </table>
          </p>
        </div>
      </dl>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue';
import outsideInvoices, { Invoice } from '@/modules/invoices';
import { apiUrl } from '@/modules/api';
import { useRoute } from 'vue-router';
import outsideInvoiceItems, { InvoiceItem } from '@/modules/invoiceItems';
import InvoiceItemViewForDetails from '@/components/invoice/InvoiceItemViewForDetails.vue';
import InvoiceItemViewHeader from '@/components/invoice/InvoiceItemViewHeader.vue';

export default defineComponent({
  components: {
    InvoiceItemViewForDetails,
    InvoiceItemViewHeader,
  },

  setup() {
    const route = useRoute();
    const items: Ref<InvoiceItem[]> = ref([]);
    const invoice: Ref<Invoice> = ref({
      invoiceNumber: 0,
      purchaseOrderNumber: 0,
      dateOfSupply: '',
      dateOfInvoice: '',
      userRegCode: '',
      userName: '',
      userPhoneNumber: '',
      userAddress: '',
      userPostalCode: '',
      userCity: '',
      userCountry: '',
      userBankName: '',
      userBankAccount: '',
      customerName: '',
      customerAddress: '',
      customerPostalCode: '',
      customerCity: '',
      customerCountry: '',
      totalPrice: 0,
      vatPercentage: 0,
      totalVat: 0,
      totalWithoutVat: 0,
      discount: 0,
      paymentTerms: '',
      howToPay: '',
      invoiceItems: items,
      discountSum: 0,
    });
    const item: Ref<InvoiceItem> = ref({
      itemDescription: '',
      amount: 1,
      pricePerAmount: 1,
    });

    onMounted(async () => {
      const response = await fetch(apiUrl + `Invoices/${route.params.id}`);
      const invoiceDetails = await response.json();
      
      invoice.value.id = invoiceDetails.id;
      invoice.value.invoiceNumber = invoiceDetails.invoiceNumber;
      invoice.value.purchaseOrderNumber = invoiceDetails.purchaseOrderNumber;
      invoice.value.dateOfSupply = invoiceDetails.dateOfSupply;
      invoice.value.dateOfInvoice = invoiceDetails.dateOfInvoice;
      invoice.value.userRegCode = invoiceDetails.userRegCode;
      invoice.value.userName = invoiceDetails.userName;
      invoice.value.userPhoneNumber = invoiceDetails.userPhoneNumber;
      invoice.value.userAddress = invoiceDetails.userAddress;
      invoice.value.userPostalCode = invoiceDetails.userPostalCode;
      invoice.value.userCity = invoiceDetails.userCity;
      invoice.value.userCountry = invoiceDetails.userCountry;
      invoice.value.userBankName = invoiceDetails.userBankName;
      invoice.value.userBankAccount = invoiceDetails.userBankAccount;
      invoice.value.customerName = invoiceDetails.customerName;
      invoice.value.customerAddress = invoiceDetails.customerAddress;
      invoice.value.customerPostalCode = invoiceDetails.customerPostalCode;
      invoice.value.customerCity = invoiceDetails.customerCity;
      invoice.value.customerCountry = invoiceDetails.customerCountry;
      invoice.value.totalPrice = invoiceDetails.totalprice;
      invoice.value.vatPercentage = invoiceDetails.vatPercentage;
      invoice.value.totalVat = invoiceDetails.totalVat;
      invoice.value.totalWithoutVat = invoiceDetails.totalWithoutVat;
      invoice.value.discount = invoiceDetails.discount;
      invoice.value.discountSum = invoiceDetails.discountSum;
      invoice.value.paymentTerms = invoiceDetails.paymentTerms;
      invoice.value.howToPay = invoiceDetails.howToPay;
      invoiceItems.value = invoiceDetails.invoiceItems;
      invoice.value.invoiceItems = invoiceDetails.invoiceItems;

      var sum = invoice.value.invoiceItems.reduce(
        (acc: number, item: InvoiceItem) => acc + item.amount * item.pricePerAmount,
        0,
      );
      invoice.value.discountSum = -(sum * invoice.value.discount * 0.01);
      invoice.value.totalPrice = sum + invoice.value.discountSum;
      invoice.value.totalVat =
        invoice.value.totalPrice * (0.01 * invoice.value.vatPercentage);
      invoice.value.totalWithoutVat =
        invoice.value.totalPrice - invoice.value.totalVat;

      console.log(invoice);
    });

    const { invoiceItems } = outsideInvoiceItems();
    const { downloadInvoice } = outsideInvoices();
    const generatePdf = () => {
      downloadInvoice({ ...invoice.value });
    };
    
    return {
      invoice,
      invoiceItems,
      item,
      generatePdf
    };
  },
});
</script>