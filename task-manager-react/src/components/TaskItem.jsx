function TaskItem({key, task, onToggle, onDelete}) {
    return (
        <section id={key} className={`task-item ${task.completed === true ? "completed" : "active"}`}>
            <div className="task-check">
                <input type="checkbox" className="item-checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
                <p className="task-description">{task.text}</p>
            </div>
            <button className="task-delete" onClick={() => onDelete(task.id)}>x</button>
        </section>        
    )
}

export default TaskItem