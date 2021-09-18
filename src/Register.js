import { useState } from "react/cjs/react.development";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=()=> {
    let item = { name, email, password };
    console.warn(item);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            <button onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Kirim
            </button>
         
        </div>
      </div>
    </div>
  );
}
export default Register;
