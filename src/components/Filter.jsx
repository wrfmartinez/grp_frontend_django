import "./css/Filter.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  const [ isActive, setIsActive ] = useState("");

  return (
    <section id="filter">
      <ul className="categories">
        <li className={({ isActive }) => (isActive ? 'category active' : 'category inactive')}><Link to="shop-products/wood">Wood</Link></li>
        <li className={({ isActive }) => (isActive ? 'category active' : 'category inactive')}><Link to="shop-products/lighting">Lighting</Link></li>
        <li className={({ isActive }) => (isActive ? 'category active' : 'category inactive')}><Link to="shop-products/appliances">Appliances</Link></li>
        <li className={({ isActive }) => (isActive ? 'category active' : 'category inactive')}><Link to="shop-products/landscaping">Landscaping</Link></li>
        <li className={({ isActive }) => (isActive ? 'category active' : 'category inactive')}><Link to="shop-products/paint">Paint</Link></li>
      </ul>
    </section>
  );
};

export default Filter;
