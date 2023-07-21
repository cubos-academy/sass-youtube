import { useState } from "react";
import Task from "../../components/Task";
import { TaskType } from "../../types/TaskType";
import "./styles.scss";

function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [input, setInput] = useState("");

  function handleAddTask() {
    if (!input) return;

    const newTask: TaskType = {
      id: Math.floor(Math.random() * 10000),
      title: input,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Nome da tarefa"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="btn-primary" onClick={handleAddTask}>
        ADICIONAR
      </button>

      <ul className="list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>

      <div className="columns">
        <div className="column-1">COLUNA 1</div>
        <div className="column-2">COLUNA 2</div>
        <div className="column-3">COLUNA 3</div>
      </div>
    </div>
  );
}

export default Home;
