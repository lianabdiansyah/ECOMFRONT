import  React,{ useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import Header from "./Header";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/addproducts");
    }
  },[])
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit= async ()=> {
    let item = { nama, email, password };
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    setNama("");
    setEmail("");
    setPassword("");
    history.push("/add");
   
  }

  return (
    <>
      <Header/>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Halaman Register</h1>

            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
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
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
