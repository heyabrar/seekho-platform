import useStore from "../../store";

const Benefits = () => {
  const { benefits } = useStore();
  return (
    <div>
      {benefits?.benefits?.length ? (
        <div className="benefitsContainer">
          <p>{benefits?.title}</p>
          <div>
            {benefits?.benefits.map((item) => {
              return (
                <div key={item?.title} className="benefitsCard">
                  <div>
                    <img src={item?.icon} alt={item?.title} />
                  </div>
                  <div>
                    <p>{item?.title}</p>
                    <p>{item?.sub_title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Benefits;
