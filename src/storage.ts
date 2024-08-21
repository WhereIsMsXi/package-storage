import { StorageType } from "./enum";

const session = {
  set(name: string, data: unknown) {
    const enrichContent = {
      dataType: typeof data,
      content: data,
      type: StorageType.SESSION,
      datatime: Math.floor(Date.now() / 1000),
    };;
    window.sessionStorage.setItem(name, JSON.stringify(enrichContent));
  },
  get(name: string) {
    
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

  },
  get(name: string) {

  },
  del(name: string) {
    window.localStorage.removeItem(name);
  },
  clear() {
    window.localStorage.clear();
  }
};

export { session, local };