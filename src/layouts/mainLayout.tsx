import { Suspense, useMemo, useState } from "react";
import style from "./mainLayout.module.css";
import NavigationDraw from "../components/navigation/navigationDraw";
import { router } from "../routes";
import { Outlet } from "react-router-dom";
import { leftArrow, logo, rightArrow, setting } from "../components/Svg";
import RightSidePanel from "../components/rightSidePanel/rightSidePanel";

const MainLayout = () => {
  const [toggle, setToggle] = useState(true);

  const sidbarToggleHandler = () => {
    setToggle(!toggle);
  };
  console.log(toggle);

  const nav = useMemo(() => {
    return router
      .filter((item) => item.path == "/*")
      .map((i) =>
        i.children?.map((item) => (
          <div
            style={{
              display: item?.showInNav ? "flex" : "none",
            }}
          >
            <NavigationDraw
              key={i.path}
              title={item?.name}
              icon={item?.icon}
              path={item?.path}
              iconStyle={"1rem"}
            />
          </div>
        ))
      );
  }, []);

  return (
    <div className={style.mainLayout}>
      <div className={toggle ? style.sideBar : style.sidbar_arrow_open}>
        <div className={style.sidbar_arrow} onClick={sidbarToggleHandler}>
          {toggle ? leftArrow : rightArrow}
        </div>
        <div className={style.nav}>
          <div className={style.logo_open}>{logo}</div>
          {nav}
        </div>

        <div className={style.setting}>
          <NavigationDraw
            path="setting"
            iconStyle={"1rem"}
            icon={setting}
            title="Setting"
          />
        </div>
      </div>

      <div className={style.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>

      <div className={style.right_bar}>
        <RightSidePanel />
      </div>
    </div>
  );
};

export default MainLayout;
