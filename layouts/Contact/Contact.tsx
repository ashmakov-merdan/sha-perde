import { Form, ContactInfo } from "@/components/Contact/Contact";
import { Map } from "@/components";
import "@/styles/contact.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading">
          <p>Контакты</p>
          <h1>Как связаться с нами?</h1>
        </div>
        <div className="col">
          <Form />
          <ContactInfo />
        </div>
        <div className="col">
          <Map />
          <div className="caspy">
            <a href="https://www.caspy.biz/">Developed by <span className="company">caspy</span></a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;