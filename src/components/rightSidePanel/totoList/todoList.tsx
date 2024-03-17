import { addIcon, calendarIcon, clockIcon, receiptIcon } from "../../Svg";
import { TodoData } from "../../dashboard/priceCost/dashboardData";
import Todo from "./todo/todo";
import style from "./todoList.module.css";



interface Props {
    onClick?:() => void
}

const TodoList = ({onClick}:Props) => {
  return (
    <div className={style.main_content}>
      <div className={style.todo_data}>
        {TodoData.map((item) => (
          <Todo title={item.title} icon={item.icon} date={item.date} />
        ))}
      </div>

      <div className={style.add_todo}  onClick={onClick}>
        <div className={style.add_icon}>{addIcon}</div>
        <div className={style.add_title}>Add to Do</div>
      </div>
    </div>
  );
};

export default TodoList;
