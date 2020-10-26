import { Link, navigate } from 'gatsby';
import React from 'react';

// function ClickMe() {
//   setTimeout(() => {
//     console.log('Clicked');
//     navigate('/beer');
//   }, 2000);
// }

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas/">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">LOGO Slick's Slices</Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/order">Order Ahead!</Link>
      </li>
    </ul>
    {/* <li>
      <button type="button" onClick={ClickMe}>
        Take me home page after 2 sec
      </button>
    </li> */}
  </nav>
);

export default Nav;
