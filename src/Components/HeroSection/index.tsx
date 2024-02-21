import NoAds from "../Icons/NoAds";
import ThousandsSeries from "../Icons/ThousandsSeries";
import UnlimitedContent from "../Icons/UnlimitedContent";

const HeroSection = () => {
    return (
        <div>
            <div className="heroMain">
                <ThousandsSeries />
                <NoAds />
                <UnlimitedContent />
            </div>

            <p style={{ textAlign: "center", fontWeight: 700 }} className="heroText">
                1 SAAL KE LIE UNLOCK KAREIN
            </p>
        </div>
    );
};

export default HeroSection;
