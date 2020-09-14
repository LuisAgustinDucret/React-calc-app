/* eslint no-eval:0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import MathOperations from './components/MathOperations' 
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import './App.css'

const App = () => 
{
   //Array Destructuring.
   //1er posición contiene el texto y la segunda posición la función.
   const [stack, setStack] = useState("")
   const items = words(stack, /[^-^+^*^/]+/g)
   const value = items.length > 0 ? items[items.length-1] : 0;

   console.log("Render App", items)

   return (
   <main className='react-calculator'> 
      <Result value = {value}/>
      <Numbers onClickNumber = {number => {
         setStack(`${stack}${number}`)
      }} 
      />
   
      <Functions 
         onContentClear = {() => {
            console.log("Clearing")
            setStack('')
         }}
         onDelete = {() => { 
            if(stack.length > 0){ 
               const newStack = stack.substring(0,stack.length-1)
               console.log("Delete: ", newStack)
               setStack(newStack);
            }
         }}
      />
         <MathOperations
             onClickOperation = {operation =>{
                console.log("Operación:", operation)
                setStack(`${stack}${operation}`)
               }}
            onClickEqual = {equal=> {
               console.log("Resultado: ", equal)
               setStack(eval(stack).toString())
            }}
         />
   </main>
   )
}

export default App