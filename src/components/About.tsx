const About = () => {
  return (
    <section
      id="About"
      className="scroll-mt-24 border-t border-base-content/10 py-16 sm:py-20"
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Обо мне
          </h2>
          <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-base-content/80">
            <p>
              Frontend-разработчик. Делаю интерфейсы на React и TypeScript:
              быстрые, понятные и без лишнего. Пишу код, который можно
              поддерживать.
            </p>
            <p>
              В работе Next.js, Tailwind CSS, Git, адаптивная вёрстка,
              REST API и деплой на Vercel. Беру и сайт-визитку, и приложение,
              которое закрывает процесс целиком.
            </p>
            <p>
              Смотрю на скорость, доступность и то, как человек проходит
              сценарий. Ещё занимаюсь вайбкодингом: вместе с ИИ собираю
              рабочую версию и сам довожу код.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-medium">Что делаю</h3>
          <ul className="mt-6 space-y-3 text-base text-base-content/80">
            <li>Сайты любой сложности</li>
            <li>Веб-приложения</li>
            <li>Лендинги и промо-страницы</li>
            <li>Подключение внешних сервисов</li>
            <li>Реклама и аналитика</li>
            <li>Вайбкодинг</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
