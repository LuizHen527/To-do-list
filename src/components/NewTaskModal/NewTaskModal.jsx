import { useState } from 'react';
import './NewTaskModal.css'

export const NewTaskModal = ({
    visible, setShowNewTaskModal, onPressNewTask, onChange, titleTask, onClick
}) => {

    return (

        visible === true ? (
            <div className="task-modal-background">
                <div className="task-modal-container">
                    <h1 className='task-modal-title'>Descreva sua tarefa</h1>
                    <div className='task-modal-title-box'>

                        <input value={titleTask} onChange={onChange} className='task-modal-title-field' type='text' placeholder='Titulo da tarefa'></input>
                    </div>
                    <button onClick={onClick} className="task-modal-button">Confirmar tarefa</button>
                </div>
            </div>
        ) :
            (<></>)

    );
};