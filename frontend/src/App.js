import './App.css';
import React, { useContex,createContext,useReducer, useEffect, useState } from 'react';
import {motion} from "framer-motion";
import Navbar from './Components/Navbar';
import Data_and_search from './Components/Data_and_search';
import {BrowserRouter, Routes, Link,Route} from "react-router-dom"
import Add_student from './Components/Add_student';
import axios from 'axios';
import Edit_student from './Components/Edit_student';
import Delete_student from './Components/Delete_student';
import Fee_table from './Components/Fee_table';
import Auth from './Components/Auth';

export const Context=React.createContext(null);
export const Student=React.createContext(null);
function App() {

  const [list,Newlist]=useState([])
  const [state,dispatch]=useReducer((state,action)=>{
    return 2000
  },300);
  useEffect(()=>{
    axios.get("http://192.168.43.90:5000/student_list").then((res)=>{
      console.log(res);
      Newlist(res.data);
    })
  },[]);


    return (
  
  
      <div className='bg-purple-400 w-[100vw] h-[200vh] font-custom1'>
      <Student.Provider value={list}>
  
        <Context.Provider value={motion}>
            <BrowserRouter>
                  <Navbar/>
                    <Routes>
                      <Route path='/' element={<Data_and_search/>} />
                      <Route path='/add_student' element={<Add_student/>}/>
                      <Route path='/edit_student' element={<Edit_student/>}/>
                      <Route path='/delete_student' element={<Delete_student/>}/>
                      <Route path='/fee_table' element={<Fee_table/>}/>
                      <Route path="/auth" element={<Auth/>}/>
                    </Routes>
            </BrowserRouter>
        </Context.Provider>
        </Student.Provider>
     </div>
    );
}

export default App;
