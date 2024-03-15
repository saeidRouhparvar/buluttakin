import { cardRecieve, chart, emptyWallet, wallet } from "../../Svg";

const cleintEmail = [
    {
      id: 1,
      name: "Livia Stanton",
      time: "1:24 PM",
      due: "Meeting scheduled",
      avatar: "/src/assets/icons/avatar.png",
    },
    {
      id: 2,
      name: "Allison Lipshutz",
      time: "12:14 PM",
      due: "Update on marketing campaign",
      avatar: "/src/assets/icons/avatar_1.png",
    },
    {
      id: 3,
      name: "Martin Stanton",
      time: "Dec 19 at 8:01 PM",
      due: "Designly 2.0 is about to launch",
      avatar: "/src/assets/icons/avatar_2.png",
    },
    {
      id: 4,
      name: "Alfredo Botosh",
      time: "Dec 19 at 6:11 PM",
      due: "My friend Julie loves Dapper!",
      avatar: "/src/assets/icons/avatar_3.png",
    },
    {
      id: 5,
      name: "Ann Philips",
      time: "Dec 19 at 6:11 PM",
      due: "My friend Julie loves Dapper!",
      avatar: "/src/assets/icons/avatar_4.png",
    },
    {
      id: 6,
      name: "Livia Stanton",
      time: "1:24 PM",
      due: "Meeting scheduled",
      avatar: "/src/assets/icons/avatar_1.png",
    },
    {
      id: 7,
      name: "Allison Lipshutz",
      time: "12:14 PM",
      due: "Update on marketing campaign",
      avatar: "/src/assets/icons/avatar_2.png",
    },
    {
      id: 8,
      name: "Martin Stanton",
      time: "Dec 19 at 8:01 PM",
      due: "Designly 2.0 is about to launch",
      avatar: "/src/assets/icons/avatar_3.png",
    },
    {
      id: 9,
      name: "Alfredo Botosh",
      time: "Dec 19 at 6:11 PM",
      due: "My friend Julie loves Dapper!",
      avatar: "/src/assets/icons/avatar_4.png",
    },
    {
      id: 10,
      name: "Ann Philips",
      time: "Dec 19 at 6:11 PM",
      due: "My friend Julie loves Dapper!",
      avatar: "/src/assets/icons/avatar.png",
    },
    {
      id: 10,
      name: "Ann Philips",
      time: "Dec 19 at 6:11 PM",
      due: "My friend Julie loves Dapper!",
      avatar: "/src/assets/icons/avatar.png",
    },
  ];

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
  export {cleintEmail,price_box_data,clientBox}