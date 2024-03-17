import { arrowSelect } from "../Svg";
import Button from "../button/button";
import Chips from "../chips/chips";
import Input from "../input/input";
import style from "./selectBox.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import SelectItem from "./selectItem/selectItem";
import useOutsideClick from "../../hooks/useOutsideClick.tsx";

interface SelectProps {
  placeholder?: string;
  onApply?: (data: unknown) => void;
  height?: string;
  width?: string;
  isAvatar?: boolean;
  type?: "todo" | "employs";
  chipsSrc?:string
  listItem?: Array<{
    id?: number;
    name?: string;
    value?: string;
    itemSrc?: string;
  }>;
}

interface ListInterface {
  active?: boolean;
  id?: number;
  name?: string;
  value?: string;
  itemSrc?: string;
}

const SelectBox = ({
  placeholder,
  listItem,
  width,
  height,
  type,isAvatar
}: SelectProps) => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [list, setList] = useState<Array<ListInterface>>([]);
  useEffect(() => {
    let temp: any = listItem?.map((item: any) => {
      item.active = false;
      return item;
    });

    setList(temp);
  }, [listItem]);

  const activeHandler = () => {
    setActive(!active);
  };

  const filtered = list?.filter((item) =>
    item?.name?.toLowerCase().includes(name.toLowerCase())
  );

  const ref: any = useRef();

  useOutsideClick(ref, () => {
    setActive(false);
  });

  const count = useMemo(() => {
    
        return [...list].filter((item) => (
             item.active
        )).length

  },[list])

  return (
    <div className={style.container} ref={ref}>
      <div className={style.select}>
        <div
          className={!active ? style.select_box : style.select_box_active}
          style={{ height: height, width: width }}
        >
          {active && (
            <input
              type="text"
              className={!active ? style.input : style.input_hid}
            />
          )}
          {active && <div className={style.select_title}>{placeholder}</div>}
          <div
            className={!active ? style.arrow_select : style.arrow_select_up}
            onClick={activeHandler}
          >
            {arrowSelect}
          </div>

          <div className={style.placeholder}>{(!active  ) ?placeholder: ""}</div>
          <div className={style.chips + "  scrollHidden"}>
            <div className={style.chips_ + "  scrollHidden"}>
              {list
                ?.filter((item) => item.active)
                .reverse()
                .map((i) => (
                  <Chips
                    title={`${i?.name}`}
                    isSrc={isAvatar}
                    src={i?.itemSrc}
                    onClick={() => {
                      setList(
                        list.map((it) => {
                          if (it.name == i.name) {
                            it.active = false;
                          }
                          return it;
                        })
                      );
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
        {active && (
          <div className={style.select_} style={{ width: width }}>
            <div className={style.under_menu}>
              <div className={style._box}>
                <div className={style.search_box}>
                  <Input
                    onChangeHandler={(e:any) => setName(e.target.value)}
                    placeholder={"Search Values"}
                    isSearchIcon
                  />
                </div>
                <form
                  action=""
                  className={style.form}
                >
                  {filtered?.map((item) => (
                    <SelectItem
                      active={item.active}
                      value={item.name}
                      name={item.name}
                      onChange={(e) => {
                        const name = e?.target?.name;
                        const tempList = [...list].map((it) => {
                          if (it.name == name) {
                            it.active = !it.active;
                          }
                          return it;
                        });
                        setList(tempList);
                      }}
                      isAvatar={isAvatar}
                      listSrc={item?.itemSrc}
                    />
                  ))}
                  <div className={style.footer}>
                    <div className={style.len}>Selected: {count}</div>
                    <div
                      className={style.clear}
                      onClick={() => {
                        setList(
                          [...list].map((it) => {
                            it.active = false;
                            return it;
                          })
                        );
                      }}
                    >
                      Clear selected
                    </div>
                  </div>
                </form>
                {type === "employs" && (
                  <div className={style.apply_btn}>
                    <Button type="primary" children="Apply" size="2.5rem" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
