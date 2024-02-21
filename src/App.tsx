import { useEffect } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import getData from "./api";
import useStore from "./store";
import Container from "./Components/common/Container";
import Plans from "./Components/Plans";
import Discount from "./Components/Discount";


function App() {
  const { setBenefits, setCreatorItem, setFaq, setSeriesItem, setUserItem, setPlans } =
    useStore();

  // API call to fetch the data and store it in a global store using zustand
  const handleGetData = async () => {
    try {
      const response = await getData();
      console.log(response?.data);
      const data = response?.data;
      if (data) {
        setBenefits(data.benefits);
        setCreatorItem(data.creator_item);
        setFaq(data.faq);
        setSeriesItem(data.series_item);
        setUserItem(data.user_item);
        setPlans(data.plans)

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="heroImage">
      <Container>
        <HeroSection />
        <div>
          <Plans />
        </div>

        <div>
          <Discount />
        </div>
      </Container>
      {/* <HeroSection /> */}
    </div>
  );
}

export default App;
