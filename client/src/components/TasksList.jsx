import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";

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
        <div key={tasks.id}>
          <h1>{tasks.title}</h1>
          <p>{tasks.description}</p>
        </div>
      ))}
    </div>
  );
}
