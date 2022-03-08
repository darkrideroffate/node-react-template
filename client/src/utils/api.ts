import { Fetcher } from "swr";
export const defaultFetchOptions = {
  headers: {
    Authorization: `Bearer ${}`,
  },
};
export const fetcher = (url: string) => {
  return fetch(apiUri + url, defaultFetchOptions).then((r) => r.json());
};
