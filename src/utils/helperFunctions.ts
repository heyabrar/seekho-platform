const calculateDiscount = (
  originalValue: number,
  valueToSell: number,
  decimalPlaces = 0
) => {
  if (originalValue <= 0 || valueToSell < 0) {
    return;
  }
  const discount = ((originalValue - valueToSell) / originalValue) * 100;
  const roundedDiscount = Number(discount.toFixed(decimalPlaces));

  return `${roundedDiscount}% OFF`;
};

const handleFormatPlanType = ({ planType }: { planType: string }) => {
  switch (planType) {
    case "monthly":
      return "month";
    case "yearly":
      return "year";
    case "quarterly":
      return "quarter";
    default:
      return "";
  }
};

export { calculateDiscount, handleFormatPlanType };
