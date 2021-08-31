import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Homepage from '@/views/Homepage.vue'
import ContactPage from '@/views/ContactPage.vue'
import UsersVue from '@/views/User.vue';
import AddUserVue from '@/views/AddUser.vue';
import AddInvoiceVue from '@/views/AddInvoice.vue';
import AddInvoiceTempVue from '@/views/AddInvoiceTemp.vue';
import EditUserVue from '@/views/EditUser.vue';
import EditInvoiceVue from '@/views/EditInvoice.vue';
import InvoiceVue from '@/views/Invoice.vue';
import InvoiceDetailsVue from '@/views/InvoiceDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Avaleht',
    component: Homepage,
  },
  {
    path: '/contacts',
    name: 'Kontakt',
    component: ContactPage,
  },
  {
    path: '/users',
    name: 'Kasutajad',
    component: UsersVue,
  },
  {
    path: '/users/create',
    name: 'Lisa kasutaja',
    component: AddUserVue,
  },
  {
    path: '/emptyInvoice/create',
    name: 'Arve mall',
    component: AddInvoiceVue,
  },
  {
    path: '/users/:id/edit',
    name: 'Muuda kasutajat',
    component: EditUserVue,
  },
  {
    path: '/invoices',
    name: 'Arved',
    component: InvoiceVue,
  },
  {
    path: '/invoices/create',
    name: 'Lisa arve',
    component: AddInvoiceTempVue,
  },
  {
    path: '/invoices/:id/edit',
    name: 'Muuda arvet',
    component: EditInvoiceVue,
  },
  {
    path: '/invoices/:id',
    name: 'Vaata arvet',
    component: InvoiceDetailsVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
