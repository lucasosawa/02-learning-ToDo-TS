import { Header } from './components/Header';
import styles from './App.module.css';

import { useState } from "react";

import './global.css';
import { TaskSubmit, TaskType } from './components/TaskSubmit';
import { TaskList } from './components/TaskList';



function App() {

  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <TaskSubmit tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks}  setTasks={setTasks}/>
      </div>
    </div>
  )
}

export default App
