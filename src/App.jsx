import React, { useState } from 'react'
import './App.css'

function App() {
  
 const [value, setValue] = useState('');
  return (
    <>
      <div className="container">
         <div className="calculator">
         <table id="calcu" className="mt-5">
        <tbody>

        <tr> 
			<td colSpan="3"> 
				<input type="text"  id="result" value={value} /> 
			</td> 
			<td><input type="button" onClick={e=>setValue('')}  value="c"/></td> 
		</tr> 

		<tr> 
			<td><input type='button' value="1" onClick={e => setValue(value + e.target.value)}/></td>
			<td><input  type="button" value="2" onClick={e => setValue(value + e.target.value)} /></td> 
			<td><input onClick={e => setValue(value + e.target.value)} type="button" value="3" /></td> 
			<td><input onClick={e => setValue(value + e.target.value)} type="button" value="/" /></td> 
		</tr> 
		<tr> 
			<td><input  onClick={e => setValue(value + e.target.value)} type="button" value="4" /></td> 
			<td><input  onClick={e => setValue(value + e.target.value)} type="button" value="5" /></td> 
			<td><input  onClick={e => setValue(value + e.target.value)} type="button" value="6"/></td> 
			<td><input  onClick={e => setValue(value + e.target.value)} type="button" value="*" /></td> 
		</tr> 
		<tr> 
			<td><input onClick={e => setValue(value + e.target.value)}  type="button" value="7" /></td> 
			<td><input onClick={e => setValue(value + e.target.value)} type="button" value="8" /></td> 
			<td><input onClick={e => setValue(value + e.target.value)}  type="button" value="9" /></td> 
			<td><input onClick={e => setValue(value + e.target.value)}  type="button" value="-" /></td> 
		</tr> 
		<tr> 
			<td><input onClick={e => setValue(value + e.target.value)}  type="button" value="0" /></td> 
			<td><input  onClick={e=>setValue(value.slice(0, -1))} type="button" value="DEL" /></td> 
			<td><input   type="button" onClick={e => setValue(eval(value))} value="=" /></td> 
			<td><input  onClick={e => setValue(value + e.target.value)} type="button" value="+" /></td> 
		</tr> 
        </tbody> 

	   </table> 
         </div>
      </div>
    </>
  )
}

export default App
