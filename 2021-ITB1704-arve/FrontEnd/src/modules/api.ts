import { ref, Ref } from 'vue';

export type ApiRequest = () => Promise<void>;

export interface UsableAPI<T> {
  response: Ref<T | undefined>;
  request: ApiRequest;
}

export let apiUrl = '';

export function setApiUrl(url: string) {
  apiUrl = url;
}

export default function useApi<T>(
  url: RequestInfo,
  options?: RequestInit,
): UsableAPI<T> {
  const response: Ref<T | undefined> = ref();

  const request = async () => {
    const res = await fetch(apiUrl + url, options);
    const data = await res.json();
    response.value = data;
  };

  return { response, request };
}

export function useApiRawRequest(url: RequestInfo, options?: RequestInit) {
  const request: () => Promise<Response> = async () => {
    return await fetch(apiUrl + url, options);
  };
  return request;
}
