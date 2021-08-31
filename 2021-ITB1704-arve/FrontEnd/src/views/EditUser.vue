<template>
  <EditUserForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditUserForm from '@/components/user/EditUserForm.vue';

export default defineComponent({
  components: {
    EditUserForm,
  },
  setup() {
    return {};
  },
});
</script>
