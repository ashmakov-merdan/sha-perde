import Image from "next/image";
import about from "@/assets/images/about.png";

const Header = () => {
  return (
    <header>
      <Image src={about} className="about-header-image" alt={"about-header"} />
      <div className="container">
          <div className="row header">
            <p className="heading">Кто мы?</p>
            <h1 className="whoweare">Мы работаем напрямую с ведущими европейскими производителями в сфере декорирования помещений.</h1>
          </div>
      </div>
    </header>
  )
};

export default Header;