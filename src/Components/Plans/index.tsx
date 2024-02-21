import { useMemo } from "react";
import useStore from "../../store";

const Plans = () => {
    const { plans } = useStore();

    const planMemo = useMemo(() => {
        return plans;
    }, [plans]);

    return (
        <div>
            {planMemo.map((item) => {
                return (
                    <div className="planCard">
                        <div>
                            <p style={{ color: "#FFCC11", fontWeight: 400 }}>
                                <span style={{ fontSize: "20px" }}>
                                    ₹{item.min_mandate_price}
                                </span>{" "}
                                /{" "}
                                <span style={{ fontSize: '11px' }}>
                                    {item.plan_type === "monthly"
                                        ? "month"
                                        : item.plan_type === "quarter"
                                            ? "quarter"
                                            : "year"}
                                </span>
                            </p>
                            <p
                                style={{
                                    textDecoration: " line-through",
                                    fontSize: "10px",
                                    marginTop: "-10px",
                                    color: '#7D7D7D'
                                }}
                            >
                                ₹{item.discounted_price}
                            </p>
                        </div>

                        <div>
                            <p style={{ fontSize: '16px', fontWeight: 500 }}>{item.title}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Plans;
