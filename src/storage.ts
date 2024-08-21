import { getEnrichData, getStorage } from "./utils/utils";

const session = {
  set(name: string, data: unknown) {
    const enrichData = getEnrichData(data, true);
    window.sessionStorage.setItem(name, JSON.stringify(enrichData));
  },
  get(name: string) {
    const data = window.sessionStorage.getItem(name);
    if (typeof data !== 'string') return null

    return getStorage(data);
  },
  del(name: string) {
    window.sessionStorage.removeItem(name);
  },
  clear() {
    window.sessionStorage.clear();
  }
};
const local = {
  set(name: string, data: unknown) {
    const enrichData = getEnrichData(data, false);
    window.localStorage.setItem(name, JSON.stringify(enrichData));
  },
  get(name: string) {
    const data = window.localStorage.getItem(name);
    if (typeof data !== 'string') return null

    return getStorage(data);
  },
  del(name: string) {
    window.localStorage.removeItem(name);
  },
  clear() {
    window.localStorage.clear();
  }
};

export { session, local };