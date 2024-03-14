import { ChangeEvent, useState } from "react";
import { closeBtn, searchIcon } from "../Svg";
import style from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  isIcon?: boolean;
  isSearchIcon?: boolean;
}

const Input = ({ type, placeholder, isIcon, isSearchIcon }: InputProps) => {
  const [remove, setRemove] = useState<string>();

  const removeHandler = () => {
    setRemove("");
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRemove(e.target.value);
  };

  return (
    <div className={style.input_content}>
      <div className={isSearchIcon ? style.search : style.none}>
        {searchIcon}
      </div>
      <input
        className={isSearchIcon ? style.search_place : ""}
        type={type}
        value={remove}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
      <div
        className={isIcon ? style.remove : style.none}
        onClick={removeHandler}
      >
        {closeBtn}
      </div>
    </div>
  );
};

export default Input;
