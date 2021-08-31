import { reactive, toRefs } from 'vue';
import useApi, { useApiRawRequest } from './api';

export interface User {
  id?: string;
  regCode: string;
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  bankAccount: string;
  bankName: string;
  status?: Status;
}
export enum Status {
  Active = 0,
  NotActive = 1,
}
export interface State {
  users: User[];
}
let users: User[] = [];

const state = reactive<State>({
  users: [],
});

let initialized = false;

export default function useUsers() {
  const apiGetUsers = useApi<User[]>('Users');
  const loadUsers = async () => {
    if (!initialized) {
      await apiGetUsers.request();

      if (apiGetUsers.response.value) {
        users = apiGetUsers.response.value!;
        state.users = users;
      }
      initialized = true;
    }
  };

  const addUser = async (user: User) => {
    const apiAddUser = useApi<User>('Users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    await apiAddUser.request();

    if (apiAddUser.response.value) {
      users.push(apiAddUser.response.value!);
      state.users = users;
    }
  };

  const deleteUser = async (user: User) => {
    const apiDeleteUserRequest = useApiRawRequest(`Users/${user.id}`, {
      method: 'DELETE',
    });

    const res = await apiDeleteUserRequest();

    if (res.status == 204) {
      let id = state.users.findIndex((x) => x.id === user.id);
      if (id != -1) {
        state.users.splice(id, 1);
      }
      id = users.indexOf(user);
      if (id != -1) {
        users.splice(id, 1);
      }
    }
  };

  const editUser = async (user: User) => {
    const apiEditUserRequest = useApiRawRequest(`Users/${user.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const res = await apiEditUserRequest();

    if (res.status == 204) {
      let id = state.users.findIndex((x) => x.regCode === user.regCode);
      if (id != -1) {
        state.users.splice(id, 1, user);
      }
      id = users.indexOf(user);
      if (id != -1) {
        users.splice(id, 1, user);
      }
    }
  };

  return {
    ...toRefs(state),
    loadUsers,
    addUser,
    deleteUser,
    editUser,
  };
}
