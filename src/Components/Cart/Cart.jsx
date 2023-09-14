/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourses}) => {
    //console.log("hello")
    let count = 1; 
    return (
        <div className='w-[300px] text-center bg-blue-200  rounded m-3'>
   <h1 className='text-2xl font-bold mb-5'>Courses Name <br></br>
         
         </h1>   
              
{
    selectedCourses.map((courses) =>(

       // <h1>Credit Hour Remaining 7 hr :</h1>
      
       
         <h1 className='text-lg mb-5 font-semibold'>{count++}. {courses.Title}</h1>
            //<h1>Total Creadit :</h1>
           // <h1>Total Price :</h1>

    ))
}

           
            
    </div>        
       
    );
};

export default Cart;