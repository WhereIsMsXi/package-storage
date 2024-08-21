import { StorageType } from "./enum";
import { EnrichStorage } from "./types";
import { getEnrichData } from "./utils/utils";

function isEnrichContent(data: EnrichStorage) {
  const propArray = ['dataType', 'content', 'type', 'datatime'];
  if(Object.keys(data).length !== propArray.length) return false
  return propArray.every(prop => data.hasOwnProperty(prop));
}

const session = {
  set(name: string, data: unknown) {
    const enrichData = getEnrichData(data, true);
    window.sessionStorage.setItem(name, JSON.stringify(enrichData));
  },
  get(name: string) {
    const data = window.sessionStorage.getItem(name);
    if (typeof data !== 'string') return null

    let enrichStorage: EnrichStorage
    try {
      enrichStorage = JSON.parse(data);
    } catch(error: any) {
      throw new Error('Invalid storage data: ' + error.message);
    }

    if(!isEnrichContent(enrichStorage)) {
      throw new Error('storage content is not enrich content, please use native storage api');
    }
    return enrichStorage.content
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
    window.sessionStorage.setItem(name, JSON.stringify(enrichData));
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