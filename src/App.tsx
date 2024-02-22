import { useEffect, useState } from "react";
import "./App.css";
import "./styles/loader-error.css";
import "./styles/userSlider.css"
import "./styles/faq.css"
import "./styles/common.css"
import "./styles/heroSection.css"
import HeroSection from "./Components/HeroSection";
import getData from "./api";
import useStore from "./store";
import Container from "./Components/common/Container";
import Plans from "./Components/Plans";
import Discount from "./Components/Discount";
import Benefits from "./Components/Benefits";
import Series from "./Components/Series";
import Loader from "./Components/common/Loader";
import Error from "./Components/common/Error";
import Experts from "./Components/Experts";
import UserReview from "./Components/UserReview";
import Faq from "./Components/FAQ";
import Contact from "./Components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const {
    setBenefits,
    setCreatorItem,
    setFaq,
    setSeriesItem,
    setUserItem,
    setPlans,
  } = useStore();

  // API call to fetch the data and store it in a global store using zustand
  const handleGetData = async () => {
    try {
      setIsLoading(true);
      const response = await getData();
      const data = response?.data;
      if (data) {
        setIsLoading(false);
        setBenefits(data.benefits);
        setCreatorItem(data.creator_item);
        setFaq(data.faq);
        setSeriesItem(data.series_item);
        setUserItem(data.user_item);
        setPlans(data.plans);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Error />
        </div>
      ) : (
        <div className="heroImage">
          <Container>
            <HeroSection />
            <Plans />
            <Discount />
            <Benefits />
            <Series />
            <Experts />
          </Container>

          <div style={{ backgroundColor: '#1F1F1F' }}>
            <Container>
              <UserReview />
            </Container>
          </div>

          <Container>
            <Faq />
            <Contact />
          </Container>
        </div>
      )}
    </div>
  );
}

export default App;
