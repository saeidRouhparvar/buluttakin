import style from "./button.module.css";

interface ButtonProps {
  type: "primary" | "secoundry";
  children?: string;
  size?:string
  onClick?:() => void
}

const Button = ({ children, type ,size,onClick}: ButtonProps) => {
  return (
    <button
    type="submit"
    onClick={onClick}
    style={
        {height:size}
    }
      className={
        type === "primary"
          ? style.primaryButton
          : type === "secoundry"
          ? style.secoundryButton
          : ""
      }
    >
      {children}
    </button>
  );
};

export default Button;
