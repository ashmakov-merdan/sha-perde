"use client"
import { ButtonProps } from "@/types";
import { useRouter } from "next/navigation";

const Button = ({children, link}: ButtonProps) => {
  const router = useRouter();

  return <button id="button" onClick={() => router.push(link)}>{children}</button>
};

export default Button;