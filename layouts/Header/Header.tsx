import { Carousel, Heading, Button } from "@/components";
import "@/styles/header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <Heading>owadanlyk siziň öýüňizde!</Heading>
          <p className="description">
            На сегодняшний день компания Şa Perde  является одним из самых крупных поставщиков штор, карнизов на окна, жалюзей и занавесей в Туркменистане.
          </p>
          <Button>Узнат болше о нас</Button>
        </div>
      </div>
      <Carousel />
    </header>
  )
};

export default Header;