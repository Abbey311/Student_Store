// import { Link } from "react-router-dom"

import "./Navbar.css"

export default function Navbar() {
    return (
      <nav className="Navbar">
        <div className="content">
          <ul className="links">
            <li>
              <h1> Home</h1>
            </li>

            <li>
              <h1>About</h1>
            </li>

            <li>
              <h1>Contact Us</h1>
            </li>

            <li>
              <h1>Buy Now</h1>
            </li>

          </ul>
        </div>
      </nav>
    )
  }