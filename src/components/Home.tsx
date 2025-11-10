import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import img from "../assets/3.png";

interface HomeProps {
  onNavigate: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée après un délai
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="Home"
      className={`flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div
        className={`flex flex-col transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
        data-scroll
        data-scroll-speed="2"
      >
        <h1
          className={`text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0 transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-scroll
          data-scroll-delay="0.1"
        >
          Привет, <br /> я <span className="text-accent">Рой</span>
        </h1>
        <p
          className={`text-base md:text-lg text-base-content/70 mt-3 md:mt-4 text-center md:text-left leading-relaxed transition-all duration-700 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Создаю интерфейсы, которые вдохновляют.
        </p>

        <div
          className={`my-4 text-md text-center md:text-left transition-all duration-800 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-scroll
          data-scroll-delay="0.2"
        >
          <p
            className={`text-xl md:text-2xl font-semibold text-base-content mb-3 inline-flex items-center gap-2 transition-all duration-700 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            💻
            <span
              className={`inline-block border-b-2 border-accent pb-1 transition-all duration-700 ease-out ${
                isVisible ? "border-opacity-100" : "border-opacity-0"
              }`}
            >
              Frontend-разработчик
            </span>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-base-content/90 mb-3">
            Создаю{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              современные сайты и веб-приложения
            </span>
            , которые помогают бизнесу расти и пользователям получать
            удовольствие от взаимодействия.
          </p>
          <p className="text-sm md:text-base text-base-content/90 leading-relaxed mb-3">
            Моя специализация —{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              удобные, быстрые и эффективные онлайн-решения
            </span>
            : от минималистичных сайтов-визиток и{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              продающих Landing Page
            </span>{" "}
            до{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              полноценных веб-приложений
            </span>
            , автоматизирующих бизнес-процессы.
          </p>
          <p className="text-sm md:text-base text-base-content/90 leading-relaxed">
            Использую современные технологии и проверенные практики, чтобы ваш
            проект был{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              быстрым, безопасным и стабильным
            </span>
            .
          </p>
          <div className="mt-5 text-sm md:text-base text-base-content/90">
            <p className="font-semibold mb-2">🔧 Что я делаю</p>
            <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-1 text-center md:text-left leading-relaxed">
              <li>🌐 Разработка сайтов любой сложности</li>
              <li>⚙️ Создание веб-приложений</li>
              <li>🚀 Landing Page и промо-страницы</li>
              <li>🔗 Подключение и настройка внешних сервисов</li>
              <li>📊 Интеграция с рекламными и аналитическими системами</li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => onNavigate("Contact")}
          className={`bg-teal-400 hover:bg-teal-500 text-black font-medium py-3 px-5 rounded-lg transition-all flex items-center gap-2 md:w-fit shadow-lg duration-700 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          data-scroll
          data-scroll-delay="0.3"
        >
          <Mail className="w-5 h-5" />
          Связаться со мной
        </button>
      </div>

      <div
        className={`md:ml-60 transition-all duration-1000 ease-out delay-500 ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-20 scale-95"
        }`}
        data-scroll
        data-scroll-speed="-1"
      >
        <img
          src={img}
          alt="Рой - Frontend разработчик"
          className="w-[22rem] h-[26rem] md:w-[36rem] md:h-[38rem] object-cover border-8 border-accent shadow-xl transition-all duration-300"
          style={{
            borderRadius: "42% 58% 60% 40% / 50% 55% 45% 55%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
