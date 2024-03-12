import { ReactNode } from "react";
import style from "./panelBox.module.css";

interface Props {
  children?: ReactNode;
}

const PanelBox = ({ children }: Props) => {
  return <div className={style.panel}>{children}</div>;
};

export default PanelBox;
