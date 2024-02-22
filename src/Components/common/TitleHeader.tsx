type Props = {
  title: string;
};

const TitleHeader = ({ title }: Props) => {
  return (
    <div
      className="titleHeader"
      style={{ textAlign: "center" }}
      id="hideScroll"
    >
      {title}
    </div>
  );
};

export default TitleHeader;
