import { ReactNode } from "react";
import style from "./panelBox.module.css";

interface Props {
  children?: ReactNode;
  type?: 'border1' | 'border2'
}

const PanelBox = ({ children,type }: Props) => {
  return <div className={type === 'border1' ? style.panel_border1 : type === 'border2' ? style.panel_border2 : style.panel}>{children}</div>;
};

export default PanelBox;
