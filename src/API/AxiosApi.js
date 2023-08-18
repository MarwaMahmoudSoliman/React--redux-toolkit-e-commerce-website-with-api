
 
// import React, { useState, useEffect } from "react";

// function AxiosApi() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const [data, setData] = useState([]);

//   const fetchInfo = () => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((d) => setData(d))
//   }


//   useEffect(() => {
//     fetchInfo();
//   }, []);
 


//   return (
//     <tbody className="App">

//       <center>
//         {data.map((dataObj, index) => {
//           return (
//             <table className="border border-1">
//               <thead>
//                 <tr className="border border-1">
//                   <th>
// name
//                   </th>
//                   <th>
// email
//                   </th>
//                 </tr>
//               </thead>
//             <tbody
//               style={{
//                 width: "15em",
//                 backgroundColor: "#35D841",
//                 padding: 2,
//                 borderRadius: 10,
//                 marginBlock: 10,
//               }}
//             >
//               <tr>
//               <td style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</td>
//               <td style={{ fontSize: 20, color: 'white' }}>{dataObj.email}</td>
            
//               </tr>
//             </tbody>
//             </table>
//           );
//         })}
//       </center>
//     </tbody>
//   );
// }


import React from 'react';
import axios from 'axios';
const  AxiosApi= ({ id }) => {
   const handleDelete = async () => {
      try {
         const response = await axios.delete(`https://dummyjson.com/users/${id}`);
         console.log(response.data);
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <button onClick={handleDelete}>
         Delete
      </button>
   );
};





export default AxiosApi;
