import { Playfair_Display } from "next/font/google";
import { ComponentProps } from "@/types";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const Heading = ({children}: ComponentProps) => {
  return <h1 className="heading" style={{fontFamily: playfair.style.fontFamily}}>{children}</h1>
};

export default Heading;