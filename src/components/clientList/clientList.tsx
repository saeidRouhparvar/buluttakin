import { ReactNode } from "react";
import PanelBox from "../panelBox/panelBox";
import style from "./clientList.module.css";
import Avatar from "../avatar/avatar";

interface Props {
    avatar?:ReactNode
    name?:string
    due?:string
    time?:string
}

const ClientList = ({avatar,name,due,time}:Props) => {
  return (
    <PanelBox>
      <div className={style.main_content}>
        <div className={style.avatar}><Avatar src={`${avatar}`}/></div>
        <div className={style.title}>{name}</div>
        <div className={style.title}>{due}</div>
        <div className={style.title}>{time}</div>
      </div>
    </PanelBox>
  );
};

export default ClientList;
