// import { reactive, toRefs } from 'vue';
// import useApi, { useApiRawRequest } from './api';

// export const JustDigits = () => {
//     Vue.directive('digitsonly', (el: { value: string; }, binding: { value: any; }) => {
//       if (/[\d\.]+/i.test(el.value)) {
//         console.log('ok');
//       } else {
//         let newValue = el.value.replace(/[a-zA-Z]+/ig, '');
//         el.value = newValue;
//         console.log('should fix', newValue);
//         binding.value = el.value;
//       }
//     });
//   };