import { create } from "zustand";
import {
  IBenefits,
  ICreatorItem,
  IFaq,
  IPlan,
  ISeriesItem,
  IStore,
  IUserItem,
} from "../interfaces";
import initialPlanData from "../utils/constants";

const useStore = create<IStore>((set) => ({
  benefits: { title: "", benefits: [] },
  creatorItem: { title: "", creator_list: [] },
  faq: { title: "", faq_list: [] },
  plans: initialPlanData,
  seriesItem: { title: "", series_list: [] },
  userItem: { title: "", user_list: [] },
  setPlans: (val: IPlan | any) => set({ plans: val }),
  setBenefits: (val: IBenefits) => set({ benefits: val }),
  setCreatorItem: (val: ICreatorItem) => set({ creatorItem: val }),
  setFaq: (val: IFaq) => set({ faq: val }),
  setSeriesItem: (val: ISeriesItem) => set({ seriesItem: val }),
  setUserItem: (val: IUserItem) => set({ userItem: val }),
}));

export default useStore;
