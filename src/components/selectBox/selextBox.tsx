import { arrowSelect } from "../Svg";
import Button from "../button/button";
import Chips from "../chips/chips";
import Input from "../input/input";
import PanelBox from "../panelBox/panelBox";
import style from "./selectBox.module.css";
import { ChangeEvent, useState } from "react";
import SelectItem from "./selectItem/selectItem";

interface SelectProps {
  placeholder?: string;
  onApply?: (data: unknown) => void;
  height?: string;
  width?: string;
  src?: string;
  slectSrc?:string
  isAvatar?:boolean
  itemSrc?:string
  isSrc?: boolean;
  listItem?: Array<{
    id?: number;
    name?: string;
    value?: number;
    src?: string;
  }>;
}

// const listItem = [
//   { id: 1, name: "Saeid", value: 1 },
//   { id: 2, name: "Pouriya", value: 2 },
//   { id: 3, name: "Bita", value: 3 },
//   { id: 4, name: "Zahra", value: 4 },
//   { id: 5, name: "Ali", value: 5 },
//   { id: 6, name: "Lian", value: 6 },
//   { id: 7, name: "Sajad", value: 7 },
//   { id: 8, name: "Khashayar", value: 8 },
// ];

const SelectBox = ({
  placeholder,
  listItem,
  isSrc,
  src,
  slectSrc,
  isAvatar,
  width,
  onApply,
  height,
}: SelectProps) => {
  const [active, setActive] = useState(false);
  const [chacked, setChecked] = useState("");

  // const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setChecked(e.target.value);
  // };

  return (
    <div className={style.container}>
      <div className={style.select}>
        <div
          className={style.select_box}
          style={{ height: height, width: width }}
        >
          <div className={style.select_title}>Employes involved</div>
          <div
            className={style.arrow_select}
            onClick={() => {
              setActive(!active);
            }}
          >
            {arrowSelect}
          </div>

          <div className={style.placeholder}>
            {chacked && active ? "" : placeholder}
          </div>
          {chacked && (
            <Chips
              title={`${chacked}`}
              isSrc={isSrc}
              src={src}
              onClick={() => {}}
            />
          )}
        </div>
        {active && (
          <div className={style.select_} style={{ width: width }}>
            <PanelBox>
              <div className={style._box}>
                <div className={style.search_box}>
                  <Input isSearchIcon placeholder={"Search Values"} />
                </div>
                <form
                  action=""
                  className={style.form}
                  onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    Object.keys(e.target).map((item) => {
                      console.log(e.target[item]);
                    });
                  }}
                >
                  {listItem?.map((item) => (
                    <SelectItem
                      value={item.name}
                      name={item.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setChecked(e.target.value)
                      }
                      isAvatar={isAvatar}
                      listSrc={slectSrc}
                    />
                  ))}
                </form>
                <div className={style.apply_btn}>
                  <Button type="primary" children="Apply" size="2.5rem" />
                </div>
              </div>
            </PanelBox>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
