import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HeaderComponent from "./components/Header";
import TaskComponent from "./components/Tasks";
import AddTaskComponent from "./components/AddTask";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [showHideTask, setShowHideTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const serverTasks = await fetchTask();
      setTasks(serverTasks);
    };
    getTask();
  }, []);

  //get tasks.
  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  //delete task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await fetchTask();
    setTasks(data);
  };
  //add task
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    const data = await fetchTask();
    setTasks(data);
  };

  //edit task
  const sendReminder = async (task) => {
    if (!task.reminder) {
      let newTask = task;
      newTask.reminder = true;
      const res = await fetch(`http://localhost:5000/tasks/${newTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      const data = await fetchTask();
      setTasks(data);
    }
  };
  return (
    <Router>
      <div className="container">
        <HeaderComponent
          showAddTask={showHideTask}
          onAddHeader={() => {
            setShowHideTask(!showHideTask);
          }}
          title="Task Tracker"
        />
        <Switch>
        <Route exact path="/">
        {showHideTask && <AddTaskComponent onAdd={addTask} />}
        {tasks.length > 0 ? (
          <TaskComponent
            sendReminder={sendReminder}
            tasks={tasks}
            onDelete={deleteTask}
          />
        ) : (
          <p>No Task To Show!!!</p>
        )}

        </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
