import useStore from "../../store";
import TitleHeader from "../common/TitleHeader";
import "../../styles/series.css"

const Series = () => {
  const { seriesItem } = useStore();

  return (
    <div className="seriesContainer">
      <TitleHeader title={seriesItem?.title} />
      <div className="seriesImageContainer" id="hideScroll">
        {seriesItem?.series_list?.map((item) => {
          return (
            <div key={item?.id}>
              <img
                src={item?.image}
                alt={item?.id?.toString()}
                className="seriesImage"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Series;
