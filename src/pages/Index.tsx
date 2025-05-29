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
      <header className="bg-orange-400 shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-center items-center">
          <div className="flex items-center gap-3">
            <Icon name="Sparkles" size={40} className="text-white" />
            <span className="text-3xl font-bold text-white">ScratchTurbo</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
            🎨 ScratchTurbo 🚀
          </h1>
          <p className="text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-md">
            Создавай удивительные проекты, игры и анимации! Программирование
            стало ещё веселее и проще! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-xl px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Icon name="Play" size={24} className="mr-3" />
              🎮 Начать создавать!
            </Button>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Icon name="ExternalLink" size={24} className="mr-3" />
              🌟 Посмотреть примеры
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-purple-600">
              🛠️ Что можно создать?
            </h2>
            <p className="text-2xl text-gray-700">
              Твоя фантазия — единственное ограничение! 🌈
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Gamepad2",
                title: "🎮 Игры",
                description:
                  "Создавай крутые игры с персонажами, уровнями и призами!",
                bgColor: "from-red-400 to-pink-400",
              },
              {
                icon: "Film",
                title: "🎬 Анимации",
                description:
                  "Оживляй героев и рассказывай удивительные истории!",
                bgColor: "from-blue-400 to-purple-400",
              },
              {
                icon: "Music",
                title: "🎵 Музыка",
                description: "Сочиняй мелодии и создавай музыкальные проекты!",
                bgColor: "from-green-400 to-teal-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl overflow-hidden"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <Icon
                      name={feature.icon}
                      size={40}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-lg text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-orange-600">
              🌟 Почему это круто?
            </h2>
            <p className="text-2xl text-gray-700">
              Учись программировать играя! 🎓
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "⚡ Быстро учись",
                description:
                  "Начни создавать проекты прямо сейчас, без сложных настроек!",
                bgColor: "bg-yellow-500",
              },
              {
                icon: "Heart",
                title: "❤️ Легко и весело",
                description:
                  "Визуальное программирование — как собирать конструктор!",
                bgColor: "bg-pink-500",
              },
              {
                icon: "Users",
                title: "👥 Делись проектами",
                description:
                  "Покажи свои творения друзьям и вдохновляйся работами других!",
                bgColor: "bg-blue-500",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-24 h-24 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={benefit.icon} size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">🚀 Готов к приключениям?</h2>
          <p className="text-2xl mb-12 opacity-90">
            Присоединяйся к миллионам юных программистов! 🌍✨
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-2xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <Icon name="ArrowRight" size={28} className="mr-4" />
            🎨 Начать творить!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Sparkles" size={32} className="text-orange-400" />
                <span className="text-2xl font-bold">ScratchTurbo</span>
              </div>
              <p className="text-gray-300 text-lg">
                Место, где рождаются удивительные проекты! 🎨✨
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">🎮 Создавай</h4>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Игры
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Анимации
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Истории
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">🎓 Учись</h4>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Уроки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Примеры
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Помощь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">🌟 Сообщество</h4>
              <div className="flex gap-4">
                <Icon
                  name="Github"
                  size={32}
                  className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors"
                />
                <Icon
                  name="Users"
                  size={32}
                  className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors"
                />
                <Icon
                  name="Mail"
                  size={32}
                  className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © 2024 ScratchTurbo.io — Твори, играй, изучай! 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
