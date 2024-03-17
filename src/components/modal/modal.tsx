import { ReactNode } from "react";
import { closeBtn } from "../Svg";
import style from "./modal.module.css";
import Button from "../button/button";

interface Props {
  isOpen: boolean;
  onClose: boolean;
  closeClick:() =>void
  children?:ReactNode
  acceptClick?:any
  cancelClick?:() => void
  ref?:any
}

const Modal = ({ isOpen,ref, onClose ,closeClick,acceptClick,cancelClick,children}: Props) => {

  return (
    <div className={onClose ? style.main_open : style.main_} ref={ref}>
      <div
        className={isOpen ? style.main_modal_open : style.main_modal}
        id="modal"
      >
      <div className={style.close} onClick={closeClick}>{closeBtn}</div>
        {children}
        <div className={style.modal_btn}>
          <Button size="2.5rem" type="secoundry" children="Accept" onClick={acceptClick}/>
          <Button size="2.5rem" type="primary" children="Cancel" onClick={cancelClick}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
