import React, { useContext, useState } from 'react'
import { Context } from '../App';

export default function Add_student() {
    const [std,Newstd]=useState("");
    const [firstname,Newfirstname]=useState("");
    const [lastname,Newlastname]=useState("");
    const [school,Newschool]=useState("")
    const [mother,Newmother]=useState("")
    const [father,Newfather]=useState("");
    const [fees,Newfees]=useState("");
    const [contact,Newcontact]=useState("")
    const motion=useContext(Context);
  return (
      <div className='bg-gray-200 mx-10 rounded-lg shadow-md'>
        <form className='container font-semibold '>
         <div className="text-2xl my-4 text-black font-normal">Student Details</div> 
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">First Name</label>
            <input type="text" placeholder='Eg: Rahul' value={firstname} onChange={(e)=>Newfirstname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Last Name</label>
            <input type="text" placeholder='Eg: Sharma' value={lastname} onChange={(e)=>Newlastname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className='flex space-x-2'>
            <div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Standard
                </label>
                <input class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " value={std} id="username" type="text" placeholder="Eg: 1st"/>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                                <div className="btn-group">
                                <button type="button" className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className='font-semibold'> Standard </span> 
                                </button>
                                <ul className="dropdown-menu w-40 ">
                                        {["No school","Nursery","Junior","Senior",1,2,3,4,5,6,7,8,9,10].map((element)=>{
                                            return (
                                                <>
                                                <li><a className="dropdown-item" onClick={()=>{
                                                    Newstd(element)
                                                }} href="#">{element}</a></li>
                                                </>
                                            )
                                        })}
                                </ul>
                                </div>
                </div>
            </div>

        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">School Name</label>
            <input type="text" placeholder='Eg: St. Joseph' value={school} onChange={(e)=>Newschool(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Mother's Name</label>
            <input type="text" placeholder='Eg: Sunita' value={mother} onChange={(e)=>Newmother(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Father's Name</label>
            <input type="text" placeholder='Eg: Ajay' value={father} onChange={(e)=>Newfather(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Father's/ Mother's Contact No</label>
            <input type="text" placeholder='Eg: 0123456789' value={contact} onChange={(e)=>Newcontact(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Fees</label>
            <input type="" placeholder='Eg: 500' value={fees} onChange={(e)=>{
                Newfees(e.target.value);
            }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <button onClick={()=>{

        }} className="bg-blue-600 my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
        </button>
        </form>
      </div>
  )
}
