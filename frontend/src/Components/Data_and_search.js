import React, { useContext } from 'react';
import { Context } from '../App';

export default function Data_and_search() {
    const motion=useContext(Context);
  return (
    <motion.div animate={{scale:1}} initial={{scale:0.5}} className='mx-3 my-3 '>
        <div className="input-group input-group-lg">
        <input type="text" placeholder='Search...' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>

        
    </motion.div>
  )
}
