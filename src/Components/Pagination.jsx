// import React from "react";
// import { useContext } from "react";


// import { MovieContext } from "./MovieContext";

// import { useState } from "react";

// function Pagination(){
//     const [pageNo, setPageNo] = useState(1);

//     const handleNext = function(){
//         setPageNo(pageNo+1);
//     }

//     const handlePrev = function(){
//         if(pageNo <1){
//             return;
//         }
//         setPageNo(pageNo-1)
//     }

//     return (
//         <div className="flex gap-2 bg-slate-700 justify-center font-size text-sm m-4 p-4">
//             <div className="cursor-pointer"
//                  onClick={handlePrev} 
//             >  
//             <i className="fa-solid fa-arrow-left"></i>
//             </div>


//             <div className='font-bold'>
//                 {pageNo}
                
//             </div>
            
//             <div className="cursor-pointer"
//                  onClick={handleNext}
//             >
//             <i className="fa-solid fa-arrow-right">
//             </i></div>
//         </div>
//     )
// }
// export default Pagination;




import { useContext } from "react"
import { MovieContext } from "./MovieContext"

function Pagination() {

  const {pageNo, handleNext,handlePrev} = useContext(MovieContext)

  return (
    <div className='text-2xl flex gap-8 bg-slate-400 m-2 p-4 justify-center	'>
      <div className='cursor-pointer'
           onClick={handlePrev}      
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className='font-bold'>
        {pageNo}
      </div>
      <div className='cursor-pointer'
           onClick={handleNext}
      >
        <i className="fa-solid fa-arrow-right">
      </i></div>
    </div>
  )
}

export default Pagination