export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete all tasks?')) {
            cleanTasks()
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center
        p-2 border-secondary">
            <div clasName="form-check form-switch">
                <input
                    className="form-check-input "
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setShowCompleted(e.target.checked)} />
                    {" "}
                <label> show task done</label>
            </div>

            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                clear
            </button>
        </div>
    )
} 