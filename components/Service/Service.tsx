import Image from "next/image";
import { ServiceProps } from "@/types";

const Service = ({title, description, img}: ServiceProps) => {
  return (
    <div className="service">
      <div className="thumb">
        <Image src={img} alt={title} />
      </div>
      <div className="action">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  ) 
};

export default Service;