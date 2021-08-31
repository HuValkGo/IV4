<template>
  <div
    class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="mt-8 space-y-6">
        <div>
          <label for="invoiceNumber">Arve number</label>
          <input
            id="invoiceNumber"
            v-model="invoice.invoiceNumber"
            name="invoiceNumber"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Arve number"
          />
        </div>
        <div>
          <label for="dateOfInvoice">Arve kuupäev</label>
          <input
            id="dateOfInvoice"
            v-model="invoice.dateOfInvoice"
            type="date"
            name="dateOfInvoice"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Arve kuupäev"
          />
        </div>
        <div>
          <label for="customerName">Arve saaja</label>
          <input
            id="customerName"
            v-model="invoice.customerName"
            name="customerName"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Nimi"
          />
        </div>
        <div>
          <input
            id="customerAddress"
            v-model="invoice.customerAddress"
            name="customerAddress"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tänav, korter"
          />
        </div>
        <div>
          <input
            id="customerPostalCode"
            v-model="invoice.customerPostalCode"
            name="customerPostalCode"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Postiindeks"
          />
        </div>
        <div>
          <input
            id="customerCity"
            v-model="invoice.customerCity"
            name="customerCity"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Linn"
          />
        </div>
        <div>
          <input
            id="customerCountry"
            v-model="invoice.customerCountry"
            name="customerCountry"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Riik"
          />
        </div>
        <div>
          <label>Arve väljastaja</label>
          <input
            id="regCode"
            v-model="invoice.userRegCode"
            name="regCode"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Registrinumber"
          />
        </div>
        <div>
          <input
            id="name"
            v-model="invoice.userName"
            name="name"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Nimi"
          />
        </div>
        <div>
          <input
            id="address"
            v-model="invoice.userAddress"
            name="address"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tänav, korter"
          />
        </div>
        <div>
          <input
            id="postalCode"
            v-model="invoice.userPostalCode"
            name="postalCode"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Postiindeks"
          />
        </div>
        <div>
          <input
            id="city"
            v-model="invoice.userCity"
            name="city"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Linn"
          />
        </div>
        <div>
          <input
            id="country"
            v-model="invoice.userCountry"
            name="country"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Riik"
          />
        </div>
        <div>
          <input
            id="bankAccount"
            v-model="invoice.userBankAccount"
            name="bankAccount"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Pangakonto nr"
          />
        </div>
        <div>
          <input
            id="bankName"
            v-model="invoice.userBankName"
            name="bankName"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Panga nimi"
          />
        </div>
        <div>
          <input
            id="phoneNumber"
            v-model="invoice.userPhoneNumber"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Telefoninumber"
          />
        </div>
        <div>
          <label for="paymentTerms">Maksetingimused</label>
          <textarea
            id="paymentTerms"
            v-model="invoice.paymentTerms"
            name="paymentTerms"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Maksetingimused"
          />
        </div>
        <div>
          <label for="howToPay">Makse kirjeldus</label>
          <textarea
            id="howToPay"
            v-model="invoice.howToPay"
            name="howToPay"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Makse kirjeldus"
          />
        </div>
        <div v-if="invoiceItems.length >= 1">
          <header>Arve komponendid:</header>
          <table class="table-fixed w-full">
            <InvoiceItemViewHeader></InvoiceItemViewHeader>
            <InvoiceItemViewForEdit
              v-for="i in invoiceItems"
              :key="i.itemDescription"
              :item="i"
              @click="selectItem($event)"
            ></InvoiceItemViewForEdit>
          </table>
        </div>
        <div>
          <label>Toote/teenuse kirjeldus</label>
          <input
            id="itemDescription"
            v-model="editedItem.itemDescription"
            name="itemDescription"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Kirjeldus"
          />
          <br />
          <label>Kogus</label>
          <input
            id="amount"
            v-model="editedItem.amount"
            name="amount"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Kogus"
          />
          <br />
          <label>Tüki hind</label>
          <input
            id="pricePerAmount"
            v-model="editedItem.pricePerAmount"
            name="pricePerAmount"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tüki hind"
          />
          <br />
          <div class="flex flex-row space-x-4 space-x">
            <button
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="editItem()"
            >
              Muuda komponenti
            </button>
            <button
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="addItem()"
            >
              Lisa komponent
            </button>
          </div>
        </div>
        <div>
          <label for="vatPercentage">Käibemaksu protsent (%)</label>
          <input
            id="vatPercentage"
            v-model="invoice.vatPercentage"
            name="vatPercentage"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="KM %"
            @change="calculateTotals"
          />
        </div>
        <div>
          <label for="discount">Allahindluse protsent (%)</label>
          <input
            id="discount"
            v-model="invoice.discount"
            name="discount"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Allahindlus"
            @change="calculateTotals"
          />
        </div>
        <div>
          <label class="font-medium text-lg" for="totalWithoutVat"
            >Summa käibemaksuta: {{ invoice.totalWithoutVat }}€</label
          >
        </div>
        <div>
          <label class="font-medium text-lg" for="totalVat"
            >Käibemaks: {{ invoice.totalVat }}€</label
          >
        </div>
        <div>
          <label class="font-medium text-lg" for="discount"
            >Allahindlus: {{ invoice.discountSum }}€</label
          >
        </div>
        <div>
          <label class="font-medium text-lg" for="totalPrice"
            >Kogusumma: {{ invoice.totalPrice }}€
          </label>
        </div>
      </div>
      <button
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="submitForm"
      >
        Muuda
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import outsideInvoices, { Invoice } from '@/modules/invoices';
import outsideInvoiceItems, { InvoiceItem } from '@/modules/invoiceItems';
import InvoiceItemViewForEdit from '@/components/invoice/InvoiceItemViewForEdit.vue';
import InvoiceItemViewHeader from '@/components/invoice/InvoiceItemViewHeader.vue';
import { apiUrl } from '@/modules/api';
import { useRoute, useRouter } from 'vue-router';
import { uuid } from 'vue-uuid';

export default defineComponent({
  components: {
    InvoiceItemViewForEdit,
    InvoiceItemViewHeader,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const item: Ref<InvoiceItem> = ref({
      itemDescription: '',
      amount: 1,
      pricePerAmount: 1,
    });
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
    const editedItem: Ref<InvoiceItem> = ref({
      id: '',
      itemDescription: '',
      amount: 1,
      pricePerAmount: 1,
    });

    const { editInvoice, deleteInvoice, addInvoice } = outsideInvoices();
    const {
      invoiceItems,
      editInvoiceItem,
      deleteInvoiceItemById,
      addInvoiceItem,
    } = outsideInvoiceItems();
    const loadInvoice = async () => {
      const response = await fetch(apiUrl + `Invoices/${route.params.id}`);
      const invoices = await response.json();
      invoice.value.id = invoices.id;
      invoice.value.invoiceNumber = invoices.invoiceNumber;
      invoice.value.purchaseOrderNumber = invoices.purchaseOrderNumber;
      invoice.value.dateOfSupply = invoices.dateOfSupply;
      invoice.value.dateOfInvoice = invoices.dateOfInvoice;
      invoice.value.userRegCode = invoices.userRegCode;
      invoice.value.userName = invoices.userName;
      invoice.value.userPhoneNumber = invoices.userPhoneNumber;
      invoice.value.userAddress = invoices.userAddress;
      invoice.value.userPostalCode = invoices.userPostalCode;
      invoice.value.userCity = invoices.userCity;
      invoice.value.userCountry = invoices.userCountry;
      invoice.value.userBankName = invoices.userBankName;
      invoice.value.userBankAccount = invoices.userBankAccount;
      invoice.value.customerName = invoices.customerName;
      invoice.value.customerAddress = invoices.customerAddress;
      invoice.value.customerPostalCode = invoices.customerPostalCode;
      invoice.value.customerCity = invoices.customerCity;
      invoice.value.customerCountry = invoices.customerCountry;
      invoice.value.totalPrice = invoices.totalPrice;
      invoice.value.vatPercentage = invoices.vatPercentage;
      invoice.value.totalVat = invoices.totalVat;
      invoice.value.totalWithoutVat = invoices.totalWithoutVat;
      invoice.value.discount = invoices.discount;
      invoice.value.discountSum = invoices.discountSum;
      invoice.value.paymentTerms = invoices.paymentTerms;
      invoice.value.howToPay = invoices.howToPay;
      invoiceItems.value = invoices.invoiceItems;
      invoice.value.invoiceItems = invoices.invoiceItems;
    };
    onMounted(async () => {
      loadInvoice();
    });
    const calculateTotals = () => {
      var sum = invoice.value.invoiceItems.reduce(
        (acc, item) => acc + item.amount * item.pricePerAmount,
        0,
      );
      console.log(sum);
      invoice.value.discountSum = Number(
        (-(sum * invoice.value.discount * 0.01)).toFixed(2),
      );
      invoice.value.totalPrice = Number(
        (sum + invoice.value.discountSum).toFixed(2),
      );
      invoice.value.totalVat = Number(
        (
          (invoice.value.totalPrice /
            (1 + 0.01 * invoice.value.vatPercentage)) *
          0.2
        ).toFixed(2),
      );
      invoice.value.totalWithoutVat = Number(
        (invoice.value.totalPrice - invoice.value.totalVat).toFixed(2),
      );
    };
    const submitForm = async () => {
      await deleteInvoice({ ...invoice.value });
      invoice.value.invoiceItems = invoiceItems.value;
      calculateTotals();
      console.log({ ...invoice.value });
      await addInvoice({ ...invoice.value });
      router.push({ name: 'Arved' });
    };
    const selectItem = async (event: any) => {
      if (event.target.value != undefined && event.target.outerText == 'Vali') {
        const response = await fetch(apiUrl + `Invoices/${route.params.id}`);
        const editItem = await response.json();
        invoiceItems.value = editItem.invoiceItems;
        const i = invoiceItems.value.find((x) => x.id === event.target.value)!;

        editedItem.value.id = i.id;
        editedItem.value.itemDescription = i.itemDescription;
        editedItem.value.amount = i.amount;
        editedItem.value.pricePerAmount = i.pricePerAmount;
      }
      if (
        event.target.value != undefined &&
        event.target.outerText == 'Kustuta'
      ) {
        await deleteInvoiceItemById(event.target.value);
      }
      await deleteInvoice({ ...invoice.value });
      invoice.value.invoiceItems = invoiceItems.value;
      await addInvoice({ ...invoice.value });
      loadInvoice();
      calculateTotals();
    };

    const editItem = async () => {
      var isAvailable = invoiceItems.value.find(
        (x) => x.itemDescription === editedItem.value.itemDescription,
      );
      if (isAvailable != undefined) {
        var currentAmountString = editedItem.value.amount
          .toString()
          .replace(',', '.');
        var currentPriceString = editedItem.value.pricePerAmount
          .toString()
          .replace(',', '.');
        editedItem.value.amount = Number(currentAmountString);
        editedItem.value.pricePerAmount = Number(currentPriceString);
        await editInvoiceItem(editedItem.value);
        invoice.value.invoiceItems = invoiceItems.value;
        calculateTotals();
        await editInvoice({ ...invoice.value });
        loadInvoice();
      }
    };

    const addItem = async () => {
      const isAvailable = invoiceItems.value.find(
        (x) => x.itemDescription === editedItem.value.itemDescription,
      );
      console.log(isAvailable);
      if (isAvailable == undefined) {
        var currentAmountString = editedItem.value.amount
          .toString()
          .replace(',', '.');
        var currentPriceString = editedItem.value.pricePerAmount
          .toString()
          .replace(',', '.');
        editedItem.value.amount = Number(currentAmountString);
        editedItem.value.pricePerAmount = Number(currentPriceString);
        editedItem.value.id = uuid.v1();
        await addInvoiceItem({ ...editedItem.value });
        await deleteInvoice({ ...invoice.value });
        invoice.value.invoiceItems = invoiceItems.value;
        await addInvoice({ ...invoice.value });
        calculateTotals();
        editedItem.value.id = uuid.v1();
        editedItem.value.itemDescription = '';
        editedItem.value.amount = 1;
        editedItem.value.pricePerAmount = 1;
        loadInvoice();
      }
    };

    return {
      item,
      invoice,
      invoiceItems,
      editedItem,
      addItem,
      editItem,
      submitForm,
      selectItem,
      calculateTotals,
    };
  },
});
</script>
