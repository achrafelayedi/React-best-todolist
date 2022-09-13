import React, { Component } from 'react'

const ListItem = ({inputname, id}) => {
    return (
        <ul>
            <li >
            <label htmlFor={id}>
                <input type="checkbox" id={id} />
                {inputname}
            </label>
            <button>
                Edit
            </button>
            </li>
        </ul>
    )
}

export default ListItem