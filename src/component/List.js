import React, { Component } from 'react'
import ListItem from './ListItem'

const List = ({todos}) => {
    return (
        todos.map( (todo) => {
           return (
            <div key={todo.id}>
                <ListItem 
                          id={todo.id}
                          inputname={todo.name}
                />
            </div>
           )   
        })
    )
}

export default List