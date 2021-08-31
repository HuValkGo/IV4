<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr>
      <td class="px-3 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ user.name }}
        </div>
      </td>
      <td class="px-3 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ user.regCode }}
        </div>
      </td>
      <td class="px-3 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ user.address }}
        </div>
      </td>
      <td class="px-3 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ user.bankAccount }}
        </div>
      </td>
      <td class="px-3 py-4 whitespace-nowrap">
        <span
          v-if="user.status === activeStatus"
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
        >
          Aktiivne
        </span>
        <span
          v-if="user.status === notActiveStatus"
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
        >
          Mitte aktiivne
        </span>
      </td>
      <td>
        <div class="btn-group mr-2">
          <router-link
            :to="`/users/${user.id}/edit`"
            class="btn btn-sm btn-outline-secondary px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-600 text-white"
            >Muuda</router-link
          >
        </div>
      </td>
      <td>
        <div class="btn-group mr-2">
          <button
            class="btn btn-sm btn-outline-secondary px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-white"
            @click="removeUser"
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
import outsideUsers, { User } from '@/modules/users';

export default defineComponent({
  name: 'User',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },

  setup(props) {
    const removeUser = () => {
      if (confirm('Kas sa oled kindel?')) {
        deleteUser(props.user);
      }
    };

    const { deleteUser } = outsideUsers();

    return {
      removeUser,
    };
  },

  data() {
    return {
      activeStatus: 0,
      notActiveStatus: 1,
    };
  },
});
</script>
