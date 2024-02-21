import { FaArrowRight } from "react-icons/fa";
import Puzzle from "../Icons/Puzzel";
const Discount = () => {
    return (
        <>
            <div className="discountContainer">
                <p>DISCOUNT</p>
                <div className="discountCard">
                    <div style={{ borderBottom: '1px solid gray' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
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

            <div className="subscribe">
                <p>₹249<span style={{ fontSize: '14px', fontWeight: 500 }}>/quarter</span></p>
                <p>Subscribe karein</p>
                <FaArrowRight className="arrowForward"/>
            </div>
        </>
    );
};

export default Discount;
