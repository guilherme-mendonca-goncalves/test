import React, { useState } from 'react'
import TodoForm from '../TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { ImCheckmark2 } from 'react-icons/im'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id}>
        {todo.text}
      </div>
      <div className='icons'>
        <ImCheckmark2 onClick={() => completeTodo(todo.id)} />
        <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon' />
        <RiCloseCircleLine onClick={() => {
          let confirmation = window.confirm('Deseja realmente apagar o compromisso:\n' + todo.text);
          if(confirmation) {
            removeTodo(todo.id);
          }
        }
        }
        className='delete-icon' />
      </div>
    </div>
  ))
}

export default Todo
