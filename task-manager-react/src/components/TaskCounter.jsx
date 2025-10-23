import checkIcon from '../assets/check_icon.png'
import menuIcon from '../assets/menu_icon.png'

function TaskCounter({tasks, activeFilter}) {
    const totalTasks = tasks.length
    let currentTasks

    if (activeFilter === 'completed') {
        const current = tasks.filter(task => task.completed === true)
        currentTasks = current.length
    } else if (activeFilter === 'active') {
        const current = tasks.filter(task => task.completed === false)
        currentTasks = current.length
    } else {
        currentTasks = tasks.length
    }

    return (
        <header className="task-counter">
            <p className="menu"><img src={menuIcon} alt="Menu icon" className="menu-icon" /></p>
            <input type="text" className="quick-find-box" name="quick-find-box" placeholder="Quick Find"/>
            <div className="counter-text">
                <img src={checkIcon} alt="Check icon" className="counter-icon" />
                <p className="task-counts">{currentTasks} / {totalTasks}</p>
            </div>
        </header>
    )
}

export default TaskCounter