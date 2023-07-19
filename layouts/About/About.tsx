"use client"
import "../../styles/about.scss";
import Image from "next/image";
import pattern from "../../assets/images/pattern.svg";
import about from "../../assets/images/about.png";
import { Button } from "@/components";
import { useEffect } from "react";

const About = () => {
  return (
    <section id="about">
      <span id="pattern">
        <Image src={pattern} width={300} height={300} alt="pattern"/>
      </span>
      <div className="container">
          <div className="row">
            <p className="heading">Кто мы?</p>
            <h1 className="whoweare">Мы работаем напрямую с ведущими европейскими производителями в сфере декорирования помещений.</h1>
          </div>
          <div className="row">
            <div className="col">
              <p>Компания Şa Perde была создана более 10 лет тому назад и на сегодняшний день является одним из самых крупных поставщиков штор, карнизов на окна, жалюзей, занавесей и аксессуаров домашнего интерьера в Туркменистане. Мы работаем напрямую с ведущими европейскими производителями в сфере декорирования помещений.</p>
              <Button>Узнат болше о нас</Button>
            </div>
            <div className="col">
              <Image src={about} alt={"about"} />
            </div>
          </div>
      </div>
    </section>
  )
};

export default About;