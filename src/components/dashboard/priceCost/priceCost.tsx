import style from "../priceCost/priceCost.module.css";
import { ReactNode } from "react";
import PanelBox from "../../panelBox/panelBox";

interface Props {
  icon?: ReactNode;
  price?: number;
  title?: string;
}

const PriceCost = ({ icon, price, title }: Props) => {
  return (
    <div className={style.price_cost}>
      <PanelBox  type="border2">
        <div className={style.main_content}>
          <div className={style.icon}>{icon}</div>
          <div className={style.prices}>
            <div className={style.sign}>$</div>
            <div className={style.price}>{price}</div>
          </div>
          <div className={style.title}>{title}</div>
        </div>
      </PanelBox>
    </div>
  );
};

export default PriceCost;
