import { StorageType } from "../enum";

export function getEnrichData(data: unknown, isSession = true) {
  return {
    dataType: typeof data,
    content: data,
    type: isSession ? StorageType.SESSION : StorageType.LOCAL,
    datetime: Math.floor(Date.now() / 1000),
  };
}