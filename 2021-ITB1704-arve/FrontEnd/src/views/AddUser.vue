<template>
  <AddUserForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddUserForm from '@/components/user/AddUserForm.vue';

export default defineComponent({
  components: {
    AddUserForm,
  },
  setup() {
    return {};
  },
});
</script>
