import './ListItem.css'

const ListItem = ({setIsDone, isDone, title}) => {
    return (
        <div className={isDone === false ? ("list-item-container") : ("list-item-container-true")}>
            <div className='list-item-task-div'>
                <button onClick={isDone === true ? (() => setIsDone(false)) : (() => setIsDone(true))} className={isDone === false ? ('list-item-check-box') : ('list-item-check-box-true')} type='button'></button>
                <p className={isDone === false ? ("list-item-text") : ('list-item-text-true')}>{title}</p>
            </div>
            <div className='list-item-button-div'>
                <button className={isDone === false ? ('list-item-button-delete') : ('list-item-button-delete-true')}></button>
                <button className={isDone === false ? ('list-item-button-update') : ('list-item-button-update-true')}></button>
            </div>
        </div>
    );
};

export default ListItem;