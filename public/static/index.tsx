import curtain from "@/assets/images/curtain.png";
import curtain1 from "@/assets/images/curtain-1.png";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/assets/icons";

export const navigation = [
  {
    title: "Главная",
    path: "/"
  },
  {
    title: "О компании",
    path: "#about"
  },
  {
    title: "Услуги",
    path: "/services",
    subs: [
      {
        title: "Шторы",
        path: "#curtains"
      },
      {
        title: "Тюли",
        path: "#tulle",
      },
      {
        title: "Карнизы",
        path: "#cornices"
      },
      {
        title: "Жалюзи",
        path: "#blinds"
      },
      {
        title: "Аксессуары",
        path: "#accessories"
      },
      {
        title: "Покрывала и подушки",
        path: "#pillows"
      }
    ]
  },
  {
    title: "Наши работы",
    path: "#works"
  },
  {
    title: "Контакты",
    path: "#contact"
  }
];

export const carousel = [
  {
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    image: "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    image: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const services = [
  {
    title: "Шторы",
    description: "К оформлению окон в зале, где собираются всей семьей",
    img: curtain
  },
  {
    title: "Тюли",
    description: "К оформлению окон в зале, где собираются всей семьей",
    img: curtain1
  },
  {
    title: "Карнизы",
    description: "Вы всегда можете рассчитывать на получение подробной",
    img: curtain
  },
  {
    title: "Жалюзи",
    description: "Вы всегда можете рассчитывать на получение подробной",
    img: curtain1
  },
  {
    title: "Аксессуары",
    description: "Вы всегда можете рассчитывать на получение подробной",
    img: curtain
  },
  {
    title: "Покрывала и подушки",
    description: "Мы будем рады помочь Вам выбрать ткань, фасон, размер",
    img: curtain1
  }
];

export const links = [
  {
    path: "/",
    icon: <TwitterIcon/>
  },
  {
    path: "/",
    icon: <InstagramIcon/>
  },
  {
    path: "/",
    icon: <FacebookIcon/>
  }
];