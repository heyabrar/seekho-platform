import { create } from "zustand";
import {
  IBenefits,
  ICreatorItem,
  IFaq,
  IPlan,
  ISelectPlan,
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
  selectPlan: { amount: 0, type: '' },
  setPlans: (val: IPlan | any) => set({ plans: val }),
  setBenefits: (val: IBenefits) => set({ benefits: val }),
  setCreatorItem: (val: ICreatorItem) => set({ creatorItem: val }),
  setFaq: (val: IFaq) => set({ faq: val }),
  setSeriesItem: (val: ISeriesItem) => set({ seriesItem: val }),
  setUserItem: (val: IUserItem) => set({ userItem: val }),
  setSelectPlan: (val: ISelectPlan) => set({ selectPlan: val })
}));

export default useStore;
