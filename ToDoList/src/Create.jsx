import { useState } from "react"
import axios from 'axios'


function Create() {
    const[task,settask]=useState()

    const handleAdd =() =>{
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=> {
          location.reload(result);
        })
        .then(err => console.log(err))
    }
  return (
    <div>
        <input type="text" className='form-input' placeholder='Enter task' onChange={(e)=> settask(e.target.value)}/>
        <button type='button' className='form-button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create