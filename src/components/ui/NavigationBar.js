import React from "react";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <h2>Delicious Recipes</h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/chicken'>Chicken</Link>
        </li>
        <li>
          <Link to='/beef'>Beef</Link>
        </li>
        <li>
          <Link to='/lamb'>Lamb</Link>
        </li>
        <li>
          <Link to='/seafood'>Seafood</Link>
        </li>
        <li>
          <Link to='/desserts'>Dessert</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
