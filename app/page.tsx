import { ArrowUpRight, ShieldCheck, Sparkles, BadgeCheck, MapPin, Check, ScanEye, Award, MessagesSquare, Instagram, Send } from "lucide-react";
import RequestModal from "./RequestModal";
import Intro from "./intro";

const benefits = [
  { number: "01", icon: ShieldCheck, title: "Защита от сколов", text: "Полиуретановая плёнка принимает на себя мелкие удары гравия и дорожного мусора, сохраняя лакокрасочное покрытие." },
  { number: "02", icon: Sparkles, title: "Чистый внешний вид", text: "Прозрачное покрытие помогает сохранить блеск кузова и защищает поверхность от повседневных воздействий." },
  { number: "03", icon: BadgeCheck, title: "Комфорт в уходе", text: "Плёнка создаёт дополнительный барьер от загрязнений и упрощает поддержание автомобиля в отличном состоянии." },
];

const reasons = [
  { number: "01", title: "Внимание к деталям", text: "Аккуратная подготовка кузова и точная работа с каждым элементом автомобиля.", icon: ScanEye },
  { number: "02", title: "Профессиональный подход", text: "Подбираем решение под автомобиль, задачи владельца и зоны, которым нужна защита.", icon: Award },
  { number: "03", title: "Честная консультация", text: "Объясняем варианты оклейки, особенности материалов и правила ухода до начала работ.", icon: MessagesSquare },
];

export default function Home() {
  return (
    <main>
      <Intro />
      <header className="absolute z-20 w-full py-6">
        <div className="container flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">FRESH<span style={{color:"#c7ff45"}}> AUTO</span></a>
          <nav className="hidden gap-8 text-xs font-bold text-white/80 md:flex">
            <a href="#benefits" className="hover:text-lime-300">Преимущества</a>
            <a href="#about" className="hover:text-lime-300">Почему мы</a>
            <a href="#contacts" className="hover:text-lime-300">Контакты</a>
          </nav>
          <div className="flex items-center gap-3"><div className="social-links"><a href="https://t.me/stegleb?ysclid=mwent09yyj102349737" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={19}/></a><a href="https://www.instagram.com/stegleb" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19}/></a></div><RequestModal className="!px-4 !py-3" /></div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="eyebrow">Детейлинг • Уфа</div>
            <h1>Сохраним вид.<br/><span>Защитим стиль.</span></h1>
            <p>Оклейка автомобиля полиуретановой плёнкой в Fresh Auto. Защита кузова, которая помогает сохранить красоту вашего автомобиля каждый день.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contacts" className="button">Записаться на консультацию <ArrowUpRight size={17}/></a>
              <a href="#benefits" className="button button-outline">Узнать больше</a>
            </div>
            <div className="mt-14 flex items-center gap-3 text-xs text-white/60"><span className="h-px w-10 bg-lime-300"></span> Защита, которую видно в деталях</div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Полиуретановая защита</div>
            <h2>Больше уверенности<br/>на каждом километре</h2>
            <p className="muted">Защитная плёнка помогает сохранить заводское покрытие и внешний вид автомобиля в городских поездках и на трассе.</p>
          </div>
          <div className="grid3">
            {benefits.map((item) => { const Icon = item.icon; return <article className="panel" key={item.number}><div className="flex items-center justify-between"><span className="panel-number">{item.number}</span><Icon color="#c7ff45" size={22}/></div><h3>{item.title}</h3><p>{item.text}</p></article>; })}
          </div>
        </div>
      </section>

      <section id="about" className="section band">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Fresh Auto</div>
            <h2>Ваш автомобиль<br/>в надёжных руках</h2>
            <p className="muted">Мы сосредоточены на качестве работы, аккуратности и понятном сервисе — от первой консультации до выдачи автомобиля.</p>
          </div>
          <div className="grid3">
            {reasons.map((item) => { const Icon = item.icon; return <article className="panel" key={item.number}><div className="flex items-center justify-between"><span className="panel-number">{item.number}</span><span className="reason-icon"><Icon size={23} strokeWidth={1.8}/></span></div><h3>{item.title}</h3><p>{item.text}</p></article>; })}
          </div>
        </div>
      </section>

      <section id="contacts" className="section">
        <div className="container">
          <div className="contact-wrap">
            <div>
              <div className="eyebrow">Будем на связи</div>
              <h2>Готовы защитить<br/>ваш автомобиль?</h2>
              <p className="muted mb-8">Расскажите, какой автомобиль хотите оклеить, — поможем подобрать подходящий вариант защиты.</p>
              <RequestModal />
              <div className="social-links contact-socials"><a href="https://t.me/stegleb?ysclid=mwent09yyj102349737" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={20}/></a><a href="https://www.instagram.com/stegleb" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20}/></a></div>
            </div>
            <div className="contact-card">
              <div className="contact-row"><span className="contact-label">Адрес</span><div className="contact-value flex items-center gap-2"><MapPin size={17} color="#c7ff45"/> Айская, 79, Уфа</div></div>
              <div className="contact-row"><span className="contact-label">Телефон</span><a className="contact-value" href="tel:+79179999999">+7 (917) 999-99-99</a></div>
              <div className="contact-row"><span className="contact-label">Компания</span><div className="contact-value">Fresh Auto</div></div>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/50"><Check size={15} color="#c7ff45"/> Консультация по предварительной записи</div>
            </div>
          </div>
          <div className="mt-12 overflow-hidden border border-white/10">
            <iframe className="map" title="Карта — Айская, 79, Уфа" loading="lazy" src="https://maps.google.com/maps?q=Айская%2079%2C%20Уфа&t=&z=15&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
      </section>

      <footer><div className="container flex flex-wrap items-center justify-between gap-3"><span className="font-extrabold text-white">FRESH AUTO</span><span>© {new Date().getFullYear()} Fresh Auto. Уфа.</span><a href="tel:+79179999999">+7 (917) 999-99-99</a><div className="social-links"><a href="https://t.me/stegleb?ysclid=mwent09yyj102349737" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18}/></a><a href="https://www.instagram.com/stegleb" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a></div></div></footer>
    </main>
  );
}