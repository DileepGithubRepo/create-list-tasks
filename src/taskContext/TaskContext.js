import React, {useState, createContext} from "react";
import TasksListing from "../components/TasksListing";

export const TaskContext = createContext();

export const TaskProviders = (props) => {
    const [task, setTask] = useState([]);
    return (
        <TaskContext.Provider value={[task, setTask]}>
            {props.children}
        </TaskContext.Provider>
    )
}