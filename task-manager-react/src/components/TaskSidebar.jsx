// I created another component to produce the sidebar from assignment 1 -- the task count in "Inbox" and "Today"
// will count the number of active tasks

import inboxIcon from '../assets/inbox_icon.png'
import calendarIcon from '../assets/calendar_icon.png'
import upcomingIcon from '../assets/upcoming_icon.png'

function TaskSidebar({tasks}) {
    const activeTasks = tasks.filter(task => task.completed === false)
    const numActive = activeTasks.length

    return (
        <section className="task-sidebar">
            <ul className="sidebar-list"> 
                <li><img src={inboxIcon} alt="Inbox icon" className="sidebar-icon"/><p className="sidebar-category">Inbox</p><p className="sidebar-count">{numActive}</p></li>
                <li><img src={calendarIcon} alt="Calendar icon" className="sidebar-icon"/><p className="sidebar-category">Today</p><p className="sidebar-count">{numActive}</p></li>
                <li><img src={upcomingIcon} alt="Upciming icon" className="sidebar-icon"/><p className="sidebar-category">Upcoming</p></li>
            </ul>
        </section>
    )
}

export default TaskSidebar