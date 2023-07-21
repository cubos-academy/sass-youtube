import { TaskType } from "../../types/TaskType";
import styles from "./styles.module.scss";

interface IProps {
  task: TaskType;
}

function Task({ task }: IProps) {
  return <li className={styles.item}>{task.title}</li>;
}

export default Task;
