interface IBenefits {
  title: string;
  benefits: { title: string; sub_title: string; icon: string }[];
}

interface ICreatorItem {
  title: string;
  creator_list: {
    name: string;
    avatar: string;
    profession: string;
    status: string;
  }[];
}

interface IFaq {
  title: string;
  faq_list: { question: string; answer: string }[];
}

interface Coupon {
  id: number;
  code: string;
  coupon_benefit: string;
}

interface TrialStep {
  title: string;
  sub_title: string;
  is_selected: boolean;
  duration_title: string;
}

interface CategoryPageCTA {
  title: string;
  duration_text: string;
}

interface PaymentScreenData {
  trial_steps: TrialStep[];
  autopay_title: string;
}

interface IPlan {
  id: number;
  title: string;
  plan_type: string;
  original_price: number;
  discounted_price: number;
  color: string;
  min_mandate_price: number;
  icon: string;
  coupons: Coupon[];
  sub_title: string;
  display_title: string;
  duration_text: string;
  banner_title: string;
  category_page_cta: CategoryPageCTA;
  payment_screen_data: PaymentScreenData;
  hide_discount_percentage: boolean;
  is_special: boolean;
  is_selected: boolean;
  is_super_saver?: boolean;
}

interface ISeriesItem {
  title: string;
  series_list: { id: number; image: string }[];
}

interface IUserItem {
  title: string;
  user_list: {
    name: string;
    avatar: string;
    profession: string;
    review: string;
  }[];
}

interface IStore {
  benefits: IBenefits;
  creatorItem: ICreatorItem;
  faq: IFaq;
  plans: IPlan;
  seriesItem: ISeriesItem;
  userItem: IUserItem;
  setBenefits: (val: IBenefits) => void;
  setCreatorItem: (val: ICreatorItem) => void;
  setFaq: (val: IFaq) => void;
  setPlans: (val: IPlan) => void;
  setSeriesItem: (val: ISeriesItem) => void;
  setUserItem: (val: IUserItem) => void;
}

export type {
  IStore,
  IBenefits,
  ICreatorItem,
  IFaq,
  IPlan,
  ISeriesItem,
  IUserItem,
};
