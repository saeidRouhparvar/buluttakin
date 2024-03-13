import { addIcon, calendarIcon, clockIcon, receiptIcon } from "../../Svg";
import Todo from "./todo/todo";
import style from "./todoList.module.css";

const TodoData = [
  { id: 1, icon: receiptIcon, title: "Run payroll", date: "Mar 4 at 6:00 pm" },
  {
    id: 2,
    icon: clockIcon,
    title: "Review time off request",
    date: "Mar 7 at 8:00 pm",
  },
  {
    id: 3,
    icon: calendarIcon,
    title: "Sign board resoluation",
    date: "Mar 12 at 8:30 pm",
  },
];

interface Props {
    onClick?:() => void
}

const TodoList = ({onClick}:Props) => {
  return (
    <div className={style.main_content}>
      <h2 className={style.header}>Your to-Do list</h2>
      <div className={style.todo_data}>
        {TodoData.map((item) => (
          <Todo title={item.title} icon={item.icon} date={item.date} />
        ))}
      </div>

      <div className={style.add_todo}>
        <div className={style.add_icon}>{addIcon}</div>
        <div className={style.add_title} onClick={onClick}>Add to Do</div>
      </div>
    </div>
  );
};

export default TodoList;
