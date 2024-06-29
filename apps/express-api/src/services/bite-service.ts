import { IBiteItem } from "../contracts/BiteItem.interface";
import { ICreateBiteRequest } from "../contracts/CreateBiteRequest.interface";

export const biteService = {
  getBites: (): IBiteItem[] => {
    return [{ id: "coming soon", name: "sooner" }];
  },
  addBite: (biteObj: ICreateBiteRequest) => {
    throw new Error("Not done yet - please hold on");
  },
};
