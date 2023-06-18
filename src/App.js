import { useState } from 'react';
import classes from './App.module.css'
import { Button } from './components/Button';
import { Input } from './components/Input';
import { evaluate } from 'mathjs';
import { isOperator, operators } from './utils';


function App(props) {

  const [inputValue, setInputValue] = useState('');

  const addToInput = (val) => {
    setInputValue((prevValue) => prevValue + val)
  }

  const handleOperatorInput = (val) => {
    setInputValue((prevValue) => {
      if (isOperator(prevValue.charAt(prevValue.length - 1)) || prevValue === '') {
        return prevValue
      } else {
        return prevValue + val
      }
    })
  }


  const clearInput = () => {
    setInputValue('');
  }

  const handleEqual = () => {

    if (inputValue === '' || isOperator(inputValue.charAt(inputValue.length - 1)) === true) {
      setInputValue(prevValue => prevValue)
    } else {
      let result = evaluate(inputValue);
      setInputValue(result.toString())
    }
  }

  const handleDecimalInput = () => {

    let inputValueArray = inputValue.split('');
    let isOperatorPresent = operators.some(val => inputValueArray.includes(val))

    if (isOperatorPresent) {

      let lastIndexofOperator = Math.max(inputValueArray.lastIndexOf('+'), inputValueArray.lastIndexOf('*'), inputValueArray.lastIndexOf('-'), inputValueArray.lastIndexOf('/'), inputValueArray.lastIndexOf('%'))
      let isDecimalPresent = inputValueArray.slice(lastIndexofOperator + 1, inputValue.length).includes('.');

      if (isDecimalPresent) {
        setInputValue(prevValue => prevValue)
      } else {
        setInputValue(prevValue => prevValue + '.')
      }

    }

    let isDecimalPresent = inputValueArray.includes('.');
    if (isDecimalPresent) {
      setInputValue(prevValue => prevValue)
    } else {
      setInputValue(prevValue => prevValue + '.')
    }

  }


  return (
    <div className={classes.app}>
      <div className={classes.calcWrapper}>
        <div className={classes.row}>
          <Input value={inputValue} />
        </div>
        <div className={classes.row}>
          <Button handleClick={clearInput}>AC</Button>
          <Button handleClick={()=>{alert("Funtionality not implemented")}}>+/−</Button>
          <Button handleClick={handleOperatorInput}>%</Button>
          <Button handleClick={handleOperatorInput}>/</Button>
        </div>
        <div className={classes.row}>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={handleOperatorInput}>*</Button>
        </div>
        <div className={classes.row}>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={handleOperatorInput}>-</Button>
        </div>
        <div className={classes.row}>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={handleOperatorInput}>+</Button>
        </div>
        <div className={classes.row}>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleDecimalInput}>.</Button>
          <Button handleClick={handleEqual}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;


// ×  −