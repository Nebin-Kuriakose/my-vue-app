import { useState, useEffect } from "react";
import Card from "./Card";
import Input from "./input";
const Tasks = () => {

    const initial_task = [];

    const getTasks = async () => {
        const response = await fetch("https://to-do-backend-jy9d.onrender.com")
        const taskList = await response.json();
        console.log(taskList);
        setTasks(taskList);
    }



    useEffect(() => {
        getTasks()
    }, []);

    const [tasks, setTasks] = useState(initial_task);

    const addTaskHandler = async (newTask) => {
        let newTaskObj = {
            task_id: Math.random(),
            task_name: newTask,
        };

        const response = await fetch("https://to-do-backend-jy9d.onrender.com/create",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTaskObj)
            })

            if(response.status==201){
                getTasks();
                alert("New task Added Successfully");
            }
            else{
                alert("Could not add task");
            }

    }

    const deleteTaskHandler = async (taskId) => {
        const response= await fetch("https://to-do-backend-jy9d.onrender.com/"+taskId,{method:"DELETE",})
          if(response.status==200){
                getTasks();
                alert("Task Deleted Successfully");
            }
            else{
                alert("Could Not Delete Task");
            }
    }
    return (
        <div id='tasks'>
            <Input onAddTask={addTaskHandler} />
            {
                tasks.map((tk) => (
                    <Card task={tk} onDeleteTask={deleteTaskHandler} />
                ))
            }

        </div>
    )
}

export default Tasks;