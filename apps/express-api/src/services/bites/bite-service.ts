import { FSDB } from "file-system-db";
import { IBiteItem } from "../../contracts/BiteItem.interface";
import { ICreateBiteRequest } from "../../contracts/CreateBiteRequest.interface";

const db = new FSDB("./src/services/bites/bites-db.json");

export const biteService = {
  getBites: (): IBiteItem[] => {
    const bites = db.get("bites");
    if (!bites) {
      db.set("bites", []);
      return [];
    }
    return bites;
  },
  addBite: (biteObj: ICreateBiteRequest) => {
    throw new Error("Not done yet - please hold on");
  },
};
