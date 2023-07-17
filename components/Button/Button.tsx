import { ComponentProps } from "@/types";

const Button = ({children}: ComponentProps) => {
  return <button id="button">{children}</button>
};

export default Button;