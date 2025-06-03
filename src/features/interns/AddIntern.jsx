import React, { useContext, useState } from "react";
import Sidebar from "../admin/components/Sidebar";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { AppContext } from "../../provider/AppContext";


const AddIntern = () => {

const [firstName, setFirstName] = useState("");
const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [department, setDepartment] = useState("Frontend");
const [startDate, setStartDate] = useState("");
const [duration, setDuration] = useState("");

  const newIntern = {
      id: Date.now(), 
      name: `${firstName} ${middleName} ${lastName}`,
      email: email,
      departments: department,
      supervisor: "TBD",
      internshipdur: `${duration}`,
      // imgUrl:image,
      profile: "#" 
    };

  const {addIntern} = useContext(AppContext)

  const [image, setImage] = useState(null);
 

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex pt-4">
        <Sidebar />
        <div className="flex-1">
          <Link to="/dashboard">
            <button className="mb-4 text-purple-600 hover:underline ml-48">&larr; Add Interns</button>
          </Link>
          <div className="">
            <div className="flex flex-col items-center">
            <div className="text-primary bg-[#E4E7EC] rounded-full p-4 w-20 h-20 ml-24 flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt="Preview" className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <User className="w-12 h-12 text-gray-500" />
              )}
            </div>

            <div className="mt-10">
              <label className="bg-[#fafcff] p-2 text-center ml-3 font-medium px-28 py-2 rounded-md cursor-pointer hover:bg-gray-200">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </label>
            </div>
             </div>
            <form className="max-w-md mx-auto p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                  onChange={(e) => setFirstName(e.target.value)}
               
               />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Middle name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                onChange={(e) => setLastName(e.target.value)}
               />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Last name</label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                  onChange={(e) => setMiddleName(e.target.value)}
               />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                onChange={(e) => setEmail(e.target.value)}
               />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Department</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                   onChange={(e) => setDepartment(e.target.value)}
                   
                >
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Product Design</option>
                  <option>Data Science</option>
                  <option>Cyber Security</option>
                  <option>Mobile App Dev</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Internship start date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

                 <div>
                <label className="block text-sm font-medium mb-1">Select Duration</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
                   onChange={(e) => setDuration(e.target.value)}
                   
                >
                  <option>6 months</option>
                  <option> 3 months</option>
                  <option>2 months</option>
                  <option>others</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white font-semibold rounded py-2 hover:bg-purple-600"
               onClick={(e) => {
               e.preventDefault(); // Prevent default form submission
              addIntern(newIntern);}}
              >
            
                CONFIRM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIntern;





// import React, { useState } from "react";
// import Sidebar from "../admin/components/Sidebar";
// import { User } from "lucide-react";
// import { Link } from "react-router-dom";

// const AddIntern = () => {
//   const [image, setImage] = useState(null);

//   const handleUpload = (e) => {
//     const file = e.target.file[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto ">
//       <div className="flex pt-4">
//         <Sidebar />
//         <div>
//           <Link to="/dashboard">
//             <button>&larr; Add Interns</button>
//           </Link>
//           <div className="pl-80">
//                    <div className="text-primary bg-[#E4E7EC] rounded-full p-4 w-20 h-20 ml-24  flex items-center justify-center overflow-hidden">
//           {image ? (
//             <img src={image} alt="Preview" className="w-full h-full rounded-full" />
//           ) : (
//           <User className="w-12 h-12 " />
//           )}
//         </div>

            
//               <div className="mt-10">
//           <label className="bg-[#fafcff]  p-2  text-center  ml-3 font-medium px-28 py-2 rounded-md cursor-pointer hover:bg-gray-200">
//           Upload
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleUpload}
//           />
//         </label>
//           </div>  
//             <form className="max-w-md mx-auto p-4 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   First name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Middle name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Last name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="example@email.com"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Department
//                 </label>
//                 <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500">
//                   <option>Frontend</option>
//                   <option>Backend</option>
//                   <option> Product Design</option>
//                   <option> Data Science</option>
//                   <option> Cyber Security</option>
//                   <option>Mobile App Dev</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Internship start date
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-72 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Internship end date
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-purple-500 text-white font-semibold rounded py-2 hover:bg-purple-600"
//               >
//                 CONFIRM
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddIntern;
