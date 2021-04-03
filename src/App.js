import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import fetchTasks from './components/FetchTasks'
import fetchTask from './components/FetchTask.js'
import getData from './components/getData'
import getDataForAddTask from './components/getDataForAddTask'


function App() {
  const [showAddTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Add Task
  const addTask = async (task) => {

    let data = getDataForAddTask(task)

    setTasks([...tasks, data])

  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    let data = getData(id, updTask)


    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }
 
  return ( 
    <Router>
      <div className="container">
        <Header 
          onAdd={() => setShowTask(!showAddTask)} 
          showAdd={showAddTask}
        />
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('no tasks to show')}
          </>
        )} />
        <Route path='/about' component={About} />

        <Footer />
      </div>
    </Router>
  ); 
}


export default App;
