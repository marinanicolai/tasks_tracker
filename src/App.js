import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'


function App() {
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

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
