import { wallet, chart, emptyWallet, cardRecieve } from "../Svg";
import ClientList from "../clientList/clientList";
import PanelBox from "../panelBox/panelBox";
import RightSidePanel from "../rightSidePanel/rightSidePanel";
import SelectBox from "../selectBox/selextBox";
import CleintBox from "./cleintBox/clientBox";
import style from "./dashboard.module.css";
import PriceCost from "./priceCost/priceCost";

const price_box_data = [
  { title: "Your bank balance", icon: wallet, price: 143.223 },
  { title: "Your Tax", icon: chart, price: 43.11 },
  { title: "Employees working today", icon: emptyWallet, price: 24 },
  { title: "This week`scard spending", icon: cardRecieve, price: 3.287 },
];

const clientBox = [
  { ide: 1, title: "New Clients", badge: 18.7, data: 54, type: "positive" },
  { ide: 2, title: "invoice overdue", badge: 2.7, data: 6, type: "negative" },
];

const cleintEmail = [
  { id: 1, name: "Livia Stanton", time: "1:24 PM", due: "Meeting scheduled" },
  {
    id: 2,
    name: "Allison Lipshutz",
    time: "12:14 PM",
    due: "Update on marketing campaign",
  },
  {
    id: 3,
    name: "Martin Stanton",
    time: "Dec 19 at 8:01 PM",
    due: "Designly 2.0 is about to launch",
  },
  {
    id: 4,
    name: "Alfredo Botosh",
    time: "Dec 19 at 6:11 PM",
    due: "My friend Julie loves Dapper!",
  },
  {
    id: 5,
    name: "Ann Philips",
    time: "Dec 19 at 6:11 PM",
    due: "My friend Julie loves Dapper!",
  },
  { id: 6, name: "Livia Stanton", time: "1:24 PM", due: "Meeting scheduled" },
  {
    id: 7,
    name: "Allison Lipshutz",
    time: "12:14 PM",
    due: "Update on marketing campaign",
  },
  {
    id: 8,
    name: "Martin Stanton",
    time: "Dec 19 at 8:01 PM",
    due: "Designly 2.0 is about to launch",
  },
  {
    id: 9,
    name: "Alfredo Botosh",
    time: "Dec 19 at 6:11 PM",
    due: "My friend Julie loves Dapper!",
  },
  {
    id: 10,
    name: "Ann Philips",
    time: "Dec 19 at 6:11 PM",
    due: "My friend Julie loves Dapper!",
  },
];

const Dashboard = () => {
  return (
    <div className={style.dashboard_content}>
      <SelectBox />

      <div className={style.select}>
        <div className={style.box}>
          <div></div>
        </div>
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
              <PanelBox>dd</PanelBox>
            </div>
          </div>
          <div className={style.dsssss}>
            <div className="">Email</div>
            <div className={style.email_list}>
              {cleintEmail.map((item) => (
                <ClientList name={item.name} due={item.due} time={item.name} />
              ))}
            </div>
          </div>
        </div>

        <div className={style.right_bar}>
          <RightSidePanel/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
