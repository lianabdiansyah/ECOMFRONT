import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">
            E-Commerce
          </span>
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
              {
                localStorage.getItem("user-info") ?
              <>
              <Link to="/addproducts" className="nav-link">
                Add Products
              </Link>
              <Link to="/updateproducts" className="nav-link">
                Update Products
              </Link>
              </>
              :
              <>   
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
              </>   
              }
            </div>
          </div>
          <div className="d-flex">
            <p>User</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
