import Header from "./Header";
import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    // if (result.id) {
    //     history.push("/"); 
    // }
    // if (localStorage.getItem("user-info")) {
    //   history.push("/");
    // let hasil = JSON.parse(localStorage.getItem("user-info"));
    // console.log(hasil);

    // if (hasil.error) {
    //   console.log("gagal")
    // }
    // }

  }, []);
  
  const handleLogin = async() => {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    // console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result))

    console.log(result.error)
    if (result.error) {
      history.push('/login')
    } else {
      history.push("/");
    }
    // setEmail("");
    // setPassword("");
   
  }
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Halaman Login</h1>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleLogin}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
