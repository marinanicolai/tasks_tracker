import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Send a letter',
      day: 'Feb 9th',
      reminder: true,
    },
    {
      id: 2,
      text: 'Code the project',
      day: 'Feb 9th',
      reminder: true,
    },
    {
      id: 3,
      text: 'Pick up the children',
      day: 'Feb 9th',
      reminder: true,
    },
  ])
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
