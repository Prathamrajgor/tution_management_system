import React, { useContext, useState } from "react";
import { Context } from "../App";
import Axios from "axios";
import Scroll from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Edit_student() {
    const student=useSelector((state)=> state.student.value )
    const [firstname, Newfirstname] = useState(student.firstname);
    const [lastname, Newlastname] = useState(student.lastname);
    const [std, Newstd] = useState(student.std);
    const [school, Newschool] = useState(student.school);
    const [mother, Newmother] = useState(student.mother);
    const [father, Newfather] = useState(student.father);
    const [contact, Newcontact] = useState(student.contact);
    const [date,Newdate]=useState(student.joining_date);
    const [fees, Newfees] = useState(student.fees);
    const [id,Newid]=useState(student.student_id);

    const [success,Newsuccess]=useState("none")
    const [alert,Newalert]=useState("none")
    const [fail,Newfail]=useState("none");
    // console.log(id);
    return (
        <>
        <div className="pl-4 pt-2">
            <Link to="/">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <i className="fa-solid fa-backward"></i>
              </button>
            </Link>
        </div>
      <div className="bg-gray-200 mx-10 rounded-lg shadow-md">
  
          <div className="my-2" style={{display:alert}} >
              <div className="alert alert-danger" role="alert">
              Fill all the Required fields
              </div>
          </div>
          <div>
              <div class="alert alert-success" style={{display:success}} role="alert">
                  Student Edited Successfully
              </div>
          </div>
          <div>
               <div class="alert alert-danger" style={{display:fail}} role="alert">
                   Student Updation Unsuccessfull
              </div>
          </div>
        <form className="container font-semibold ">
        
  
          <div className="text-2xl pt-6 my-4 text-black font-normal">
            Edit  Details
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              placeholder="Eg: Rahul"
              value={firstname}
              onChange={(e) => Newfirstname(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
  
             <div id="emailHelp" style={{display:alert}} class="form-text"> <p className="text-red-600"> *required. </p></div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Eg: Sharma"
              value={lastname}
              onChange={(e) => Newlastname(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              />
            <div id="emailHelp" style={{display:alert}} class="form-text"> <p className="text-red-600"> *required. </p></div>
          </div>
  
          <div className="flex space-x-2">
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Standard
                </label>
                <input
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                  value={std}
                  id="username"
                  type="text"
                  placeholder="Eg: 1st"
                />
                <div id="emailHelp" style={{display:alert}} class="form-text"> <p className="text-red-600"> *required. </p></div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span className="font-semibold"> Standard </span>
                  </button>
                  <ul className="dropdown-menu w-40  ">
                  <Scroll className="h-80">
                    {[
                        "No school",
                        "Nursery",
                        "Junior",
                        "Senior",
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                      9,
                      10,
                  ].map((element) => {
                      return (
                          <>
  
                          <li
                              className="dropdown-item"
                              onClick={() => {
                                  Newstd(element);
                              }}
                              >
                              {element}
                          </li>
                        </>
                      );
                  })}
                  </Scroll>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              School Name
            </label>
            <input
              type="text"
              placeholder="Eg: St. Joseph"
              value={school}
              onChange={(e) => Newschool(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Mother's Name
            </label>
            <input
              type="text"
              placeholder="Eg: Sunita"
              value={mother}
              onChange={(e) => Newmother(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Father's Name
            </label>
            <input
              type="text"
              placeholder="Eg: Ajay"
              value={father}
              onChange={(e) => Newfather(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Father's/ Mother's Contact No
            </label>
            <input
              type="number"
              placeholder="Eg: 0123456789"
              value={contact}
              onChange={(e) =>{ 
                  if(e.target.value.length>10){
                      Newcontact(contact);
                  }
                  else{
                      Newcontact(e.target.value)
                  }
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              />
            <div id="emailHelp" style={{display:alert}} class="form-text"> <p className="text-red-600"> *required. </p></div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Joining Date
            </label>
            <input
              type="date"
              placeholder="Eg: 0123456789"
              value={date}
              onChange={(e) => {
                // console.log(e.target.value);
                Newdate(e.target.value);
                // console.log(new Date());
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              />
          </div> 
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Fees
            </label>
            <input
              type="text"
              placeholder="Eg: 500"
              value={fees}
              onChange={(e) => {
                  Newfees(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              />
          </div>
          <div className="flex">
                  <div
                  onClick={() => {
                      
                      if(firstname=="" || lastname=="" || std=="" || contact==""){
                          Newalert("block");
                          setTimeout(()=>{ Newalert("none")},4000)
                      }
                      else{
                          
                          
                          let a= Axios.put("http://localhost:5000/edit_student",{
                                  "student_id":id,
                                  "firstname":firstname,
                                  "lastname":lastname,
                                  "std":std,
                                  "school":school,
                                  "mother":mother,
                                  "father":father,
                                  "contact":contact,
                                  "date":date,
                                  "fees":fees
                              }).then((res)=>{
                                  if(res.data=="s"){
                                      Newsuccess("block");
                                      setTimeout(()=>{Newsuccess("none")},4000);
                                      Newfirstname("")
                                      Newlastname("")
                                      Newstd("")
                                      Newschool("")
                                      Newmother("")
                                      Newfather("")
                                      Newcontact("")
                                      Newdate("")
                                      Newfees("");
                                      setTimeout(()=>{
                                        window.location.replace("http://localhost:3000/")
                                      },4000)
                                  }
                                  else{
                                      Newfail("block");
                                      setTimeout(()=>{Newfail("none")},4000);
                                  }
                              }).then((err)=>{
                                  // console.log("2",err);
                              }) 
                          }}
                      }
                      className="bg-blue-600  my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                  Update Student
                  </div>
          </div>
        </form>
      </div>
      </>
    );
}
