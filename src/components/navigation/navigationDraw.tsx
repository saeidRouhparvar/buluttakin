import { ReactNode } from "react";
import style from "./navigationDraw.module.css";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  reset?: unknown;
  title?: string;
  icon?: ReactNode;
  path: string;
}

const NavigationDraw = ({ icon, path, title, ...reset }: Props) => {
  const navigate = useNavigate();
  const navigateHandling = () => {
    navigate("/" + path);
  };

  const { pathname } = useLocation();

  return (
    <div className={style.navigatin} {...reset} onClick={navigateHandling}>
      <div
        className={pathname.indexOf(path) != -1 ? style.line : style.line_cover}></div>
      <div className={style.content}>
        <div className="">{icon}</div>
        <div className={style.title}>
          <div>{title}</div>
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
