import useApi from './api';
import { reactive, toRefs } from 'vue';

export interface InvoiceItem {
  id?: string;
  itemDescription: string;
  amount: number;
  pricePerAmount: number;
}

export interface State {
  invoiceItems: InvoiceItem[];
}

const state = reactive<State>({
  invoiceItems: [],
});

let initialized = false;
const load = () => {
  if (!initialized) {
    initialized = true;
  }
};

export default function useInvoiceItem() {
  const addInvoiceItem = (invoiceItem: InvoiceItem) => {
    state.invoiceItems.push(invoiceItem);
  };
  const deleteInvoiceItem = async (invoiceItem: InvoiceItem) => {
    state.invoiceItems = state.invoiceItems.filter(
      (i: InvoiceItem) => i.itemDescription !== invoiceItem.itemDescription,
    );
  };
  const deleteInvoiceItemById = async (id: string) => {
    let index = state.invoiceItems.findIndex((x) => x.id === id);
    state.invoiceItems.splice(index, 1);
  };
  const editInvoiceItem = async (invoiceItem: InvoiceItem) => {
    let id = state.invoiceItems.findIndex((x) => x.id === invoiceItem.id);
    state.invoiceItems.splice(id, 1, invoiceItem);
  };

  return {
    ...toRefs(state),
    load,
    addInvoiceItem,
    editInvoiceItem,
    deleteInvoiceItem,
    deleteInvoiceItemById,
  };
}
