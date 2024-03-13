import { ReactNode } from "react";
import { closeBtn } from "../Svg";
import style from "./modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: boolean;
  closeClick:() =>void
  children?:ReactNode
}

const Modal = ({ isOpen, onClose ,closeClick,children}: Props) => {

  return (
    <div className={onClose ? style.main_open : style.main_}>
      <div
        className={isOpen ? style.main_modal_open : style.main_modal}
        id="modal"
      >
      <div className={style.close} onClick={closeClick}>{closeBtn}</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
