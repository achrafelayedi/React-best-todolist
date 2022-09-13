import React, { Component, useState } from 'react'

const ListItem = ({inputname, id, checked, handleCheckbox, handleEdit}) => {

    const [editInput, setEditInput] = useState(false)
    const [updateTodo, setUpdateTodo] = useState(inputname)

    const onEdit = () => {
        setEditInput(true)
    }

    const onEditSave = () => {
        setEditInput(false)
        if (updateTodo) {
            handleEdit(id, updateTodo)
        } else {
            return
        }
    }
    
    if (editInput) {

      return (
        <ul>
            <li >
                <input type="text" value={updateTodo} onChange={(e)=>setUpdateTodo(e.target.value)}
                /> 
                <button disabled={checked} onClick={onEditSave}>
                    Save
                </button>
            </li>
        </ul>
      )      
    }
    else {
          return(
            <ul>
            <li >
                <label htmlFor={id} className={checked ? "active" : ""}>
                    <input type="checkbox" id={id}
                        checked={checked}
                        onChange={handleCheckbox}
                    />
                    {inputname}
                </label>
                <button disabled={checked} onClick={onEdit}>
                    Edit
                </button>
            </li>  
            </ul>  
          )  
    }

/*     return (
        <ul>
            <li >
            <label htmlFor={id} className={checked ? "active" : ""}>
                <input type="checkbox" id={id}
                       checked={checked}
                       onChange={handleCheckbox}
                       //onChange={onChange}
                />
                {inputname}
            </label>
            <button disabled={checked} onClick={}>
                Edit
            </button>
            </li>
        </ul>
    ) */
}

export default ListItem