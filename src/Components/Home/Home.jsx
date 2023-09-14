/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
const [allCourses, setAllCourses] = useState([]);
const [selectedCourses, setSelectedCourses] = useState([]);

useEffect( () =>{
    fetch('./data.json')
    .then(res =>res.json())
    .then(data =>setAllCourses(data));
}
,[]);

const handleSelectedCourse = (course)=>{
    const isTaken = selectedCourses.find((sub) => sub.Id === course.Id
    
    );
    if(isTaken){
        return alert ('Already took this course');
    }
    else{
        setSelectedCourses([...selectedCourses, course]);
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
                            <div className="card-actions ">
                                <div className="badge font-bold text-lg ">$ {course.Price}</div>
                                <div className="badge font-bold text-lg ">{course.Credit}</div>
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
                 <Cart selectedCourses = {selectedCourses}></Cart>
                </div>

            </div>
            
        </div>
    );
};

export default Home;