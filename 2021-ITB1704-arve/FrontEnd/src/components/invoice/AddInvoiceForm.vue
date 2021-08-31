<template>
  <div class="invoice-box">
    <div ref="content">
      <table cellpadding="0" cellspacing="0">
        <tr class="top">
          <td>
            <div>
              <div class="file-upload-form">
                <input
                  type="file"
                  accept="image/*"
                  @change="previewImage($event)"
                />
              </div>
            </div>
            <table>
              <tr>
                <div v-if="invoice.logo.length > 0" class="image-preview">
                  <img class="preview" :src="invoice.logo" />
                </div>
                <td v-else class="title">
                  LOGO
                  <br />
                </td>
                <td>
                  <span class="inline-block right">
                    <label for="invoiceNumber">Arve number</label>
                    <input
                      id="invoiceNumber"
                      v-model="invoice.invoiceNumber"
                      name="invoiceNumber"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Arve number"
                      required
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <label for="dateOfInvoice">Arve kuupäev</label>
                    <input
                      id="dateOfInvoice"
                      v-model="invoice.dateOfInvoice"
                      type="date"
                      name="dateOfInvoice"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Arve kuupäev"
                      required
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <label for="dateOfSupply">Tarne kuupäev</label>
                    <input
                      id="dateOfSupply"
                      v-model="invoice.dateOfSupply"
                      type="date"
                      name="dateOfSupply"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Tarne kuupäev"
                      required
                    />
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="information">
          <td>
            <table>
              <tr>
                <td>
                  <b>Arve saaja:</b>
                  <span class="inline-block align-middle">
                    <input
                      id="customerName"
                      v-model="invoice.customerName"
                      name="customerName"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Nimi"
                      required
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="customerAddress"
                      v-model="invoice.customerAddress"
                      name="customerAddress"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Tänav, korter"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="customerPostalCode"
                      v-model="invoice.customerPostalCode"
                      name="customerPostalCode"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Postiindeks"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="customerCity"
                      v-model="invoice.customerCity"
                      name="customerCity"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Linn"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="customerCountry"
                      v-model="invoice.customerCountry"
                      name="customerCountry"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Riik"
                    />
                  </span>
                </td>
                <td>
                  <b>Arve väljastaja:</b><br />
                  <select
                    class="inline-block align-middle rounded-md relative w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="user"
                    @click="changeUser($event)"
                  >
                    <option></option>
                    <option
                      v-for="user in users"
                      :key="user.id"
                      :value="user.id"
                    >
                      {{ user.name }}
                    </option>
                  </select>
                  <span class="inline-block align-middle">
                    <input
                      id="userRegCode"
                      v-model="invoice.userRegCode"
                      name="userRegCode"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Registrinumber"
                      required
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="userName"
                      v-model="invoice.userName"
                      name="userName"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Nimi"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="userAddress"
                      v-model="invoice.userAddress"
                      name="userAddress"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Tänav, korter"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="userPostalCode"
                      v-model="invoice.userPostalCode"
                      name="userPostalCode"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Postiindeks"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="userCity"
                      v-model="invoice.userCity"
                      name="userCity"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Linn"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="userCountry"
                      v-model="invoice.userCountry"
                      name="userCountry"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Riik"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="userBankAccount"
                      v-model="invoice.userBankAccount"
                      name="userBankAccount"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Pangakonto nr"
                    />
                  </span>
                  <span class="inline-block align-middle">
                    <input
                      id="userBankName"
                      v-model="invoice.userBankName"
                      name="userBankName"
                      class="appearance-none rounded-none w-min px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-5 sm:text-sm"
                      placeholder="Panga nimi"
                    />
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <div v-if="invoiceItems.length >= 1">
          <b>Arve komponendid:</b>
          <table class="table-fixed w-full">
            <InvoiceItemViewHeader></InvoiceItemViewHeader>
            <InvoiceItemView
              v-for="i in invoiceItems"
              :key="i.itemDescription"
              :item="i"
            ></InvoiceItemView>
          </table>
        </div>
        <br />
        <tbody
          class="table-fixed appearance-none rounded-md relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-yellow-100"
        >
          <tr>
            <th>
              <label for="itemDescription">Kirjeldus</label>
              <input
                id="itemDescription"
                v-model="item.itemDescription"
                name="itemDescription"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="txt"
                required
              />
            </th>
            <th>
              <label for="amount">Kogus</label>
              <input
                id="amount"
                v-model="item.amount"
                name="amount"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Kogus"
              />
            </th>
            <th>
              <label for="pricePerAmount">Tüki hind</label>
              <input
                id="pricePerAmount"
                v-model="item.pricePerAmount"
                name="pricePerAmount"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Tüki hind"
              />
            </th>
            <th class="btn-group mr-2 text-center">
              <button
                class="btn btn-sm btn-outline-secondary px-2 border border-transparent inline-flex text-xs leading-5 font-semibold rounded-md bg-green-400 text-white"
                @click="addItem"
              >
                Lisa komponent
              </button>
            </th>
          </tr>
        </tbody>
        <br />
        <br />
        <div>
          <label for="vatPercentage">Käibemaksu protsent (%)</label>
          <input
            id="vatPercentage"
            v-model="invoice.vatPercentage"
            name="vatPercentage"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="KM %"
          />
          <label for="discount">Allahindluse protsent (%)</label>
          <input
            id="discount"
            v-model="invoice.discount"
            name="discount"
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Allahindlus"
          />
        </div>

        <br />
        <div class="table">
          <tr>
            Summa käibemaksuta:
            {{
              invoice.totalWithoutVat
            }}€
          </tr>
          <br />
          <tr>
            Käibemaks:
            {{
              invoice.totalVat
            }}€
          </tr>
          <br />
          <tr>
            Allahindluse summa:
            {{
              invoice.discountSum
            }}€
          </tr>
          <br />
          <tr class="font-medium text-lg">
            <b>Kogusumma: {{ invoice.totalPrice }}€</b>
          </tr>
        </div>
        <br />
        <tr class="heading">
          <td>Makse lisainformatsioon</td>
        </tr>
        <tr class="details">
          <td>
            <div>
              <label for="paymentTerms">Tingimused</label>
              <textarea
                id="paymentTerms"
                v-model="invoice.paymentTerms"
                name="paymentTerms"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Maksetingimused"
              />
            </div>
            <div>
              <label for="howToPay">Kirjeldus</label>
              <textarea
                id="howToPay"
                v-model="invoice.howToPay"
                name="howToPay"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Makse kirjeldus"
              />
            </div>
          </td>
        </tr>
      </table>
      <button
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="submitForm"
      >
        Lisa arve
      </button>
      <br />
      <button
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="generatePdf"
      >
        Lae alla pdf-ina
      </button>
      <br />
      <button
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="generatePdfAndSubmitForm"
      >
        Lae pdf-ina ja lisa arve
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
      logo: '',
    });

    const { users, loadUsers } = outsideUsers();
    const { loadInvoices, addInvoice, downloadInvoice } = outsideInvoices();

    onMounted(() => {
      loadInvoices();
      loadUsers();
      invoiceItems.value = [];
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

    const previewImage = async (event: any) => {
      // Reference to the DOM input element
      var fileInput = await event.target;
      // Ensure that you have a file before attempting to read it
      if (fileInput.files && fileInput.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e: any) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          invoice.value.logo = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(fileInput.files[0]);
      }
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
      previewImage,
    };
  },
});
</script>
<style scoped src="@/components/invoice/InvoiceStyle.css"></style>
