import Header from "./Header";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
     useEffect(() => {
       if (localStorage.getItem("user-info")) {
         history.push("/addproducts");
       }
     },[]);
  return (
      <div>
          <Header />
      <h1>Halaman Login</h1>
    </div>
  );
}
export default Login;
