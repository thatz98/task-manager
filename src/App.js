import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Create an empty repository',
      day: 'April 1st at 3.30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Create an empty file',
      day: 'April 1st at 3.40pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Add some html tags',
      day: 'April 1st at 3.50pm',
      reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='Hello' />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
