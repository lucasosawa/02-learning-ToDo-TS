import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';

import styles from './TaskSubmit.module.css';

export interface TaskType {
    id: string;
    title: string;
    isComplete: boolean;
}

type TaskSubmitFormProps = {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export function TaskSubmit({ tasks, setTasks }: TaskSubmitFormProps) {
    const [newTask, setNewTask] = useState("");

    function handleTaskSubmit(event: FormEvent) {
        event.preventDefault();
    
        setTasks([{ id: uuidv4(), title: newTask, isComplete: false }, ...tasks]);
        setNewTask("");
    }

    function handleTaskInput(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }
    
    return (
        <form onSubmit={handleTaskSubmit} className={styles.taskSubmit}>
            <input type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    value={newTask}
                    onChange={handleTaskInput}
                    required
            />
            <button type="submit">Criar <PlusCircle/></button>
        </form>

    )
}