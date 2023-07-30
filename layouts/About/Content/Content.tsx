import Image from "next/image";
import pattern from "@/assets/images/pattern.svg";
import about from "@/assets/images/quality.png";
import brands from "@/assets/images/brands.svg";

const Content = () => {
  return (
    <section className="about-content">
      <span id="pattern">
        <Image src={pattern} width={300} height={300} alt="pattern"/>
      </span>
      <div className="container">

        <div className="row">
          <div className="column">
            <div className="content-heading">
              <h2>Вы всегда можете рассчитывать на подробную консультацию, предоставляемую нашими квалифицированными специалистами!</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="content-description">Компания Şa Perde была создана более 10 лет тому назад и на сегодняшний день является одним из самых крупных поставщиков штор, карнизов на окна, жалюзей, занавесей и аксессуаров домашнего интерьера в Туркменистане. Мы работаем напрямую с ведущими европейскими производителями в сфере декорирования помещений.</p>
          </div>
          <div className="column">
            <Image src={pattern} width={280} height={280} alt="pattern" />
          </div>
        </div>
 
        <div className="row">
          <div className="column">
            <Image src={about} width={200} alt={"about-picture"} />
          </div>
          <div className="column">
            <h2 className="heading">Подход к <br/> каждому клиенту</h2>
            <p className="desc">Наша сплоченная команда «Şa Perde», обеспечивает индивидуальный подход к каждому клиенту, на высшем уровне. В ассортименте компании более 1500 видов тюлевых и портьерных тканей, также хорошим бонусом выступает следующие виды услуг, которые в нашей компании предоставляются совершенно бесплатно, а именно: - доставка, установка, замер и услуги дизайнера.</p>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <h2 className="heading">Мы благодарны нашим клиентам за доверие!</h2>
            <p className="desc">Вот уже 10 лет «Şa Perde» является лидером в своём деле на местном рынке. Мы благодарны нашим клиентам за доверие, таких крупных проектов на территории Туркменистана как:</p>
            <p className="client">Awaza Sport Kompleks, Awaza Bagtyýar Otel, Golf Klub, Gala Dynç Alyş Merkezi, AlpEt Steakhouse, Hezzet restoran, Argentina Steakhouse, Balyk Tagamlary restorany, Aşgabat Gumrukhanasy, Jemagat hojalygy instituty, Abadan haly fabrigi, Awiakassa Turkmen howaýollary</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Image src={brands} alt={"brands"} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Content;