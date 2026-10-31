import img from "../assets/3.png";

interface HomeProps {
  onNavigate: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <section
      id="Home"
      className="grid items-center gap-12 scroll-mt-24 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24"
    >
      <div className="rise">
        <h1 className="font-display text-[clamp(4.25rem,16vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          Рой
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-base-content/75 sm:text-xl">
          Делаю сайты и веб-приложения, которыми пользуются. React,
          TypeScript, от лендинга до сервиса.
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
        <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 text-sm">
          <div>
            <dt className="text-base-content/50">Город</dt>
            <dd className="mt-1">Екатеринбург</dd>
          </div>
          <div>
            <dt className="text-base-content/50">Формат</dt>
            <dd className="mt-1">Удалённо</dd>
          </div>
          <div>
            <dt className="text-base-content/50">Стек</dt>
            <dd className="mt-1">React</dd>
          </div>
        </dl>
      </div>

      <img
        src={img}
        alt="Рабочий стол: ноутбук с кодом"
        className="aspect-[4/5] w-full max-w-md justify-self-center object-cover lg:max-w-none lg:justify-self-end"
      />
    </section>
  );
};

export default Home;
