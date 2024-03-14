import Avatar from "../../avatar/avatar";
import style from "./selectItem.module.css";

interface SelectProps {
  value?: string;
  onChange?:() => void;
  name?: string;
  listSrc?: string;
  isAvatar?: boolean;
}

const SelectItem = ({ value, listSrc, isAvatar, onChange, name }: SelectProps) => {
  return (
    <div className={style.main_content}>
      <div className={style.select_line}>
        {isAvatar && <Avatar src={listSrc} w="1.5rem" h="1.5rem"/>}
        <input className={style.input} type={"checkbox"} value={value} onChange={onChange} />
        {name}
      </div>
    </div>
  );
};

export default SelectItem;
