
import TrendItem from "./TrendItem";

const trends = [
  {
    title: "Инклюзивное образование",
    description: "Интеграция детей с особыми образовательными потребностями в обычные образовательные учреждения."
  },
  {
    title: "Ранняя помощь",
    description: "Выявление нарушений развития в раннем возрасте и начало коррекционной работы максимально рано."
  },
  {
    title: "Междисциплинарный подход",
    description: "Комплексная работа специалистов разного профиля для достижения наилучших результатов."
  },
  {
    title: "Использование технологий",
    description: "Применение компьютерных программ, приложений и специальных устройств в коррекционной работе."
  }
];

const ModernTrends = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Современные тенденции в дефектологии</h2>
      <div className="space-y-4">
        {trends.map((trend, index) => (
          <TrendItem 
            key={index}
            title={trend.title}
            description={trend.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ModernTrends;
