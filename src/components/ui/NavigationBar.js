import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <h2>Delicious Recipes</h2>
      <nav>
        <ul className="links">
          <li>
            <NavLink to="/" className="link-home">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/chicken" className="link-chicken">
              Chicken
            </Link>
          </li>
          <li>
            <Link to="/beef" className='link-beef'>Beef</Link>
          </li>
          <li>
            <Link to="/lamb" className='link-lamb'>Lamb</Link>
          </li>
          <li>
            <Link to="/seafood" className='link-seafood'>Seafood</Link>
          </li>
          <li>
            <Link to="/desserts" className='link-dessert'>Dessert</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
