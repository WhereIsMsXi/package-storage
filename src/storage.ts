
const session = {
  set(name: string, data: unknown) {

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