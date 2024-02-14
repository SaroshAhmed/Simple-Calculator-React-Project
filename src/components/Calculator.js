import React,{useState} from 'react';
import '../App.css';
import img from '../yy3.gif'
export default function Calculator() {
  
    const[screenNumbers, setScreenNumbers]=useState([])

    const handleNumbers=(event)=>{
            if(screenNumbers.length<=10){
                let screenArray = event.target.value
                setScreenNumbers((prevValues) => [...prevValues, screenArray]);
            }
            else{
                return 0
            }
            
        }
       
    const handlleSum = ()=>{
        let convertToString
        let totalSum
        let removeDecimals
        convertToString= screenNumbers.join('')
        // eslint-disable-next-line
        totalSum= eval(convertToString)
        removeDecimals = parseFloat(totalSum.toFixed(4))
        setScreenNumbers(removeDecimals)
    }
    const handleClear=()=>{
        setScreenNumbers([])
    }
  return (
    <>
    <div className='container'>
    {/* eslint-disable-next-line */}
    <h1 > <img src={img} className='img'></img>CALCULATOR</h1>
    <p className='screen'>{screenNumbers}</p>
    <p className='credit'>Made by Sarosh</p>
    <button className='numButtons' value='1'
    onClick={handleNumbers} >1</button>
    <button className='numButtons' value='2' 
    onClick={handleNumbers}>2</button>
    <button className='numButtons' value='3'
    onClick={handleNumbers}>3</button>
    <button className='symButtons' value='*'
    onClick={handleNumbers}>x</button>
    <br></br><button className='numButtons' value='4'
    onClick={handleNumbers}>4</button>
    <button className='numButtons' value='5'
    onClick={handleNumbers}>5</button>
    <button className='numButtons' value='6'
    onClick={handleNumbers}>6</button>
    <button className='symButtons' value='/'
    onClick={handleNumbers}>/</button>
    <br></br><button className='numButtons' value='7'
    onClick={handleNumbers}>7</button>
    <button className='numButtons' value='8'
    onClick={handleNumbers}>8</button>
    <button className='numButtons' value='9'
    onClick={handleNumbers}>9</button>
    <button className='symButtons' value='+'
    onClick={handleNumbers}>+</button>
    <br></br><button className='numButtons' value='0'
    onClick={handleNumbers}>0</button>
    <button className='numButtons' value='.'
    onClick={handleNumbers}>.</button>
    <button className='symButtons' value='%'
    onClick={handleNumbers}>%</button>
    <button className='symButtons' value='-'
    onClick={handleNumbers}>-</button>
    <br></br><button className='clearButton' value='C'
    onClick={handleClear}>C</button>
    <button className='calButton' value='='onClick={handlleSum}>=</button>
    </div>
    </>
  )
}
