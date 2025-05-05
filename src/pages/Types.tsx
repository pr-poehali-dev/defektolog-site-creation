
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Types = () => {
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
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Разновидности дефектологии</h2>
          <p className="text-lg mb-6">
            Дефектология включает в себя несколько специализированных направлений, каждое из которых 
            фокусируется на определенном типе нарушений развития. Рассмотрим основные направления:
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">Логопедия</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <p className="mb-3">
                      <strong>Логопедия</strong> занимается вопросами диагностики и коррекции нарушений речи. 
                      Логопеды работают с людьми всех возрастов, у которых наблюдаются проблемы с:
                    </p>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Произношением звуков (дислалия, дизартрия)</li>
                      <li>Темпом и ритмом речи (заикание)</li>
                      <li>Письменной речью (дисграфия, дислексия)</li>
                      <li>Общим недоразвитием речи</li>
                      <li>Афазией (потеря речи после инсульта или травмы)</li>
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format&fit=crop" 
                      alt="Логопедическое занятие" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">Сурдопедагогика</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <p className="mb-3">
                      <strong>Сурдопедагогика</strong> - направление дефектологии, которое занимается обучением и 
                      воспитанием людей с нарушениями слуха. Сурдопедагоги решают следующие задачи:
                    </p>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Развитие остаточного слуха</li>
                      <li>Обучение речи и языку</li>
                      <li>Развитие навыков чтения с губ</li>
                      <li>Обучение жестовому языку</li>
                      <li>Социальная адаптация людей с нарушениями слуха</li>
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b1f?w=400&auto=format&fit=crop" 
                      alt="Сурдопедагогика" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">Тифлопедагогика</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <p className="mb-3">
                      <strong>Тифлопедагогика</strong> специализируется на обучении и воспитании лиц с нарушениями 
                      зрения. Тифлопедагоги работают с:
                    </p>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Слабовидящими</li>
                      <li>Слепыми</li>
                      <li>Людьми с поздней потерей зрения</li>
                    </ul>
                    <p>
                      Тифлопедагоги обучают своих подопечных шрифту Брайля, пространственной ориентировке, 
                      использованию тифлотехники и других вспомогательных средств.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1551837508-e04e9f6b42f7?w=400&auto=format&fit=crop" 
                      alt="Тифлопедагогика" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold">Олигофренопедагогика</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <p className="mb-3">
                      <strong>Олигофренопедагогика</strong> занимается вопросами обучения и воспитания лиц с 
                      интеллектуальными нарушениями. Специалисты в этой области работают с детьми и взрослыми с:
                    </p>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Различными степенями интеллектуальной недостаточности</li>
                      <li>Задержкой психического развития</li>
                      <li>Нарушениями познавательной деятельности при сохранном интеллекте</li>
                    </ul>
                    <p>
                      Основная задача олигофренопедагогов - помочь людям с интеллектуальными нарушениями освоить 
                      бытовые и социальные навыки, а также получить доступное образование.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400&auto=format&fit=crop" 
                      alt="Олигофренопедагогика" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold">Специальная психология</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <p className="mb-3">
                      <strong>Специальная психология</strong> изучает психологические особенности людей с различными 
                      нарушениями развития. Специалисты в этой области проводят:
                    </p>
                    <ul className="list-disc pl-6 mb-3">
                      <li>Психодиагностику</li>
                      <li>Психологическую коррекцию</li>
                      <li>Психологическое консультирование</li>
                      <li>Психотерапевтическую работу</li>
                    </ul>
                    <p>
                      Специальные психологи помогают людям с особенностями развития справиться с эмоциональными 
                      и поведенческими проблемами, а также адаптироваться в обществе.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&auto=format&fit=crop" 
                      alt="Специальная психология" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Современные тенденции в дефектологии</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Инклюзивное образование</h3>
              <p>Интеграция детей с особыми образовательными потребностями в обычные образовательные учреждения.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Ранняя помощь</h3>
              <p>Выявление нарушений развития в раннем возрасте и начало коррекционной работы максимально рано.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Междисциплинарный подход</h3>
              <p>Комплексная работа специалистов разного профиля для достижения наилучших результатов.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Использование технологий</h3>
              <p>Применение компьютерных программ, приложений и специальных устройств в коррекционной работе.</p>
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

export default Types;
