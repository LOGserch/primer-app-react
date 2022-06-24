import {TaskRow} from "../components/TaskRow";

export const TaskTable = ({task, toggleTask, showCompleted = false}) =>{

    const taskTableRows = (doneValue)=>{
        return(
            task
            .filter(task => task.done === doneValue)
            .map((taskItem) => (
                <TaskRow task={taskItem} key={taskItem.name} toggleTask={toggleTask}/>
            ))
        )
    }
    return(
        <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Tarea</th>
          </tr>
        </thead>
          <tbody>
            {
                taskTableRows(showCompleted)
            }
          </tbody>
      </table>
    )
}