
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Мир дефектологии</h1>
            <div className="flex gap-4">
              <Link to="/">
                <Button variant="ghost">Главная</Button>
              </Link>
              <Link to="/types">
                <Button variant="ghost">Разновидности</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-6">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Кто такой дефектолог?</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                <strong>Дефектолог</strong> — это специалист в области специальной педагогики, который 
                занимается диагностикой, обучением и коррекцией нарушений развития у детей и взрослых.
              </p>
              <p className="text-lg mb-4">
                Дефектологи работают с людьми, имеющими различные особенности развития, включая 
                нарушения речи, слуха, зрения, интеллекта, опорно-двигательного аппарата, а также 
                с людьми с комплексными нарушениями.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b40?w=800&auto=format&fit=crop" 
                alt="Дефектолог работает с ребенком" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Области деятельности дефектолога</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li className="text-lg">Диагностика нарушений развития у детей и взрослых</li>
            <li className="text-lg">Разработка индивидуальных коррекционных программ</li>
            <li className="text-lg">Проведение коррекционно-развивающих занятий</li>
            <li className="text-lg">Консультирование родителей и педагогов</li>
            <li className="text-lg">Проведение профилактической работы</li>
            <li className="text-lg">Социальная адаптация людей с особенностями развития</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Где работают дефектологи?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Образовательные учреждения</h3>
              <p>Детские сады, школы, интернаты для детей с особыми образовательными потребностями</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Медицинские учреждения</h3>
              <p>Поликлиники, больницы, реабилитационные центры</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Психолого-педагогические центры</h3>
              <p>Центры психолого-педагогической, медицинской и социальной помощи</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Частная практика</h3>
              <p>Частные кабинеты, центры развития детей, частные консультации</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-4 mt-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Мир дефектологии. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
