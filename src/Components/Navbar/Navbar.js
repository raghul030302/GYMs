import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div>
        <header id="home">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 py-3  fixed-top">
              <div className="container-fluid">
                {/* <img src={logo} className="navbar-brand fs-2" id="logo" /> */}<h3 className="text-light">GYM</h3>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
                    <li className="nav-item">
                      <Link to="/"
                        href="#"
                        className="nav-link text-light active "
                        aria-current="page"
                      >
                      Home
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link href="#" to="/Premium" className=" nav-link text-light mx-2">
                        Premium
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <a href="#" className=" nav-link text-light mx-2">
                        Exercise
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a href="#" className=" nav-link text-light mx-2">
                        Calorie
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a href="#" className=" nav-link text-light mx-2">
                        Deit
                      </a>
                    </li>
                    <li className="nav-item ">
                      <Link to="/About" href="#" className=" nav-link text-light mx-2">
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
