import { ChangeEvent, useState } from "react";
import { closeBtn } from "../Svg";
import style from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  isIcon?:boolean
}

const Input = ({ type, placeholder,isIcon }: InputProps) => {
  const [remove, setRemove] = useState<string>();

  const removeHandler = () => {
    setRemove('')
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRemove(e.target.value)
  }

  return (
    <div className={style.input_content}>
      <input type={type} value={remove} onChange={onChangeHandler} placeholder={placeholder} />
      <div className={isIcon ? style.remove : style.none} onClick={removeHandler}>
        {closeBtn}
      </div>
    </div>
  );
};

export default Input;
