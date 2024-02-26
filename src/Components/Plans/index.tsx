import { useEffect, useMemo, useState } from "react";
import "../../styles/planDetails.css";
import useStore from "../../store";
import calculateDiscount from "../../utils/helperFunctions";
import { ISelectPlan } from "../../interfaces";

const Plans = () => {
  const [choosePlan, setChoosePlan] = useState<string>("");
  const { plans, setSelectPlan } = useStore();

  const planMemo = useMemo(() => {
    return plans;
  }, [plans]);

  const handleSetSelectedPlans = ({ amount, type }: ISelectPlan) => {
    setSelectPlan({ amount, type });
  };

  useEffect(() => {
    const firstPlanAmount = plans[0]?.min_mandate_price;
    const firstPlanType = plans[0]?.plan_type;
    setChoosePlan(firstPlanType);
    handleSetSelectedPlans({ amount: firstPlanAmount, type: firstPlanType });
  }, []);

  return (
    <div>
      {planMemo[0]?.title ? (
        <div className="plansContainer">
          {planMemo.map((item) => {
            return (
              <div
                className="planCard"
                key={item.id}
                onClick={() => {
                  setChoosePlan(item.plan_type);
                  handleSetSelectedPlans({
                    amount: item?.min_mandate_price,
                    type: item?.plan_type,
                  });
                }}
                style={{
                  border:
                    item.plan_type === choosePlan
                      ? "1px solid transparent"
                      : "none",
                  borderRadius: "10px",
                  backgroundImage:
                    item?.plan_type === choosePlan
                      ? " linear-gradient(#292a2f, #292a2f), radial-gradient(circle at top left, #0075FF,#FF00D6,#FFA800)"
                      : "none",
                }}
              >
                {item.is_special && (
                  <p className="specialPriceTag">SPECIAL PRICE</p>
                )}
                <div
                  style={{ display: "flex", gap: "15px", alignItems: "center" }}
                >
                  <input
                    type="radio"
                    className="radioButton"
                    onChange={() => {
                      setChoosePlan(item.plan_type);
                      handleSetSelectedPlans({
                        amount: item?.min_mandate_price,
                        type: item?.plan_type,
                      });
                    }}
                    checked={item.plan_type === choosePlan}
                  />
                  <div>
                    <p style={{ color: "#FFCC11" }}>
                      <span>₹{item.min_mandate_price}</span> /{" "}
                      <span>
                        {item.plan_type === "monthly"
                          ? "month"
                          : item.plan_type === "quarter"
                            ? "quarter"
                            : "year"}
                      </span>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "-15px",
                      }}
                    >
                      <p
                        style={{
                          color: "#7D7D7D",
                          textDecoration: "line-through",
                        }}
                      >
                        ₹{item.discounted_price}
                      </p>
                      <p
                        className="discountTag"
                        style={{
                          display: `${item?.hide_discount_percentage ? "block" : "none"
                            }`,
                        }}
                      >
                        {item.hide_discount_percentage
                          ? calculateDiscount(
                            item.original_price,
                            item.min_mandate_price
                          )
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: 500 }}>
                    {item.title.replace("PLUS", "")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Plans;
