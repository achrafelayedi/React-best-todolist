import React, { Component } from 'react'

const FormInput = ({todos, inputTodo, handleTodoInput, addTodo}) => {
    return (

        <form autoComplete='off' onSubmit={addTodo} >
        <input type="text" name="todos" id="todos" required placeholder='Add me to your todos please!' 
               value={inputTodo} onChange={handleTodoInput}
        />
        <button type="submit" className="btn btn-primary" todos={todos}
        >
          Add
        </button>      
      </form>
    )
}

export default FormInput