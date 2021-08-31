import { reactive, toRefs } from 'vue';
import { InvoiceItem } from './invoiceItems';
import useApi, { useApiRawRequest } from './api';
import jsPDFInvoiceTemplate, { OutputType } from 'jspdf-invoice-template';

export interface Invoice {
  id?: string;
  invoiceNumber: number;
  purchaseOrderNumber: number;
  dateOfSupply: string;
  dateOfInvoice: string;
  userRegCode: string;
  userName: string;
  userPhoneNumber: string;
  userAddress: string;
  userPostalCode: string;
  userCity: string;
  userCountry: string;
  userBankName: string;
  userBankAccount: string;
  customerName: string;
  customerAddress: string;
  customerPostalCode: string;
  customerCity: string;
  customerCountry: string;
  invoiceItems: InvoiceItem[];
  totalPrice: number;
  vatPercentage: number;
  totalVat: number;
  totalWithoutVat: number;
  discount: number;
  paymentTerms: string;
  howToPay: string;
  discountSum: number;
  logo?: string;
}

export interface State {
  invoices: Invoice[];
}

let invoices: Invoice[] = [];

const state = reactive<State>({
  invoices: [],
});

let initialized = false;
function calculateInvoiceValues(invoice: Invoice) {

  var sum = invoice.invoiceItems.reduce(
    (acc, item) => acc + item.amount * item.pricePerAmount,
    0,
  );
  
  invoice.discountSum = -(sum * invoice.discount * 0.01);
  invoice.totalPrice = sum + invoice.discountSum;
  invoice.totalVat = invoice.totalPrice * (0.01 * invoice.vatPercentage);
  invoice.totalWithoutVat = invoice.totalPrice - invoice.totalVat;

  console.log(invoice.totalPrice);
  console.log(invoice.vatPercentage);
  console.log(invoice.totalVat);
  console.log(invoice.totalWithoutVat);
}

export default function useInvoices() {
  const apiGetInvoices = useApi<Invoice[]>('Invoices');

  const loadInvoices = async () => {
    if (!initialized) {
      await apiGetInvoices.request();

      if (apiGetInvoices.response.value) {
        invoices = apiGetInvoices.response.value!;
        state.invoices = invoices;
      }
      initialized = true;
    }
  };

  const addInvoice = async (invoice: Invoice) => {
    const apiAddInvoice = useApi<Invoice>('Invoices', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoice),
    });
    await apiAddInvoice.request();

    if (apiAddInvoice.response.value) {
      state.invoices.push(apiAddInvoice.response.value!);
      state.invoices = invoices;
    }
  };

  const deleteInvoice = async (invoice: Invoice) => {
    const apiDeleteInvoiceRequest = useApiRawRequest(`Invoices/${invoice.id}`, {
      method: 'DELETE',
    });

    const res = await apiDeleteInvoiceRequest();

    if (res.status == 204) {
      let id = state.invoices.findIndex((x) => x.id === invoice.id);
      if (id != -1) {
        state.invoices.splice(id, 1);
      }
      id = invoices.indexOf(invoice);
      if (id != -1) {
        invoices.splice(id, 1);
      }
    }
  };

  const editInvoice = async (invoice: Invoice) => {
    const apiEditInvoiceRequest = useApiRawRequest(`Invoices/${invoice.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoice),
    });

    const res = await apiEditInvoiceRequest();

    if (res.status == 204) {
      let id = state.invoices.findIndex((x) => x.id === invoice.id);
      if (id != -1) {
        state.invoices.splice(id, 1, invoice);
      }
      id = invoices.indexOf(invoice);
      if (id != -1) {
        invoices.splice(id, 1, invoice);
      }
    }
  };
  const editInvoiceItem = async (invoice: Invoice) => {
    const apiEditInvoiceRequest = useApiRawRequest(`Invoices/${invoice.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoice),
    });

    const res = await apiEditInvoiceRequest();

    if (res.status == 204) {
      let id = state.invoices.findIndex((x) => x.id === invoice.id);
      if (id != -1) {
        state.invoices.splice(id, 1, invoice);
      }
      id = invoices.indexOf(invoice);
      if (id != -1) {
        invoices.splice(id, 1, invoice);
      }
    }
  };

  const downloadInvoice = async (invoice: Invoice) => {
    calculateInvoiceValues(invoice);
    var props = {
      outputType: OutputType.Save,
      fileName: String(invoice.customerName + ' ' + invoice.invoiceNumber),
      orientationLandscape: false,
      logo: {
        src: invoice.logo,
        width: 26.66,
        height: 26.66,
      },
      business: {
        name: invoice.userName,
        address: invoice.userAddress + ' ' + invoice.userCity,
        phone: invoice.userPhoneNumber,
        email: invoice.userRegCode,
        email_1: invoice.userBankName,
        website: invoice.userBankAccount,
      },
      contact: {
        label: 'Arve saaja:',
        name: invoice.customerName,
        address: invoice.customerAddress + ' ' + invoice.customerCity,
        phone: invoice.customerCountry,
        email: '',
        otherInfo: '',
      },
      invoice: {
        label: 'Arve: ',
        invTotalLabel: 'Kokku:',
        num: invoice.invoiceNumber,
        invDate: 'Arve esitamise kuupäev: ' + ' ' + invoice.dateOfInvoice,
        invGenDate: 'Makse tähtaeg: ' + ' ' + invoice.dateOfSupply,
        header: [' ', 'Kirjeldus', 'Hind', 'Kogus', 'Mõõtühik', 'Kokku'],
        headerBorder: false,
        tableBodyBorder: false,
        table: Array.from(invoice.invoiceItems, (item, index) => ({
          num: index + 1,
          desc: item.itemDescription,
          price: Number((item.pricePerAmount).toFixed(2)),
          quantity: Number((item.amount).toFixed(2)),
          unit: 'tk',
          total: Number((item.pricePerAmount * item.amount).toFixed(2)),
        })),
        invTotal: String((invoice.totalPrice).toFixed(2)),
        invCurrency: '€',
        invDescLabel: 'Maksetingimused ja kirjeldus',
        invDesc: '\n' + invoice.paymentTerms + '\n' + '\n' + invoice.howToPay,
      },
      footer: {
        text: '',
      },
      pageEnable: true,
      pageLabel: 'Page ',
    };
    jsPDFInvoiceTemplate(props);
  };

  return {
    ...toRefs(state),
    loadInvoices,
    addInvoice,
    deleteInvoice,
    editInvoice,
    editInvoiceItem,
    downloadInvoice,
  };
}
