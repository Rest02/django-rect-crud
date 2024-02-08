import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from './TaskCard'

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }

    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((tasks) => (
        <TaskCard tasks = {tasks} key = {tasks.id}/>
      ))}
    </div>
  );
}