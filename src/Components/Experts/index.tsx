import useStore from "../../store";
import TitleHeader from "../common/TitleHeader";

const Experts = () => {
    const { creatorItem } = useStore();
    return (
        <div className="expertsContainer">
            <TitleHeader title={creatorItem?.title} />
            <div id="hideScroll">
                {creatorItem?.creator_list?.map((item) => {
                    return (
                        <div key={item.name} className="expertsCard">
                            <img src={item.avatar} alt={item.name} width={120} height={120} />
                            <p>{item.name}</p>
                            <p>{item.profession}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experts;
