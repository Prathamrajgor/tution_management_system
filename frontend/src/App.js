import './App.css';
import React, { useContex,createContext,useReducer } from 'react';
import {motion} from "framer-motion";
import Navbar from './Components/Navbar';
import Data_and_search from './Components/Data_and_search';
import {BrowserRouter, Routes, Link,Route} from "react-router-dom"
import Add_student from './Components/Add_student';

export const Context=React.createContext(null);
function App() {
  const [state,dispatch]=useReducer((state,action)=>{
    return 2000
  },300);
  return (


    <div className='bg-purple-400 w-[100vw] h-[200vh] '>
    {/* <div className='bg-red-500 h-[150vh] w-[100vw] '>
      <div className='border-2 border-blue-400'>
      <Context.Provider value={200}>
      <Comp1/>
      </Context.Provider>
      </div>
      <div onClick={()=>{
        dispatch()
      }}>
      {state}
      lorem600
      </div>
      <div className="sticky top-32 left-[1200px] border-2  ">
      asdasd
      </div>
      <div>
      asdoihasduiaysidyasdi asd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis tempora modi debitis incidunt tenetur in mollitia, sapiente eligendi non, natus ipsam facere. Quas!
      </div>
    </div> */}

      {/* <motion.div animate={{x:100,y:100,scale:2 }} initial={{scale:1}} className="bg-white shadow-md border rounded-xl h-44 w-44">
        asdasdasd
      </motion.div> */}
    
      <Context.Provider value={motion}>
          <Navbar/>
      <BrowserRouter>
              <Routes>
                <Route path='/' element={<Data_and_search/>} />
                <Route path='/add_student' element={<Add_student/>}/>
              </Routes>
      </BrowserRouter>
      {/* <Add_student/> */}

      </Context.Provider>
   </div>
  );
}

export default App;
