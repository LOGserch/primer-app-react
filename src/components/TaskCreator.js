import { useState } from 'react';

export const TaskCreator = ({ createNewTask }) => {

    const [nuevaTarea, setNuevaTarea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();//previene que se envien los adatos al backend
        createNewTask(nuevaTarea);

        setNuevaTarea('');
    }

    return (
        <form onSubmit={handleSubmit} className='my-2 row'>
            <div className='col-9'>
            <input
                type="text"
                placeholder='enter a new task'
                value={nuevaTarea}
                onChange={
                    (e) =>
                        setNuevaTarea(e.target.value)
                }
                className='form-control'
            />
            </div>

            <div className='col-3'>
            <button className='btn btn-primary btn-sm'>salvar</button>
            </div>
            
        </form>
    );
}
