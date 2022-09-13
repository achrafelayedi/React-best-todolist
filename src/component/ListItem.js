import React, { Component } from 'react'

const ListItem = ({inputname, id, checked, handleCheckbox, onChange}) => {

    /* const styleTextInput = {
        opacity: show ? "0.5" : "",
        textDecoration: show ? "line-through" : "none",
    } */

    return (
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
            <button disabled={checked}>
                Edit
            </button>
            </li>
        </ul>
    )
}

export default ListItem