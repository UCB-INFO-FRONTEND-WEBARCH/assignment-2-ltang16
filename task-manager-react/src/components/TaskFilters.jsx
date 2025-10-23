function TaskFilters({activeFilter, onFilterClick}) {
    return (
        <section className="filter-buttons">
            <button 
                className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => onFilterClick('all')}
            >All Tasks
            </button>
            <button 
                className={`filter-button ${activeFilter === 'active' ? 'active' : ''}`}
                onClick={() => onFilterClick('active')}
            >Active Tasks
            </button>
            <button 
                className={`filter-button ${activeFilter === 'completed' ? 'active' : ''}`}
                onClick={() => onFilterClick('completed')}
            >Completed Tasks
            </button>
        </section>
    )
}

export default TaskFilters