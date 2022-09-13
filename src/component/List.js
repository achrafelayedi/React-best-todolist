import React, { Component } from 'react'
import ListItem from './ListItem'
import { useState } from 'react'

const List = ({todos, setTodos}) => {

    const handleCheckbox = (id) => {
        const newTodos = [...todos]
        newTodos.forEach( (todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo
        })
        setTodos(newTodos) 
       }

    const handleEdit = (id, updateTodo) => {
        const todoToEdit = [...todos].map( (todo) => {
            if (todo.id === id) {
                todo.name = updateTodo
            }
            return todo
        })
        setTodos(todoToEdit)
    }   

    return (
        todos.map( (todo) => {
           return (
            <div key={todo.id}>
                <ListItem 
                          id={todo.id}
                          inputname={todo.name}
                          checked={todo.complete}
                          handleCheckbox={()=>handleCheckbox(todo.id)}
                          handleEdit={handleEdit}
                />          
            </div>
           )   
        })
    )
}

export default List