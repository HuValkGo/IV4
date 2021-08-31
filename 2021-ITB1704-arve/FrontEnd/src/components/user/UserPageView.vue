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
            to="/users/create"
            class="text-white text-left bg-green-500 px-2 py-1 rounded-md text-sm font-medium"
          >
            Lisa kasutaja
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
                <UserTableHeaderForComputer></UserTableHeaderForComputer>
                <UserViewForComputer
                  v-for="item in users"
                  :key="item.id"
                  :user="item"
                ></UserViewForComputer>
              </table>
              <table
                class="min-w-full divide-y divide-gray-200 xl:hidden hidden md:block"
              >
                <UserTableHeaderForTablet></UserTableHeaderForTablet>
                <UserViewForTablet
                  v-for="item in users"
                  :key="item.id"
                  :user="item"
                ></UserViewForTablet>
              </table>
              <table class="min-w-full divide-y divide-gray-200 md:hidden">
                <UserTableHeaderForMobile></UserTableHeaderForMobile>
                <UserViewForMobile
                  v-for="item in users"
                  :key="item.id"
                  :user="item"
                ></UserViewForMobile>
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
import outsideUsers from '@/modules/users';
import UserViewForComputer from '@/components/user/UserViewForComputer.vue';
import UserViewForMobile from '@/components/user/UserViewForMobile.vue';
import UserViewForTablet from '@/components/user/UserViewForTablet.vue';
import UserTableHeaderForComputer from '@/components/user/UserTableHeaderForComputer.vue';
import UserTableHeaderForTablet from '@/components/user/UserTableHeaderForTablet.vue';
import UserTableHeaderForMobile from '@/components/user/UserTableHeaderForMobile.vue';
export default defineComponent({
  components: {
    UserViewForComputer,
    UserViewForMobile,
    UserViewForTablet,
    UserTableHeaderForComputer,
    UserTableHeaderForTablet,
    UserTableHeaderForMobile,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { users, loadUsers } = outsideUsers();
    onMounted(() => {
      loadUsers();
    });

    return { users };
  },
});
</script>

<style scoped></style>
