import PanelBox from "../../panelBox/panelBox";
import style from "./clientBox.module.css";

interface Props {
  title?: string;
  badge?: number;
  data?: number;
  type: string;
}

const CleintBox = ({ title, badge, data, type }: Props) => {
  return (
    <PanelBox>
      <div className={style.main_content}>
        <div className={style.title}>{title}</div>
        <div className={style.badge_}>
          <div></div>
          <div
            className={
              type === "positive"
                ? style.badge_green
                : type === "negative"
                ? style.badge_red
                : ""
            }
          >
            {badge + "%"}
          </div>
        </div>
        <div className={style.data}>{data}</div>
      </div>
    </PanelBox>
  );
};

export default CleintBox;
