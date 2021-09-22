import { Link, useHistory } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
  }

  if (localStorage.getItem("user-info") && !user.error) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand">E-Commerce</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/addproducts" className="nav-link">
                  Add Products
                </Link>
                <Link to="/updateproducts" className="nav-link">
                  Update Products
                </Link>
                <Link to="/" className="nav-link">
                  List Products
                </Link>

                <div className="d-flex">
                  <button className="btn btn primary text-white">
                    {user && user.nama}
                  </button>
                  <button
                    onClick={handleLogOut}
                    type="button"
                    className="btn btn primary text-white"
                  >
                    Logout
                  </button>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand">E-Commerce</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/login" className="nav-link text-white">
                  Login
                </Link>
                <Link to="/register" className="nav-link text-white">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
      
}
export default Header;
