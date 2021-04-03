import Task from './Task'

const Tasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => (
                <Task task={task} key={task.id} onDelete={props.onDelete} onToggle={props.onToggle} />
            ))}
        </>
    )
}

export default Tasks
