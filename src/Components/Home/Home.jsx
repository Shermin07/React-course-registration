/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { BsBook } from 'react-icons/bs';

const Home = () => {
const [allCourses, setAllCourses] = useState([]);
const [selectedCourses, setSelectedCourses] = useState([]);
const [hours, setRemainingHours ] = useState(20);
const [totalHours, setTotalHours] = useState(0);

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
        return alert ('Already enroll this course');
    }

    else{
      selectedCourses.forEach((hour) => {
        count = count + hour.Credit ;
      } );

      

      

     if(count > 20){
        
        return alert('Hours limited,you can not take another course')

      }
     
      else{

        setTotalHours(count);
        const newRemaining = 20 - count ;
        const  totalRemaining = parseFloat(newRemaining);
       
        setRemainingHours(totalRemaining);

        if (totalRemaining === 0){
            return alert('You can not take any course')
        }
        setSelectedCourses([...selectedCourses, course]);

      
       
      }

       
    }
    
};




    return (
        <div className='container '>
            <h1 className='text-center text-4xl font-bold mb-7'>Course Registration</h1>
            <div className='home-container  flex'>
                <div className='card-container grid grid-cols-3 gap-4'>
               {
                allCourses.map((course) =>(
                    <>
                    
                    <div  key={course.Id} className="card bg-base-100 shadow-xl">
                        <figure ><img className='h-40 mx-2' src={course.Image}  alt={`computer-courses`}  /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                               {course.Title}
                                
                            </h2>
                            <p>{course.Description}</p>
                            <div className="card-actions  ">
                                <div className="badge font-bold text-md ">$ {course.Price}</div>
                                <BsBook className='ml-5'></BsBook>
                                <div className="badge font-bold text-lg  ">{course.Credit} hr</div>
                            </div>
                            <button onClick={()=>handleSelectedCourse(course)}  className='btn btn-primary mt-4 p-3'>Select</button>
                        </div>

                    </div>
                   
                   
                           
                        </>
                )
                )
               }
                </div>
                <div className='cart-container'>
                 <Cart totalHours = {totalHours} hours = {hours} selectedCourses = {selectedCourses}></Cart>
                </div>

            </div>
            
        </div>
    );
};

export default Home;