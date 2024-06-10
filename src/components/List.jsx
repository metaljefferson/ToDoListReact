import React from 'react'

const List = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    <div className='content'>
        
     <div className='texts'>
          <p>{todo.text}</p>
          <p className='category'>({todo.category})</p>
     </div>
      <div className='buttons'>
        <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
        <button onClick={() => removeTodo(todo.id)} className='remove'>X</button>
      </div>
    </div>
  </div>
  )
}

export default List