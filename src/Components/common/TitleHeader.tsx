type Props = {
  title: string;
};

const TitleHeader = ({ title }: Props) => {
  return <div className="titleHeader">{title}</div>;
};

export default TitleHeader;
