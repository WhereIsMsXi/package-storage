import { StorageType } from "../enum";
import { EnrichData } from "../types";

export function getEnrichData(data: unknown, isSession = true) {
  return {
    dataType: typeof data,
    content: data,
    type: isSession ? StorageType.SESSION : StorageType.LOCAL,
    datetime: Math.floor(Date.now() / 1000),
  };
}

export function getStorage(data: string) {

  function isEnrichData(data: EnrichData) {
    const propArray = ['dataType', 'content', 'type', 'datetime'];
    if(Object.keys(data).length !== propArray.length) return false
    return propArray.every(prop => data.hasOwnProperty(prop));
  }

  let enrichData: EnrichData
  try {
     enrichData = JSON.parse(data);
  } catch(error: any) {
    throw new Error('Invalid storage data: ' + error.message);
  }

  if(!isEnrichData(enrichData)) {
    throw new Error('storage content is not enrich content, please use native storage api');
  }
  return enrichData.content
}