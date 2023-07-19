import { ToggleProps } from "@/types";

const Burger = ({open, toggle}: ToggleProps) => {
  return (
    <button type="button" className={open ? "burger active" : "burger"} onClick={() => toggle()}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
};

export default Burger;