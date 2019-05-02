import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const style={
        display: 'inline-block'
      }
    return (
      <ul>
        {props.todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        ))}
      </ul>
    );
}

export default TodoList;