import React, { Component } from 'react'

const Footer = () => {
    return (
        <div className='row'>
        <label>
          <input type="checkbox" name="all" id="all"/>
          All
        </label>
        <p>
          You have 0 to do
        </p>
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        <button id='delete'>
          Delete
        </button>
      </div>
    )
}

export default Footer