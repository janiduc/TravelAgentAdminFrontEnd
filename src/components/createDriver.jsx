// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Card } from 'primereact/card';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { Message } from 'primereact/message';
// //import '../styles/signup.css'
// const DriverSignUpPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     password: '',
//   });

//   //TODO:Set an initial touch for confirm password

//   let navigate = useNavigate(); 

//   const [submitted, setSubmitted] = useState(false);
//   const [confPassword, setconfPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const nameA = formData.name;
//     const adminnameA = formData.username;
//     const passwordA = formData.password;

//     try{
//       if(!confPassword && adminnameA && passwordA && nameA) {
//         console.log('here2')
//         const response = await fetch("http://localhost:4000/admins/create", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({adminnameA, passwordA, nameA })
//         });
//         setSubmitted(false);
//         navigate('/login');
//       }
//       setSubmitted(true);

//     }catch(error){
//       console.error("Signup Error: ", error);
//       setSubmitted(true);
//     }
//   };

//   return (
//     <div className="login-container p-grid p-justify-center">
//       <div className="p-col-12 p-md-6">
//         <Card title="Sign-Up" className="login-card p-shadow-3 card">
//           <form onSubmit={handleSubmit} className="p-fluid">
//             <div className="p-field">
//               <label htmlFor="username">Name</label>
//               <InputText
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="p-inputtext-lg"
//               />
//             </div>
//             <div className="p-field">
//               <label htmlFor="username">Username</label>
//               <InputText
//                 id="username"
//                 value={formData.username}
//                 onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//                 className="p-inputtext-lg"
//               />
//             </div>
//             <div className="p-field">
//               <label htmlFor="password">Password</label>
//               <InputText
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="p-inputtext-lg"
//               />
//             </div>
//             <div className="p-field">
//               <label htmlFor="password">Confirm Password</label>
//               <InputText
//                 id="password"
//                 type="password"
//                 onChange={(e) =>  {(e.target.value == formData.password) ? setconfPassword(false) : setconfPassword(true)}}
//                 className="p-inputtext-lg"
//               />
//             </div>
//             {confPassword && (
//             <Message severity="error" text="Passwords are not same. Please try again." />
//           )}
//             <div className="p-field">
//               <Button
//                 label="Login"
//                 type="submit"
//                 className="p-button-rounded p-button-lg p-button-success"
//               />
//             </div>
//           </form>
//           {submitted && (
//             <Message severity="error" text="Fill All details. Please try again." />
//           )}
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DriverSignUpPage;