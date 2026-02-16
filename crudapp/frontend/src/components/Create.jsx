import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [values,setValues]=useState({
        name:"",
        email:""
    })
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8001/student',values)
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='flex h-[100vh] bg-amber-600 justify-center items-center'>

      <div className='w-[700px] bg-amber-50 rounded-2xl p-4'>

        <form onSubmit={submitHandler}>
            <h1>Add Students</h1>
            <div className='mb-2'>
                <level>Name</level>
               <input type="text" placeholder="Success" className="input input-success w-full" 
               onChange={e=>setValues({...values,name: e.target.value})}
               />

            </div>
             <div className='mb-2'>
                <level>Email</level>
                <input type="email" placeholder="Warning" className="input input-warning w-full" 
                onChange={e=>setValues({...values,email: e.target.value})}
                />
            </div>
            <button className='btn btn-secondary m-2'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Create