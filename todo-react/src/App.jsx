import { useState } from "react";

export default function App()
{
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    function addTask()
    {
        if(!input.trim()) return;
        setTasks([...tasks, {id: Date.now(), text: input}]);
        setInput("");
    }
    function deleteTask(id)
    {
        setTasks(tasks.filter((t) => t.id !== id));
    }
    return (
        <div className="container">
            <h1>React ToDo</h1>
            <div className="input-section">
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {task.map((t) => (
                    <li key={t.id}>
                        {t.text} <button onClick={() => deleteTask(t.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}