import Reveal from "./Reveal";

const About = () => {
  return (
    <section
      id="About"
      className="scroll-mt-24 border-t border-base-content/10 py-16 sm:py-20"
    >
      <Reveal className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Обо мне
          </h2>
          <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-base-content/80">
            <p>
              Меня зовут Рой. Создаю сайты для предпринимателей, компаний и
              личных проектов. Помогаю представить услуги, показать товары и
              сделать так, чтобы посетителю было легко найти нужное и
              связаться с вами.
            </p>
            <p>
              Могу сделать небольшой сайт-визитку, страницу для отдельной
              услуги или онлайн-сервис с регистрацией и личным кабинетом.
              Продумываю удобство, настраиваю работу на телефонах и
              компьютерах, помогаю разместить сайт в интернете.
            </p>
            <p>
              Обсуждаем вашу задачу простыми словами, согласовываем объём
              работы и этапы. По ходу показываю результат, чтобы вы понимали,
              как продвигается проект.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-medium">Чем могу помочь</h3>
          <ul className="mt-6 space-y-3 text-base text-base-content/80">
            <li>Сайт для компании или специалиста</li>
            <li>Страница для продвижения товара или услуги</li>
            <li>Каталог товаров</li>
            <li>Онлайн-сервис с личным кабинетом</li>
            <li>Подключение заявок, онлайн-оплаты и уведомлений</li>
            <li>Настройка статистики посещений сайта</li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
