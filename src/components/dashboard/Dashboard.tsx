import ClientList from "../clientList/clientList";
import SelectBox from "../selectBox/selextBox";
import CleintBox from "./cleintBox/clientBox";
import style from "./dashboard.module.css";
import {
  cleintEmail,
  clientBox,
  price_box_data,
} from "./priceCost/dashboardData";
import PriceCost from "./priceCost/priceCost";

const Dashboard = () => {
  return (
    <div className={style.dashboard_content}>
      <div className={style.select}>
        <SelectBox
          listItem={[
            { id: 1, name: "Saeid", value: 1 },
            { id: 2, name: "Pouriya", value: 2 },
            { id: 3, name: "Bita", value: 3 },
            { id: 4, name: "Zahra", value: 4 },
            { id: 5, name: "Ali", value: 5 },
            { id: 6, name: "Lian", value: 6 },
            { id: 7, name: "Sajad", value: 7 },
            { id: 8, name: "Khashayar", value: 8 },
          ]}
          placeholder={"Select"}
          height="2.5rem"
          width="20rem"
        />
      </div>

      <div className={style.main_content}>
        <div className={style.left_bar}>
          <div className={style.left_}>
            {price_box_data.map((item) => (
              <PriceCost
                title={item.title}
                icon={item.icon}
                price={item.price}
              />
            ))}
          </div>
          <div className={style.chart_section}>
            <div className={style.l_chart}>
              {clientBox.map((item) => (
                <CleintBox
                  title={item.title}
                  badge={item.badge}
                  data={item.data}
                  type={item.type}
                />
              ))}
            </div>
            <div className={style.r_chart}>
                <img className={style.r_chart} src="../../../src/assets/icons/SIMPLE LINE.png" alt="" />
            </div>
          </div>
          <div className={style.email_list}>
            <div className={style.email_list_title}>Email</div>
            <div className={style.email_list}>
              {cleintEmail.map((item) => (
                <ClientList
                  avatar={item.avatar}
                  name={item.name}
                  due={item.due}
                  time={item.time}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
