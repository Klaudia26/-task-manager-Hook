import React, { useContext } from 'react';
import Task from './Task';
import { TaskListContext } from '../context';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  //   console.log(task);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
