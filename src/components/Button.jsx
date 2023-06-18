import React from 'react'
import classes from './Button.module.css'

import { isOperator } from '../utils'

/**
* @author
* @function Button
**/

export const Button = (props) => {


    const isZero = (val) => {
        if (val === '0') {
            return true
        }
    }
    const isTopMost = (val) => {
        if (val === 'AC' || val === '+/−' || val === '%') {
            return true
        }
    }
    const isEqualSign = (val)=>{
        if(val === '='){
           return  {borderRadius : '0px 0px 20px 0px'}
        } else {
            return {}
        }
    }

    const handleButtonClick = ()=>{
       return  props.handleClick(props.children)
    }

    return (
        <div
            className= {`${classes.button}
                        ${isOperator(props.children) ? classes.operator : ''}
                        ${isZero(props.children) && classes.zero}
                        ${isTopMost(props.children)&& classes.topmostButtons}`}
                        style={isEqualSign(props.children)
                        }
            onClick={handleButtonClick}

                        >
            {props.children}
        </div>
    )
}