import "./index.css";
import { useEffect, useState } from "react";

const MyCounter = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={inc}>+</button>
      <p>{count}</p>
      <button onClick={dec}>-</button>
    </>
  );
};
const MagicButton = () => {
  const [color, setColor] = useState("pink");
  const random = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")"
    );
  };
 
  const changeBg = () => {
    const newColor = random();
    setColor(newColor);
    document.body.style.background = newColor;
  };


  return (
    <>
      <button id="magicButton" onClick={changeBg}>
        Click here to see the magic {color}
      </button>
    </>
  );
};

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      localStorage["tasks"] = JSON.stringify(updatedTasks);
      setTask("");
    }
  };
  const changeValue = (e) => {
    setTask(e.target.value);
  };
  const deleteTask = (i) => {
    const updatedTasks = [...tasks.slice(0, i), ...tasks.slice(i + 1)];
    setTasks(updatedTasks);
    localStorage["tasks"] = JSON.stringify(updatedTasks);
  };

  useEffect(() => {
    localStorage["tasks"] && setTasks(JSON.parse(localStorage["tasks"]));
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  const deleteAllTask = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <>
      <input
        value={task}
        type="text"
        placeholder="Enter Task"
        onChange={changeValue}
        onKeyDown={handleKeyDown}
        className="username"
      />
      <button onClick={addTask} className="username">
        Add Task
      </button>
      <button className="username" onClick={deleteAllTask}>
        Delete ALL Task
      </button>

      <ul>
        {tasks.map((value, index) => {
          return (
            <>
              <li>
                <button onClick={() => deleteTask(index)}>x</button>Task{" "}
                {index + 1} is {value}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
const MyCarousel = () => {
  return <></>;
};
export default function App() {
  return (
    <div className="App">
      <MyCounter />
      <hr />
      <MagicButton />
      <hr />
      <Todo />
      <hr />
    </div>
  );
}
