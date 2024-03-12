import { calendarIcon, messageIcon, notificationIcon } from "../Svg";
import Avatar from "../avatar/avatar";
import PanelBox from "../panelBox/panelBox";
import style from "./rightSidePanel.module.css";

const RightSidePanel = () => {
  return (
    <PanelBox>
        <div className={style.main_side}>

      <div className={style.side_header}>
        <div className={style.dd}><Avatar/></div>
        <div className={style.dd}>{calendarIcon}</div>
        <div className={style.dd}>{notificationIcon}</div>
        <div className={style.dd}>{messageIcon}</div>
      </div>
        </div>
    </PanelBox>
  );
};

export default RightSidePanel;
