import { StorageType } from "../enum";
import { EnrichStorage } from "../types";

export function getEnrichData(data: unknown, isSession = true) {
  return {
    dataType: typeof data,
    content: data,
    type: isSession ? StorageType.SESSION : StorageType.LOCAL,
    datetime: Math.floor(Date.now() / 1000),
  };
}

export function getStorage(data: string) {
  
  function isEnrichContent(data: EnrichStorage) {
    const propArray = ['dataType', 'content', 'type', 'datatime'];
    if(Object.keys(data).length !== propArray.length) return false
    return propArray.every(prop => data.hasOwnProperty(prop));
  }

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
}