import { circlBlack, circlPurple } from "../Svg";
import LineChart from "../chart/lineChart";
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
            { id: 1, name: "Saeid", value: "Saeid" },
            { id: 2, name: "Pouriya", value: "Pouriya" },
            { id: 3, name: "Bita", value: "Bita" },
            { id: 4, name: "Zahra", value: "Zahra" },
            { id: 5, name: "Ali", value: "Ali" },
            { id: 6, name: "Lian", value: "Lian" },
            { id: 7, name: "Sajad", value: "Sajad" },
            { id: 8, name: "Khashayar", value: "Sajad" },
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
                key={item.id}
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
                  key={item.id}
                  title={item.title}
                  badge={item.badge}
                  data={item.data}
                  type={item.type}
                />
              ))}
            </div>
            <div className={style.r_chart}>
              <div className={style.chart_title}>Revenue</div>
              <LineChart />
              <div className={style.chart_label}>
                <div className={style.label}>
                  <div className={style.circl}>{circlPurple}</div>
                  deposit
                </div>
                <div className={style.label}>
                  <div className={style.circl}> {circlBlack}</div>
                  Withdrawal
                </div>
              </div>
            </div>
          </div>
          <div className={style.email_list}>
            <div className={style.email_list_title}>Email</div>
            <div className={style.email_list}>
              {cleintEmail.map((item) => (
                <ClientList
                  key={item.id}
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
