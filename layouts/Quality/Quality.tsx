import Image from "next/image";
import quality from "@/assets/images/quality.png";
import "@/styles/quality.scss";

const Quality = () => {
  return (
    <section id="quality">
      <div className="image">
        {/* <Image src={quality} alt={"quality"} /> */}
      </div>
      <div className="container">
      <h1>Quality</h1>
      </div>
    </section>
  )
};

export default Quality;