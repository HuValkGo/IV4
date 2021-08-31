<template>
  <div
    class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="mt-8 space-y-6">
        <div>
          <label for="regCode">Registrinumber</label>
          <input
            id="regCode"
            v-model="user.regCode"
            name="regCode"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Registrinumber"
          />
        </div>
        <div>
          <label for="name">Nimi</label>
          <input
            id="name"
            v-model="user.name"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Nimi"
          />
        </div>
        <div>
          <label for="address">Aadress</label>
          <input
            id="address"
            v-model="user.address"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Aadress"
          />
        </div>
        <div>
          <label for="city">Linn</label>
          <input
            id="city"
            v-model="user.city"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Linn"
          />
        </div>
        <div>
          <label for="country">Riik</label>
          <input
            id="country"
            v-model="user.country"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Riik"
          />
        </div>
        <div>
          <label for="postalCode">Postiindeks</label>
          <input
            id="postalCode"
            v-model="user.postalCode"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Postiindeks"
          />
        </div>
        <div>
          <label for="bankAccount">Pangakonto number</label>
          <input
            id="bankAccount"
            v-model="user.bankAccount"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Pangakonto"
          />
        </div>
        <div>
          <label for="bankName">Panga nimi</label>
          <input
            id="bankName"
            v-model="user.bankName"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Panga nimi"
          />
        </div>
        <div>
          <label for="phoneNumber">Telefoninumber</label>
          <input
            id="phoneNumber"
            v-model="user.phoneNumber"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Telefoninumber"
          />
        </div>
        <div>
          <label for="status">Staatus</label>
          <select
            id="status"
            v-model="user.status"
            name="status"
            class="form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Staatus"
          >
            <option :value="Status.Active">Aktiivne</option>
            <option :value="Status.NotActive">Mitte aktiivne</option>
          </select>
        </div>
        <button
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="submitForm"
        >
          Muuda
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import outsideUsers, { Status, User } from '@/modules/users';
import { useRoute, useRouter } from 'vue-router';
import { apiUrl } from '@/modules/api';

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const user: Ref<User> = ref({
      regCode: '',
      phoneNumber: '',
      name: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      bankAccount: '',
      bankName: '',
      status: Status.Active,
    });
    const { editUser } = outsideUsers();

    onMounted(async () => {
      const response = await fetch(apiUrl + `Users/${route.params.id}`);
      const users = await response.json();
      user.value.id = users.id;
      user.value.regCode = users.regCode;
      user.value.name = users.name;
      user.value.address = users.address;
      user.value.city = users.city;
      user.value.country = users.country;
      user.value.postalCode = users.postalCode;
      user.value.bankAccount = users.bankAccount;
      user.value.bankName = users.bankName;
      user.value.status = users.status;
    });

    const submitForm = async () => {
      await editUser({ ...user.value });
      router.push({ name: 'Kasutajad' });
    };

    return { user, submitForm, Status };
  },
});
</script>
