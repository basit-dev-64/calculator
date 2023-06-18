import React from 'react'
import classes from './Input.module.css'

/**
* @author
* @function Input
**/

export const Input = (props) => {
  return(
    <div className={classes.input}>{props.value}</div>
   )

 }