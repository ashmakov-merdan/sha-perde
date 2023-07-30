import curtain from "@/assets/images/curtain-1.png";
import Image from "next/image";
import { Service } from "@/components";
import pattern from "@/assets/images/pattern.svg";
import "@/styles/services.scss";
import Link from "next/link";
import { services } from "@/public/static";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col">
            <Image src={curtain} alt="services" />
          </div>
          <div className="col">
            <p className="heading">Услуги</p>
            <h1 className="title">КРАСИВО, КАЧЕСТВЕННО, ВЫГОДНО!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {services && services.slice(0, 3).map((service, index) => {
              return <Service key={index} {...service} />
            })}            
          </div>
          <div className="col">
            {services && services.slice(3, 6).map((service, index) => {
              return <Service key={index} {...service} />
            })}
            <div className="service more">
              <div className="thumb">
                <Image src={pattern} alt="pattern" />
              </div>
              <div className="action">
                <Link href={"/"}>Узнат болше</Link>
              </div>
            </div>
          </div>
          <div className="col">
            {services && services.map((service, index) => {
                return <Service key={index} {...service} />
              })}
          </div>
          <div className="more">
                <div className="action">
                  <Link href={"/"}>Узнат болше</Link>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
};

export default Services;