<template>
  <div
    class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-xl w-full space-y-8">
      <div class="mt-8 space-y-6">
        <div>
          <label for="invoiceNumber">Arve number</label>
          <input
            id="invoiceNumber"
            v-model="invoice.invoiceNumber"
            name="invoiceNumber"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Arve number"
          />
        </div>
        <div>
          <label for="purchaseOrderNumber">Tellimuse number</label>
          <input
            id="purchaseOrderNumber"
            v-model="invoice.purchaseOrderNumber"
            name="purchaseOrderNumber"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tellimuse number"
          />
        </div>
        <div>
          <label for="dateOfInvoice">Arve kuupäev</label>
          <input
            id="dateOfInvoice"
            v-model="invoice.dateOfInvoice"
            type="date"
            name="dateOfInvoice"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Arve kuupäev"
          />
        </div>
        <div>
          <label for="dateOfSupply">Tarne kuupäev</label>
          <input
            id="dateOfSupply"
            v-model="invoice.dateOfSupply"
            type="date"
            name="dateOfSupply"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tarne kuupäev"
          />
        </div>
        <div>
          <div>
            <label for="customerName">Arve saaja</label>
            <input
              id="customerName"
              v-model="invoice.customerName"
              name="customerName"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nimi"
            />
          </div>
          <div>
            <input
              id="customerAddress"
              v-model="invoice.customerAddress"
              name="customerAddress"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Tänav, korter"
            />
          </div>
          <div>
            <input
              id="customerPostalCode"
              v-model="invoice.customerPostalCode"
              name="customerPostalCode"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Postiindeks"
            />
          </div>
          <div>
            <input
              id="customerCity"
              v-model="invoice.customerCity"
              name="customerCity"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Linn"
            />
          </div>
          <div>
            <input
              id="customerCountry"
              v-model="invoice.customerCountry"
              name="customerCountry"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Riik"
            />
          </div>
        </div>
        <div>
          <label>Vali arve väljastaja</label>
          <select
            class="rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="user"
            @click="changeUser($event)"
          >
            <option></option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        <div>
          <div>
            <label for="userRegCode">Arve väljastaja andmed</label>
            <input
              id="userRegCode"
              v-model="invoice.userRegCode"
              name="userRegCode"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Registrinumber"
            />
          </div>
          <div>
            <input
              id="userName"
              v-model="invoice.userName"
              name="userName"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nimi"
            />
          </div>
          <div>
            <input
              id="userAddress"
              v-model="invoice.userAddress"
              name="userAddress"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Tänav, korter"
            />
          </div>
          <div>
            <input
              id="userPostalCode"
              v-model="invoice.userPostalCode"
              name="userPostalCode"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Postiindeks"
            />
          </div>
          <div>
            <input
              id="userCity"
              v-model="invoice.userCity"
              name="userCity"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Linn"
            />
          </div>
          <div>
            <input
              id="userCountry"
              v-model="invoice.userCountry"
              name="userCountry"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Riik"
            />
          </div>
          <div>
            <input
              id="userBankAccount"
              v-model="invoice.userBankAccount"
              name="userBankAccount"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Pangakonto nr"
            />
          </div>
          <div>
            <input
              id="userBankName"
              v-model="invoice.userBankName"
              name="userBankName"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Panga nimi"
            />
          </div>
          <div>
            <input
              id="userPhoneNumber"
              v-model="invoice.userPhoneNumber"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Telefoninumber"
            />
          </div>
        </div>
        <div v-if="invoiceItems.length >= 1">
          <header>Arve komponendid:</header>
          <table class="table-fixed w-full">
            <InvoiceItemViewHeader></InvoiceItemViewHeader>
            <InvoiceItemView
              v-for="i in invoiceItems"
              :key="i.itemDescription"
              :item="i"
            ></InvoiceItemView>
          </table>
        </div>
        <div>
          <label for="itemDescription">Toote/teenuse kirjeldus</label>
          <input
            id="itemDescription"
            v-model="item.itemDescription"
            name="itemDescription"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Kirjeldus"
          />
        </div>
        <div>
          <label for="amount">Kogus</label>
          <input
            id="amount"
            v-model="item.amount"
            name="amount"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Kogus"
          />
        </div>
        <div>
          <label for="pricePerAmount">Tüki hind</label>
          <!-- tuleb lsiada kontroll, et oleks punktiga eraldatud sisend ainult, muidu annab errori arvutamisel -->
          <!-- v-digitsonly
            type="text" -->
          <input
            id="pricePerAmount"
            v-model="item.pricePerAmount"
            name="pricePerAmount"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tüki hind"
          />
        </div>

        <div>
          <button
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="addItem"
          >
            Lisa komponent
          </button>
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
        <div>
          <label for="vatPercentage">Käibemaksu protsent (%)</label>
          <input
            id="vatPercentage"
            v-model="invoice.vatPercentage"
            name="vatPercentage"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="KM %"
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
            >Allahindluse summa: {{ invoice.discount }}€</label
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
        Lisa arve
      </button>
      <button
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="generatePdf"
      >
        Lae pdf alla
      </button>
      <button
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="generatePdfAndSubmitForm"
      >
        Lae pdf alla ja lisa arve
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, Ref, ref } from 'vue';
import outsideInvoices, { Invoice } from '@/modules/invoices';
import { useRouter } from 'vue-router';
import outsideInvoiceItems, { InvoiceItem } from '@/modules/invoiceItems';
import InvoiceItemView from '@/components/invoice/InvoiceItemView.vue';
import InvoiceItemViewHeader from '@/components/invoice/InvoiceItemViewHeader.vue';
import outsideUsers from '@/modules/users';
import { apiUrl } from '@/modules/api';
// import {JustDigits} from '@/modules/filters';

export default defineComponent({
  components: {
    InvoiceItemView,
    InvoiceItemViewHeader,
  },

  setup() {
    const router = useRouter();

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

    const { users, loadUsers } = outsideUsers();
    const { loadInvoices, addInvoice, downloadInvoice } = outsideInvoices();

    onMounted(() => {
      loadInvoices();
      loadUsers();
    });
    onUpdated(() => {
      items.value = invoiceItems.value;
      var sum = 0;
      sum = invoice.value.invoiceItems.reduce(
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
    });

    const submitForm = () => {
      console.log({ ...invoice.value });
      addInvoice({ ...invoice.value });
      invoiceItems.value = [];
      router.push({ name: 'Arved' });
    };
    const generatePdfAndSubmitForm = () => {
      submitForm();
      generatePdf();
    };

    const addItem = () => {
      var currentAmountString = item.value.amount.toString().replace(',', '.');
      var currentPriceString = item.value.pricePerAmount
        .toString()
        .replace(',', '.');
      item.value.amount = Number(currentAmountString);
      item.value.pricePerAmount = Number(currentPriceString);

      addInvoiceItem({ ...item.value });
      item.value.itemDescription = '';
      item.value.amount = 1;
      item.value.pricePerAmount = 1;
      load();
    };

    const generatePdf = () => {
      downloadInvoice({ ...invoice.value });
    };

    const { addInvoiceItem, load, invoiceItems } = outsideInvoiceItems();

    const changeUser = async (event: any) => {
      const response = await fetch(apiUrl + `Users/${event.target.value}`);
      const user = await response.json();
      invoice.value.userRegCode = user.regCode;
      invoice.value.userName = user.name;
      invoice.value.userPhoneNumber = user.phoneNumber;
      invoice.value.userAddress = user.address;
      invoice.value.userPostalCode = user.postalCode;
      invoice.value.userCity = user.city;
      invoice.value.userCountry = user.country;
      invoice.value.userBankName = user.bankName;
      invoice.value.userBankAccount = user.bankAccount;
    };

    const ValidateIsNumber = () => {
      addInvoice({ ...invoice.value });
      if (typeof invoice.value.invoiceNumber === 'number') return invoice.value;
      else return console.error('Input is not number type');
    };
    const validateIsString = () => {
      addInvoice({ ...invoice.value });
      if (typeof invoice.value.invoiceNumber === 'string') return invoice.value;
      else return console.error('Input is not string type');
    };

    return {
      invoice,
      item,
      items,
      invoiceItems,
      users,
      generatePdfAndSubmitForm,
      submitForm,
      addItem,
      generatePdf,
      changeUser,
      validateIsString,
      ValidateIsNumber,
    };
  },
});
</script>
