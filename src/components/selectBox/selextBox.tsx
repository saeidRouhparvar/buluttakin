import { arrowSelect } from "../Svg";
import style from "./selectBox.module.css";
import {ChangeEvent, ReactNode, useState} from "react";

const SelectBox = ({placeholder}:{placeholder?:string,onApply:(data:unknown)=>void}) => {
  const [active,setActive] = useState(false)
  return (
    <div className={style.container}>
      <div className={style.select}>
        <div className={style.select_box}  onClick={()=>{
          setActive(!active)
        }}>
          <div className={style.select_title}>Employes involved</div>
          <div className={style.arrow_select}>{arrowSelect}</div>

          <div className={style.placeholder}>
            {placeholder}
          </div>

        </div>
        {active &&
        <div className={style.select_}>
          <div className={style._box}>
            <div className={style.search_box}>
              <input placeholder={"Search Values"}/>
            </div>
            <form action="" onSubmit={(e:any)=>{
              e.preventDefault()
              Object.keys(e.target).map((item)=>{


                console.log(e.target[item])
              })
            }}>
              <div className="">
                1
                <input type={"checkbox"} name={"name[]"} value={"1"}/>
              </div>

              <div className="">
                2
                <input type={"checkbox"} name={"name[]"} value={"2"}/>
              </div>
              <input type="submit" value={"apply"}/>
            </form>
          </div>
        </div>}

      </div>
    </div>
  );
};

export default SelectBox;
