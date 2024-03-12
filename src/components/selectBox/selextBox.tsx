import { arrowSelect } from "../Svg";
import style from "./selectBox.module.css";

const SelectBox = () => {
  return (
    <div className={style.container}>
      <div className={style.select}>
        <div className={style.select_box}>
          <div className={style.select_title}>Employes involved</div>
          <div className={style.arrow_select}>{arrowSelect}</div>
          {/* <div className={style.select_}>
            <div className={style._box}>
            <div className={style.search_box}><input/></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
