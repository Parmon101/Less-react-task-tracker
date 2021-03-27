import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowTask] = useState(true)
  const [tasks, setTasks] = useState([
      {
        id:1,
        text: 'sdfs',
        day: 'feb 2th at 2:30pm',
        reminder: true,
      },
      {
        id:2,
        text: 'dfg',
        day: 'feb 4th at 5:30pm',
        reminder: true,
      },
      {
        id:3,
        text: 'ksdf',
        day: 'feb 8th at 9:30pm',
        reminder: false,
      },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
        tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
 
  return ( 
    <div className="container">
      <Header 
        onAdd={() => setShowTask(!showAddTask)} 
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('no tasks to show')}
    </div>
  ); 
}


export default App;
