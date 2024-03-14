import Button from "../../button/button";
import PanelBox from "../../panelBox/panelBox";
import style from "./formation.module.css";

const Formation = () => {
  return (
    <div className={style.container}>
    <PanelBox>
      <div className={style.main_content}>
        <div className={style.formation_header}>Formation status</div>
        <div className={style.formation_title}>In progress</div>
        <div className={style.progress}>
          <div className={style.bar}></div>
        </div>
        <div className={style.formation_title}>Estimated processing</div>
        <div className={style.formation_title}>4-5 business days</div>
        <div className={style.btn}></div>
        <Button type="primary" size="2.625rem" children="View status"/>
      </div>
    </PanelBox></div>
  );
};

export default Formation;
