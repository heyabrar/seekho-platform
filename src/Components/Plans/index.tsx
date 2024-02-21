import { useMemo, useState } from "react";
import useStore from "../../store";
import calculateDiscount from "../../utils/helperFunctions";

const Plans = () => {
  const [choosePlan, setChoosePlan] = useState<string>("");
  const { plans } = useStore();

  const planMemo = useMemo(() => {
    return plans;
  }, [plans]);

  console.log({ plans });
  return (
    <div>
      {planMemo[0]?.title ? (
        <div className="plansContainer">
          {planMemo.map((item) => {
            return (
              <div
                className="planCard"
                key={item.id}
                onClick={() => setChoosePlan(item.plan_type)}
                style={{
                  border: `1px solid transparent`,
                  borderImage:
                    item.plan_type === choosePlan
                      ? "linear-gradient(to right, #0075FF, #FF00D6, #FFA800) 3"
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
                    onChange={() => setChoosePlan(item.plan_type)}
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
                          display: `${
                            item?.hide_discount_percentage ? "block" : "none"
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
