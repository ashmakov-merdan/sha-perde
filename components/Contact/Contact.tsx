import Link from "next/link";
import Button from "../Button/Button";
import Links from "../Links/Links";

export const Form = () => {
  return (
    <form id="form">
      <div className="field">
      <label htmlFor="name" className="legend">Name</label>
        <input type="text" id="name" name="name" placeholder="John" className="formInput" />
      </div><div className="field">
      <label htmlFor="last" className="legend">Last name</label>
        <input type="text" id="last" name="last" placeholder="Doe" className="formInput" />
      </div>
      <div className="field">
      <label htmlFor="email" className="legend">Email</label>
        <input type="text" id="email" name="email" placeholder="johndoe@example.com" className="formInput" />
      </div>
      <div className="field">
      <label htmlFor="msg" className="legend">Message</label>
        <textarea name="msg" id="msg" className="formInput" cols={30} rows={10} placeholder="I'd like to ..."></textarea>
      </div>
      <div className="field addition">
        <Links />
        <Button link={"/send"} >Отправить</Button>
      </div>
    </form>
  )
};

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p className="contact-address">
      Проспект А. Ниязова (Чехова), дом №153 (Kümüş), г. Ашхабад, Туркменистан
      </p>
      <Link href="info@shaperde.com" className="contact-mail">info@shaperde.com</Link>
      <PhoneNumbers />
    </div>
  )
};

const PhoneNumbers = () => {
  return (
    <ul className="contact-number">
      <a href="tel:414123">41 41 23</a>
      <a href="tel:414124">41 41 24</a>
    </ul>
  );
};