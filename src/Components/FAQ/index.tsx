import { useState } from "react";
import useStore from "../../store";
import FaqItem from "./FaqItem";

const Faq = () => {
    const { faq } = useStore();

    console.log({ faq });
    return (
        <div className="faq-container">
            <p>{faq?.title}</p>

            <div>
                {faq?.faq_list?.map((item) => {
                    return (
                        <FaqItem question={item.question} answer={item.answer} />
                    );
                })}
            </div>
        </div>
    );
};

export default Faq;
