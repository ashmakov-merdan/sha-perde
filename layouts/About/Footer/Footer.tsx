import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div>
          <Link href={"tel:414123"}>414123</Link>
          <Link href={"tel:414123"}>414123</Link>
        </div>
        <Link className="footer-mail" href={"mailto:info@shaperde.com"}>info@shaperde.com</Link>
      </div>
      <div className="footer-address">
        <p>Проспект А. Ниязова (Чехова), дом №153 (Kümüş), г. Ашхабад, Туркменистан</p>
      </div>
      <div className="footer-author">
        <div className="caspy">
              <a href="https://www.caspy.biz/">Developed by <span className="company">caspy</span></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>All rights reserved ©2019 - Şa Perde. Все права защищены.</p>
      </div>
    </footer>
  )
};

export default Footer;