import { StaticImageData } from "next/image";

export type NavProps = {
  title: string,
  path: string,
  subs?: {
    title: string,
    path: string
  }[]
};

export type CarouselProps = {
  src: string,
  index: number,
  position: string
};

export type IndicatorProps = {
  pages: {
    image: string
  }[],
  index: number,
  setIndex: any
};

export type ComponentProps = {
  children: string
};

export type ToggleProps = {
  open: boolean,
  toggle: () => void;
}

export type ServiceProps = {
  title: string,
  description: string,
  img: StaticImageData
};

export type LinkProps = {
  path: string,
  icon: React.ReactNode
};