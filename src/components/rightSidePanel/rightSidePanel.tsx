import { useEffect, useMemo, useRef, useState } from "react";
import {
  calendarIcon,
  messageIcon,
  messageSign,
  notificationIcon,
  sideArrowDown,
} from "../Svg";
import Avatar from "../avatar/avatar";
import Modal from "../modal/modal";
import PanelBox from "../panelBox/panelBox";
import Formation from "./formation/formation";
import style from "./rightSidePanel.module.css";
import TodoList from "./totoList/todoList";
import Input from "../input/input";
import SelectBox from "../selectBox/selextBox";
import Todo from "./totoList/todo/todo";
import useLocalStorage from "../../hooks/useLocalStorage";
import useOutsideClick from "../../hooks/useOutsideClick";

const RightSidePanel = () => {
  const [open, setOpen] = useState(false);

  const { setUserData, getUserData } = useLocalStorage();
  const [tasks, setTasks]: Array<any> = useState(getUserData("tasks") || []);
  const [currentTask, setCurrentTask]: Array<any> = useState([]);


  useEffect(() => {
    setUserData(tasks, "tasks");
  }, [tasks]);

  const handleCurrentTask = (e: any) => {
    setCurrentTask({
      task: e.target.value,
      date:
        new Date().toDateString() +
        " " +
        "at" +
        " " +
        new Date().toLocaleTimeString(),
      id: Math.floor(Math.random() * 99999),
    });
  };

  const addTask = (e: any) => {
    e.preventDefault();
    if (currentTask?.task?.length) {
      setTasks([...tasks, currentTask]);
    }
    setCurrentTask({ task: "", date: "", id: "" });
  };
  const ref: any = useRef();

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <PanelBox>
      <div className={style.main_side}>
        <div className={style.side_header}>
          <div>{calendarIcon}</div>
          <div className={style.notif}>
            <div>{notificationIcon}</div>
            <div className={style.notif_sign}>1</div>
          </div>

          <div className={style.message}>
            <div className={style.message_icon}>{messageIcon}</div>
            <div className={style.message_sign}>{messageSign}</div>
          </div>

          <div className={style.dd}>
            <Avatar src="./src/assets/icons/avatar_1.png" />
          </div>
          <div>{sideArrowDown}</div>
        </div>

        <div className={style.formation}>
          <Formation />
        </div>

        <div className={style.todo}>
          <h2 className={style.header}>Your to-Do list</h2>

          {tasks.map((task: any) => (
            <Todo title={task.task} date={task.date} icon={calendarIcon} />
          ))}
          <TodoList onClick={() => setOpen(true)} />
        </div>
        <div className={style.rightFooter}>
          <div className={style.title}>Board meeting</div>
          <div className={style.date}>Feb 22 at 6:00 PM</div>
          <div className={style.desc}>You have been invited to attend a <br />
meeting of the Boeard Diretors.</div>
        </div>
      </div>
      <Modal
      ref={ref}
        onClose={open}
        isOpen={open}
        closeClick={() => setOpen(false)}
        cancelClick={() => setOpen(false)}
        acceptClick={(e: any) => {
          addTask(e);
          setOpen(false);
        }}
        children={
          <div className={style.modal_content}>
            <div className={style.add_}>Add to do</div>

            <Input
              onChangeHandler={(e:any) => handleCurrentTask(e)}
              value={currentTask.task}
              isIcon
              placeholder="write a title"
              removeHandler={() =>  setCurrentTask({ task: "", date: "", id: "" })}
            />

            <div className={style.select}>
              <SelectBox
                type="todo"
                isAvatar
                placeholder="Add Person"
                listItem={[
                  {
                    id: 1,
                    name: "Matin abbasi",
                    itemSrc: "../../src/assets/icons/avatar_1.png",
                  },
                  {
                    id: 2,
                    name: "Matin ghaderi",
                    itemSrc: "../../src/assets/icons/avatar_3.png",
                  },
                  {
                    id: 3,
                    name: "Matin alipour",
                    itemSrc: "../../src/assets/icons/avatar_4.png",
                  },
                  {
                    id: 4,
                    name: "Reza jabari ",
                    itemSrc: "../../src/assets/icons/avatar_2.png",
                  },
                  {
                    id: 5,
                    name: "Matin hasani",
                    itemSrc: "../../src/assets/icons/avatar_4.png",
                  },
                  {
                    id: 6,
                    name: "Darya safaee ",
                    itemSrc: "../../src/assets/icons/avatar_3.png",
                  },
                  {
                    id: 7,
                    name: "Farhad mottagi ",
                    itemSrc: "../../src/assets/icons/avatar_1.png",
                  },
                  {
                    id: 8,
                    name: "Matin mohamadi",
                    itemSrc: "../../src/assets/icons/avatar.png",
                  },
                  {
                    id: 9,
                    name: "Shahin noori ",
                    itemSrc: "../../src/assets/icons/avatar_3.png",
                  },
                  {
                    id: 10,
                    name: "Matin kazemi",
                    itemSrc: "../../src/assets/icons/avatar_4.png",
                  },
                ]}
                height="56px"
                width={"100%"}
              />
            </div>
          </div>
        }
      />
    </PanelBox>
  );
};

export default RightSidePanel;
