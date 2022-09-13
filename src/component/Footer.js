import React, { Component, useState } from 'react'

const Footer = ({todos, setTodos}) => {

 /*  const [checkAll, setCheckAll] = useState(false) 

  const handleCheckAll = () => {
    const checkAllTodos = [...todos].forEach( (todo) => {
      todo.complete = !checkAll
    })
    setTodos(checkAllTodos)
    setCheckAll(!checkAll)
  } 
 */
  const deleteTodos = () => {
    const deleteTodo = [...todos].filter( (todo) => todo.complete === false)
    setTodos(deleteTodo)
  }

  const linethroughTodo = () => {
    const strikedTodo = [...todos].filter( (todo) => todo.complete === false)
    return strikedTodo
  }

    return (
        <div className='row'>
          <label>
            <input type="checkbox" name="all" id="all" 
                   //onClick={handleCheckAll} 
                   //checked={checkAll}
            />
            All
          </label>
          <p>
            You have {linethroughTodo().length} to do
          </p>
          <span onClick={deleteTodos}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </span>
      </div>
    )
}

export default Footer