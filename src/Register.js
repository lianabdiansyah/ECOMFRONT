function Register() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Halaman Register</h1>
          <form>
            <div className="mb-3">
              <label for="nama" className="form-label">
                Nama
              </label>
              <input type="text" className="form-control" id="nama" />
            </div>
            
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
