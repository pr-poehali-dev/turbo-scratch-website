import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Zap",
      title: "Быстрая разработка",
      description:
        "Создавайте проекты в разы быстрее с интуитивным интерфейсом",
    },
    {
      icon: "Code2",
      title: "Чистый код",
      description:
        "Автоматическая генерация оптимизированного и читаемого кода",
    },
    {
      icon: "Palette",
      title: "Визуальный редактор",
      description: "Проектируйте интерфейсы без написания кода с нуля",
    },
  ];

  const benefits = [
    {
      icon: "Rocket",
      title: "Мгновенный старт",
      description: "Начните разработку за секунды, не настраивая окружение",
    },
    {
      icon: "Users",
      title: "Командная работа",
      description: "Совместная разработка в реальном времени",
    },
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Проверенные решения и стабильная работа",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={32} className="text-purple-600" />
            <span className="text-2xl font-bold font-montserrat">
              TurboScratch
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Возможности
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Преимущества
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Попробовать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            TurboScratch.io
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-open-sans">
            Революционная платформа для быстрой разработки. Создавайте
            потрясающие проекты без ограничений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-8"
              onClick={() => window.open("https://TurboScratch.ru", "_blank")}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Открыть turboscratch.io
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-4">
              Ключевые возможности
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Всё что нужно для современной разработки
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon}
                      size={32}
                      className="text-purple-600"
                    />
                  </div>
                  <CardTitle className="font-montserrat">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 font-open-sans">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-4">
              Почему TurboScratch?
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Преимущества, которые ускорят вашу работу
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={benefit.icon} size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-open-sans">
            Присоединяйтесь к тысячам разработчиков уже сегодня
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8"
          >
            <Icon name="ArrowRight" size={20} className="mr-2" />
            Перейти на turboscratch.io
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} className="text-purple-400" />
                <span className="text-xl font-bold font-montserrat">
                  TurboScratch
                </span>
              </div>
              <p className="text-gray-400 font-open-sans">
                Революционная платформа для быстрой разработки проектов
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-montserrat">Продукт</h4>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документация
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-montserrat">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Сообщество
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-montserrat">Связь</h4>
              <div className="flex gap-4">
                <Icon
                  name="Github"
                  size={24}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
                <Icon
                  name="Twitter"
                  size={24}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
                <Icon
                  name="Mail"
                  size={24}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-open-sans">
              © 2024 TurboScratch.io. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
