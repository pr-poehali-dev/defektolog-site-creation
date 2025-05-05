
interface TrendItemProps {
  title: string;
  description: string;
}

const TrendItem: React.FC<TrendItemProps> = ({ title, description }) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TrendItem;
