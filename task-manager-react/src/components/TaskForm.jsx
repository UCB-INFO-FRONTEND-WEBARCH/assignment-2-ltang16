import { useState } from 'react'

function TaskForm({onAddTask}) {
    // Local state to handle form data for new task
    const [description, setDescription] = useState('')

    // Success message state
    const [successMsg, setSuccessMsg] = useState('')

    // Errors state for validation -- just a single element since the form only has one input field
    const [errors, setErrors] = useState('')

    // Function to handle input changes
    const handleChange = (e) => {
        setDescription(e.target.value); // Update the form data
        if (e.target.value.length === 0) {
            setErrors('Task description cannot be empty.') // Add error message since task is empty
        } else {
            setErrors('') // Otherwise, clear error message
        }
        if (successMsg) {
            setSuccessMsg('') // Clear success message when user begins typing again
        }
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault() // Prevent page from reloading when new task is added

        // Validate form content -- if there's an error (task description empty), set the error and don't submit the form
        if (!description.trim()) {
            setErrors('Task description cannot be empty.') // <======== this only works when desc is all whitespace -- want this to show when trying to submit an empty task right away, how???
            return;
        }

        // Otherwise, the form content is valid! Submit it and display the success message
        console.log("Task added:", description)
        setSuccessMsg("Task successfully added!")

        // After successful form submission, add the task and clear the form
        onAddTask(description)
        setDescription('')
    }

    return (
        <section className="task-form">
            <h1 className="form-header">Add New Task</h1>
            <form className="task-add-form" onSubmit={handleSubmit}>
                <label className="task-label" htmlFor="task-description">Task Description</label>
                <input type="text" id="task-item-desc" name="task-description" value={description} 
                    onChange={handleChange} className={errors ? 'error' : ''} placeholder='Enter task description' required />
                {errors && <span className="error-message">{errors}</span>}
                <button type="submit" className="item-submit-btn" disabled={!description}>Add Task</button>
            </form>
            {successMsg && <span className="success-message">{successMsg}</span>}
        </section>
    )
}

export default TaskForm