import { useState } from "react";
import {
  calendarIcon,
  messageIcon,
  messageSign,
  notificationIcon,
  sideArrowDown,
} from "../Svg";
import Avatar from "../avatar/avatar";
import Modal from "../modal/modal";
import PanelBox from "../panelBox/panelBox";
import Formation from "./formation/formation";
import style from "./rightSidePanel.module.css";
import TodoList from "./totoList/todoList";
import Input from "../input/input";

// interface Props {
//   onClick?:
// }

const RightSidePanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <PanelBox>
      <div className={style.main_side}>
        <div className={style.side_header}>
          <div>{calendarIcon}</div>
          <div className={style.notif}>
            <div>{notificationIcon}</div>
            <div className={style.notif_sign}>1</div>
          </div>

          <div className={style.message}>
            <div className={style.message_icon}>{messageIcon}</div>
            <div className={style.message_sign}>{messageSign}</div>
          </div>

          <div className={style.dd}>
            <Avatar src="./src/assets/icons/avatar_1.png" />
          </div>
          <div>{sideArrowDown}</div>
        </div>

        <div className={style.formation}>
          <Formation />
        </div>

        <div className={style.todo}>
          <TodoList onClick={() => setOpen(true)} />
        </div>
      </div>
      <Modal
        onClose={open}
        isOpen={open}
        closeClick={() => setOpen(false)}
        children={
          <div className={style.modal_content}>
            <div className={style.add_}>Add to do</div>
            <Input isIcon/>
          </div>
        }
      />
    </PanelBox>
  );
};

export default RightSidePanel;
