import Task from './Task';

const TaskComponent = ({tasks,onDelete,sendReminder}) => {
  return (
    <>
      {tasks.map((item) => {
        return <Task key={item.id} task={item} sendReminder = {sendReminder} onDelete={onDelete}/>
      })}
    </>
  );
};

export default TaskComponent;
