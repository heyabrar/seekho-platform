import { FaArrowRight } from "react-icons/fa";
import "../../styles/discount.css";
import Puzzle from "../Icons/Puzzel";
import useStore from "../../store";

const Discount = () => {
    const { selectPlan } = useStore();
    return (
        <>
            <div className="discountContainer">
                <p>DISCOUNT</p>
                <div className="discountCard">
                    <div style={{ borderBottom: "1px solid gray" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                justifyContent: "center",
                            }}
                        >
                            <Puzzle />
                            <p>LUCKYOFFER</p>
                        </div>
                        <p>Saved ₹400 </p>
                    </div>

                    <div>
                        <p>Coupon Applied</p>
                        <button>Remove</button>
                    </div>
                </div>
            </div>

            {selectPlan?.type?.length ? (
                <div className="subscribe-container">
                    <div className="subscribe">
                        <p>
                            ₹{selectPlan.amount}
                            <span style={{ fontSize: "14px", fontWeight: 500 }}>
                                /{selectPlan.type}
                            </span>
                        </p>
                        <p>Subscribe karein</p>
                        <FaArrowRight className="arrowForward" />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Discount;
