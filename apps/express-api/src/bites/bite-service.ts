import { randomUUID } from "crypto";
import { FSDB } from "file-system-db";
import { IBiteItem } from "../contracts/BiteItem.interface";
import { ICreateBiteRequest } from "../contracts/CreateBiteRequest.interface";
import { IEditBiteRequest } from "../contracts/EditBiteRequest.interface";

const db = new FSDB("./src/bites/bites.db.json");

const getRecords = <TData = unknown>(key: string) => {
  const records = db.get(key) as TData;
  if (!records) {
    return;
  }
  return records;
};

export const biteService = {
  getBites: (): IBiteItem[] => {
    const bites = getRecords<Record<string, IBiteItem>>("bites");
    if (!bites) {
      db.set("bites", {});
      return [];
    }
    return Object.values(bites);
  },
  getSingleBite: async (biteId: string) => {
    const bite = getRecords<IBiteItem>(`bites.${biteId}`);
    return bite;
  },
  addBite: async (biteObj: ICreateBiteRequest) => {
    const biteId = randomUUID();
    const newBite = {
      ...biteObj,
      id: biteId,
    };
    db.set(`bites.${biteId}`, newBite);
    return newBite;
  },
  removeBite: async (biteId: string) => {
    db.delete(`bites.${biteId}`);
    return { message: `Bite (${biteId}) has been removed.` };
  },
  updateBite: async (biteId: string, biteObj: IEditBiteRequest) => {
    db.set(`bites.${biteId}`, biteObj);
    return biteObj;
  },
};
