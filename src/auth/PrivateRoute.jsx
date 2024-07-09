import { Navigate, Route } from "react-router-dom";
import { redirect } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const user = false;

  return user ? <Component /> : <Navigate to="/login" />;
};

// import React from 'react'

// function PrivateRoute() {
//   return (
//     <div>PrivateRoute</div>
//   )
// }

// export default PrivateRoute
