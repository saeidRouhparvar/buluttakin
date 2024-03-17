import { useEffect, useState } from "react";
import Avatar from "../../avatar/avatar";
import style from "./selectItem.module.css";

interface SelectProps {
  value?: string;
  onChange?: (data: any) => void;
  name?: string;
  listSrc?: string;
  isAvatar?: boolean;
  active?: boolean;
}

const SelectItem = ({
  value,
  listSrc,
  isAvatar,
  onChange,
  name,
  active,
}: SelectProps) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(active || false);
  }, [active]);

  return (
    <div
      className={style.main_content}
      onClick={() => {
        const e: any = {
          target: {
            name: name,
          },
        };
        if (onChange) {
          onChange(e);
          setChecked(!checked);
        }
      }}
    >
      <div className={!checked ? style.select_line : style.select_line_checked}>
        {isAvatar && <Avatar src={listSrc} w="1.5rem" h="1.5rem" />}
        <input
          checked={checked}
          onClick={() => setChecked(!checked)}
          className={style.input}
          type={"checkbox"}
          name={value}
        />
        {name}
      </div>
    </div>
  );
};

export default SelectItem;
