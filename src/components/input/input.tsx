import { ChangeEvent, useState } from "react";
import { closeBtn, searchIcon } from "../Svg";
import style from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  isIcon?: boolean;
  isSearchIcon?: boolean;
  value?:any
  removeHandler?:any
  onChangeHandler?:(data:any) =>void
}

const Input = ({ type,value,onChangeHandler,removeHandler, placeholder, isIcon, isSearchIcon }: InputProps) => {


  return (
    <div className={style.input_content}>
      <div className={isSearchIcon ? style.search : style.none}>
        {searchIcon}
      </div>
      <input
        className={isSearchIcon ? style.search_place : ""}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
      <div
        className={isIcon ? style.remove : style.none}
        onClick={() => removeHandler()}
      >
        {closeBtn}
      </div>
    </div>
  );
};

export default Input;
