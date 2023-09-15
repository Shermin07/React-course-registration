/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourses,hours, totalHours}) => {
    //console.log("hello")
    let count = 1; 
    return (
        <div className='w-[300px] text-center bg-blue-200  rounded m-3'>
            <h1 className='text-xl font-semibold pt-3 pb-2 border-b-2 '>Credit Hour Remaining : {hours} hr</h1>
   <h1 className='text-2xl font-semibold mb-5'>Courses Name <br></br>
         
         </h1>  
       
              
{
    selectedCourses.map((courses) =>(
  <h1 key={courses.id} className='text-md mb-5  text-gray-600 font-semibold'>{count++}. {courses.Title}
   
  </h1>
 ))
}

<h1 className='font-semibold border-t-2'>Total Credit Hour: {`${totalHours} hr`}</h1> 
  <h1 className='font-semibold border-t-2'>Total Cost: {` $`}</h1> 
           
            
    </div>        
       
    );
};

export default Cart;