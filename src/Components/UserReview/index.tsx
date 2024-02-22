import { useState } from "react";
import useStore from "../../store";
import TitleHeader from "../common/TitleHeader";

const UserReview = () => {
    const { userItem } = useStore();
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider-container">
            <TitleHeader title={userItem.title} />
            <div
                className="slider-items"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {userItem?.user_list?.map((item) => {
                    return (
                        <div className="slider-item" key={item?.name}>
                            <img src={item?.avatar} alt={item?.name} width={72} height={72} />
                            <p>{item?.name}</p>
                            <p>{item?.profession}</p>
                            <p>{item?.review}</p>
                        </div>
                    );
                })}
            </div>

            <div className="dots-container">
                {Array.from({ length: 3 }, (_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default UserReview;
