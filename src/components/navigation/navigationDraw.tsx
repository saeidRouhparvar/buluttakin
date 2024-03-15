import { ReactNode } from "react";
import style from "./navigationDraw.module.css";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  reset?: unknown;
  title?: string;
  icon?: ReactNode;
  path: string;
  iconStyle?:string
}

const NavigationDraw = ({ icon, path, title,iconStyle, ...reset }: Props) => {
  const navigate = useNavigate();
  const navigateHandling = () => {
    navigate("/" + path);
  };

  const { pathname } = useLocation();

  return (
    <div className={style.navigatin} {...reset} onClick={navigateHandling}>
      <div
        className={pathname.indexOf(path) != -1 ? style.line : style.line_cover}
      ></div>
      <div className={style.content}>
        <div style={{marginLeft:iconStyle}}>{icon}</div>
        <div className={style.title}>
          <span>{title}</span>

          <div
            className={
              pathname.indexOf(path) != -1
                ? style.under_line
                : style.under_line_cover
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDraw;
