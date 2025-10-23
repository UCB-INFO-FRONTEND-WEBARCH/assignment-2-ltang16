import { act, useState } from 'react'
import './App.css'
import TaskSidebar from './components/TaskSidebar'
import TaskFilters from './components/TaskFilters'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'


function App() {
  const [tasks, setTasks] = useState([]);

  // Add new task to task list state
  const addTask = (taskText) => {
    const newTask = {
      'id': Date.now(), // Using timestamp of creation as unique identifier for each task
      text: taskText,
      completed: false // Completion status will by default be false for new tasks added to the list
    }
    setTasks([...tasks, newTask]);
  }

  // Mark task as completed
  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? {...task, completed: !task.completed} : task // For only the task with that ID, flip the completed value
    ));
  }

  // Remove task from the list
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id)); // Only show tasks that don't have the given ID
  }

  // Filter tasks based on completion status
  // New state for active filter -- all tasks by default
  const [activeFilter, setActiveFilter] = useState('all')
  // Change the active filter based on the filter button that gets clicked
  const handleFilterClick = (category) => {
    setActiveFilter(category) // 
  }
  // Create new list of tasks according to filter (derived state)
  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'active') return !task.completed;
    if (activeFilter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app">
      <TaskCounter tasks={tasks} activeFilter={activeFilter} />
      <div className="app-body">
        <TaskSidebar tasks={tasks} /> {/* I added the sidebar from the first assignment :) */}
        <div className="task-pane">
          <TaskFilters activeFilter={activeFilter} onFilterClick={handleFilterClick} /> {/* Created new component for filter buttons */}
          <TaskForm onAddTask={addTask} />
          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App