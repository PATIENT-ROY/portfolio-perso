import HeroLaptop from "./HeroLaptop";

interface HomeProps {
  onNavigate: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <section
      id="Home"
      className="grid items-center gap-12 scroll-mt-24 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 lg:py-20"
    >
      <div className="rise">
        <h1 className="font-display text-[clamp(4.25rem,16vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          Рой
        </h1>
        <p className="mt-6 max-w-lg text-xl font-medium leading-snug sm:text-2xl">
          Создаю сайты для бизнеса и ваших идей.
        </p>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-base-content/75">
          Помогу рассказать о ваших услугах, показать товары или запустить
          онлайн-сервис. Сделаю сайт удобным для телефона и компьютера — от
          первого экрана до отправки заявки.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            onClick={() => onNavigate("Contact")}
            className="bg-secondary px-5 py-3 text-sm font-medium text-secondary-content"
          >
            Обсудить проект
          </button>
          <button
            onClick={() => onNavigate("Projects")}
            className="text-sm underline decoration-base-content/30 underline-offset-4 hover:decoration-base-content"
          >
            Смотреть работы
          </button>
        </div>
        <dl className="mt-10 space-y-2 text-sm">
          <div className="flex gap-3">
            <dt className="text-base-content/50">Город</dt>
            <dd>Екатеринбург, Россия</dd>
          </div>
          <div className="flex gap-3">
            <dt className="text-base-content/50">Формат</dt>
            <dd>Работаю удалённо</dd>
          </div>
          <div className="flex gap-3">
            <dt className="text-base-content/50">Сопровождение</dt>
            <dd>От идеи до запуска</dd>
          </div>
        </dl>
      </div>

      <HeroLaptop />
    </section>
  );
};

export default Home;
