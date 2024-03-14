import { closeBtn } from "../Svg";
import Avatar from "../avatar/avatar";
import style from "./chips.module.css";

interface ChipsProps {
  src?: string;
  title?: string;
  onClick?: () => void;
  isSrc?:boolean
}

const Chips = ({ src, title,isSrc, onClick }: ChipsProps) => {
  return (
    <div className={style.chips_content}>
      {isSrc &&
      <div className={style.avatar}>
        <Avatar src={src} w="1.5rem" h="1.5rem"/>
      </div>
      }
      <div className={style.title}>{title}</div>
      <div className={style.close} onClick={onClick}>
        {closeBtn}
      </div>
    </div>
  );
};

export default Chips;
