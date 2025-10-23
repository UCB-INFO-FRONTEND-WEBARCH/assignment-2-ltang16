import TaskItem from './TaskItem'

function TaskList({tasks, onToggle, onDelete}) {
    return (
        <div className="task-list-block">
            <p className="task-list-header">To-Do List</p>
            {tasks.length === 0 ? <p className="task-list">No tasks available.</p> :
            <section className="task-list">
                {tasks.map(task => (<TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>))}
            </section>}
        </div>
    )
}

export default TaskList