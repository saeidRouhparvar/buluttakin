import { ReactNode } from "react";
import style from "./todo.module.css";

interface Props {
    icon?:ReactNode
    title?:string
    date?:string
}

const Todo = ({icon,title,date}:Props) => {
  return (
    <div className={style.main_content}>
      <div className={style.icon}>{icon}</div>
      <div className={style.title}>
        <div className={style.main_title}>{title}</div>
        <div className={style.date}>{date}</div>
      </div>
    </div>
  );
};

export default Todo;
