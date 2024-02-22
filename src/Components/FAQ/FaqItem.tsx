import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
    question: string;
    answer: string;
};

const FaqItem = ({ question, answer }: Props) => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="faq-item" onClick={() => setClicked(!clicked)}>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>{question} <FaChevronDown className="chevron-down"/></p>
            {clicked && <p>{answer}</p>}
        </div>
    );
};

export default FaqItem;
