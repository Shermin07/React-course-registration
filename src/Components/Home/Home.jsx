/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { BsBook } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
const [allCourses, setAllCourses] = useState([]);
const [selectedCourses, setSelectedCourses] = useState([]);
const [hours, setRemainingHours ] = useState(20);
const [totalHours, setTotalHours] = useState(0);
const [totalCost, setTotalCost] = useState(0);

useEffect( () =>{
    fetch('./data.json')
    .then(res =>res.json())
    .then(data =>setAllCourses(data));
}
,[]);

const handleSelectedCourse = (course)=>{
    const isTaken = selectedCourses.find((sub) => sub.Id === course.Id
    
    );
    let count = course.Credit ;
  
    if(isTaken){
       toast ('This course is already in your cart');
    }

    else{
      selectedCourses.forEach((hour) => {
        count = count + hour.Credit ;

      } );

     if(count > 20){
        
        toast('Hours limited,you can not take another course')

      }
     
      else{

        setTotalHours(count);
        const newRemaining = 20 - count ;
        const  totalRemaining = parseFloat(newRemaining);
       
        setRemainingHours(totalRemaining);

        if (totalRemaining === 0){
           toast('Sorry,Your reamaining hour is done')
        }
        setSelectedCourses([...selectedCourses, course]);

      
       
      }

       
    }
    
};




    return (
        <div className='container'>
            <h1 className='text-center text-2xl md:text-4xl font-bold mb-7'>Course Registration</h1>
            <div className='home-container  md:flex'>
                <div className='card-container  grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4'>
               {
                allCourses.map((course) =>(
                    <div  key={course.Id} className="card bg-base-100 shadow-xl">
                        <figure ><img className='h-40 mx-2' src={course.Image}  alt={`computer-courses`}  /></figure>
                        <div className="card-body">
                            <h3 className="card-title ">
                               <h4 className='text-md font-bold'>{course.Title}</h4>
                                
                            </h3>
                            <p className='text-sm'>{course.Description}</p>
                            <div className="card-actions  ">
                                <div className="font-bold text-md ">$ {course.Price}</div>
                                <BsBook className='ml-20 mt-[7px] '></BsBook>
                                <div className="font-bold text-lg  ">{course.Credit} hr</div>
                            </div>
                            <button onClick={()=>handleSelectedCourse(course)}  className='btn btn-primary mt-4 p-3'>Select</button>
                        </div>

                    </div>
                   
                   
                         
                       
                )
                )
               }
                </div>
                <div className='cart-container'>
                 <Cart totalHours = {totalHours} hours = {hours} selectedCourses = {selectedCourses} ></Cart>
                </div>

            </div>
            <ToastContainer></ToastContainer>   
        </div>
        
    );
};

export default Home;