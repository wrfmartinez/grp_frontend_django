import "./css/Filter.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Filter = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <section id="filter">
      <ul className="categories">
        <li className="category">
          <Link
            className={`${
              isActive("shop-products/all") ? "active" : "inactive"
            }`}
            to="shop-products/all"
          >
            All
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("shop-products/wood") ? "active" : "inactive"
            }`}
            to="shop-products/wood"
          >
            Wood
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("shop-products/lighting") ? "active" : "inactive"
            }`}
            to="shop-products/lighting"
          >
            Lighting
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("shop-products/appliances") ? "active" : "inactive"
            }`}
            to="shop-products/appliances"
          >
            Appliances
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("shop-products/landscaping") ? "active" : "inactive"
            }`}
            to="shop-products/landscaping"
          >
            Landscaping
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("shop-products/paint") ? "active" : "inactive"
            }`}
            to="shop-products/paint"
          >
            Paint
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
