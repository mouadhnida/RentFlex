import { Button } from "@/types";

const Button = ({ text, style, onClick, type }: Button) => {
  return (
    <button
      className={`${style} rounded  px-4 py-2 `}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </button>
  );
};

export default Button;
