import { IPlan } from "../interfaces";

const initialPlanData: IPlan | any = [
  {
    id: 0,
    title: "",
    plan_type: "",
    original_price: 0,
    discounted_price: 0,
    color: "",
    min_mandate_price: 0,
    icon: "",
    coupons: [
      {
        id: 0,
        code: "",
        coupon_benefit: "",
      },
    ],
    sub_title: "",
    display_title: "",
    duration_text: "",
    banner_title: "",
    category_page_cta: {
      title: "",
      duration_text: "",
    },
    payment_screen_data: {
      trial_steps: [
        {
          title: "",
          sub_title: "",
          is_selected: false,
          duration_title: "",
        },
        {
          title: "",
          sub_title: "",
          duration_title: "",
          is_selected: false,
        },
      ],
      autopay_title: "e",
    },
    hide_discount_percentage: false,
    is_special: false,
    is_selected: false,
    is_super_saver: false,
  },
];

export default initialPlanData;
